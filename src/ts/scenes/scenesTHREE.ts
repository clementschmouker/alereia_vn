import { DialogueLine } from "../types"

const script: DialogueLine[] = [
    {
        id: 'pas-par-la',
        name: "Vangva",
        text: "<i>Je viens de la gare, je ne vais pas y retourner...</i>",
        pauseGame: true,
        dontSave: true,
        charactersOnScreen: {
          left: "vava",
          leftMood: "embete",
        },
        textPosition: 'left',
        nextLineId: 'endgame',
    },
    {
        id: 'endgame',
        stopGame: true,
        nextLineId: 'impasse',
        // rajouter un background
    },
    {
        id: 'restart-game',
        charactersOnScreen: {
          left: '',
        },
        dontSave: true,
        unpauseGame: true,
        noNextLine: true,
    }
]

export default script;