import Game from './game';
import scenesTHREE from './scenes/scenesTHREE';
import scene1 from "./scenes/scene1";
import scene2 from "./scenes/scene2";
import scene3 from "./scenes/scene3";
import scene4 from "./scenes/scene4";
import scene5 from "./scenes/scene5";
import scene6 from "./scenes/scene6";
import scene7 from "./scenes/scene7";
import scene8 from "./scenes/scene8";
import scene9 from "./scenes/scene9";
import scene10 from "./scenes/scene10";

import LineHandler from './components/LineHandler';

const script = [
    ...scenesTHREE,
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


export const nameElem = document.getElementById("name")!;
export const dialogueElem = document.getElementById("dialogue")!;
export const dialogueBox = document.getElementById("dialogue-box")!;
export const choiceWrapper = dialogueBox.querySelector('#choices');

export const leftCharacter = document.getElementById("left-character")!;
export const rightCharacter = document.getElementById("right-character")!;
export const middleCharacter = document.getElementById("middle-character")!;
export const backgroundElem = document.getElementById("background")!;
export const backgroundVideo = document.querySelector("#background-video") as HTMLVideoElement;
export const characterNameElement = document.getElementById("name")!;

export const smartPhoneElement = document.getElementById("smartphone")!;
export const smartPhoneMessagesListElem = document.querySelector('.smartphone__screen__messages') as HTMLUListElement;
export const smartPhoneWrittingElem = document.querySelector('.smartphone__screen__writting') as HTMLDivElement;
export const smartPhoneContentElem = document.querySelector('.smartphone__screen__content') as HTMLDivElement;
export const smartPhoneWrittingBarElem = document.querySelector('.smartphone__screen__writting-bar') as HTMLDivElement;
export const smartPhoneCloseElem = document.querySelector('#smartphone-close') as HTMLDivElement;

export const audioChannelSound = document.querySelector("#audio-channel--sound") as HTMLAudioElement;
export const audioChannelMusic = document.querySelector("#audio-channel--music") as HTMLAudioElement;
export const audioChannelVoice = document.querySelector("#audio-channel--voice") as HTMLAudioElement;

export const unmuteButton = document.querySelector("#mute-sound");
export const skipVideo = document.querySelector("#skip-video");
export const goBackButton = document.querySelector("#go-back");

export const startScreen = document.querySelector("#start-screen") as HTMLDivElement;
export const startButton = document.querySelector("#start-button") as HTMLButtonElement;
export const videoAccueil = document.getElementById('videoAccueil') as HTMLVideoElement;
export const gameScreen = document.querySelector("#game") as HTMLDivElement;



export const game = new Game();
export const lineHandler = new LineHandler(script);
