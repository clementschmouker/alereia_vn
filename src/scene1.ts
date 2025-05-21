import { DialogueLine, /*FadeTransitionType*/ } from "./types";


const script: DialogueLine[] = [
  {
    id: "start", // Unique ID for this line
    text: "",
    backgroundVideo: 'Intro',
  },
  {
      id: "start0", // Unique ID for this line
      name: "Ilyem",
      text: "Alors, voilà... Je...",
      textPosition: 'right',
      background: 'bar',
      /*backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 3000,
      },*/
      music: '/src/audio/scene1.mp3',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "ilyem",
        rightMood: "bras_hesite",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start1",
      name: "N.O.D.E.",
      text: "...",
      textPosition: 'left',
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "ilyem",
        rightMood: "bras_fuyant",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start2",
      name: "Ilyem",
      text: "Je pense que ce monde de feu et de sang est voué à disparaître...",
      textPosition: 'right',
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "ilyem",
        rightMood: "bras_hesite",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start3",
      name: "N.O.D.E.",
      text: "...",
      textPosition: 'narrator',
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre",
        right: "ilyem",
        rightMood: "bras_fuyant",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start3.1",
      name: "N.O.D.E.",
      text: "... mais un Nouvel Idéal le fera renaître de ses cendres.",
      textPosition: 'narrator',
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire",
        right: "ilyem",
        rightMood: "sourire",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start5",
      name: "N.O.D.E.",
      text: "Tu te joins à moi ?",
      textPosition: 'narrator',
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "propose_cig",
        right: "ilyem",
        rightMood: "etonnee",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start6",
      name: "Ilyem",
      text: "Ah... merci.",
      textPosition: 'right',
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "propose_cig",
        right: "ilyem",
        rightMood: "etonnee",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start6.1",
      text: "",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "cigarette",
        right: "ilyem",
        rightMood: "allume_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "start7",
      name: "Ilyem",
      text: "Je peux vous aider à les trouver. Vous savez de qui je parle.",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire_cig",
        right: "ilyem",
        rightMood: "serieux_cig",
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