import { DialogueLine, /*FadeTransitionType*/ } from "../types";

const script: DialogueLine[] = [
  {
    id: "start", // Unique ID for this line
    text: "",
    backgroundVideo: 'Intro',
    charactersOnScreen: {
      left: "",
      right: "",
      middle: "",
    },
    music: 'audio/scene1.mp3',
    loopMusic: true,
  },
  {
    id: "start0", // Unique ID for this line
    name: "Ilyem",
    text: "Alors, voilà... Je...",
    textPosition: 'right', // Ilyem is on the right
    voice: "high",
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
    id: "start1",
    name: "N.O.D.E.",
    text: "...",
    textPosition: 'left', // N.O.D.E. is on the left
    background: 'bar',
    voice: "medium",
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
    style: 'thinking',
    textPosition: 'right', // Ilyem is on the right
    background: 'bar',
    voice: "high",
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
    textPosition: 'left', // N.O.D.E. is on the left
    background: 'bar',
    voice: "medium",
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
    textPosition: 'left', // N.O.D.E. is on the left
    background: 'bar',
    voice: "medium",
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
    textPosition: 'left', // N.O.D.E. is on the left
    background: 'bar',
    voice: "medium",
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
    textPosition: 'right', // Ilyem is on the right
    background: 'bar',
    voice: "high",
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
    textPosition: 'narrator', // No speaker, narrator position
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
    textPosition: 'right', // Ilyem is on the right
    background: 'bar',
    voice: "high",
    charactersOnScreen: {
      left: "serveuse",
      leftMood: "sourire_cig",
      right: "ilyem",
      rightMood: "serieux_cig",
      leftFlip: false,
      rightFlip: false
    },
  },
];

export default script;