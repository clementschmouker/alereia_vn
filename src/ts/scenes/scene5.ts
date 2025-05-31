import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "bar", // Unique ID for this line
        name: "Ilyem",
        text: "Vous êtes vraiment impressionnants... La vitesse à laquelle vous les avez retrouvés est effrayante !",
        background: 'bar',
        voice: "high",
        charactersOnScreen: {
          left: "serveuse",
          leftMood: "satisfaite_cig",
          right: "ilyem",
          rightMood: "surprise_cig",
          leftFlip: false,
          rightFlip: false,
          abruptFlip: true,
        },
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 1500,
        },
        textPosition: 'right', // Ilyem is on the right
    },
    {
      id: "bar1",
      name: "N.O.D.E.",
      voice: "medium",
      text: "Le Virus est vraiment un don exceptionnel. Et toi, pourquoi tu nous aides ? Tu n'as pas l'air infectée. Tu penses peut-être nous rejoindre ?",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire_cig",
        right: "ilyem",
        rightMood: "fuyant_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bar2",
      name: "Ilyem",
      voice: "high",
      text: "Je ne sais pas. J'avoue avoir un peu peur de passer le cap... de ne plus être réellement moi-même. Je préfère vous aider en restant libre de mes pensées et de mes choix.",
      textPosition: 'right', // Ilyem is on the right
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre_cig",
        right: "ilyem",
        rightMood: "fuyant_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bar3",
      name: "N.O.D.E.",
      voice: "medium",
      text: "Je vois. C'est très dommage... La perte de liberté est un petit sacrifice face au potentiel que nous offre N.O.D.E.. Grâce à lui, la paix dans le pays sera bientôt plus qu'une simple utopie.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire_cig",
        right: "ilyem",
        rightMood: "serieux_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bar4",
      name: "Ilyem",
      voice: "high",
      text: "Je n'en doute pas...",
      textPosition: 'right', // Ilyem is on the right
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "sourire_cig",
        right: "ilyem",
        rightMood: "fuyant_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bar5",
      name: "N.O.D.E.",
      voice: "medium",
      text: "De toute façon, quand nous aurons mis la main sur Syel, ce n'est plus une question que tu auras à te poser.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre_cig",
        right: "ilyem",
        rightMood: "serieux_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bar6",
      name: "Ilyem",
      voice: "high",
      text: "...",
      textPosition: 'right', // Ilyem is on the right
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre_cig",
        right: "ilyem",
        rightMood: "serieux_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bar7",
      name: "Ilyem",
      voice: "high",
      text: "Qu'est-ce que vous allez faire d'eux ? De Syel et de Vangva ?",
      textPosition: 'right', // Ilyem is on the right
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre_cig",
        right: "ilyem",
        rightMood: "serieux_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "cinematiquefuite",
      name: "N.O.D.E.",
      voice: "medium",
      text: "Syel nous aidera à atteindre la Paix que nous recherchons tous.",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'noir',
      isNotOverUi: true,
    },
    {
      id: "cinematiquefuite1",
      name: "N.O.D.E.",
      voice: "medium",
      text: "Quant à Vangva, il est le plus grand frein à nos plans. L'idéal serait d'en faire l'un des nôtres pour profiter de sa force... sinon, nous n'aurons pas d'autre choix que de l'éliminer.",
      background: 'impasse',
      isNotOverUi: true,
      charactersOnScreen: {
        left: "mechants",
        leftMood: "menace",
        right: "vava",
        rightMood: "arrogant",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;