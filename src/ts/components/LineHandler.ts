import {
    game,
    smartPhoneElement,
    smartPhoneMessagesListElem,
    smartPhoneContentElem,
    dialogueBox,
    choiceWrapper,
    smartPhoneWrittingElem,
    leftCharacter,
    rightCharacter,
    middleCharacter,
    nameElem,
    dialogueElem,
    characterNameElement,
    backgroundElem,
    skipVideo,
    backgroundVideo,
    audioChannelMusic,
    audioChannelSound,
    audioChannelVoice,
    goBackButton,
    overlayElement,
    smartphoneWrittingElemText,
    smartphoneCloseElemText,
    setControlVisible,
    overlayControlsElement,
    endButton,
} from "../globals";

import { DialogueLine, SmartphoneMessage } from "../types";

export default class LineHandler {
    canSkipSmartphone: boolean = false;
    isWritting: boolean = false;
    canPassScreen: boolean = true;
    canSkipLine: boolean = true;
    previousLines: string[] = [];
    currentLineIndex: number = 0;
    currentLineId: string = '';
    currentLineText: string = '';
    typingInterval: NodeJS.Timeout | null = null;
    overlayInterval: NodeJS.Timeout | null = null;
    script: any[];
    currentLine: DialogueLine | undefined = undefined;
    fadeToNextLine: boolean = false;
    currentCharacters = {
        left: { name: "", mood: "", flip: false },
        right: { name: "", mood: "", flip: false },
        middle: { name: "", mood: "", flip: false },
    };

    constructor(script: any[]) {
        this.script = script;
    }

    setCanSkipSmartphone = (value: boolean) => {
        this.canSkipSmartphone = value;
    }

    setIsWritting = (value: boolean) => {
        this.isWritting = value;
    }

    setCanPassScreen = (value: boolean) => {
        this.isWritting = value;
    }

    typeText = (text: string, element: HTMLElement, speed: number, voice: string = 'low') => {
        this.clearTyping();
        let index = 0;
        this.isWritting = true;
        this.typingInterval = setInterval(() => {
            if (index % 3 === 0) {
                let randomizedStart = Math.floor(Math.random() * 3) + 1;
                audioChannelVoice.src = `audio/voices/${voice}/voice${randomizedStart}.wav`;
                audioChannelVoice.currentTime = 0;
                audioChannelVoice.volume = 1;
                audioChannelVoice.load(); // Ensure the audio is loaded before playing
                audioChannelVoice.play().catch((err) => {
                    console.error("Failed to play audio:", err);
                });
            }
            if (index < text.length) {
                const char = text[index];
                if (char === "<") {
                    const endIndex = text.indexOf(">", index);
                    if (endIndex !== -1) {
                        element.innerHTML += text.substring(index, endIndex + 1);
                        index = endIndex + 1;
                    } else {
                        element.innerHTML += char;
                        index++;
                    }
                } else {
                    element.innerHTML += char;
                    index++;
                }
            } else {
                audioChannelVoice.pause();
                this.isWritting = false;
                this.clearTyping();
            }
        }, speed);
    };

    findLineById = (id: string): DialogueLine | undefined => {
        return this.script.find((line) => line.id === id);
    }

    clearTyping = () => {
        if (this.typingInterval) {
            clearInterval(this.typingInterval);
            this.typingInterval = null;
        }
        this.isWritting = false;
    };
    
    stopTyping = (event: KeyboardEvent) => {
        event.preventDefault();
        if ((event.key === " " || event.target === goBackButton) && this.typingInterval) {
            this.clearTyping();
            dialogueElem.innerHTML = this.currentLineText;
            document.removeEventListener("keydown", this.stopTyping);
        }
    };

    getNextLineId = (): string | undefined => {
        const index = this.script.findIndex((line: any) => line.id === this.currentLineId);
        if (this.script[index].nextLineId) {
            return this.script[index].nextLineId;
        }
        if (index >= 0 && index < this.script.length - 1) {
            return this.script[index + 1].id;
        }
        return undefined;
    }

