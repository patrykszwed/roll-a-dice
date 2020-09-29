import React from 'react';
import { GameStatsContainer } from './styles/styledComponents';
import { Score } from '../atoms/Score';
import { RemainingTries } from '../atoms/RemainingTries';

export const GameStats = () => {
    return (
        <GameStatsContainer>
            <RemainingTries />
            <Score />
        </GameStatsContainer>
    );
};
