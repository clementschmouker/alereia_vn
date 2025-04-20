import DialogueLine from "./types";

const script : DialogueLine[] = [
    {
        id: "outsideBar",
        name: "Aria",
        text: "Je suis dehors du bar.",
        charactersOnScreen: {
            left: "aria",
            leftMood: "happy",
            right: "aria",
            rightMood: "happy",
            leftFlip: false,
            rightFlip: true
        }
    },
];

export default script;