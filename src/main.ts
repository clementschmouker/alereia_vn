import scene1 from "./scene1";
import scene2 from "./scene2";
import scene3 from "./scene3";
import scene4 from "./scene4";
import scene5 from "./scene5";
import scene6 from "./scene6";
import scene7 from "./scene7";
import scene8 from "./scene8";
import scene9 from "./scene9";
import scene10 from "./scene10";
import { DialogueLine, SmartphoneMessage } from "./types";
import gsap from "gsap";
import Game from "./game";

export const game = new Game();

const script = [
    ...scene1,
    ...scene2,
    ...scene3,
    ...scene4,
    ...scene5,
    ...scene6,
    ...scene7,
    ...scene8,
    ...scene9,
    ...scene10,
];

let currentLineId = "gare3";
let previousLine: string[] = [];
let currentLineIndex = 0;

const nameElem = document.getElementById("name")!;
const dialogueElem = document.getElementById("dialogue")!;
const dialogueBox = document.getElementById("dialogue-box")!;
const choiceWrapper = dialogueBox.querySelector('#choices');

const leftCharacter = document.getElementById("left-character")!;
const rightCharacter = document.getElementById("right-character")!;
const middleCharacter = document.getElementById("middle-character")!;
const backgroundElem = document.getElementById("background")!;
const backgroundVideo = document.querySelector("#background-video") as HTMLVideoElement;
const characterNameElement = document.getElementById("name")!;

const smartPhoneElement = document.getElementById("smartphone")!;
const smartPhoneMessagesListElem = document.querySelector('.smartphone__screen__messages') as HTMLUListElement;
const smartPhoneWrittingElem = document.querySelector('.smartphone__screen__writting') as HTMLDivElement;
const smartPhoneContentElem = document.querySelector('.smartphone__screen__content') as HTMLDivElement;
const smartPhoneWrittingBarElem = document.querySelector('.smartphone__screen__writting-bar') as HTMLDivElement;
const smartPhoneCloseElem = document.querySelector('#smartphone-close') as HTMLDivElement;

const audioChannelSound = document.querySelector("#audio-channel--sound") as HTMLAudioElement;
const audioChannelMusic = document.querySelector("#audio-channel--music") as HTMLAudioElement;
const audioChannelVoice = document.querySelector("#audio-channel--voice") as HTMLAudioElement;

const unmuteButton = document.querySelector("#mute-sound");
const skipVideo = document.querySelector("#skip-video");
const goBackButton = document.querySelector("#go-back");

const startScreen = document.querySelector("#start-screen") as HTMLDivElement;
const startButton = document.querySelector("#start-button") as HTMLButtonElement;
const gameScreen = document.querySelector("#game") as HTMLDivElement;

startButton?.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    showLine(currentLineId);
});

let currentCharacters = {
    left: { name: "", mood: "", flip: false },
    right: { name: "", mood: "", flip: false },
    middle: { name: "", mood: "", flip: false },
};

let isWritting = false;
let canPassScreen = true;
let canSkipSmartphone = true;

unmuteButton?.addEventListener("click", () => {
    audioChannelMusic.muted = !audioChannelMusic.muted;
    audioChannelSound.muted = !audioChannelSound.muted;
    audioChannelVoice.muted = !audioChannelVoice.muted;
    backgroundVideo.muted = !backgroundVideo.muted;
    unmuteButton.classList.toggle("muted");
});

skipVideo?.addEventListener("click", () => {
    canPassScreen = true;
    skipVideo.classList.remove("hidden");
    const currentLine = findLineById(currentLineId);
    const nextLineId = getNextLineId();
    if (nextLineId && !currentLine?.noNextLine) {
        showLine(nextLineId);
    }
});

goBackButton?.addEventListener("click", () => {
    if (currentLineIndex <= 1) return;
    showLine(previousLine[currentLineIndex], true);
    previousLine.pop();
});

smartPhoneWrittingBarElem.addEventListener('click', () => {
    document.querySelector('.smartphone-choices')?.querySelectorAll('.smartphone-choice').forEach((button, index) => {
        setTimeout(() => {
            button.classList.remove('hidden');
        }, index * 100);
    });
    smartPhoneWrittingBarElem.classList.remove('blinking');
});

