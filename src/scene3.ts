import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "3js", // Unique ID for this line
        name: "",
        text: "*on arrive dans l'environnement Three.js, la caméra zoom légèrement sur Vangva pour donner un affichage jeu vidéo*",
        background: 'gare2',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
    },
    {
      id: "3js1",
      name: "Vangva",
      text: "Mmh...",
      background: 'gare2',
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
      background: 'gare2',
    },
    {
      id: "3js3",
      name: "Vangva",
      text: "Syel, c'est toi ? Tu vas bien ? Où es-tu ? *l'image se pause quelques secondes, on entend la voix de Syel qui répond en giberish*",
      background: 'gare2',
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
      background: 'gare2',
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
      background: 'gare2',
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
      background: 'gare2',
    },
    {
      id: "3js7",
      name: "Vangva",
      text: "Je ferais mieux de ne pas rester ici.",
      background: 'gare2',
      charactersOnScreen: {
        left: "vava",
        leftMood: "embete",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "3js8",
      name: "",
      text: "*ici, on prend le contrôle de Vangva et on marche vers la droite jusqu'à une nouvelle mosaïque d'yeux qui devient vraiment très envahissante*",
      background: 'gare2',
    },
    {
      id: "3js9",
      name: "Vangva",
      text: "Les voilà...",
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
      text: "*une pose où il range ses écouteurs. Puis course poursuite dans Three.js*",
      background: 'gare2',
    },
];

export default script;