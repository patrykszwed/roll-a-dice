import { store } from '../../../redux/store';
import {
    diceRolled,
    diceStartedRolling,
    diceValueCorrectlyPredicted,
    gameLoadedFromLocalStorage,
    roundsHistoryUpdated
} from '../../../redux/actions/diceActions';
import { POINTS_PER_CORRECT_PREDICTION, REMAINING_TRIES_ON_START } from '../constants/constants';

export const setDiceInStore = (dice) => {
    store.dispatch(diceRolled({ dice }));
};

export const correctlyPredictedDiceValue = () => {
    store.dispatch(diceValueCorrectlyPredicted());
};

export const setDiceStartedRolling = () => {
    store.dispatch(diceStartedRolling());
};

export const loadGameFromLocalStorage = () => {
    store.dispatch(gameLoadedFromLocalStorage());
};

export const getDiceValueFromStore = () => {
    return store.getState().dice?.dice?.value;
};

export const getFirstRollFromStore = () => {
    return store.getState().dice?.isFirstRoll;
};

export const updateRoundsHistory = (isCorrectPrediction) => {
    const roundsHistory = getRoundsHistoryFromStore();
    const score = isCorrectPrediction ? POINTS_PER_CORRECT_PREDICTION : 0;
    roundsHistory.push({ score, number: getRoundNumber() });
    roundsHistoryUpdated({ roundsHistory });
};

const getRoundsHistoryFromStore = () => {
    return store.getState().dice?.roundsHistory;
};

const getRoundNumber = () => {
    return REMAINING_TRIES_ON_START - getRemainingTriesFromStore() + 1;
};

const getRemainingTriesFromStore = () => {
    return store.getState().dice?.remainingTries;
};
