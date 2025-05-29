import { DialogueLine } from "../types"

const script: DialogueLine[] = [
    {
        id: 'pas-par-la',
        name: "Vangva",
        text: "<i>Je n'ai pas besoin de retourner à la gare...</i>",
        style: 'thinking',
        pauseGame: true,
        dontSave: true,
        charactersOnScreen: {
          left: "vava",
          leftMood: "embete",
        },
        textPosition: 'left',
        nextLineId: 'restart-game',
    },
    {
        id: 'endgame',
        stopGame: true,
        nextLineId: 'impasse',
        background: 'impasse',
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