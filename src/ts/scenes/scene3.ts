import { DialogueLine } from "../types";

const script : DialogueLine[] = [
      {
      id: "3js",
      name: "",
      text: "",
      charactersOnScreen: {
        left: ""
      },
    },  
  {
      id: "3js1",
      name: "Vangva",
      text: "<i>Mmh...</i>",
      style: 'thinking',
      voice: "medium",
      textPosition: 'left',
      charactersOnScreen: {
        left: "vava",
        leftMood: "alerte_tel",
        leftFlip: true,
        abruptFlip: true,
      },
    },
    {
      id: "3js2",
      name: "",
      overlay: ['images/yeux1.webp', 'images/yeux2.webp', 'images/yeux3.webp'],
      nextLineId: '3js2.1',
      pauseGame: true,
      charactersOnScreen: {
        left: "",
      },
    },
    {
      id: "3js2.1",
      sound: "audio/bruitages/phone.mp3",
      charactersOnScreen: {
        left: "vava",
        leftMood: "alerte_tel",
        leftFlip: true,
      },
    },
    {
      id: "3js3",
      name: "Vangva",
      text: "Syel, c'est toi ? Tu vas bien ? Où es-tu ?",
      textPosition: 'left',
      voice: "medium",
      charactersOnScreen: {
        left: "vava",
        leftMood: "au_tel_ouvert",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "3js3.2",
      sound: "audio/bruitages/gibberish1.mp3",
      voice: "medium",
      charactersOnScreen: {
        left: "vava",
        leftMood: "au_tel_ouvert",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "3js4",
      name: "Vangva",
      text: "Ça marche. J'arrive bientôt, juste le temps de vérifier quelque chose... Quoi qu'il arrive, ne te montre surtout pas, d'accord ?",
      textPosition: 'left', // Vangva is on the left
      voice: "medium",
      charactersOnScreen: {
        left: "vava",
        leftMood: "au_tel_ferme",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "3js4.7",
      voice: "medium",
      sound: "audio/bruitages/gibberish2.mp3",
      charactersOnScreen: {
        left: "vava",
        leftMood: "au_tel_ferme",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "3js5",
      name: "Vangva",
      text: "Parfait. Sois prudent... À tout de suite.",
      textPosition: 'left', // Vangva is on the left
      voice: "medium",
      charactersOnScreen: {
        left: "vava",
        leftMood: "au_tel_ouvert",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "3js6",
      overlay: ['images/yeux1.webp', 'images/yeux2.webp', 'images/yeux3.webp'],
    },
    {
      id: "3js7",
      name: "Vangva",
      text: "<i>Je ferais mieux de ne pas rester ici.</i>",
      voice: "medium",
      textPosition: 'left', // Vangva is on the left
      charactersOnScreen: {
        left: "vava",
        leftMood: "embete",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "gare8",
      unpauseGame: true,
      noNextLine: true,
      textPosition: 'none',
      charactersOnScreen: {
          left: "",
          right: "",
        },
    },
    {
      id: "3js9",
      overlay: ['images/yeux1.webp', 'images/yeux2.webp', 'images/yeux3.webp'],
      nextLineId: '3js9.5',
      pauseGame: true,
    },
    {
      id: "3js9.5",
      name: "Vangva",
      text: "<i>Ils sont derrière moi...</i>",
      voice: "medium",
      textPosition: 'left', // Vangva is on the left
      charactersOnScreen: {
        left: "vava",
        leftMood: "regard_froid",
        leftFlip: true,
        rightFlip: false,
        abruptFlip: true
      },
    },
    {
      id: "3js10",
      unpauseGame: true,
      noNextLine: true,
      charactersOnScreen: {
        left: "",
      },
    },
];

export default script;