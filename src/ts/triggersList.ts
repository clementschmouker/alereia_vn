
import { lineHandler } from './globals';

interface Trigger {
    position: number;
    debug?: boolean;
    stays?: boolean;
    action: () => void;
}

const triggersList: Trigger[] = [
    {
        position: -60,
        // debug: true,
        stays: true,
        action: () => {
            console.log('trigger pas par là');
            lineHandler.showLine('pas-par-la');
        }
    },
    {
        position: -47,
        //debug: true,
        action: () => {
            lineHandler.showLine('3js9');
        }
    },
    {
        position: 8,
        action: () => {
            console.log('second trigger');
        }
    },
    {
        position: 12,
        action: () => {
            console.log('third trigger');
            lineHandler.showLine('endgame');
        }
    },
];

export default triggersList;