    updateCharacterImage = (
        container: HTMLElement,
        position: "left" | "right" | "middle",
        name?: string,
        mood?: string,
        flip?: boolean,
        abruptFlip?: boolean,
        leave?: boolean,
        attack?: boolean,
    ) => {
        const current = this.currentCharacters[position];
        const shouldUpdate = current.name !== name || current.mood !== mood || current.flip !== flip;

        if (abruptFlip) {
            container.classList.remove('smoothFlip');
        } else {
            container.classList.add('smoothFlip');
        }
        
        container.classList.remove('leaving', 'attack');
        if (leave) {
            container.classList.add('leaving');
        }

        if (attack) {
            container.classList.add('attack');
        }
    
        if (!name || name === '') {
            container.style.backgroundImage = "";
            this.currentCharacters[position] = { name: "", mood: "", flip: false };
            return;
        }
    
        const baseUrl = `images/personnages/${name}`;
        const newSrc = mood ? `${baseUrl.split(".")[0]}_${mood}.png` : `${baseUrl}.png`;
    
        if (!shouldUpdate) return;
    
        const preloader = new Image();
        preloader.src = newSrc;
    
        preloader.onload = () => {
            this.currentCharacters[position] = { name, mood: mood || "", flip: !!flip };
            container.style.backgroundImage = `url(${newSrc})`;
            if (flip) { container.classList.add('flipped') }
            else { container.classList.remove('flipped') }
        };
    }
    
    
    
    
    crossfadeMusic = async (audioElement: HTMLAudioElement, newSrc: string, duration = 1000, loop: boolean = false) => {
        if (!audioElement) return;
    
        await this.fadeOut(audioElement, duration / 2);
    
        audioElement.pause();
        audioElement.innerHTML = "";
    
        const source = document.createElement("source");
        source.src = newSrc;
        source.type = "audio/mpeg";
        audioElement.appendChild(source);
        audioElement.setAttribute('loop', String(loop));
    
        audioElement.load();
    
        audioElement.volume = 0;
        try {
            await audioElement.play();
            await this.fadeIn(audioElement, duration / 2);
        } catch (err) {
            console.warn("Playback failed:", err);
        }
    }
    
    fadeOut = (audio: HTMLAudioElement, duration: number) => {
        return new Promise((resolve) => {
            const steps = 20;
            const interval = duration / steps;
            const delta = audio.volume / steps;
            const fade = setInterval(() => {
                if (audio.volume > delta) {
                    audio.volume -= delta;
                } else {
                    audio.volume = 0;
                    clearInterval(fade);
                    resolve({});
                }
            }, interval);
        });
    }
    
    fadeIn = (audio: HTMLAudioElement, duration: number) => {
        return new Promise((resolve) => {
            const steps = 20;
            const interval = duration / steps;
            const delta = 1 / steps;
            const fade = setInterval(() => {
                if (audio.volume < 1 - delta) {
                    audio.volume += delta;
                } else {
                    audio.volume = 1;
                    clearInterval(fade);
                    resolve({});
                }
            }, interval);
        });
    }
    
    skipLine = () => {
        const currentLine = this.findLineById(this.currentLineId);
    
        if (!currentLine?.backgroundVideo && !this.isWritting && this.canSkipSmartphone) {
            const nextLineId = this.getNextLineId();
            if (nextLineId && !currentLine?.noNextLine) {
                this.showLine(nextLineId);
            }
        }
    };

    goNextLineAfterVideo = () => {
        this.canPassScreen = true;
        const nextLineId = this.getNextLineId();
        if (nextLineId) {
            this.currentLineId = nextLineId;
            if (!this.currentLine?.noNextLine) {
                this.showLine(nextLineId);
            }
        }
    }

