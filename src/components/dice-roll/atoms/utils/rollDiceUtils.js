import { getDataFromUrl } from '../../../../api/utils/apiUtils';
import { API } from '../../../../api/constants/constants';
import {
    correctlyPredictedDiceValue,
    getDiceFromStore,
    getDiceValueFromStore,
    getFirstRollFromStore,
    getRemainingTriesFromStore,
    getRoundsHistoryFromStore,
    getScoreFromStore,
    loadGameFromLocalStorage,
    setDiceInStore,
    setDiceStartedRolling,
    updateRoundsHistory
} from '../../utils/diceRollReduxUtils';
import { LOCAL_STORAGE_ITEMS, PREDICTION } from '../../constants/constants';

export const rollDice = (predictedValue = null) => {
    const isFirstRoll = getFirstRollFromStore();
    setDiceStartedRolling();
    getDataFromUrl(API.ENDPOINTS.DICE_ROLL).then((response) => {
        const dice = getDiceFromResponse(response);
        let isCorrectPrediction = false;
        if (isCorrectlyPredictedValueForDice({ dice, predictedValue })) {
            correctlyPredictedDiceValue();
            isCorrectPrediction = true;
        }
        if (!isFirstRoll) {
            updateRoundsHistory(isCorrectPrediction);
        }
        setDiceInStore(dice);
        saveGameObjectIntoLocalStorage();
    });
};

const isCorrectlyPredictedValueForDice = ({ dice, predictedValue }) => {
    if (predictedValue) {
        const diceValue = dice?.value;
        const diceValueFromStore = getDiceValueFromStore();
        if (predictedValue === PREDICTION.HIGHER_VALUE) {
            return diceValueFromStore < diceValue;
        }
        return diceValueFromStore > diceValue;
    }
    return false;
};

const getDiceFromResponse = (response) => {
    const dices = response[API.RESPONSE_FIELDS.DICE];
    return dices.length > 0 ? dices[0] : {};
};

export const rollDiceForLowerValuePredicted = () => {
    rollDice(PREDICTION.LOWER_VALUE);
};

export const rollDiceForHigherValuePredicted = () => {
    rollDice(PREDICTION.HIGHER_VALUE);
};

export const informUserAboutGameOver = () => {
    const score = getScoreFromStore();
    alert(`Game over! Score: ${score}`);
};

export const askUserAboutLoadingSavedGame = () => {
    if (window.confirm('Do you want to load previously saved game?')) {
        loadGameFromLocalStorage();
    }
};

export const getSavedGameObjectFromLocalStorage = () => {
    return {
        dice: getDiceFromLocalStorage(),
        remainingTries: getRemainingTriesFromLocalStorage() + 1,
        score: getScoreFromLocalStorage(),
        roundsHistory: getRoundsHistoryFromLocalStorage()
    };
};

const getDiceFromLocalStorage = () => {
    const diceString = localStorage.getItem(LOCAL_STORAGE_ITEMS.DICE);
    return JSON.parse(diceString);
};

const getRemainingTriesFromLocalStorage = () => {
    const remainingTriesString = localStorage.getItem(LOCAL_STORAGE_ITEMS.REMAINING_TRIES);
    return Number(remainingTriesString);
};

const getScoreFromLocalStorage = () => {
    const scoreString = localStorage.getItem(LOCAL_STORAGE_ITEMS.SCORE);
    return Number(scoreString);
};

const getRoundsHistoryFromLocalStorage = () => {
    const roundsHistoryString = localStorage.getItem(LOCAL_STORAGE_ITEMS.ROUNDS_HISTORY);
    return JSON.parse(roundsHistoryString);
};

export const saveGameObjectIntoLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_ITEMS.DICE, JSON.stringify(getDiceFromStore()));
    localStorage.setItem(LOCAL_STORAGE_ITEMS.REMAINING_TRIES, getRemainingTriesFromStore());
    localStorage.setItem(LOCAL_STORAGE_ITEMS.SCORE, getScoreFromStore());
    localStorage.setItem(LOCAL_STORAGE_ITEMS.ROUNDS_HISTORY, JSON.stringify(getRoundsHistoryFromStore()));
};
