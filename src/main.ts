type DialogueLine = {
  id: string;  // Unique ID for the line
  name: string;
  text: string;
  background?: string;
  music?: string;
  sound?: string;
  voice?: string;
  stopMusic?: boolean;
  stopSound?: boolean;
  stopVoice?: boolean;
  soundFade?: {
    duration: number;
    fadeOut: boolean;
  };
  voiceFade?: {
    duration: number;
    fadeOut: boolean;
  };
  musicFade?: {
    duration: number;
    fadeOut: boolean;
  };
  charactersOnScreen?: {
    left?: string;
    right?: string;
    leftMood?: string;
    rightMood?: string;
    leftFlip?: boolean;
    rightFlip?: boolean;
  };
  choices?: {
    text: string;
    nextLineId: string; // Reference to the next line by ID
  }[];
};

const script: DialogueLine[] = [
  {
    id: "start", // Unique ID for this line
    name: "Aria",
    text: "Halte là, voyageur.",
    charactersOnScreen: {
      left: "aria",
      leftMood: "serious",
      right: "aria",
      rightMood: "happy",
      leftFlip: false,
      rightFlip: true
    }
  },
  {
    id: "kai_intro", // Unique ID for this line
    name: "Kai",
    text: "SLT LOL.",
    charactersOnScreen: {
      left: "aria_serious",
      right: "aria_happy",
      rightFlip: true
    }
  },
  {
    id: "story_begin", // Unique ID for this line
    name: "Aria",
    text: "On commence.",
    charactersOnScreen: {
      left: "aria_angry",
      right: "aria_angry",
      leftFlip: false,
      rightFlip: true
    }
  },
  {
    id: "where_to_go", // Unique ID for this line
    name: "Aria",
    text: "Tu veux aller où ?",
    choices: [
      { text: "La forêt", nextLineId: "forest" },
      { text: "Le village", nextLineId: "village" },
      { text : "La montagne", nextLineId: "mountain" }
    ]
  },
  {
    id: "forest", // Unique ID for this line
    name: "Kai",
    text: "Ok c'est partit pour la forêt.",
  },
  {
    id: "village", // Unique ID for this line
    name: "Aria",
    text: "Ok c'est partit pour le village.",
  },
  {
    id: "mountain", // Unique ID for this line
    name: "Aria",
    text: "Ok c'est partit pour la montagne.",
  },
  {
    id: "end", // Unique ID for this line
    name: "Aria",
    text: "Fin de la discussion.",
    charactersOnScreen: {
      left: "aria_happy",
      right: "aria_happy",
      leftFlip: false,
      rightFlip: true
    }
  }
];

let currentLineId = "start"; // Start with the 'start' line ID

const nameElem = document.getElementById("name")!;
const dialogueElem = document.getElementById("dialogue")!;
const dialogueBox = document.getElementById("dialogue-box")!;

const leftCharacter = document.getElementById("left-character")!;
const rightCharacter = document.getElementById("right-character")!;

const choicesContainer = document.getElementById("choices-container")!;

// Function to find a dialogue line by its ID
function findLineById(id: string): DialogueLine | undefined {
  return script.find(line => line.id === id);
}

// Function to show dialogue based on ID
function showLine(id: string) {
  const line = findLineById(id);

  if (!line) {
    console.error("Line not found:", id);
    return;
  }

  leftCharacter.innerHTML = "";
  choicesContainer.innerHTML = "";
  rightCharacter.innerHTML = "";

  nameElem.textContent = line.name;
  dialogueElem.textContent = line.text;

  // Handle characters on screen
  if (line.charactersOnScreen) {
    const { left, right, leftFlip, rightFlip } = line.charactersOnScreen;

    // Handle left character
    if (left) {
      const leftImg = document.createElement("img");
      const leftMood = line.charactersOnScreen.leftMood;
      const imgBaseUrl = `/src/images/${left}`;
      let fullImgUrl = imgBaseUrl;

      if (leftMood) {
        fullImgUrl = `${imgBaseUrl.split(".")[0]}_${leftMood}.png`;
      } else {
        fullImgUrl = `${imgBaseUrl}.png`;
      }
      
      leftImg.src = fullImgUrl;
      leftImg.alt = "left character";
      if (leftFlip) {
        leftImg.style.transform = "scaleX(-1)";
      }
      leftCharacter.appendChild(leftImg);
    }

    // Handle right character
    if (right) {
      const rightMood = line.charactersOnScreen.rightMood;
      const imgBaseUrl = `/src/images/${right}`;
      let fullImgUrl = imgBaseUrl;
      if (rightMood) {
        fullImgUrl = `${imgBaseUrl.split(".")[0]}_${rightMood}.png`;
      } else {
        fullImgUrl = `${imgBaseUrl}.png`;
      }
      
      const rightImg = document.createElement("img");
      rightImg.src = fullImgUrl;
      rightImg.alt = "right character";
      if (rightFlip) {
        rightImg.style.transform = "scaleX(-1)";
      }
      rightCharacter.appendChild(rightImg);
    }
  }

  // Show choices if they exist
  if (line.choices) {
    line.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => {
        // Clear previous choices and show the next line based on the chosen ID
        choicesContainer.innerHTML = "";
        showLine(choice.nextLineId);
      };
      choicesContainer.appendChild(button);
    });
  }
}

// Start the dialogue by showing the first line
showLine(currentLineId);

// This handler for dialogue box should not be used when there are choices. Only allow it to advance when there are no choices.
dialogueBox.addEventListener("click", () => {
  const currentLine = findLineById(currentLineId);
  
  if (!currentLine?.choices) {
    const nextLineId = getNextLineId();
    if (nextLineId) {
      currentLineId = nextLineId;
      showLine(nextLineId);
    }
  }
});


// Helper function to get the next line ID based on current dialogue without choices
function getNextLineId(): string | undefined {
  const index = script.findIndex(line => line.id === currentLineId);
  if (index >= 0 && index < script.length - 1) {
    return script[index + 1].id;
  }
  return undefined; // End of script
}
