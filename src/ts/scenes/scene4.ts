import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "impasse", // Unique ID for this line
        name: "Vangva",
        text: "Une impasse...",
        background: 'impasse',
        style: 'thinking',
        stopGame: true,
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        charactersOnScreen: {
          right: "vava",
          rightMood: "regard_froid",
          rightFlip: false,
          abruptFlip: true,
        },
        music: 'audio/scene4.mp3',
        loopMusic: true,
    },
    {
      id: "impasse0",
      name: "N.O.D.E.",
      text: "Tiens... Tu n'es pas né à Brissa, toi ? C'est quand même malheureux de connaître aussi mal sa propre ville.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      style: 'speech',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "moqueur",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse1",
      name: "Vangva",
      text: "...",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "moqueur",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse2",
      name: "N.O.D.E.",
      text: "Peu importe. Tu sais ce qu'on cherche, Vangva. Ou plutôt, <i>qui</i> on cherche.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse2.0",
      name: "N.O.D.E.",
      text: "On a entendu ta conversation au téléphone, on sait que tu t'apprêtes à le retrouver... rappelle-toi, on a des yeux et des oreilles partout. ",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse2.1",
      name: "N.O.D.E.",
      text: "Il te suffit juste de nous dire où il se trouve et on te laissera partir indemne.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse3",
      name: "Vangva",
      text: "Vous pensez vraiment me faire peur ? Je suis un soldat d'élite, et vous, vous semblez brandir un couteau pour la première fois de votre vie.",
      textPosition: 'right', // Vangva is on the right
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
      id: "impasse4",
      name: "N.O.D.E.",
      text: "C'est vrai, tu es plus fort que nous.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse5",
      name: "N.O.D.E.",
      text: "Mais nous, on est plus nombreux. Et surtout capables d'appeler du renfort sans même avoir besoin d'ouvrir la bouche.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "moqueur",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse6",
      name: "N.O.D.E.",
      text: "Alors oui, tu peux faire le fier ! Mais peu importe tes pouvoirs, il restera toujours au moins l'un d'entre nous debout pour t'arrêter...",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse7",
      name: "Vangva",
      text: "...",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse8",
      name: "N.O.D.E.",
      text: "Tu sais, si tu nous disais juste où se trouve Syel...",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse9",
      name: "Vangva",
      text: "...",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "moqueur",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse10",
      name: "Vangva",
      text: "Franchement, il va falloir plus que ça pour m'impressionner...",
      textPosition: 'right', // Vangva is on the right
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
      id: "impasse11",
      name: "Vangva",
      text: "? (*on entend un bruit de pas pressés*)",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "choque",
        leftFlip: false,
        rightFlip: true
      },
    },
    {
      id: "impasse12",
      name: "???",
      text: "Vangva !!",
      textPosition: 'center', // ??? is in the middle
      background: 'impasse3',
      charactersOnScreen: {
        left: "",
        right: "",
        middle: "ira",
        middleMood: "stresse",
        middleFlip: false
      },
    },
    {
      id: "impasse13",
      name: "Vangva",
      text: "Syel !",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        right: "vava",
        rightMood: "choque",
        leftFlip: true,
        rightFlip: true
      },
    },
    {
      id: "impasse14",
      name: "Vangva",
      text: "Idiot ! Je t'avais dit de rester caché !! Va-t'en !!",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "moqueur",
        right: "vava",
        rightMood: "panique",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "impasse15",
      name: "",
      text: "*On voit 'Syel' qui hésite, et qui s'enfuit",
      background: 'impasse3',
      charactersOnScreen: {
        left: "",
        right: "",
        middle: "ira",
        middleMood: "secache_panique",
        middleFlip: false
      },
    },
    {
      id: "impasse16",
      name: "N.O.D.E.",
      text: "Suivez-le !! Ne le laissez pas s'échapper !!",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "fache",
        right: "vava",
        rightMood: "choque",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "impasse17",
      name: "",
      text: "*La moitié des Nodistes part*",
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "moqueur",
        right: "vava",
        rightMood: "pense",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse18",
      name: "N.O.D.E.",
      text: "Vangva... On te ralentira le plus longtemps possible. Peu importe la raclée qu'on va se prendre...",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;