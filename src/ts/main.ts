import { 
    dialogueBox,
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
    videoAccueil,
    smartphoneCloseElemText,
    controlsButton,
    overlayControlsElement,
    isControlVisible,
    setControlVisible,
    game,
    endButton,
    vnGameWrapper
} from "./globals";

import '../scss/main.scss';

const DEFAULT_STARTING_LINE_ID = "gare3"; // Ici tu change l'ID que tu veux pour commencer

startButton?.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    videoAccueil.pause();
    videoAccueil.volume = 0;
    videoAccueil.currentTime = 0;
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
    if (lineHandler.previousLines.length <= 2) return;
    lineHandler.showLine(lineHandler.previousLines[lineHandler.currentLineIndex - 1], true);
});

smartPhoneWrittingBarElem.addEventListener('click', () => {
    document.querySelector('.smartphone-choices')?.querySelectorAll('.smartphone-choice').forEach((button, index) => {
        setTimeout(() => {
            button.classList.remove('hidden');
        }, index * 100);
    });
    smartPhoneWrittingBarElem.classList.remove('blinking');
});

smartphoneCloseElemText.addEventListener('click', () => {
    const nextLineId = lineHandler.getNextLineId();
    const currentLine = lineHandler.findLineById(lineHandler.currentLineId);
    if (nextLineId && !currentLine?.noNextLine) {
        lineHandler.showLine(nextLineId);
    }
})


dialogueBox.addEventListener("click", () => {
    if (lineHandler.canSkipLine) {
        lineHandler.skipLine();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === " " && lineHandler.canSkipLine) {
        event.preventDefault();
        if (lineHandler.fadeToNextLine) {
            vnGameWrapper.classList.add('faded-out');
            setTimeout(() => {
                lineHandler.skipLine();
                vnGameWrapper.classList.remove('faded-out');
            }, 1500);
        } else {
            lineHandler.skipLine();
        }
    }
});

controlsButton?.addEventListener('click', () => {
    overlayControlsElement.classList.toggle('visible');
    setControlVisible(!isControlVisible)
    lineHandler.canSkipLine = !isControlVisible;
    if (!game.paused && isControlVisible) {
        game.pause();
    }
    if (game.paused && !isControlVisible) {
        game.play();
    }
});

overlayControlsElement?.addEventListener('click', () => {
    overlayControlsElement.classList.toggle('visible');
    setControlVisible(!isControlVisible)
    lineHandler.canSkipLine = !isControlVisible;
    if (!game.paused && isControlVisible) {
        game.pause();
    }
    if (game.paused && !isControlVisible) {
        game.play();
    }
});

endButton?.addEventListener('click', () => {
    location.reload();
})

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