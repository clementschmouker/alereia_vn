import { DialogueLine, FadeTransitionType } from "../types";

const script : DialogueLine[] = [
    {
      id: "toit1",
      background: 'syel_vue',
      name: "",
      text: "",
      timer: 5000,
      backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 300,
      },
        charactersOnScreen: {
          left: "",
          right: "",
      },
      sound: "audio/bruitages/vent.mp3",
    },
    {
      id: "toit2",
      name: "Syel",
      voice: "high",
      text: "<i>Il a raison. C'est trop facile...</i>",
      textPosition: 'center', 
      style: "thinking",
      background: 'syel_blase',
      sound: "audio/bruitages/vent.mp3",
      backgroundTransition: {
        easing: FadeTransitionType.easeIn,
        duration: 300,
      },
    },
    {
      id: "toit3",
      name: "",
      text: "",
      backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 300,
        },
      background: 'syel_leve_yeux',
      sound: "audio/bruitages/vent.mp3",
    },
    {
      id: "toit4",
      voice: "high",
      name: "Syel",
      text: "<i> Il commence à faire froid... et c'est mon frère qui a ma veste. Bouclons cette affaire rapidement. Je me sens un peu fatigué... </i>",
      textPosition: 'center',
      style: "thinking",
      background: 'syel_leve_yeux',
      sound: "audio/bruitages/vent.mp3",
    },
    {
      id: "toit5",
      name: "",
      background: 'noir',
      backgroundVideo: 'yeuxSyel',
      nextLineId: 'toit6',
      charactersOnScreen: {
        left: '',
        right: '',
      }
    },
    {
      id: "toit6",
      name: "Syel",
      voice: "high",
      text: "<i> Ça devrait lui suffire... Ensuite, Prisme fera le reste.</i>",
      textPosition: 'center', 
      style: "thinking",
      background: 'syel_blase',
      sound: "audio/bruitages/vent.mp3",
    },  
];

export default script;