import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "fin", // Unique ID for this line
        name: "",
        text: "*De retour chez les autres. Les Nodistes sont au tapis et des soldats de Prisme sont déjà en train de les embarquer. Syel rejoint Vangva en descendant par l'échelle de l'escalier de secours.*",
        background: 'noir',
        sound: "audio/bruitages/echelle.mp3",
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        charactersOnScreen: {
          left: "",
          right: "",
          middle: ""
      },
        music: 'audio/scene101.mp3',
        loopMusic: true,
    },
    {
      id: "fin1",
      name: "Syel",
      text: "Tu leur a pas fait de cadeau dis donc... Ils ont l'air complètement sonnés.",
      voice: "high",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        left: "syel",
        leftMood: "etonne",
        right: "vava",
        rightMood: "detendu",
        abruptFlip: true
      },
    },
    {
      id: "fin2",
      name: "Vangva",
      voice: "medium",
      text: "Je n'ai fait que me défendre ! Après tout, ils étaient armés de couteaux.",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        left: "syel",
        leftMood: "sourit",
        right: "vava",
        rightMood: "hausse_epaules",
      },
    },
    {
      id: "fin3",
      name: "Syel",
      voice: "high",
      text: "Haha... Je ne peux pas croire une seconde que tu te sois senti menacé.",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        left: "syel",
        leftMood: "sourit",
        right: "vava",
        rightMood: "rigole",
      },
    },
    {
      id: "fin3.1",
      text: "...",
      background: 'impasse2',
      charactersOnScreen: {
        left: "syel",
        leftMood: "attend",
        right: "vava",
        rightMood: "pense",
      },
    },
    {
      id: "fin4",
      name: "Vangva",
      voice: "medium",
      text: "Au fait... Quelque chose ne va pas ? J'ai ressenti beaucoup de colère... quand tu m'as prêté ton énergie.",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        left: "syel",
        leftMood: "bras_fuyant",
        right: "vava",
        rightMood: "embete",
      },
    },
    {
      id: "fin5",
      name: "Syel",
      voice: "high",
      text: "...",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        left: "syel",
        leftMood: "bras_frustre",
        right: "vava",
        rightMood: "pense",
      },
    },
    {
      id: "fin6",
      name: "Syel",
      voice: "high",
      text: "Ce n'est rien...",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        left: "syel",
        leftMood: "bras_fuyant",
        right: "vava",
        rightMood: "pense",
      },
    },
    {
      id: "fin7",
      name: "Vangva",
      voice: "medium",
      text: "Mmh...",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "embete",
        left: "syel",
        leftMood: "attend",
      },
    },
    {
      id: "fin8",
      text: "...",
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "embete",
        left: "syel",
        leftMood: "attend",
      },
    },
    {
      id: "fin9",
      name: "Syel",
      voice: "high",
      text: "C'est juste que... Écoute, je comprends pourquoi on fait tout ça... pourquoi on arrête ces personnes. Ça ne me plait juste pas trop d'utiliser ce genre de stratagème pour les piéger. Et puis...",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "pense",
        left: "syel",
        leftMood: "bras_fuyant",
      },
    },
    {
      id: "fin11",
      sound: "audio/bruitages/phone.mp3",
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "choque",
        left: "syel",
        leftMood: "etonne",
      },
    },
    {
      id: "fin12",
      name: "Vangva",
      voice: "medium",
      text: "C'est Ilyem ! Excuse-moi...",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "pense_tel",
        left: "syel",
        leftMood: "bras_frustre",
      },
    },
    {
      id: "fin13",
      name: "Vangva",
      voice: "medium",
      text: "Ily ! Tout va bien de ton côté ?!",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ouvert",
        left: "syel",
        leftMood: "attend",
        rightFlip: true,
      },
    },
    {
      id: "fin14",
      name: "Ilyem",
      voice: "high",
      text: "Oui, oui, pas de problème pour moi. Ils m'ont laissée partir sans insister.",
      textPosition: 'right', // Ilyem is on the left
      style: "phone",
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ouvert",
        left: "syel",
        leftMood: "attend",
        rightFlip: true,
      },
    },
    {
      id: "fin15",
      name: "Vangva",
      voice: "medium",
      text: "Je suis soulagé. C'est grâce à toi qu'on a pu arrêter autant de monde, mais... De nous tous, c'est toi qui étais la plus exposée. Y aller seule était vraiment risqué, tu sais...",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ferme",
        left: "syel",
        leftMood: "bras_fuyant",
        rightFlip: true,
      },
    },
    {
      id: "fin16",
      name: "Ilyem",
      voice: "high",
      text: "Allons bon ? C'est toi qui t'inquiètes pour moi maintenant ? C'est le monde à l'envers !",
      style: "phone",
      textPosition: 'right', // Ilyem is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ferme",
        left: "syel",
        leftMood: "bras_fuyant",
        rightFlip: true,
      },
    },
    {
      id: "fin17",
      name: "Vangva",
      voice: "medium",
      text: "Ily, je suis sérieux... Je sais quels sont les enjeux pour toi... Mais tu ferais mieux de ne plus prendre autant de risque à l'avenir. Tu as eu les informations que tu recherchais au moins ?",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ouvert",
        left: "syel",
        leftMood: "attend",
        rightFlip: true,
      },
    },
    {
      id: "fin18",
      name: "Ilyem",
      voice: "high",
      text: "... Non. Ils ne savent rien... Ce ne sont pas les Nodistes qui ont ma sœur, Vangva, ou alors ils mentent vraiment très bien sous la menace.",
      textPosition: 'right', // Ilyem is on the left
      style: "phone",
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ouvert",
        left: "syel",
        leftMood: "bras_frustre",
        rightFlip: true,
      },
    },
    {
      id: "fin19",
      name: "Vangva",
      voice: "medium",
      text: "Ah... Je suis désolé.",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ouvert",
        left: "syel",
        leftMood: "bras_fuyant",
        rightFlip: true,
      },
    },
    {
      id: "fin20",
      name: "Ilyem",
      voice: "high",
      text: "On finira bien par retrouver sa trace, hein ? Il faut juste que je parvienne à rester patiente...",
      textPosition: 'right', // Ilyem is on the left
      background: 'impasse2',
      style: "phone",
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ferme",
        left: "syel",
        leftMood: "bras_frustre",
        rightFlip: true,
      },
    },
   {
      id: "fin21",
      name: "Vangva",
      voice: "medium",
      text: "Oui. On y arrivera, j'en suis convaincu. Je te laisse, on en reparle ce soir.",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "au_tel_ouvert",
        left: "syel",
        leftMood: "attend",
        rightFlip: true,
      },
    },
   {
      id: "fin22",
      name: "Vangva",
      voice: "medium",
      text: "Désolé, je t'ai coupé.",
      textPosition: 'right', // Vangva is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "pense",
        left: "syel",
        leftMood: "bras_fuyant",
        rightFlip: false,
      },
    },
   {
      id: "fin23",
      name: "Syel",
      voice: "high",
      text: "Ne t'en fais pas. En gros, ce que je veux dire, c'est que...",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        right: "vava",
        rightMood: "pense",
        left: "syel",
        leftMood: "bras_fuyant",
      },
    },
   {
      id: "fin24",
      name: "Ira",
      voice: "low",
      sound: "audio/bruitages/grumble.mp3",
      text: "Putain... Il m'a pas loupé ce con !",
      textPosition: 'right',
      background: 'impasse2',
      charactersOnScreen: {
        middle: "vava",
        middleMood: "choque",
        left: "syel",
        leftMood: "etonne",
        middleFlip: true,
      },
        music: 'audio/scene102.mp3',
    },
   {
      id: "fin25",
      name: "Ira",
      voice: "low",
      text: "C'est la dernière fois que je joue les appâts ! Je savais bien que ce serait un plan foireux... (en plus je me sens tout nu sans ma barbe...)",
      textPosition: 'right', // Ira is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "rale",
        middle: "vava",
        middleMood: "pense",
        left: "syel",
        leftMood: "bras_fuyant",
        middleFlip: true,
        rightFlip: true,
        abruptFlip: true
      },
    },
   {
      id: "fin26",
      name: "Vangva",
      voice: "medium",
      text: "De quoi tu te plains ? Tu viens de permettre l'arrestation d'une vingtaine de Nodistes qui vont être envoyés en centre de décontamination. Qu'est-ce qu'il te faut de plus ?",
      textPosition: 'center', // Vangva is in the middle
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "embete",
        middle: "vava",
        middleMood: "regard_froid",
        left: "syel",
        leftMood: "bras_frustre",
        middleFlip: true,
        rightFlip: true
      },
    },
   {
      id: "fin27",
      name: "Ira",
      voice: "low",
      text: "C'est facile à dire pour toi, c'est toujours toi qui passes pour le héros !",
      textPosition: 'right', // Ira is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "bras_enerve",
        middle: "vava",
        middleMood: "regard_froid",
        left: "syel",
        leftMood: "bras_frustre",
        middleFlip: true,
        rightFlip: true
      },
    },
   {
      id: "fin28",
      name: "Vangva",
      voice: "medium",
      text: "Tu veux qu'on échange nos rôles la prochaine fois ? Je te laisse gérer une dizaine de personnes armées et hostiles tout seul avec plaisir ! Crois-moi, tu aurais eu plus qu'un simple bleu sur la joue !",
      textPosition: 'center', // Vangva is in the middle
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "bras_perplexe",
        middle: "vava",
        middleMood: "arrogant",
        left: "syel",
        leftMood: "bras_enerve",
        middleFlip: true,
        rightFlip: true
      },
    },
   {
      id: "fin29",
      name: "Ira",
      voice: "low",
      text: "Pft ! Écoute-toi parler, monsieur “je suis un super soldat”. Je te rappelle que tes pouvoirs cheatés, c'est à Syel que tu les dois ! C'est lui qui...",
      textPosition: 'right', // Ira is on the left
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "bras_enerve",
        middle: "vava",
        middleMood: "regard_froid",
        left: "syel",
        leftMood: "bras_enerve",
        middleFlip: true,
        rightFlip: true
      },
    },
   {
      id: "fin30",
      name: "Syel",
      voice: "high",
      text: "Ça suffit !",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "stresse",
        middle: "vava",
        middleMood: "choque",
        left: "syel",
        leftMood: "crie",
        middleFlip: false,
        rightFlip: true
      },
    },
   {
      id: "fin31",
      name: "Syel",
      voice: "high",
      text: "Tous les deux, vous êtes vraiment des abrutis ! Ça vous fait pas plaisir qu'on ait réussi la mission ?? Vous devriez être en train de vous féliciter l'un l'autre plutôt que de vous engueuler encore ! J'en ai assez d'entendre vos histoires !",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "venere",
        middle: "vava",
        middleMood: "embete",
        left: "syel",
        leftMood: "crie",
        middleFlip: false,
        rightFlip: true,
      },
    },
    {
      id: "fin31.5",
      name: "Syel",
      voice: "high",
      text: "Franchement, vous me gonflez !",
      textPosition: 'left', // Syel is on the right
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "venere",
        middle: "vava",
        middleMood: "embete",
        left: "syel",
        leftMood: "bras_enerve",
        middleFlip: false,
        rightFlip: true,
        leftFlip: true,
      },
    },
    {
      id: "fin31.8",
      text: "",
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "venere",
        middle: "vava",
        middleMood: "embete",
        left: "syel",
        leftMood: "bras_enerve",
        middleFlip: false,
        rightFlip: true,
        leftFlip: true,
        leftLeave: true
      },
    },
   {
      id: "fin33",
      name: "Ira",
      voice: "low",
      text: "Ouch... C'est moi où il est vraiment de mauvaise humeur, ces derniers temps ?",
      textPosition: 'right', // Ira is in the middle
      background: 'impasse2',
      music: 'audio/SJOLY.mp3',
      charactersOnScreen: {
        right: "ira",
        rightMood: "etonne",
        middle: "vava",
        middleMood: "pense",
        middleFlip: false,
        rightFlip: true,
      },
    },
   {
      id: "fin34",
      name: "Vangva",
      voice: "medium",
      text: "Non, c'est pas toi. Il est vraiment de mauvaise humeur...",
      textPosition: 'center', // Vangva is on the right
      background: 'impasse2',
      charactersOnScreen: {
        right: "ira",
        rightMood: "embete",
        middle: "vava",
        middleMood: "regard_froid",
        middleFlip: false,
        rightFlip: true,
      },
    },
    {
      id: "fin35",
      backgroundVideo: "Intro",
      charactersOnScreen: {
        middle: '',
        left: '',
        right: '',
      }
    }
];

export default script;