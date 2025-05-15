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
    },
    {
      id: "interlude2",
      name: "@StrangerFromTheSky - Hier à 22h21",
      text: "Oh Vangva ! C'est cool, merci !",
      background: 'gare',
    },
    {
      id: "interlude3",
      name: "@nuit_rouge - Hier à 22h21",
      text: "Uh",
      background: 'gare',
    },
    {
      id: "interlude4",
      name: "@nuit_rouge - Hier à 22h21",
      text: "Ça me tue de dire ça, mais merci mec",
      background: 'gare',
    },
    {
      id: "interlude5",
      name: "@freal - Hier à 22h22",
      text: "Ho ho ho, on dirait qu'on a trouvé une solution",
      background: 'gare',
    },
    {
      id: "interlude6",
      name: "@Lilas2306 - Hier à 22h24",
      text: "Ouah ! Merci Va ! Je savais qu'on pouvait toujours compter sur toi !",
      background: 'gare',
    },
    {
      id: "interlude7",
      name: "@Vava01 - Hier à 22h24",
      text: "Dites, vous n'en feriez pas un peu trop... ? *emoji rire de la part d'Ilyem en dessous*",
      background: 'gare',
    },
    {
      id: "interlude8",
      name: "@Lilas2306 - Aujourd'hui à 09h54",
      text: "Que tout aille bien pour vous aujourd'hui, les gars ! Et soyez prudents... Surtout toi, Va. Tu as beau être un soldat entraîné, tu ne sais pas ce qui t'attend là-bas... *liké par 2 personnes*",
      background: 'gare',
    },
    {
      id: "interlude9",
      name: "@Vava01 - Aujourd'hui à 14h01",
      text: "> Écrire une réponse <",
      background: 'gare',
    },
    {
      id: "smartphone", 
      name: "@Vava01",
      text: "Que répondre à Lilas2306 ?",
    background: 'gare',
      choices: [
        { text: "Je gère :)", nextLineId: "positif" },
        { text: "On sait tous très bien que je ne risque rien... Tu t'en fais trop pour moi, comme toujours.", nextLineId: "negatif" },
        { text : "Ce n'est pas pour moi qu'il faut s'inquiéter. C'est plutôt pour @StrangerFromTheSky qui ne donne pas de signe de vie depuis hier soir...", nextLineId: "inquiet" }
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