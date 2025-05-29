
import { lineHandler } from './globals';

interface Trigger {
    position: number;
    debug?: boolean;
    stays?: boolean;
    action: () => void;
}

const triggersList: Trigger[] = [
    {
        position: -55,
        // debug: true,
        stays: true,
        action: () => {
            console.log('trigger pas par là');
            lineHandler.showLine('pas-par-la');
        }
    },
    {
        position: -20,
        //debug: true,
        action: () => {
            lineHandler.showLine('3js9');
        }
    },
    {
        position: 10,
        action: () => {
            console.log('second trigger');
        }
    },
    {
        position: 13,
        action: () => {
            console.log('third trigger');
            lineHandler.showLine('endgame');
        }
    },
];

export default triggersList;