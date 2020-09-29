import React from 'react';
import { GamePropertyContainer, GamePropertyText } from './styles/styledComponents';
import { useRemainingTriesFromStore } from '../utils/hooks';

export const RemainingTries = () => {
    const remainingTries = useRemainingTriesFromStore();

    return (
        <GamePropertyContainer>
            <GamePropertyText>Remaining tries:</GamePropertyText>
            <GamePropertyText isPropertyValueText>{remainingTries}</GamePropertyText>
        </GamePropertyContainer>
    );
};