    showLine = (id: string, backward: boolean = false) => {
        const line = this.findLineById(id);
        this.fadeToNextLine = line?.fadeToNextLine || false;
        this.currentLine = line;
        this.canSkipLine = false;
        if (line?.timer && line?.timer > 0) {
            setTimeout(() => {
                this.canSkipLine = true;
                const nextId = this.getNextLineId();
                this.showLine(nextId as string);
            }, line.timer)
        } else {
            this.canSkipLine = true;
        }

        if (line && !line.textPosition) {
            line.textPosition = "narrator";
        }

        if (line && !line.textHeight) {
            line.textHeight = 'normal';
        }
    
        if (line?.startGame) {
            game.start();
        }
    
        if (line?.pauseGame) {
            game.pause();
        }
        if (line?.unpauseGame) {
            game.play();
        }
        if (line?.stopGame) {
            game.stop();
        }
    
        if (line?.smartphone) {
            smartPhoneElement.classList.add('visible');
            line.smartphoneMessages?.forEach((message: SmartphoneMessage, index) => {
              const messageElem = document.createElement("li");
              messageElem.classList.add("message");
              messageElem.setAttribute("data-sender", message.name);
              
              if (message.sender) {
                messageElem.classList.add("sender");
              } else {
                messageElem.classList.add("other");
                if (line && line.smartphoneMessages && line?.smartphoneMessages[index + 1] &&
                    index < line?.smartphoneMessages?.length &&
                    message.name === line.smartphoneMessages[index + 1].name
                ) {
                  messageElem.classList.add("hidden-avatar");
                }
              }
              messageElem.innerHTML = `
                  <div class="message__avatar" style="background-image: url('${message.avatar}')"></div>
                  <div class="message__content">
                    <div class="message__header">
                      <span class="message__sender">${message.name}</span>
                      <span class="message__time">${message.date}</span>
                    </div>
                    <p class="message__text">${message.content}</p>
                    <ul class="message__reactions">
                      <li class="like"></li>
                      <li class="laugh"></li>
                    </ul>
                `;
    
              smartPhoneMessagesListElem.appendChild(messageElem);
            });
            smartPhoneContentElem.scrollTop = smartPhoneContentElem.scrollHeight;
        } else {
            this.canSkipSmartphone = true;
            smartPhoneElement.classList.remove('visible');
            dialogueBox.classList.remove("left", "right", "narrator", "center", "thinking", "speech", "phone", "bottom");
            dialogueBox.classList.add(line?.textPosition as string);
            dialogueBox.classList.add(line?.style as string);
            dialogueBox.classList.add(line?.textHeight as string);
        }

        choiceWrapper!.innerHTML = "";
    
        if (line?.smartphoneChoices) {
            this.canSkipSmartphone = false;
            dialogueBox.classList.add('narrator');
            dialogueBox.classList.add('right');
            dialogueBox.classList.remove('left');
            const list = document.createElement('div');
            list.classList.add('smartphone-choices');
            choiceWrapper?.appendChild(list);
            line.smartphoneChoices.forEach((choice) => {
                const button = document.createElement("button");
                button.classList.add("smartphone-choice");
                button.classList.add('hidden');
                button.textContent = choice.text;
                button.setAttribute("data-next-line-id", choice.nextLineId);
                list.appendChild(button);
                button.onclick = () => {
                    const messageElem = document.createElement("li");
                    messageElem.classList.add("message", "sender");
                    messageElem.setAttribute("data-sender", "@Moi");
                    messageElem.innerHTML = `
                        <div class="message__content">
                            <div class="message__header">
                                <span class="message__sender">@Moi</span>
                                <span class="message__time">à l'instant</span>
                            </div>
                            <p class="message__text">${choice.text}</p>
                        </div>
                    `;
                    smartPhoneMessagesListElem.appendChild(messageElem);
                    smartPhoneContentElem.scrollTop = smartPhoneContentElem.scrollHeight;
                    if (choiceWrapper) {
                        choiceWrapper.innerHTML = "";
                    }
    
                    if (line.smartphoneResponses && choice.nextLineId) {
                        const response = line.smartphoneResponses.find(r => r.id === choice.nextLineId);
                        if (response) {
                            let count = 0;
                            response.messages.forEach((message: SmartphoneMessage, index: number) => {
                                const responseMessageElem = document.createElement("li");
                                responseMessageElem.classList.add("message", message.sender ? "sender" : "other");
                                responseMessageElem.setAttribute("data-sender", message.name);
                                responseMessageElem.innerHTML = `
                                    <div class="message__avatar" style="background-image: url('${message.avatar}')"></div>
                                    <div class="message__content">
                                        <div class="message__header">
                                            <span class="message__sender">${message.name}</span>
                                            <span class="message__time">${message.date}</span>
                                        </div>
                                        <p class="message__text">${message.content}</p>
                                    </div>
                                `;
                                smartPhoneContentElem.scrollTop = smartPhoneContentElem.scrollHeight;
                                smartPhoneWrittingElem.classList.remove('hidden');
                                setTimeout(() => {
                                    count += 1;
                                    smartPhoneMessagesListElem.appendChild(responseMessageElem);
                                    smartPhoneContentElem.scrollTop = smartPhoneContentElem.scrollHeight;
                                    smartPhoneWrittingElem.classList.add('hidden');
    
                                    if (count === response.messages.length) {
                                        this.canSkipSmartphone = true;
                                    } else {
                                        smartPhoneWrittingElem.classList.remove('hidden');
                                    }
    
                                    if (index === response.messages.length - 1) {
                                        // smartPhoneCloseElem.classList.remove('hidden');
                                        // @TODO switch message
                                        smartphoneWrittingElemText.classList.add('hidden');
                                        smartphoneCloseElemText.classList.remove('hidden');
                                    }
                                }, 2000 * (index + 1));
                            });
                        }
                    }
                }
            });
        }
    
        if (this.canPassScreen) {
            if (!line) {
                console.error("Line not found:", id);
                return;
            }
    
            leftCharacter.innerHTML = "";
            rightCharacter.innerHTML = "";
    
            nameElem.textContent = line.name || "";
            dialogueElem.innerHTML = "";
            this.clearTyping();
    
            if (line.name) {
                characterNameElement.classList.add("displayed");
            } else {
                characterNameElement.classList.remove("displayed");
            }
    
            if (line.text) {
                this.currentLineText = line.text;
                this.typeText(line.text, dialogueElem, 20, line.voice);
                document.removeEventListener("keydown", this.stopTyping);
                document.addEventListener("keydown", this.stopTyping);
            }
    
            if (line.backgroundTransition) {
                const { easing, duration, delay } = line.backgroundTransition;
                const string = `background-image ${duration || 300}ms ${delay || 0}ms ${easing}`;
                backgroundElem.style.transition = string;
            } else {
                backgroundElem.style.transition = "";
            }
    
            if (line.background) {
                backgroundElem.style.backgroundImage = `url('images/decors/${line.background}.jpg')`;
            } else {
                backgroundElem.style.backgroundImage = "";
            }

            backgroundVideo.removeEventListener('ended', this.goNextLineAfterVideo);
    
            if (line.backgroundVideo && backgroundVideo) {
                this.canPassScreen = false;
                backgroundVideo.src = `videos/${line.backgroundVideo}.mp4`;
                backgroundVideo.autoplay = true;
                backgroundVideo.playsInline = true;
                backgroundVideo.play();
                if (!line?.endVideo) {
                    skipVideo?.classList.remove("hidden");
                    backgroundVideo.addEventListener("ended", this.goNextLineAfterVideo);
                } else {
                    skipVideo?.classList.add('hidden');
                    audioChannelMusic.loop = false;
                    endButton.classList.add('visible');
                    backgroundVideo.addEventListener('ended', () => {
                        backgroundVideo.pause();
                    });
                }
            } else if (backgroundVideo) {
                this.canPassScreen = true;
                backgroundVideo.src = "";
                backgroundVideo.autoplay = true;
                backgroundVideo.playsInline = true;
                skipVideo?.classList.add("hidden");
            }
    
            if (line.isNotOverUi) {
                document.querySelector('#characters')?.classList.remove('over');
            } else {
                document.querySelector('#characters')?.classList.add('over');
            }
    
            if (line.charactersOnScreen) {
                const {
                    left,
                    right,
                    middle,
                    leftMood,
                    rightMood,
                    middleMood,
                    leftFlip,
                    rightFlip,
                    middleFlip,
                    abruptFlip,
                    leftLeave,
                    middleLeave,
                    rightLeave,
                    leftAttack,
                    rightAttack,
                } = line.charactersOnScreen;
    
                this.updateCharacterImage(leftCharacter, "left", left, leftMood, leftFlip, abruptFlip, leftLeave, leftAttack);
                this.updateCharacterImage(rightCharacter, "right", right, rightMood, rightFlip, abruptFlip, rightLeave, rightAttack);
                this.updateCharacterImage(middleCharacter, "middle", middle, middleMood, middleFlip, abruptFlip, middleLeave);
            } else {
                leftCharacter.innerHTML = "";
                rightCharacter.innerHTML = "";
                middleCharacter.innerHTML = "";
    
                this.currentCharacters = {
                    left: { name: "", mood: "", flip: false },
                    right: { name: "", mood: "", flip: false },
                    middle: { name: "", mood: "", flip: false },
                };
            }

            audioChannelSound.pause();
            audioChannelSound.currentTime = 0;
    
            if (line.sound) {
                if (audioChannelSound) {
                    while (audioChannelSound.firstChild) {
                        audioChannelSound.removeChild(audioChannelSound.firstChild);
                    }
                    audioChannelSound.currentTime = 0;
                    audioChannelSound.src = line.sound;
                    audioChannelSound.load(); // Ensure the new source is loaded
                    audioChannelSound.play();
                }
            } else {
                while (audioChannelSound.firstChild) {
                    audioChannelSound.removeChild(audioChannelSound.firstChild);
                }
            }
    
            if (line.voice) {
                if (audioChannelVoice) {
                    audioChannelVoice.pause();
                    audioChannelVoice.currentTime = 0;
                    audioChannelVoice.innerHTML = "";
                    const audioFile = document.createElement("source");
                    audioFile.src = line.voice;
                    audioChannelVoice.appendChild(audioFile);
                    audioChannelVoice.play();
                }
            }
    
            if (line.music) {
                this.crossfadeMusic(audioChannelMusic, line.music, 2000, line.loopMusic);
            }
        }
        if (!backward) {
            this.currentLineId = id;
            this.currentLineIndex += 1;
        } else {
            this.currentLineId = id;
            this.currentLineIndex -= 1;
        }
        if (!line?.dontSave) {
            this.previousLines[this.currentLineIndex] = this.currentLineId;
        }

        if(line?.overlay) {
            if (Array.isArray(line.overlay)) {
                let index = 0;
                const overlayImages = line.overlay.map((src) => {
                    const overlayImg = document.createElement('img');
                    overlayImg.src = src;
                    overlayImg.classList.add('overlay-image');
                    overlayImg.style.display = 'none'; // Initially hide all images
                    overlayElement?.appendChild(overlayImg);
                    return overlayImg;
                });

                overlayImages[0].style.display = 'block'; // Show the first image immediately
                this.overlayInterval = setInterval(() => {
                    overlayImages.forEach((img, i) => {
                        img.style.display = i === index ? 'block' : 'none'; // Show the current image, hide others
                    });
                    index = (index + 1) % overlayImages.length; // Loop infinitely
                }, 500);
            }
        } else {
            clearInterval(this.overlayInterval as NodeJS.Timeout);
            overlayElement!.innerHTML = ""; // Clear the overlay element
        }

        if (line?.id === "start0") {
            setControlVisible(true);
            overlayControlsElement.classList.add('visible');
            this.canSkipLine = false;
        }
    }
}