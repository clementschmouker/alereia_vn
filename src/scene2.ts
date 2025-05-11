import { DialogueLine, FadeTransitionType } from "./types";

const script : DialogueLine[] = [
    {
        id: "gare", // Unique ID for this line
        text: "Décidément, ça me fera toujours quelque chose de rentrer à Brissa. Un quelque chose coincé entre la nostalgie et le malaise…",
        background: 'gare',
        backgroundTransition: {
          easing: FadeTransitionType.easeIn,
          duration: 3000,
        },
        charactersOnScreen: {
            right: "vava",
            rightMood: "pense",
            leftFlip: true,
            rightFlip: false
        }
    },
];

export default script;