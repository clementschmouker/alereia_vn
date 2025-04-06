type DialogueLine = {
  id: string;  // Unique ID for the line
  name: string;
  text: string;
  charactersOnScreen?: {
    left?: string;
    right?: string;
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
    text: "Hey there, traveler.",
    charactersOnScreen: {
      left: "aria_serious.png",
      leftFlip: false
    }
  },
  {
    id: "kai_intro", // Unique ID for this line
    name: "Kai",
    text: "I'm here too.",
    charactersOnScreen: {
      left: "aria_serious.png",
      right: "aria_happy.png",
      rightFlip: true
    }
  },
  {
    id: "story_begin", // Unique ID for this line
    name: "Aria",
    text: "Let’s begin our story.",
    charactersOnScreen: {
      left: "aria_angry.png",
      right: "aria_angry.png",
      leftFlip: false,
      rightFlip: true
    }
  },
  {
    id: "where_to_go", // Unique ID for this line
    name: "Aria",
    text: "Where do you want to go?",
    choices: [
      { text: "Go to the forest", nextLineId: "forest" },
      { text: "Go to the village", nextLineId: "village" }
    ]
  },
  {
    id: "forest", // Unique ID for this line
    name: "Kai",
    text: "You decided to explore the forest.",
  },
  {
    id: "village", // Unique ID for this line
    name: "Aria",
    text: "You decided to visit the village.",
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
      leftImg.src = `/src/images/${left}`;
      leftImg.alt = "left character";
      if (leftFlip) {
        leftImg.style.transform = "scaleX(-1)";
      }
      leftCharacter.appendChild(leftImg);
    }

    // Handle right character
    if (right) {
      const rightImg = document.createElement("img");
      rightImg.src = `/src/images/${right}`;
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
