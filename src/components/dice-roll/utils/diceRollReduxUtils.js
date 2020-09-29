import { store } from '../../../redux/store';
import { diceRolled } from '../../../redux/actions/diceActions';

export const setDiceInStore = (dice) => {
    store.dispatch(diceRolled({ dice }));
};
