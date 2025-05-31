import { DialogueLine } from "../types";

const script : DialogueLine[] = [
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
      text: "*une mosaïque d'yeux regarde son sprite*",
      charactersOnScreen: {
        left: "",
      },
    },
    {
      id: "3js2.1",
      name: "",
      text: "*son téléphone sonne*",
      charactersOnScreen: {
        left: "vava",
        leftMood: "alerte_tel",
      },
    },
    {
      id: "3js3",
      name: "Vangva",
      text: "Syel, c'est toi ? Tu vas bien ? Où es-tu ? *l'image se pause quelques secondes, on entend la voix de Syel qui répond en giberish*",
      textPosition: 'left',
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
      text: "Ça marche. J'arrive bientôt, juste le temps de vérifier quelque chose... Quoi qu'il arrive, ne te montre surtout pas, d'accord ? *même courte pause*",
      textPosition: 'left', // Vangva is on the left
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
      textPosition: 'left', // Vangva is on the left
      charactersOnScreen: {
        left: "vava",
        leftMood: "regard_froid",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "3js10",
      name: "",
      text: "",
      unpauseGame: true,
      charactersOnScreen: {
        left: "",
      },
    },
];

export default script;