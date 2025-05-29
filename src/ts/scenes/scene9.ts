import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "supercherie", // Unique ID for this line
        name: "",
        text: "*cinematique, Ira court dans les rues. Soudain il est encerclé*",
        background: 'noir',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        charactersOnScreen: {
        left: "",
        right: "",
        middle: "",
      },
    },
    {
      id: "supercherie1",
      name: "N.O.D.E.",
      text: "On te tient ! Frères et soeurs, mobilisez-vous, ce n'est plus le moment de se cacher ! Notre priorité est de l'emmener en lieu sûr !",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        leftFlip: false,
        middle: "ira",
        middleMood: "stresse",
        middleFlip: false,
      },
    },
    {
      id: "supercherie1.1",
      name: "",
      text: "*Un Nodiste immobilise Ira*",
      background: 'noir',
      charactersOnScreen: {
        left: "",
        right: "",
        middle: "",
      },
    },
    {
      id: "supercherie2",
      name: "N.O.D.E.",
      text: "Ne t'en fais pas, Syel ! Bientôt, tu...",
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        leftFlip: false,
        middle: "ira",
        middleMood: "secache",
        middleFlip: false,
      },
    },
    {
      id: "supercherie2.0",
      name: "N.O.D.E.",
      text: "... Quoi ?!",
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "secache_panique",
        middleFlip: false,
      },
    },
    {
        id: "supercherie2.1",
        name: "",
        text: "*cinématique, on soulève la casquette d'Ira, on voit enfin son visage*",
        background: 'noir',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        charactersOnScreen: {
        left: "",
        right: "",
        middle: "",
      },
    },
    {
      id: "supercherie3",
      name: "N.O.D.E.",
      text: "Tes yeux... ils ne sont pas bleus ! Mais tu n'es pas...",
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "embete_before",
        middleFlip: false,
      },
    },
    {
      id: "supercherie3.5",
      name: "N.O.D.E.",
      text: "T'es le frère jumeau ?!",
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "embete_before",
        middleFlip: false,
      },
    },
    {
      id: "supercherie4",
      name: "Ira",
      text: "Si tu voyais ta tête, mec...",
      textPosition: 'center', // Ira is in the middle
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "moqueur",
        middleFlip: false,
      },
    },
];

export default script;