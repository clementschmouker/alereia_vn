import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "impasse", // Unique ID for this line
        name: "",
        text: "*cinématique qui montre l'impasse, le mur sans issue et l'escalier. Va se tourne vers ses assaillants*",
        background: 'impasse',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
    },
    {
      id: "impasse0",
      name: "NODE",
      text: "Tiens... Tu n'es pas né à Brissa, toi ? C'est quand même malheureux de connaître aussi mal sa propre ville.",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire",
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
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse2",
      name: "NODE",
      text: "Peu importe. Tu sais ce qu'on cherche, Vangva. Ou plutôt, <i>qui</i> on cherche. On a entendu ta conversation au téléphone, on sait que tu t'apprêtes à le retrouver... rappelle-toi, on a des yeux et des oreilles partout. Il te suffit juste de nous dire où il se trouve et on te laissera partir indemne.",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre",
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
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "vava",
        rightMood: "arrogant",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse4",
      name: "NODE",
      text: "C'est vrai, tu es plus fort que nous.",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse5",
      name: "NODE",
      text: "Mais nous, on est plus nombreux. Et surtout capables d'appeler du renfort sans même avoir besoin d'ouvrir la bouche.",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse6",
      name: "NODE",
      text: "Alors oui, tu peux faire le fier ! Mais peu importe tes pouvoirs, il restera toujours au moins l'un d'entre nous debout pour t'arrêter...",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre",
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
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse8",
      name: "NODE",
      text: "Tu sais, si tu nous disais juste où se trouve Syel...",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre",
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
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
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
      id: "impasse11",
      name: "",
      text: "*La caméra change de décor. On voit Syel à l'entrée de l'impasse.*",
      background: 'impasse3',
    },
    {
      id: "impasse12",
      name: "???",
      text: "Vangva !!",
      background: 'impasse3',
      charactersOnScreen: {
        left: "syel",
        leftMood: "etonne",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse13",
      name: "Vangva",
      text: "Syel !",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "peur",
        right: "vava",
        rightMood: "choque",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "impasse14",
      name: "Vangva",
      text: "Idiot ! Je t'avais dit de rester caché !! Va-t'en !!",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "satisfaite",
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
    },
    {
      id: "impasse16",
      name: "NODE",
      text: "Suivez-le !! Ne le laissez pas s'échapper !!",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "peur",
        right: "vava",
        rightMood: "panique",
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
        left: "serveuse",
        leftMood: "satisfaite",
        right: "vava",
        rightMood: "pense",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "impasse18",
      name: "NODE",
      text: "Vangva... On te ralentira le plus longtemps possible. Peu importe la raclée qu'on va se prendre...",
      background: 'impasse',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "vava",
        rightMood: "regard_froid",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;