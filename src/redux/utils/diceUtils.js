import { REMAINING_TRIES_ON_START } from '../../components/dice-roll/constants/constants';

export const getDefaultRemainingTriesForReducer = () => {
    return REMAINING_TRIES_ON_START;
};

export const getDefaultScoreForReducer = () => {
    return 0;
};
