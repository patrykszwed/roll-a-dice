import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { rollDice } from '../atoms/utils/rollDiceUtils';

export const useDiceValueFromStore = () => {
    const { value } = useSelector((state) => state.dice.dice);
    return value;
};

export const useScoreFromStore = () => {
    const { score } = useSelector((state) => state.dice);
    return score;
};

export const useRemainingTriesFromStore = () => {
    const { remainingTries } = useSelector((state) => state.dice);
    return remainingTries;
};

export const useShouldButtonsBeDisabled = () => {
    const isLoading = useLoadingFromStore();
    const isGameOver = useGameOverFromStore();
    return isLoading || isGameOver;
};

export const useLoadingFromStore = () => {
    const { isLoading } = useSelector((state) => state.dice);
    return isLoading;
};

export const useGameOverFromStore = () => {
    const { isGameOver } = useSelector((state) => state.dice);
    return isGameOver;
};

export const useRoundsHistoryFromStore = () => {
    const { roundsHistory } = useSelector((state) => state.dice);
    return roundsHistory;
};

export const useInitialRollDiceIfIsFirstRoll = () => {
    const isFirstRoll = useFirstRollFromStore();

    useEffect(() => {
        if (isFirstRoll) {
            rollDice();
        }
    }, [isFirstRoll]);
};

const useFirstRollFromStore = () => {
    const { isFirstRoll } = useSelector((state) => state.dice);
    return isFirstRoll;
};
