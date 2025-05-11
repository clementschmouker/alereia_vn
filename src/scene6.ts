import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "twist", // Unique ID for this line
        name: "Vangva",
        text: "...",
        background: 'impasse',
        charactersOnScreen: {
          left: "serveuse",
          leftMood: "mefiante",
          right: "vava",
          rightMood: "moqueur",
          leftFlip: false,
          rightFlip: false
        },
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
    },
    {
      id: "twist1",
      name: "NODE",
      text: "Ça suffit ! T'es en train de te payer notre tête ?!",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "peur",
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
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
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
      background: 'noir',
    },
    {
      id: "twist4",
      name: "Vangva",
      text: "Merci... Je t'avoue que je ne m'attendais pas à ce que ton plan marche aussi bien, Sanji. C'était presque trop facile.",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
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
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
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
      background: 'noir',
    },
    {
      id: "twist7",
      name: "",
      text: "*Il en sort sa matraque*",
      background: 'noir',
    },
    {
      id: "twist8",
      name: "Vangva",
      text: "Désolé, je vous ai fait attendre.",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "vava",
        rightMood: "sourire_combat",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "twist9",
      name: "NODE",
      text: "Arrête de faire le malin !! Notre nombre est peut-être réduit, mais tu n'en restes pas moins seul face à cinq personnes !",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
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
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
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
      background: 'noir',
    },
    {
      id: "twist11",
      name: "Vangva",
      text: "Mais vous savez... Je ne suis pas <i>seul</i>...",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "vava",
        rightMood: "sourire_combat",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;