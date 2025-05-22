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
import { DialogueLine } from "./types";
import gsap from "gsap";

const script = [...scene1, ...scene2, ...scene3, ...scene4, ...scene5, ...scene6, ...scene7, ...scene8, ...scene9, ...scene10]; // @TODO IMPORTANT: Combine the scripts into one

let currentLineId = "start"; // The ID of the current line to be displayed
let previousLine: string[] = [];
let currentLineIndex = 0;

const nameElem = document.getElementById("name")!;
const dialogueElem = document.getElementById("dialogue")!;
const dialogueBox = document.getElementById("dialogue-box")!;

const leftCharacter = document.getElementById("left-character")!;
const rightCharacter = document.getElementById("right-character")!;
const middleCharacter = document.getElementById("middle-character")!;
const backgroundElem = document.getElementById("background")!;
const backgroundVideo = document.querySelector('#background-video') as HTMLVideoElement;
const choicesContainer = document.getElementById("choices-container")!;
const characterNameElement = document.getElementById("name")!;

const audioChannelSound = document.querySelector('#audio-channel--sound') as HTMLAudioElement;
const audioChannelMusic = document.querySelector('#audio-channel--music') as HTMLAudioElement;
const audioChannelVoice = document.querySelector('#audio-channel--voice') as HTMLAudioElement;

const unmuteButton = document.querySelector('#mute-sound');
const skipVideo = document.querySelector('#skip-video')
const goBackButton = document.querySelector('#go-back');

let currentCharacters = {
  left: { name: "", mood: "", flip: false },
  right: { name: "", mood: "", flip: false },
  middle: { name: "", mood: "", flip: false },
};

let isWritting = false;

let canPassScreen = true;

unmuteButton?.addEventListener('click', () => {
  audioChannelMusic.muted = !audioChannelMusic.muted;
  audioChannelSound.muted = !audioChannelSound.muted;
  audioChannelVoice.muted = !audioChannelVoice.muted;
  backgroundVideo.muted = !backgroundVideo.muted;
  unmuteButton.classList.toggle('muted');
});

skipVideo?.addEventListener('click', () => {
  canPassScreen = true;
  skipVideo.classList.remove('hidden');
  const nextLineId = getNextLineId();
  if (nextLineId) {
    previousLine.push(currentLineId)
    currentLineId = nextLineId;
    currentLineIndex += 1;
    showLine(nextLineId);
  }
});

goBackButton?.addEventListener('click', () => {
  if (currentLineIndex <= 0) return;
  currentLineIndex -= 1;
  currentLineId = previousLine[currentLineIndex];
  showLine(previousLine[currentLineIndex]);
})

// Function to find a dialogue line by its ID
function findLineById(id: string): DialogueLine | undefined {
  return script.find(line => line.id === id);
}
function updateCharacterImage(
  container: HTMLElement,
  position: 'left' | 'right' | 'middle',
  name?: string,
  mood?: string,
  flip?: boolean
) {
  const current = currentCharacters[position];
  const shouldUpdate =
    current.name !== name || current.mood !== mood || current.flip !== flip;

  if (!name) {
    container.style.backgroundImage = ""; // Clear the image if no name is provided
    currentCharacters[position] = { name: "", mood: "", flip: false };
    return;
  }

  const baseUrl = `/src/images/personnages/${name}`;
  const newSrc = mood
    ? `${baseUrl.split(".")[0]}_${mood}.png`
    : `${baseUrl}.png`;

  if (!shouldUpdate) return;

  const preloader = new Image();
  preloader.src = newSrc;

  preloader.onload = () => {
    currentCharacters[position] = { name, mood: mood || "", flip: !!flip };
    container.style.backgroundImage = `url(${newSrc})`;
  };
}


