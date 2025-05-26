import { game, showLine } from './main';

interface Trigger {
    position: number;
    debug?: boolean;
    stays?: boolean;
    action: () => void;
}

const triggersList: Trigger[] = [
    {
        position: -3,
        debug: true,
        stays: true,
        action: () => {
            game.pause();
            showLine('pas-par-la');
        }
    },
    {
        position: 5,
        debug: true,
        action: () => {
            game.pause();
            showLine('3js9');
        }
    },
    {
        position: 10,
        action: () => {
            console.log('second trigger');
        }
    },
    {
        position: 15,
        action: () => {
            console.log('third trigger');
        }
    },
    {
        position: 20,
        action: () => {
            console.log('fourth trigger');
        }
    }
];

export default triggersList;