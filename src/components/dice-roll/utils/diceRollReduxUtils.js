import { store } from '../../../redux/store';
import {
    diceRolled,
    diceStartedRolling,
    diceValueCorrectlyPredicted,
    gameIsOver,
    gameLoadedFromLocalStorage,
    roundsHistoryUpdated
} from '../../../redux/actions/diceActions';
import { POINTS_PER_CORRECT_PREDICTION, REMAINING_TRIES_ON_START } from '../constants/constants';
import { getSavedGameObjectFromLocalStorage, informUserAboutGameOver } from '../atoms/utils/rollDiceUtils';

export const setDiceInStore = (dice) => {
    store.dispatch(diceRolled({ dice }));
    if (isGameOver()) {
        informUserAboutGameOver();
        store.dispatch(gameIsOver());
    }
};

const isGameOver = () => {
    const remainingTries = getRemainingTriesFromStore();
    return remainingTries === 0;
};

export const setDiceStartedRolling = () => {
    store.dispatch(diceStartedRolling());
};

export const correctlyPredictedDiceValue = () => {
    store.dispatch(diceValueCorrectlyPredicted());
};

export const loadGameFromLocalStorage = () => {
    const { dice, remainingTries, score, roundsHistory } = getSavedGameObjectFromLocalStorage();
    store.dispatch(gameLoadedFromLocalStorage({ dice, remainingTries, score, roundsHistory }));
};

export const getDiceFromStore = () => {
    return store.getState().dice?.dice;
};

export const getDiceValueFromStore = () => {
    return store.getState().dice?.dice?.value;
};

export const getFirstRollFromStore = () => {
    return store.getState().dice?.isFirstRoll;
};

export const getScoreFromStore = () => {
    return store.getState().dice?.score;
};

export const updateRoundsHistory = (isCorrectPrediction) => {
    const roundsHistory = getRoundsHistoryFromStore();
    const score = isCorrectPrediction ? POINTS_PER_CORRECT_PREDICTION : 0;
    roundsHistory.push({ score, number: getRoundNumber() });
    roundsHistoryUpdated({ roundsHistory });
};

export const getRoundsHistoryFromStore = () => {
    return store.getState().dice?.roundsHistory;
};

const getRoundNumber = () => {
    return REMAINING_TRIES_ON_START - getRemainingTriesFromStore() + 1;
};

export const getRemainingTriesFromStore = () => {
    return store.getState().dice?.remainingTries;
};
