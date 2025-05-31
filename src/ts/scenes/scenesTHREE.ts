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
      id: 'eyes',
      overlay: ['images/yeux1.webp', 'images/yeux2.webp', 'images/yeux3.webp'],
      noNextLine: true,
    },
    {
        id: 'endgame',
        text: "Une impasse...",
        stopGame: true,
        pauseGame: true,
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