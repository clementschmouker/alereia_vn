import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
      id: "gare", // Unique ID for this line
      text: "Brissa, Ville du Vent",
      background: 'vue',
      music: 'audio/scene2.mp3',
      loopMusic: true,
      charactersOnScreen: {
        left: "",
        right: "",
      },
    },
    {
      id: "gare00",
      name: "Vangva",
      text: "<i>...</i>",
      textPosition: 'center', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        middle: "vava",
        middleMood: "pense",
        middleFlip: true,
      },
    },
    {
      id: "gare01",
      name: "Vangva",
      text: "<i>Brissa...</i>",
      textPosition: 'center', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        middle: "vava",
        middleMood: "pense",
        middleFlip: true,
      },
    },
    {
      id: "gare0",
      name: "Vangva",
      text: "<i>Décidément, ça me fera toujours quelque chose de rentrer. Un quelque chose coincé entre la nostalgie et le malaise...</i>",
      textPosition: 'center', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        middle: "vava",
        middleMood: "pense",
        middleFlip: true,
      },
    },
    {
      id: "gare1",
      name: "Vangva",
      text: "...",
      textPosition: 'center', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        middle: "vava",
        middleMood: "pense_tel",
        middleFlip: true,
      },
    },
    {
      id: "gare1.1",
      name: "Vangva",
      text: "<i>Bon. Il n'y a plus qu'à attendre.</i>",
      textPosition: 'center', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        middle: "vava",
        middleMood: "pense",
        middleFlip: false,
      },
    },
    {
      id: "gare2",
      name: "Vangva",
      text: "<i>J'espère qu'il va bientôt me répondre...</i>",
      textPosition: 'center', // Vangva is on the left
      background: 'gare',
      charactersOnScreen: {
        middle: "vava",
        middleMood: "pense_tel",
      },
    },
    {
      id: "interlude",
      background: 'gare',
      text: "Un message attend une réponse depuis plusieurs heures... Que voulez-vous répondre à Lilas2306 ?",
      smartphone: true,
      smartphoneMessages: [
        {
          id: "passtMessage1",
          name: "@StrangerFromTheSky",
          content: "Alors ! Qu'est-ce que j'ai raté ?",
          date: "Hier à 22h21",
          avatar: "images/avatars/stranger.jpg",
          sender: false,
        },
        {
          id: "passtMessage2",
          name: "@StrangerFromTheSky",
          content: "... Oh mais Vangva ! C'est cool, merci !",
          date: "Hier à 22h21",
          avatar: "images/avatars/stranger.jpg",
          sender: false,
        },
        {
          id: "passtMessage3",
          name: "@nuit_rouge",
          content: "Uh",
          date: "Hier à 22h21",
          avatar: "images/avatars/night.jpg",
          sender: false,
        },
        {
          id: "passtMessage4",
          name: "@nuit_rouge",
          content: "Ça me tue de dire ça, mais merci mec",
          avatar: "images/avatars/night.jpg",
          date: "Hier à 22h21",
          sender: false,
        },
        {
          id: "passtMessage5",
          name: "@freal",
          avatar: "images/avatars/freal.png",
          content: "Ho ho ho, on dirait qu'on a trouvé une solution",
          date: "Hier à 22h22",
          sender: false,
        },
        {
          id: "passtMessage6",
          name: "@Lilas2306",
          avatar: "images/avatars/lilas.jpg",
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
          avatar: "images/avatars/lilas.jpg",
          content: "Jamais <3",
          date: "Hier à 22h25",
          sender: false,
        },
        {
          id: "passtMessage8",
          name: "@Lilas2306",
          avatar: "images/avatars/lilas.jpg",
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
                    avatar: "images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "y a intérêt. j'sais pas pourquoi, mais ça me rassure pas cette histoire",
                  },
                  {
                    id: "positif2",
                    name: "@freal",
                    avatar: "images/avatars/freal.png",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Tu devrais apprendre à avoir plus foi en tes compagnons, jeune homme !",
                  },
                  {
                    id: "positif3",
                    name: "@nuit_rouge",
                    avatar: "images/avatars/night.jpg",
                    sender: false,
                    date: "Aujourd'hui à 14h01",
                    content: "eh ho c'est bon, j't'ai pas sonné toi",
                  },
                  {
                    id: "positif4",
                    name: "@freal",
                    avatar: "images/avatars/freal.png",
                    date: "Aujourd'hui à 14h02",
                    sender: false,
                    content: "... et le respect de tes aînés, dans tout ça ?",
                  },
                  {
                    id: "positif5",
                    name: "@nuit_rouge",
                    avatar: "images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h02",
                    sender: false,
                    content: "mec. c'est juste pas le moment de faire de l'humour à deux balles",
                  },
                  {
                    id: "positif6",
                    name: "@freal",
                    avatar: "images/avatars/freal.png",
                    date: "Aujourd'hui à 14h02",
                    sender: false,
                    content: "Bref. On sait tous que notre Va est un champion. :)",
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
                    avatar: "images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "il t'a fallu 4h pour lui répondre et juste être désagréable ? sérieusement",
                  },
                  {
                    id: "negatif2",
                    name: "@freal",
                    avatar: "images/avatars/freal.png",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Allons, allons. Il vaut mieux qu'il soit sûr de lui dans des moments pareils ! Vas-y gamin, montre-leur ;)) ",
                  },
                  {
                    id: "negatif3",
                    date: "Aujourd'hui à 14h02",
                    avatar: "images/avatars/night.jpg",
                    sender: false,
                    name: "@nuit_rouge",
                    content: "pffff. je ne sais pas pourquoi vous continuez toujours de le défendre.",
                  },
                  {
                    id: "negatif4",
                    name: "@freal",
                    avatar: "images/avatars/freal.png",
                    date: "Aujourd'hui à 14h02",
                    sender: false,
                    content: "Monsieur serait-il jaloux ? :3 ",
                  },
                  {
                    id: "negatif5",
                    date: "Aujourd'hui à 14h02",
                    avatar: "images/avatars/night.jpg",
                    sender: false,
                    name: "@nuit_rouge",
                    content: "quoi?????",
                  },
                  {
                    id: "negatif6",
                    date: "Aujourd'hui à 14h02",
                    avatar: "images/avatars/night.jpg",
                    sender: false,
                    name: "@nuit_rouge",
                    content: "mais n'importe quoi !! vous savez quoi ça me saoule j'me casse",
                  },
                  {
                    id: "negatif7",
                    name: "@freal",
                    avatar: "images/avatars/freal.png",
                    date: "Aujourd'hui à 14h02",
                    sender: false,
                    content: ":o",
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
                    avatar: "images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "c'bon, décoince-toi un peu. il est avec moi",
                  },
                  {
                    id: "inquiet2",
                    name: "@freal",
                    avatar: "images/avatars/freal.png",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Sorry Va, il semblerait que la communication soit mal passée.",
                  },
                {
                    id: "inquiet3",
                    name: "@nuit_rouge",
                    avatar: "images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "il me dit de te dire que",
                  },
                {
                    id: "inquiet4",
                    name: "@nuit_rouge",
                    avatar: "images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "nan oublie. j'ai pas envie d'écrire ça",
                  },
                {
                    id: "inquiet5",
                    name: "@StrangerFromTheSky",
                    avatar: "images/avatars/stranger.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "Pfff bon je l'écris moi-même alors ! T'es un champion Va, tu vas tout défoncer ! :D",
                  },
                {
                    id: "inquiet6",
                    name: "@nuit_rouge",
                    avatar: "images/avatars/night.jpg",
                    date: "Aujourd'hui à 14h01",
                    sender: false,
                    content: "bref. on gère. on se voit tout à l'heure.",
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
      //isOverUi: true,
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "neutre_cig",
        right: "ilyem",
        rightMood: "serieux_cig",
        leftFlip: false,
        rightFlip: false
      },
      music: 'audio/scene3.mp3',
      loopMusic: true,
      startGame: true,
      pauseGame: true,
    },
    {
      id: "gare4",
      name: "N.O.D.E.",
      text: "Je vois. Ça me semble crédible.",
      textPosition: 'left', 
      //isOverUi: true,
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
      id: "gare5",
      name: "Ilyem",
      text: "Ils ont voyagé en train, séparément pour ne pas être aperçus. Je pense, à l'heure qu'il est, que Vangva doit se trouver quelque part dans le quartier de la gare.",
      textPosition: 'right', 
      //isOverUi: true,
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
      id: "gare6",
      name: "N.O.D.E.",
      text: "*elle rigole*",
      textPosition: 'left', 
      //isOverUi: true,
      background: 'bar',
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
      textPosition: 'left', 
      //isOverUi: true,
      background: 'bar',
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