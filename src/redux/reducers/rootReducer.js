import { combineReducers } from 'redux';
import { diceReducer } from './diceReducer';

export const rootReducer = combineReducers({
    dice: diceReducer
});