smartPhoneCloseElem.addEventListener('click', () => {
    const nextLineId = getNextLineId();
    const currentLine = findLineById(currentLineId);
    if (nextLineId && !currentLine?.noNextLine) {
        showLine(nextLineId);
    }
})

function findLineById(id: string): DialogueLine | undefined {
    return script.find((line) => line.id === id);
}

function updateCharacterImage(
    container: HTMLElement,
    position: "left" | "right" | "middle",
    name?: string,
    mood?: string,
    flip?: boolean
) {
    const current = currentCharacters[position];
    const shouldUpdate = current.name !== name || current.mood !== mood || current.flip !== flip;

    if (!name) {
        container.style.backgroundImage = "";
        currentCharacters[position] = { name: "", mood: "", flip: false };
        return;
    }

    const baseUrl = `/src/images/personnages/${name}`;
    const newSrc = mood ? `${baseUrl.split(".")[0]}_${mood}.png` : `${baseUrl}.png`;

    if (!shouldUpdate) return;

    const preloader = new Image();
    preloader.src = newSrc;

    preloader.onload = () => {
        currentCharacters[position] = { name, mood: mood || "", flip: !!flip };
        container.style.backgroundImage = `url(${newSrc})`;
    };
}

let typingInterval: NodeJS.Timeout | null = null;

const typeText = (text: string, element: HTMLElement, speed: number) => {
    clearTyping();
    let index = 0;
    isWritting = true;
    typingInterval = setInterval(() => {
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
            isWritting = false;
            clearTyping();
        }
    }, speed);
};

const clearTyping = () => {
    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }
    isWritting = false;
};

const stopTyping = (event: KeyboardEvent) => {
    event.preventDefault();
    if ((event.key === " " || event.target === goBackButton) && typingInterval && (!game.stoped || !game.paused)) {
        clearTyping();
        dialogueElem.innerHTML = currentLineText;
        document.removeEventListener("keydown", stopTyping);
    }
};

let currentLineText = "";

