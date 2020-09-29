import * as actions from '../actionTypes';

export const diceRolled = ({ dice = {} }) => {
    return {
        type: actions.DICE_ROLL.DICE_ROLLED,
        payload: {
            dice
        }
    };
};
