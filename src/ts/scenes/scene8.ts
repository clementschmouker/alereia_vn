import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "bagarre", // Unique ID for this line
        name: "N.O.D.E.",
        voice: "medium",
        text: "Attends... Qu'est-ce que ça signifie ? On dirait qu'ils ont des pro...",
        textPosition: 'left', // N.O.D.E. is on the left
        background: 'bar',
        charactersOnScreen: {
          left: "serveuse",
          leftMood: "mefiante",
          right: "ilyem",
          rightMood: "fachee",
          leftFlip: false,
          rightFlip: false,
          abruptFlip: true,
        },
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
    },
    {
      id: "bagarre1",
      name: "N.O.D.E.",
      text: "Que... ?!",
      voice: "medium",
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "peur",
        right: "ilyem",
        rightMood: "fachee",
        leftFlip: false,
        rightFlip: false,
        rightAttack: true
      },
    },
    {
      id: "bagarre2",
      name: "Ilyem",
      voice: "high",
      text: "Si tu cries, je n'hésiterai pas à le planter dans ta gorge ! Et je te préviens, s'il m'arrive quoi que ce soit, Prisme nous surveille en ce moment-même.",
      textPosition: 'right', // Ilyem is on the right
      textHeight: 'bottom',
      background: 'coutal',
      charactersOnScreen: {
        left: "",
        right: ""
      },
    },
    {
      id: "bagarre3",
      name: "Ilyem",
      voice: "high",
      text: "Si tu tentes d'appeler tes petits camarades par la pensée pour me contrer, vous serez tous pris sur le fait et arrêtés.",
      textPosition: 'right', // Ilyem is on the right
      textHeight: 'bottom',
      background: 'coutal',
    },
    {
      id: "bagarre4",
      name: "N.O.D.E.",
      voice: "medium",
      text: "... Ah...",
      textHeight: 'bottom',
      textPosition: 'left', // N.O.D.E. is on the left
      background: 'coutal',
    },
    {
      id: "bagarre5",
      name: "Ilyem",
      voice: "high",
      text: "Bien. Tu vas répondre à ma simple question, maintenant.",
      textPosition: 'right', // Ilyem is on the right
      textHeight: 'bottom',
      background: 'coutal',
    },
    {
      id: "bagarre6",
      name: "Ilyem",
      voice: "high",
      text: "Qu'est-ce que vous avez fait d'Adrika ?",
      textPosition: 'right', // Ilyem is on the right
      textHeight: 'bottom',
      background: 'coutal',
    },
    {
      id: "bagarre7",
      name: "N.O.D.E.",
      voice: "medium",
      text: "Ad... Adrika... ? Je ne vois pas du tout qui...",
      textPosition: 'left', // N.O.D.E. is on the left
      textHeight: 'bottom',
      background: 'coutal',
    },
    {
      id: "bagarre8",
      name: "Ilyem",
      voice: "high",
      text: "Pas de mensonge ! Je te préviens, je n'hésiterai pas à aller plus loin !",
      textPosition: 'right', // Ilyem is on the right
      textHeight: 'bottom',
      background: 'coutal',
    },
    {
      id: "bagarre9",
      name: "N.O.D.E.",
      voice: "medium",
      text: "Je... Je te jure... Je n'ai jamais entendu ce prénom...",
      textPosition: 'left', // N.O.D.E. is on the left
      textHeight: 'bottom',
      background: 'coutal',
    },
    {
      id: "bagarre10",
      name: "Ilyem",
      voice: "high",
      text: "Elle est grande, c'est une Nevari comme moi et elle a des cheveux orange. Retourne toute ta Mémoire s'il le faut, mais c'est impossible que tu ne saches pas qui elle est, puisque vous l'avez enlevée !",
      textPosition: 'right', // Ilyem is on the right
      textHeight: 'bottom',
      background: 'coutal_2',
    },
    {
      id: "bagarre11",
      name: "N.O.D.E.",
      voice: "medium",
      text: "Je jure... Je jure que je n'en sais rien...",
      textPosition: 'left', // N.O.D.E. is on the left
      textHeight: 'bottom',
      background: 'coutal_2',

    },
    {
      id: "bagarre12",
      name: "Ilyem",
      voice: "high",
      text: "Je... Je suis désolée, je... Alors, ce... ce n'est pas vous... ?",
      textPosition: 'center', // Ilyem is on the right
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        middle: "ilyem",
        middleMood: "etonnee",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;