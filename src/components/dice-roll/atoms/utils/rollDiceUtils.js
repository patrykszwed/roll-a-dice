import { getDataFromUrl } from '../../../../api/utils/apiUtils';
import { API } from '../../../../api/constants/constants';
import { setDiceInStore } from '../../utils/diceRollReduxUtils';

export const rollDice = () => {
    getDataFromUrl(API.ENDPOINTS.DICE_ROLL).then((response) => {
        const dice = response[API.RESPONSE_FIELDS.DICE];
        console.log('dice = ', dice);
        setDiceInStore(dice);
    });
};
