import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "supercherie", // Unique ID for this line
        name: "",
        text: "*Ira court dans les rues. Soudain il est encerclé*",
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
      voice: "low",
      text: "On te tient ! Frères et soeurs, ce n'est plus le moment de se cacher ! Notre priorité est de l'emmener en lieu sûr !",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        leftFlip: false,
        right: "ira",
        rightMood: "stresse",
        rightFlip: true,
        abruptFlip: true
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
      voice: "low",
      textPosition: 'left',
      style: 'speech',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        leftFlip: false,
        middle: "ira",
        middleMood: "secache",
        middleFlip: false,
        abruptFlip: true
      },
    },
    {
      id: "supercherie2.0",
      name: "N.O.D.E.",
      voice: "low",
      text: "... Quoi ?!",
      background: 'rues',
      textPosition: 'left',
      style: 'speech',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "secache_panique",
        middleFlip: true,
      },
    },
    {
        id: "supercherie2.1",
        name: "",
        text: "*On soulève la casquette d'Ira, on voit enfin son visage*",
        background: 'noir',
        charactersOnScreen: {
        left: "",
        right: "",
        middle: "",
      },
    },
    {
      id: "supercherie3",
      name: "N.O.D.E.",
      voice: "low",
      text: "Tes yeux... ils ne sont pas bleus ! Mais tu n'es pas...",
      background: 'rues',
      textPosition: 'left',
      style: 'speech',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "embete_before",
        middleFlip: true,
      },
    },
    {
      id: "supercherie3.5",
      name: "N.O.D.E.",
      voice: "low",
      text: "T'es le frère jumeau ?!",
      textPosition: 'left',
      style: 'speech',
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "embete_before",
        middleFlip: true,
      },
    },
    {
      id: "supercherie4",
      name: "Ira",
      voice: "low",
      text: "Si tu voyais ta tête, mec...",
      style: 'speech',
      textPosition: 'center', // Ira is in the middle
      background: 'rues',
      charactersOnScreen: {
        left: "mechants",
        leftMood: "peur",
        leftFlip: false,
        middle: "ira",
        middleMood: "moqueur",
        middleFlip: true,
      },
    },
];

export default script;