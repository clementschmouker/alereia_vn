import {
    game,
    smartPhoneElement,
    smartPhoneMessagesListElem,
    smartPhoneContentElem,
    dialogueBox,
    choiceWrapper,
    smartPhoneWrittingElem,
    smartPhoneCloseElem,
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
} from "../globals";

import { DialogueLine, SmartphoneMessage } from "../types";

export default class LineHandler {
    canSkipSmartphone: boolean = false;
    isWritting: boolean = false;
    canPassScreen: boolean = true;
    previousLines: string[] = [];
    currentLineIndex: number = 0;
    currentLineId: string = '';
    currentLineText: string = '';
    typingInterval: NodeJS.Timeout | null = null;
    script: any[];
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

    typeText = (text: string, element: HTMLElement, speed: number) => {
        this.clearTyping();
        let index = 0;
        this.isWritting = true;
        this.typingInterval = setInterval(() => {
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
        if ((event.key === " " || event.target === goBackButton) && this.typingInterval && (!game.stoped || !game.paused)) {
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
        flip?: boolean
    ) => {
        const current = this.currentCharacters[position];
        const shouldUpdate = current.name !== name || current.mood !== mood || current.flip !== flip;
    
        if (!name) {
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
        };
    }
    
    
    
    
    crossfadeMusic = async (audioElement: HTMLAudioElement, newSrc: string, duration = 1000) => {
        if (!audioElement) return;
    
        await this.fadeOut(audioElement, duration / 2);
    
        audioElement.pause();
        audioElement.innerHTML = "";
    
        const source = document.createElement("source");
        source.src = newSrc;
        source.type = "audio/mpeg";
        audioElement.appendChild(source);
    
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
    
        if (!currentLine?.backgroundVideo && !this.isWritting && this.canSkipSmartphone && (game.stoped || game.paused)) {
            const nextLineId = this.getNextLineId();
            if (nextLineId && !currentLine?.noNextLine) {
                this.showLine(nextLineId);
            }
        }
    };

    showLine = (id: string, backward: boolean = false) => {
        const line = this.findLineById(id);
        if (line && !line.textPosition) {
            line.textPosition = "narrator";
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
            dialogueBox.classList.remove("left", "right", "narrator", "center");
            dialogueBox.classList.add(line?.textPosition as string);
        }
    
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
                                        smartPhoneCloseElem.classList.remove('hidden');
                                    }
                                }, 2000 * (index + 1));
                            });
                        }
                    }
                }
            });
        }
    
        if (this.canPassScreen) {
            let video = document.getElementById("background-video");
    
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
                this.typeText(line.text, dialogueElem, 20);
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
    
            if (line.backgroundVideo && backgroundVideo) {
                this.canPassScreen = false;
                skipVideo?.classList.remove("hidden");
                backgroundVideo.src = `videos/${line.backgroundVideo}.mp4`;
                backgroundVideo.autoplay = true;
                backgroundVideo.playsInline = true;
                backgroundVideo.addEventListener("ended", () => {
                    this.canPassScreen = true;
                    const nextLineId = this.getNextLineId();
                    if (nextLineId) {
                        this.currentLineId = nextLineId;
                        if (!line.noNextLine) {
                            this.showLine(nextLineId);
                        }
                    }
                });
            } else if (video) {
                this.canPassScreen = true;
                skipVideo?.classList.add("hidden");
                backgroundVideo.src = "";
            }
    
            if (line.isOverUi) {
                document.querySelector('#characters')?.classList.add('over');
            } else {
                document.querySelector('#characters')?.classList.remove('over');
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
                } = line.charactersOnScreen;
    
                this.updateCharacterImage(leftCharacter, "left", left, leftMood, leftFlip);
                this.updateCharacterImage(rightCharacter, "right", right, rightMood, rightFlip);
                this.updateCharacterImage(middleCharacter, "middle", middle, middleMood, middleFlip);
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
    
            if (line.sound) {
                if (audioChannelSound) {
                    audioChannelSound.pause();
                    audioChannelSound.currentTime = 0;
                    audioChannelSound.innerHTML = "";
                    const audioFile = document.createElement("source");
                    audioFile.src = line.sound;
                    audioChannelSound.appendChild(audioFile);
                    audioChannelSound.play();
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
                this.crossfadeMusic(audioChannelMusic, line.music, 2000);
            }
        }
        if (!backward) {
            this.currentLineId = id;
            this.currentLineIndex += 1;
            if (!line?.dontSave) {
                this.previousLines.push(this.currentLineId);
            }
        } else {
            this.currentLineIndex -= 1;
            this.currentLineId = this.previousLines[this.currentLineIndex];
        }
    }
}