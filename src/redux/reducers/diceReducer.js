import * as actions from '../actionTypes';

export const diceReducer = (
    state = {
        dice: null
    },
    action
) => {
    switch (action.type) {
        case actions.DICE_ROLL.DICE_ROLLED:
            return {
                ...state,
                dice: action.payload.dice
            };
        default:
            return state;
    }
};
