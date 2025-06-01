import { DialogueLine } from "../types";

const script : DialogueLine[] = [
    {
        id: "impasse", // Unique ID for this line
        name: "Vangva",
        text: "Une impasse...",
        style: 'thinking',
        textPosition: 'right',
        voice: "medium",
        background: 'impasse',
        stopGame: true,
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
      voice: "low",
      sound: "audio/bruitages/rire_mechant.mp3",
      text: "Tiens... T'es pas né à Brissa, toi ? C'est quand même malheureux de connaître aussi mal sa propre ville.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'impasse',
      style: 'speech',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "moqueur",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false,
        abruptFlip: true
      },
    },
    {
      id: "impasse1",
      name: "Vangva",
      voice: "medium",
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
      voice: "low",
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
      voice: "low",
      text: "On a entendu ta conversation au téléphone, on sait que tu t'apprêtes à le retrouver... tu le sais, qu'on a des yeux et des oreilles partout. ",
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
      voice: "low",
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
      voice: "medium",
      text: "Vous pensez vraiment me faire peur ? Je dois vous rappeler que je suis un soldat d'élite ? Alors que vous, ça a l'air d'être la première fois que vous menacez quelqu'un avec une arme.",
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
      voice: "low",
      text: "C'est vrai, t'es plus fort que nous.",
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
      voice: "low",
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
      voice: "low",
      text: "Alors ouais, fais le fier ! Mais peu importe tes pouvoirs, il restera toujours au moins l'un d'entre nous debout pour t'arrêter... Ah ah...",
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
      voice: "medium",
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
      voice: "low",
      text: "Tu sais, si tu nous disais juste où se trouve Syel... Ce serait plus facile...",
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
      voice: "medium",
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
      voice: "medium",
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
      voice: "medium",
      text: "... ?",
      sound: "audio/bruitages/gaspIra.mp3",
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
      voice: "low",
      textPosition: 'center', // ??? is in the middle
      background: 'impasse3',
      charactersOnScreen: {
        left: "",
        right: "",
        middle: "ira",
        middleMood: "stresse",
        middleFlip: true,
        abruptFlip: true
      },
    },
    {
      id: "impasse13",
      name: "Vangva",
      text: "Syel !",
      voice: "medium",
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
      id: "impasse14",
      name: "Vangva",
      voice: "medium",
      text: "Idiot ! Je t'avais dit de rester caché !! Va-t'en !!",
      textPosition: 'right', // Vangva is on the right
      background: 'impasse',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "moqueur",
        right: "vava",
        rightMood: "panique",
        leftFlip: false,
        rightFlip: true
      },
    },
    {
      id: "impasse15.0",
      name: "Syel",
      voice: "low",
      text: "Ah...",
      textPosition: 'center',
      style: "speech",
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
      id: "impasse15",
      name: "",
      text: "",
      background: 'impasse3',
      charactersOnScreen: {
        left: "",
        right: "",
        middle: "ira",
        middleMood: "secache_panique",
        middleFlip: false,
        middleLeave: true
      },
    },
    {
      id: "impasse16",
      name: "N.O.D.E.",
      voice: "low",
      text: "Une chance pareille, c'est inespéré ! Suivez-le !! Ne le laissez pas s'échapper !!",
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
      id: "impasse18",
      voice: "low",
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