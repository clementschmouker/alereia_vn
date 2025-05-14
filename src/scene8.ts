import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "bagarre", // Unique ID for this line
        name: "N.O.D.E.",
        text: "Attends... Qu'est-ce que ça signifie ? On dirait qu'ils ont des pro...",
        background: 'bar',
        charactersOnScreen: {
          left: "serveuse",
          leftMood: "mefiante",
          right: "ilyem",
          rightMood: "fachee",
          leftFlip: false,
          rightFlip: false
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
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre2",
      name: "Ilyem",
      text: "Si tu cries, je n'hésiterai pas à le planter dans ta gorge ! Et je te préviens, s'il m'arrive quoi que ce soit, Prisme nous surveille en ce moment-même.",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre3",
      name: "Ilyem",
      text: "Si tu t'avises d'appeler tes petits camarades par la pensée pour me contrer, vous serez tous pris sur le fait et arrêtés.",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre4",
      name: "N.O.D.E.",
      text: "... Ah... *elle a l'air très effrayée*",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre5",
      name: "Ilyem",
      text: "Bien. Tu vas répondre à ma simple question, maintenant.",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre6",
      name: "Ilyem",
      text: "Qu'est-ce que vous avez fait d'Adrika ?",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre7",
      name: "N.O.D.E.",
      text: "Ad... Adrika... ? Je ne vois pas du tout qui...",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre8",
      name: "Ilyem",
      text: "Pas de mensonge ! Je te préviens, je n'hésiterai pas à aller plus loin !",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre9",
      name: "N.O.D.E.",
      text: "Je... Je te jure... Je n'ai jamais entendu ce prénom...",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre10",
      name: "Ilyem",
      text: "Elle est grande, c'est une Nevari comme moi et elle a des cheveux orange. Retourne toute ta Mémoire s'il le faut, mais c'est impossible que tu ne saches pas qui elle est, puisque vous l'avez enlevée !",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre11",
      name: "N.O.D.E.",
      text: "Je jure... Je jure que je n'en sais rien...",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "coutal",
        leftFlip: false,
        rightFlip: false
      },
    },
    {
      id: "bagarre12",
      name: "Ilyem",
      text: "Alors, ce... ce n'est pas vous... ?",
      background: 'bar',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "mefiante",
        right: "ilyem",
        rightMood: "etonnee",
        leftFlip: false,
        rightFlip: false
      },
    },
];

export default script;