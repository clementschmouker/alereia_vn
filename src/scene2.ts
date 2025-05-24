import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "gare", // Unique ID for this line
        text: "Une vidéo montre la ville de Brissa de l'extérieur",
        background: 'gare',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        music: '/src/audio/scene2.mp3',
    },
    {
      id: "gare0",
      name: "Vangva",
      text: "<i>Décidément, ça me fera toujours quelque chose de rentrer à Brissa. Un quelque chose coincé entre la nostalgie et le malaise…</i>",
      textPosition: 'left', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        left: "vava",
        leftMood: "pense",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "gare1",
      name: "Vangva",
      text: "...",
      textPosition: 'left', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        left: "vava",
        leftMood: "pense_tel",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "gare2",
      name: "Vangva",
      text: "<i>Bon. J'espère qu'il va bientôt me répondre...</i>",
      textPosition: 'left', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        left: "vava",
        leftMood: "pense_tel",
        leftFlip: true,
        rightFlip: false
      },
    },
    {
      id: "interlude",
      name: "",
      text: "Ici se trouve tout le gameplay avec le smartphone. On voit les discussions précédentes.",
      background: 'gare',
    },
    {
      id: "interlude1",
      name: "@StrangerFromTheSky - Hier à 22h21",
      text: "???",
      background: 'gare',
      smartphone: true,
      smartphoneMessages: [
        {
          id: "passtMessage1",
          name: "@StrangerFromTheSky",
          message: "Salut ! Je suis de retour !",
          date: "Hier à 22h21",
          sender: false,
        },
        {
          id: "passtMessage2",
          name: "@StrangerFromTheSky",
          message: "Oh Vangva ! C'est cool, merci !",
          date: "Hier à 22h21",
          sender: false,
        },
        {
          id: "passtMessage3",
          name: "@nuit_rouge",
          message: "Uh",
          date: "Hier à 22h21",
          sender: false,
        },
        {
          id: "passtMessage4",
          name: "@nuit_rouge",
          message: "Ça me tue de dire ça, mais merci mec",
          date: "Hier à 22h21",
          sender: false,
        },
        {
          id: "passtMessage5",
          name: "@freal",
          message: "Ho ho ho, on dirait qu'on a trouvé une solution",
          date: "Hier à 22h22",
          sender: false,
        },
        {
          id: "passtMessage6",
          name: "@Lilas2306",
          message: "Ouah ! Merci Va ! Je savais qu'on pouvait toujours compter sur toi !",
          date: "Hier à 22h24",
          sender: false,
        },
        {
          id: "passtMessage7",
          name: "@Vava01",
          message: "Dites, vous n'en feriez pas un peu trop... ?",
          date: "Hier à 22h24",
          reaction: "laugh",
          sender: true,
        },
        {
          id: "passtMessage8",
          name: "@Lilas2306",
          message: "Que tout aille bien pour vous aujourd'hui, les gars ! Et soyez prudents... Surtout toi, Va. Tu as beau être un soldat entraîné, tu ne sais pas ce qui t'attend là-bas...",
          date: "Aujourd'hui à 09h54",
          reaction: "like",
          reactionNumber: 2,
          sender: false,
        },
      ],
      smartphoneChoices: [
        { text: "Je gère :)", nextLineId: "positif" },
        { text: "On sait tous très bien que je ne risque rien... Tu t'en fais trop pour moi, comme toujours.", nextLineId: "negatif" },
        { text : "Ce n'est pas pour moi qu'il faut s'inquiéter. C'est plutôt pour @StrangerFromTheSky qui ne donne pas de signe de vie depuis hier soir...", nextLineId: "inquiet" }
      ],
      smartphoneResponses: [
        
      ]
    },
    {
      id: "positif",
      name: "@nuit_rouge - Aujourd'hui à 14h01",
      text: "Y a intérêt. J'sais pas pourquoi, mais ça me rassure pas cette histoire",
      background: 'gare',
    },
    {
      id: "positif1",
      name: "@freal - Aujourd'hui à 14h01",
      text: "Tu devrais apprendre à avoir plus foi en tes compagnons, jeune homme !",
      background: 'gare',
    },
    {
      id: "positif2",
      name: "@nuit_rouge - Aujourd'hui à 14h01",
      text: "Eh ho c'est bon, j't'ai pas sonné toi",
      background: 'gare',
      nextLineId: "gare3"
    },
    {
      id: "negatif",
      name: "@nuit_rouge - Aujourd'hui à 14h01",
      text: "Il t'a fallu 4h avant de répondre juste pour être désagréable ? Sérieusement",
      background: 'gare',
    },
    {
      id: "negatif1",
      name: "@freal - Aujourd'hui à 14h01",
      text: "Allons, allons. Il vaut mieux qu'il soit sûr de lui dans des moments pareils ! Vas-y gamin, montre-leur ;)) ",
      background: 'gare',
    },
    {
      id: "negatif2",
      name: "@nuit_rouge - Aujourd'hui à 14h02",
      text: "Pffff",
      background: 'gare',
      nextLineId: "gare3"
    },
    {
      id: "inquiet",
      name: "@nuit_rouge - Aujourd'hui à 14h01",
      text: "C'bon, décoince-toi un peu. Il est avec moi",
      background: 'gare',
    },
    {
      id: "inquiet1",
      name: "@freal - Aujourd'hui à 14h01",
      text: "Sorry Va, il semblerait que la communication soit mal passée.",
      background: 'gare',
    },
    {
      id: "gare3",
      name: "Ilyem",
      text: "Syel et Vangva, ils sont de retour à Brissa. La ville est grande et ne dort jamais, ils comptent sur la foule pour rester discrets.",
      textPosition: 'right', // Ilyem is on the right
      background: 'gareVava',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre_cig",
        right: "ilyem",
        rightMood: "serieux_cig",
        leftFlip: false,
        rightFlip: false
      },
      music: '/src/audio/scene3.mp3',
    },
    {
      id: "gare4",
      name: "N.O.D.E.",
      text: "Je vois. Ça me semble crédible.",
      background: 'gareVava',
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
      id: "gare5",
      name: "Ilyem",
      text: "Ils ont voyagé en train, séparément pour ne pas être aperçus. Je pense, à l'heure qu'il est, que Vangva doit se trouver quelque part dans le quartier de la gare.",
      background: 'gareVava',
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
      id: "gare6",
      name: "N.O.D.E.",
      text: "*elle rigole*",
      background: 'gareVava',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "satisfaite_cig",
        right: "ilyem",
        rightMood: "surprise_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "gare7",
      name: "N.O.D.E.",
      text: "Merci pour ta collaboration. C'est bon. On l'a déjà repéré.",
      background: 'gareVava',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "satisfaite_cig",
        right: "ilyem",
        rightMood: "surprise_cig",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;