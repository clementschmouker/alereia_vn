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
      background: 'gare',
      smartphone: true,
      smartphoneMessages: [
        {
          id: "passtMessage1",
          name: "@StrangerFromTheSky",
          content: "Salut ! Je suis de retour !",
          date: "Hier à 22h21",
          avatar: "/src/images/avatars/stranger.jpg",
          sender: false,
        },
        {
          id: "passtMessage2",
          name: "@StrangerFromTheSky",
          content: "Oh Vangva ! C'est cool, merci !",
          date: "Hier à 22h21",
          avatar: "/src/images/avatars/stranger.jpg",
          sender: false,
        },
        {
          id: "passtMessage3",
          name: "@nuit_rouge",
          content: "Uh",
          date: "Hier à 22h21",
          avatar: "/src/images/avatars/night.jpg",
          sender: false,
        },
        {
          id: "passtMessage4",
          name: "@nuit_rouge",
          content: "Ça me tue de dire ça, mais merci mec",
          avatar: "/src/images/avatars/night.jpg",
          date: "Hier à 22h21",
          sender: false,
        },
        {
          id: "passtMessage5",
          name: "@freal",
          avatar: "/src/images/avatars/freal.png",
          content: "Ho ho ho, on dirait qu'on a trouvé une solution",
          date: "Hier à 22h22",
          sender: false,
        },
        {
          id: "passtMessage6",
          name: "@Lilas2306",
          avatar: "/src/images/avatars/lilas.jpg",
          content: "Ouah ! Merci Va ! Je savais qu'on pouvait toujours compter sur toi !",
          date: "Hier à 22h24",
          sender: false,
        },
        {
          id: "passtMessage7",
          name: "@Moi",
          content: "Dites, vous n'en feriez pas un peu trop... ?",
          date: "Hier à 22h24",
          reaction: "laugh",
          sender: true,
        },
        {
          id: "passtMessage8",
          name: "@Lilas2306",
          avatar: "/src/images/avatars/lilas.jpg",
          content: "Que tout aille bien pour vous aujourd'hui, les gars ! Et soyez prudents... Surtout toi, Va. Même toi tu as tes limites...",
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
        {
            id: 'positif',
            messages: [
                {
                    id: "positif1",
                    name: "@nuit_rouge",
                    avatar: "/src/images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Y a intérêt. J'sais pas pourquoi, mais ça me rassure pas cette histoire",
                  },
                  {
                    id: "positif2",
                    name: "@freal",
                    avatar: "/src/images/avatars/freal.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Tu devrais apprendre à avoir plus foi en tes compagnons, jeune homme !",
                  },
                  {
                    id: "positif3",
                    name: "@nuit_rouge",
                    avatar: "/src/images/avatars/night.jpg",
                    sender: false,
                    date: "Aujourd'hui à 14h01",
                    content: "Eh ho c'est bon, j't'ai pas sonné toi",
                  },
            ],
            nextLineId: "gare3"
        },
        {
            id: 'negatif',
            messages: [
                {
                    id: "negatif1",
                    name: "@nuit_rouge",
                    avatar: "/src/images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Il t'a fallu 4h avant de répondre juste pour être désagréable ? Sérieusement",
                  },
                  {
                    id: "negatif2",
                    name: "@freal",
                    avatar: "/src/images/avatars/freal.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Allons, allons. Il vaut mieux qu'il soit sûr de lui dans des moments pareils ! Vas-y gamin, montre-leur ;)) ",
                  },
                  {
                    id: "negatif3",
                    date: "Aujourd'hui à 14h02",
                    avatar: "/src/images/avatars/night.jpg",
                    sender: false,
                    name: "@nuit_rouge",
                    content: "Pffff",
                  },
            ],
            nextLineId: "gare3"
        },
        {
            id: 'inquiet',
            messages: [
                {
                    id: "inquiet1",
                    name: "@nuit_rouge",
                    avatar: "/src/images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "C'bon, décoince-toi un peu. Il est avec moi",
                  },
                  {
                    id: "inquiet2",
                    name: "@freal",
                    avatar: "/src/images/avatars/freal.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Sorry Va, il semblerait que la communication soit mal passée.",
                  },
            ],
            nextLineId: "gare3"
        }
        
      ]
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