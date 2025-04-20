import scene1 from "./scene1"; // Import the dialogue script
import scene2 from "./scene2"; // Import the second dialogue script
import DialogueLine from "./types"; // Import the type for dialogue lines



const script = [...scene1, ...scene2]; // Combine the two scripts into one
console.log(script);

let currentLineId = "start"; // The ID of the current line to be displayed

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
        currentLineId = choice.nextLineId;
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
  if (script[index].nextLineId) {
    return script[index].nextLineId;
  }
  if (index >= 0 && index < script.length - 1) {
    return script[index + 1].id;
  }
  return undefined; // End of script
}
