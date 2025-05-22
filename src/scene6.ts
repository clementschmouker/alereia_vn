import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "twist", // Unique ID for this line
        name: "Vangva",
        text: "...",
        background: 'impasse',
        charactersOnScreen: {
          left: "mechants",
          leftMood: "menace",
          right: "vava",
          rightMood: "moqueur",
          leftFlip: false,
          rightFlip: false
        },
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        music: '/src/audio/scene6.mp3',
    },
    {
      id: "twist1",
      name: "N.O.D.E.",
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
      text: "J'adore, j'ai même sorti le popcorn ! Très beau jeu d'acteur d'ailleurs, je dois dire que tu m'as surpris.",
      textPosition: 'center', // ??? is not on screen
      background: 'noir',
    },
    {
      id: "twist4",
      name: "Vangva",
      text: "Merci... Je t'avoue que je ne m'attendais pas à ce que ton plan marche aussi bien, Sanji. C'était presque trop facile.",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "se_moque",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist5",
      name: "Sanjevan",
      text: "Évidemment que ça a marché, tu me connais. Fais quand même attention à toi gamin... Et ne les tape pas trop fort, ils ont l'air morts de trouille les pauvres.",
      textPosition: 'center', // Sanjevan is not on screen
      background: 'impasse',
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
      id: "twist6",
      name: "",
      text: "*Vangva dépose son sac à dos*",
      textPosition: 'center', // No speaker
      background: 'noir',
    },
    {
      id: "twist7",
      name: "",
      text: "*Il en sort sa matraque*",
      textPosition: 'center', // No speaker
      background: 'noir',
    },
    {
      id: "twist8",
      name: "Vangva",
      text: "Désolé, je vous ai fait attendre.",
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
      text: "Arrête de faire le malin !! Notre nombre est peut-être réduit, mais tu n'en restes pas moins seul face à cinq personnes !",
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
      text: "*Cinématique, Vangva ferme les yeux. Quand il les rouvre, son oeil glitch*",
      textPosition: 'center', // No speaker
      background: 'noir',
    },
    {
      id: "twist11",
      name: "Vangva",
      text: "Mais vous savez... Je ne suis pas <i>seul</i>...",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
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