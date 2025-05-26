import { DialogueLine, FadeTransitionType } from "./types";
import { game } from './main';

const script : DialogueLine[] = [
    {
      id: "3js1",
      name: "Vangva",
      text: "<i>Mmh...</i>",
      textPosition: 'left',
      charactersOnScreen: {
        left: "vava",
        leftMood: "alerte_tel",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "3js2",
      name: "",
      text: "*une mosaïque d'yeux regarde son sprite*",
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
      name: "",
      text: "*la mosaïque d'yeux réapparait*",
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
      textPosition: 'none',
      charactersOnScreen: {
          left: "",
          right: "",
        },
    },
    {
      id: 'pas-par-la',
      name: "Vangva",
      text: "<i>Ce n'est pas par là que je dois aller....</i>",
      charactersOnScreen: {
        left: "vava",
        leftMood: "alerte_tel",
      },
      textPosition: 'left',
    },
    {
      id: 'restart-game',
      charactersOnScreen: {
        left: '',
      },
      unpauseGame: true,
      nextLineId: 'pas-par-la',
    },
    {
      id: "3js9",
      name: "Vangva",
      text: "<i>Les voilà...</i>",
      textPosition: 'left', // Vangva is on the left
      background: 'gare2',
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
      text: "*Course poursuite dans Three.js*",
      background: 'gare2',
      unpauseGame: true,
    },
];

export default script;