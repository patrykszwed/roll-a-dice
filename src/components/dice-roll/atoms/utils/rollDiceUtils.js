import { getDataFromUrl } from '../../../../api/utils/apiUtils';
import { API } from '../../../../api/constants/constants';
import {
    correctlyPredictedDiceValue,
    getDiceValueFromStore,
    getFirstRollFromStore,
    setDiceInStore,
    setDiceStartedRolling,
    updateRoundsHistory
} from '../../utils/diceRollReduxUtils';
import { PREDICTION } from '../../constants/constants';

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
