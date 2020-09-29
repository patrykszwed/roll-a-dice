import React from 'react';
import { GamePropertyContainer, GamePropertyText } from './styles/styledComponents';
import { useScoreFromStore } from '../utils/hooks';

export const Score = () => {
    const score = useScoreFromStore();

    return (
        <GamePropertyContainer>
            <GamePropertyText>Score:</GamePropertyText>
            <GamePropertyText isPropertyValueText>{score}</GamePropertyText>
        </GamePropertyContainer>
    );
};
