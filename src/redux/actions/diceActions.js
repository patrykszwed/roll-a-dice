import * as actions from '../actionTypes';

export const diceRolled = ({ dice = {} }) => {
    return {
        type: actions.DICE_ROLL.DICE_ROLLED,
        payload: {
            dice
        }
    };
};

export const diceStartedRolling = () => {
    return {
        type: actions.DICE_ROLL.DICE_STARTED_ROLLING
    };
};

export const diceValueCorrectlyPredicted = () => {
    return {
        type: actions.DICE_ROLL.DICE_VALUE_CORRECTLY_PREDICTED
    };
};

export const gameLoadedFromLocalStorage = ({ dice, remainingTries, score, roundsHistory }) => {
    return {
        type: actions.DICE_ROLL.GAME_LOADED_FROM_LOCAL_STORAGE,
        payload: {
            dice,
            remainingTries,
            score,
            roundsHistory
        }
    };
};

export const roundsHistoryUpdated = ({ roundsHistory = [] }) => {
    return {
        type: actions.DICE_ROLL.ROUNDS_HISTORY_UPDATED,
        payload: {
            roundsHistory
        }
    };
};

export const gameIsOver = () => {
    return {
        type: actions.DICE_ROLL.GAME_IS_OVER
    };
};