// Function to show dialogue based on ID
function showLine(id: string) {
  const line = findLineById(id);
  if (line && !line.textPosition) {
    line.textPosition = "narrator";
  }
  dialogueBox.classList.remove('left');
  dialogueBox.classList.remove('right');
  dialogueBox.classList.remove('narrator');
  dialogueBox.classList.add(line?.textPosition as string);

  if (canPassScreen) {
    let video = document.getElementById('background-video');

    if (!line) {
      console.error("Line not found:", id);
      return;
    }

    leftCharacter.innerHTML = "";
    choicesContainer.innerHTML = "";
    rightCharacter.innerHTML = "";

    nameElem.textContent = line.name || "";
    dialogueElem.innerHTML = ""; // Clear dialogue before typing

    if (line.name) {
      characterNameElement.classList.add('displayed');
    } else {
      characterNameElement.classList.remove('displayed');
    }

    // Display text letter by letter with interruption support
    let typingInterval: NodeJS.Timeout | null = null;
    const typeText = (text: string, element: HTMLElement, speed: number) => {
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
          clearInterval(typingInterval!);
          typingInterval = null;
        }
      }, speed);
    };

    if (line.text) {
      typeText(line.text, dialogueElem, 20); // Adjust speed as needed

      // Add event listener to interrupt typing and display full text
      const stopTyping = (event: KeyboardEvent) => {
        event.preventDefault();
        if (event.key === ' ' && typingInterval) {
          clearInterval(typingInterval);
          typingInterval = null;
          dialogueElem.innerHTML = line.text; // Display full text
          document.removeEventListener('keydown', stopTyping); // Remove listener
          isWritting = false; // Reset typing state
        }
      };
      document.addEventListener('keydown', stopTyping);
    }

    if (line.backgroundTransition) {
      const { easing, duration, delay } = line.backgroundTransition;
      const string = `background-image ${duration ? duration : 300}ms ${delay ? delay : 0}ms ${easing}`;
      backgroundElem.style.transition = string;
    } else {
      backgroundElem.style.transition = "";
    }

    if (line.background) {
      backgroundElem.style.backgroundImage = `url('/src/images/decors/${line.background}.jpg')`;
    } else {
      backgroundElem.style.backgroundImage = ""; // Clear background if none specified
    }

    if (line.backgroundVideo && backgroundVideo) {
      canPassScreen = false;
      skipVideo?.classList.remove('hidden');
      backgroundVideo.src = `/src/videos/${line.backgroundVideo}.mp4`;
      backgroundVideo.autoplay = true;
      backgroundVideo.playsInline = true;
      backgroundVideo.addEventListener('ended', () => {
        canPassScreen = true;
        const nextLineId = getNextLineId();
        if (nextLineId) {
          previousLine.push(currentLineId);
          currentLineId = nextLineId;
          currentLineIndex += 1;
          showLine(nextLineId);
        }
      });
    } else if (video) {
      canPassScreen = true;
      skipVideo?.classList.add('hidden');
      backgroundVideo.src = '';
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
        middleFlip
      } = line.charactersOnScreen;

      updateCharacterImage(leftCharacter, 'left', left, leftMood, leftFlip);
      updateCharacterImage(rightCharacter, 'right', right, rightMood, rightFlip);
      updateCharacterImage(middleCharacter, 'middle', middle, middleMood, middleFlip);
    } else {
      // No characters on screen: clear all and reset cache
      leftCharacter.innerHTML = "";
      rightCharacter.innerHTML = "";
      middleCharacter.innerHTML = "";

      currentCharacters = {
        left: { name: "", mood: "", flip: false },
        right: { name: "", mood: "", flip: false },
        middle: { name: "", mood: "", flip: false },
      };
    }

    // Show choices if they exist
    if (line.choices) {
      line.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
          // Clear previous choices and show the next line based on the chosen ID
          choicesContainer.innerHTML = "";
          previousLine.push(currentLineId);
          currentLineId = choice.nextLineId;
          currentLineIndex += 1;
          showLine(choice.nextLineId);
        };
        choicesContainer.appendChild(button);
      });
    }

    if (line.sound) {
      if (audioChannelSound) {
        audioChannelSound.pause();
        audioChannelSound.currentTime = 0;
        audioChannelSound.innerHTML = "";
        const audioFile = document.createElement('source');
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
        const audioFile = document.createElement('source');
        audioFile.src = line.voice;
        audioChannelVoice.appendChild(audioFile);
        audioChannelVoice.play();
      }
    }

    if (line.music) {
      crossfadeMusic(audioChannelMusic, line.music, 2000);
    }

    if (line.callback) {
      line.callback();
    }
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
  return new Promise(resolve => {
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
  return new Promise(resolve => {
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

  if (!currentLine?.choices && !currentLine?.backgroundVideo && !isWritting) {
    const nextLineId = getNextLineId();
    if (nextLineId) {
      previousLine.push(currentLineId);
      currentLineId = nextLineId;
      currentLineIndex += 1;
      showLine(nextLineId);
    }
  }
}

// This handler for dialogue box should not be used when there are choices. Only allow it to advance when there are no choices.
dialogueBox.addEventListener("click", () =>  {
  skipLine();
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.key === ' ') {
    skipLine();
  }
});

// Helper function to get the next line ID based on current dialogue without choices
function getNextLineId(): string | undefined {
  const index = script.findIndex(line => line.id === currentLineId);
  if (script[index].nextLineId) {
    return script[index].nextLineId;
  }
  if (index >= 0 && index < script.length - 1) {
    return script[index + 1].id;
  }
  return undefined; // End of script
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

// Reset parallax effect on window resize
window.addEventListener("resize", () => {
  backgroundElem.style.transform = "translate(0, 0)";
});


// Start the dialogue by showing the first line
showLine(currentLineId);