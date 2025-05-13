import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "supercherie", // Unique ID for this line
        name: "",
        text: "*cinematique, Ira court dans les rues. Soudain il est encerclé*",
        background: 'noir',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
    },
    {
      id: "supercherie1",
      name: "N.O.D.E.",
      text: "On te tient ! Frères et soeurs, mobilisez-vous, ce n'est plus le moment de se cacher ! Notre priorité est de l'emmener en lieu sûr !",
      background: 'rues',
      charactersOnScreen: {
        left: "serveuse",
        leftMood: "peur",
        right: "vava",
        rightMood: "arrogant",
        leftFlip: false,
        rightFlip: false,
        middle: "ira",
        middleMood: "secache",
        middleFlip: false,
      },
    },

];

export default script;