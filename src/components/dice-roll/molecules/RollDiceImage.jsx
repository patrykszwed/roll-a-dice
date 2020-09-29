import React from 'react';
import { DiceImage, RollDiceImageContainer } from './styles/styledComponents';
import { useDiceValueFromStore, useInitialRollDiceIfIsFirstRoll, useLoadingFromStore } from '../utils/hooks';
import { LoadingIndicator } from '../../common/loading-indicator/atoms/LoadingIndicator';

export const RollDiceImage = () => {
    const diceValue = useDiceValueFromStore();
    const isLoading = useLoadingFromStore();

    useInitialRollDiceIfIsFirstRoll();

    const renderDiceImageForDiceValue = (diceValue) => {
        switch (diceValue) {
            case 1:
                return <DiceImage src={require('../../../images/1.png')} alt='1 dot dice' />;
            case 2:
                return <DiceImage src={require('../../../images/2.png')} alt='2 dots dice' />;
            case 3:
                return <DiceImage src={require('../../../images/3.png')} alt='3 dots dice' />;
            case 4:
                return <DiceImage src={require('../../../images/4.png')} alt='4 dots dice' />;
            case 5:
                return <DiceImage src={require('../../../images/5.png')} alt='5 dots dice' />;
            default:
                return <DiceImage src={require('../../../images/6.png')} alt='6 dots dice' />;
        }
    };

    console.log('diceValue = ', diceValue);

    return (
        <RollDiceImageContainer>
            {isLoading ? <LoadingIndicator /> : renderDiceImageForDiceValue(diceValue)}
        </RollDiceImageContainer>
    );
};
