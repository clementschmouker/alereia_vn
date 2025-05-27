
import gsap from "gsap";

import { 
    game,
    dialogueBox,
    smartPhoneCloseElem,
    leftCharacter,
    rightCharacter,
    middleCharacter,
    backgroundElem,
    skipVideo,
    backgroundVideo,
    audioChannelMusic,
    audioChannelSound,
    audioChannelVoice,
    goBackButton,
    startButton,
    startScreen,
    gameScreen,
    unmuteButton,smartPhoneWrittingBarElem,
    lineHandler,
} from "./globals";

import '../scss/main.scss';

const DEFAULT_STARTING_LINE_ID = "gare"; // Ici tu change l'ID que tu veux pour commencer


startButton?.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    lineHandler.showLine(DEFAULT_STARTING_LINE_ID);
});


unmuteButton?.addEventListener("click", () => {
    audioChannelMusic.muted = !audioChannelMusic.muted;
    audioChannelSound.muted = !audioChannelSound.muted;
    audioChannelVoice.muted = !audioChannelVoice.muted;
    backgroundVideo.muted = !backgroundVideo.muted;
    unmuteButton!.classList.toggle("muted");
});

skipVideo?.addEventListener("click", () => {
    lineHandler.canPassScreen = true;
    skipVideo!.classList.remove("hidden");
    const currentLine = lineHandler.findLineById(lineHandler.currentLineId);
    const nextLineId = lineHandler.getNextLineId();
    if (nextLineId && !currentLine?.noNextLine) {
        lineHandler.showLine(nextLineId);
    }
});

goBackButton?.addEventListener("click", () => {
    if (lineHandler.currentLineIndex <= 1) return;
    lineHandler.showLine(lineHandler.previousLines[lineHandler.currentLineIndex - 2], true);
    lineHandler.previousLines.pop();
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
    const nextLineId = lineHandler.getNextLineId();
    const currentLine = lineHandler.findLineById(lineHandler.currentLineId);
    if (nextLineId && !currentLine?.noNextLine) {
        lineHandler.showLine(nextLineId);
    }
})


dialogueBox.addEventListener("click", () => {
    lineHandler.skipLine();
});

document.addEventListener("keydown", (event) => {
    if (event.key === " " && (!game.stoped || !game.paused)) {
        event.preventDefault();
        lineHandler.skipLine();
    }
});



// document.addEventListener("mousemove", (event) => {
//     const { clientX, clientY } = event;
//     const { innerWidth, innerHeight } = window;

//     const xOffset = -(clientX / innerWidth - 0.5) * 10;
//     const yOffset = -(clientY / innerHeight - 0.5) * 10;

//     const characterXOffset = (clientX / innerWidth - 0.5) * 10;
//     const characterYOffset = (clientY / innerHeight - 0.5) * 10;

//     gsap.to(backgroundElem, {
//         duration: 0.3,
//         x: xOffset,
//         y: yOffset,
//         ease: "power4.out",
//     });

//     gsap.to(leftCharacter, {
//         duration: 0.3,
//         x: characterXOffset,
//         y: characterYOffset,
//         ease: "power4.out",
//     });
//     gsap.to(rightCharacter, {
//         duration: 0.3,
//         x: characterXOffset,
//         y: characterYOffset,
//         ease: "power4.out",
//     });
//     gsap.to(middleCharacter, {
//         duration: 0.3,
//         x: characterXOffset,
//         y: characterYOffset,
//         ease: "power4.out",
//     });
// });

window.addEventListener("resize", () => {
    backgroundElem.style.transform = "translate(0, 0)";
});