export function showLine(id: string, backward: boolean = false) {
    const line = findLineById(id);
    console.log(previousLine[currentLineIndex - 1]);
    console.log(getNextLineId());
    if (line && !line.textPosition) {
        line.textPosition = "narrator";
    }

    if (line?.startGame) {
        console.log("Starting game...");
        game.start();
    }

    if (line?.pauseGame) {
        console.log("Pausing game...");
        game.pause();
    }
    if (line?.unpauseGame) {
        console.log("Unpausing game...");
        game.play();
    }
    if (line?.stopGame) {
        console.log("Stopping game...");
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
          console.log(message.avatar);
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
        canSkipSmartphone = true;
        smartPhoneElement.classList.remove('visible');
        dialogueBox.classList.remove("left", "right", "narrator", "center");
        dialogueBox.classList.add(line?.textPosition as string);
    }

    if (line?.smartphoneChoices) {
        canSkipSmartphone = false;
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
                                    canSkipSmartphone = true;
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

    if (canPassScreen) {
        let video = document.getElementById("background-video");

        if (!line) {
            console.error("Line not found:", id);
            return;
        }

        leftCharacter.innerHTML = "";
        rightCharacter.innerHTML = "";

        nameElem.textContent = line.name || "";
        dialogueElem.innerHTML = "";
        clearTyping();

        if (line.name) {
            characterNameElement.classList.add("displayed");
        } else {
            characterNameElement.classList.remove("displayed");
        }

        if (line.text) {
            currentLineText = line.text;
            typeText(line.text, dialogueElem, 20);
            document.removeEventListener("keydown", stopTyping);
            document.addEventListener("keydown", stopTyping);
        }

        if (line.backgroundTransition) {
            const { easing, duration, delay } = line.backgroundTransition;
            const string = `background-image ${duration || 300}ms ${delay || 0}ms ${easing}`;
            backgroundElem.style.transition = string;
        } else {
            backgroundElem.style.transition = "";
        }

        if (line.background) {
            backgroundElem.style.backgroundImage = `url('/src/images/decors/${line.background}.jpg')`;
        } else {
            backgroundElem.style.backgroundImage = "";
        }

        if (line.backgroundVideo && backgroundVideo) {
            canPassScreen = false;
            skipVideo?.classList.remove("hidden");
            backgroundVideo.src = `/src/videos/${line.backgroundVideo}.mp4`;
            backgroundVideo.autoplay = true;
            backgroundVideo.playsInline = true;
            backgroundVideo.addEventListener("ended", () => {
                canPassScreen = true;
                const nextLineId = getNextLineId();
                if (nextLineId) {
                    currentLineId = nextLineId;
                    currentLineIndex += 1;
                    if (!line.noNextLine) {
                        showLine(nextLineId);
                    }
                }
            });
        } else if (video) {
            canPassScreen = true;
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

            updateCharacterImage(leftCharacter, "left", left, leftMood, leftFlip);
            updateCharacterImage(rightCharacter, "right", right, rightMood, rightFlip);
            updateCharacterImage(middleCharacter, "middle", middle, middleMood, middleFlip);
        } else {
            leftCharacter.innerHTML = "";
            rightCharacter.innerHTML = "";
            middleCharacter.innerHTML = "";

            currentCharacters = {
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
            crossfadeMusic(audioChannelMusic, line.music, 2000);
        }
    }
    if (!backward) {
        currentLineId = id;
        currentLineIndex += 1;
        if (!line?.dontSave) {
            previousLine.push(currentLineId);
        }
    } else {
        currentLineIndex -= 1;
        currentLineId = previousLine[currentLineIndex];
    }
}

async function crossfadeMusic(audioElement: HTMLAudioElement, newSrc: string, duration = 1000) {
    if (!audioElement) return;

    await fadeOut(audioElement, duration / 2);

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
        await fadeIn(audioElement, duration / 2);
    } catch (err) {
        console.warn("Playback failed:", err);
    }
}

function fadeOut(audio: HTMLAudioElement, duration: number) {
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

function fadeIn(audio: HTMLAudioElement, duration: number) {
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

const skipLine = () => {
    const currentLine = findLineById(currentLineId);

    if (!currentLine?.backgroundVideo && !isWritting && canSkipSmartphone && (game.stoped || game.paused)) {
        const nextLineId = getNextLineId();
        if (nextLineId && !currentLine?.noNextLine) {
            showLine(nextLineId);
        }
    }
};

dialogueBox.addEventListener("click", () => {
    skipLine();
});

document.addEventListener("keydown", (event) => {
    if (event.key === " " && (!game.stoped || !game.paused)) {
        event.preventDefault();
        skipLine();
    }
});

function getNextLineId(): string | undefined {
    const index = script.findIndex((line) => line.id === currentLineId);
    if (script[index].nextLineId) {
        return script[index].nextLineId;
    }
    if (index >= 0 && index < script.length - 1) {
        return script[index + 1].id;
    }
    return undefined;
}

document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const xOffset = -(clientX / innerWidth - 0.5) * 10;
    const yOffset = -(clientY / innerHeight - 0.5) * 10;

    const characterXOffset = (clientX / innerWidth - 0.5) * 10;
    const characterYOffset = (clientY / innerHeight - 0.5) * 10;

    gsap.to(backgroundElem, {
        duration: 0.3,
        x: xOffset,
        y: yOffset,
        ease: "power4.out",
    });

    gsap.to(leftCharacter, {
        duration: 0.3,
        x: characterXOffset,
        y: characterYOffset,
        ease: "power4.out",
    });
    gsap.to(rightCharacter, {
        duration: 0.3,
        x: characterXOffset,
        y: characterYOffset,
        ease: "power4.out",
    });
    gsap.to(middleCharacter, {
        duration: 0.3,
        x: characterXOffset,
        y: characterYOffset,
        ease: "power4.out",
    });
});

window.addEventListener("resize", () => {
    backgroundElem.style.transform = "translate(0, 0)";
});
