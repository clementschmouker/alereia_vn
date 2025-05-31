import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
        id: "toit", // Unique ID for this line
        name: "",
        text: "",
        background: 'noir',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
    },
    {
      id: "toit1",
      background: 'syel_vue',
      backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 3000,
      },
      name: "",
      text: "",
      charactersOnScreen: {
        left: "",
        right: "",
      },
    },
    {
      id: "toit2",
      name: "Syel",
      text: "<i>Il a raison. C'est trop facile...</i>",
      textPosition: 'center', 
      style: "thinking",
      background: 'syel_blase',
      backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 3000,
      },
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
      text: "<i> Il commence à faire froid... et c'est mon frère qui a ma veste. Bouclons cette affaire rapidement. Je me sens un peu fatigué... </i>",
      textPosition: 'center', 
      style: "thinking",
      background: 'syel_leve_yeux',
    },
    {
      id: "toit7",
      name: "",
      background: 'noir',
      backgroundVideo: 'yeuxSyel',
      charactersOnScreen: {
        left: '',
        right: '',
      }
    },
    {
      id: "toit8",
      name: "Syel",
      text: "<i> Ça devrait lui suffire... Ensuite, Prisme fera le reste.</i>",
      textPosition: 'center', 
      style: "thinking",
      background: 'syel_blase',
      backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 3000,
      },
    },
];

export default script;