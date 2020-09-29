import * as actions from '../actionTypes';
import { getDefaultRemainingTriesForReducer, getDefaultScoreForReducer } from '../utils/diceUtils';
import { POINTS_PER_CORRECT_PREDICTION } from '../../components/dice-roll/constants/constants';

export const diceReducer = (
    state = {
        dice: {},
        remainingTries: getDefaultRemainingTriesForReducer(),
        score: getDefaultScoreForReducer(),
        isLoading: true,
        isFirstRoll: true,
        roundsHistory: [],
        isGameOver: false
    },
    action
) => {
    switch (action.type) {
        case actions.DICE_ROLL.DICE_ROLLED:
            console.log('action.payload.dice = ', action.payload.dice);
            return {
                ...state,
                dice: action.payload.dice,
                remainingTries: state.remainingTries - (state.isFirstRoll ? 0 : 1),
                isLoading: false,
                isFirstRoll: false
            };
        case actions.DICE_ROLL.DICE_STARTED_ROLLING:
            return {
                ...state,
                isLoading: true
            };
        case actions.DICE_ROLL.DICE_VALUE_CORRECTLY_PREDICTED:
            return {
                ...state,
                score: Number((state.score + POINTS_PER_CORRECT_PREDICTION).toFixed(1))
            };
        case actions.DICE_ROLL.GAME_LOADED_FROM_LOCAL_STORAGE:
            return {
                ...state,
                isFirstRoll: true
            };
        case actions.DICE_ROLL.GAME_IS_OVER:
            return {
                ...state,
                isGameOver: true
            };
        case actions.DICE_ROLL.ROUNDS_HISTORY_UPDATED:
            return {
                ...state,
                roundsHistory: action.payload.roundsHistory
            };
        default:
            return state;
    }
};
