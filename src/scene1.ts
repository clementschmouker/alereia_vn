import { DialogueLine, FadeTransitionType } from "./types";
import Game from "./game";


const script: DialogueLine[] = [
    {
      id: "start", // Unique ID for this line
      name: "Aria",
      text: "Halte là, <i>voyageur</i>.",
      background: 'aria_angry.png',
      backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 3000,
      },
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
      nextLineId: "end",
    },
    {
      id: "village", // Unique ID for this line
      name: "Aria",
      text: "Ok c'est partit pour le village.",
      nextLineId: "end",
    },
    {
      id: "mountain", // Unique ID for this line
      name: "Aria",
      text: "Ok c'est partit pour la montagne.",
      nextLineId: "end",
    },
    {
      id: "end", // Unique ID for this line
      name: "Aria",
      text: "Fin de la discussion. On passe à la scène suivante.",
      charactersOnScreen: {
        left: "aria_happy",
        right: "aria_happy",
        leftFlip: false,
        rightFlip: true
      },
      callback: () => {
        const game = new Game();
        game.start();
      },
    }
  ];

  export default script;