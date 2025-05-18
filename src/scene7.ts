import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "toit", // Unique ID for this line
        name: "",
        text: "*cinématique, caméra qui filme l'immeuble depuis l'impasse jusqu'au toit",
        background: 'noir',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
    },
    {
      id: "toit1",
      name: "",
      text: "",
      background: 'syel_vue',
    },
    {
      id: "toit2",
      name: "Syel",
      text: "<i>Il a raison. C'est trop facile...</i>",
      background: 'syel_blase',
    },
    {
      id: "toit3",
      name: "",
      text: "",
      background: 'syel_leve_yeux',
    },
    {
      id: "toit4",
      name: "Syel",
      text: "<i> Il va bientôt pleuvoir... et c'est mon frère qui a ma veste. Bouclons cette affaire rapidement. Je me sens un peu fatigué... </i>",
      background: 'syel_leve_yeux',
    },
    {
      id: "toit5",
      name: "Syel",
      text: "...",
      background: 'syel_blase',
    },
    {
      id: "toit6",
      name: "",
      text: "*vue d'en haut de Vangva qui va taper sur les pauvres Nodistes*",
      background: 'noir',
    },
    {
      id: "toit7",
      name: "",
      text: "*cinématique, visage de Syel. Il prend une inspiration, puis ses yeux brillent et glitchent comme Va*",
      background: 'noir',
    },
    {
      id: "toit8",
      name: "Syel",
      text: "<i> Ça devrait lui suffire... Ensuite, Prisme fera le reste.</i>",
      background: 'syel_blase',
    },
];

export default script;