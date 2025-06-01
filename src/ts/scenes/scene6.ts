import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "twist", // Unique ID for this line
        name: "Vangva",
        voice: "medium",
        text: "...",
        background: 'impasse',
        charactersOnScreen: {
          left: "mechants",
          leftMood: "menace",
          right: "vava",
          rightMood: "moqueur",
          leftFlip: false,
          rightFlip: false,
          abruptFlip: true,
        },
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        music: 'audio/scene6.mp3',
        loopMusic: true,
    },
    {
      id: "twist1",
      name: "N.O.D.E.",
      voice: "low",
      text: "Ça suffit ! T'es en train de te payer notre tête ?!",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "fache",
        right: "vava",
        rightMood: "arrogant",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist2",
      name: "Vangva",
      voice: "medium",
      text: "J'espère que tu profites bien du spectacle depuis ton bureau.",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "met_ecouteurs",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist3",
      name: "???",
      voice: "low",
      text: "J'adore, j'ai même sorti le popcorn ! Très beau jeu d'acteur d'ailleurs, je dois dire que tu m'as surpris.",
      textPosition: 'center', // ??? is not on screen
      background: 'noir',
      style: 'phone',
      charactersOnScreen: {
        left: "",
        right: "",
      },
    },
    {
      id: "twist4",
      voice: "medium",
      name: "Vangva",
      text: "Merci... Je t'avoue que je ne m'attendais pas à ce que ton plan marche aussi bien, Sanji. C'était presque trop facile.",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "met_ecouteurs",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist5",
      name: "Sanjevan",
      voice: "low",
      text: "Évidemment que ça a marché, tu me connais. Fais quand même attention à toi gamin... Et ne les tape pas trop fort, ils ont l'air morts de trouille les pauvres.",
      textPosition: 'right', // Sanjevan is not on screen
      background: 'impasse',
      style:"phone",
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "detendu",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist8",
      name: "Vangva",
      voice: "medium",
      text: "Désolé, je vous ai fait attendre.",
      sound: "audio/bruitages/matraque.mp3",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "fache",
        right: "vava",
        rightMood: "sourire_combat",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist9",
      name: "N.O.D.E.",
      voice: "low",
      text: "Arrête de faire le malin !! Notre nombre est peut-être réduit, mais tu es quand même seul face à quatre personnes !",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "serieux_combat",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist10",
      name: "Vangva",
      text: "Seul ?",
      voice: "medium",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "serieux_combat",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "cineyeux",
      name: "",
      background: 'noir',
      backgroundVideo: 'yeuxVa',
      charactersOnScreen: {
        left: '',
        right: '',
      }
    },
    {
      id: "twist11",
      name: "Vangva",
      voice: "medium",
      text: "Qui vous a dit que j'étais <i>seul</i>... ?",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      style: 'speech',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "sourire_combat",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;