import { DialogueLine, FadeTransitionType } from "./types";


const script: DialogueLine[] = [
  {
    id: "start", // Unique ID for this line
    text: "",
    backgroundVideo: 'Intro',
  },
  {
      id: "start2", // Unique ID for this line
      name: "Ilyem",
      text: "Je... (ilyem a l'air méfiante)",
      background: 'bar',
      backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 3000,
      },
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "bras_hesite",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start1",
      name: "NODE",
      text: "... (la femme aussi)",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "bras_fuyant",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start2",
      name: "Ilyem",
      text: "Je pense que ce monde est voué à disparaître...",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "bras_hesite",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start3",
      name: "NODE",
      text: "(la serveuse se détend)",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "bras_fuyant",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start3.1",
      name: "NODE",
      text: "Mais un Nouvel Idéal le fera renaître de ses cendres.",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "sourire",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start4",
      text: "[La serveuse sort son paquet de cigarette]",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "sourire",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start5",
      text: "[Elle le tend à Ilyem]",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "etonnee",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start6",
      text: "[Elles allument toutes les 2 leurs cigarettes]",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "allume_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start7",
      name: "Ilyem",
      text: "Je peux vous aider à les trouver",
      background: 'bar',
      charactersOnScreen: {
        left: "syel",
        leftMood: "test",
        right: "ilyem",
        rightMood: "sourire_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    /*
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
      }
    }*/
    //   callback: () => {
    //     const game = new Game();
    //     game.start();
    //   },
    // }
  ];

  export default script;