import React from 'react';
import { DiceRollContainer } from './styles/styledComponents';
import { RollDiceButtons } from '../molecules/RollDiceButtons';
import { RollDiceImage } from '../molecules/RollDiceImage';
import { GameStats } from '../molecules/GameStats';
import { RoundsHistory } from '../molecules/RoundsHistory';

export const DiceRoll = () => {
    return (
        <DiceRollContainer>
            <RollDiceImage />
            <RollDiceButtons />
            <GameStats />
            <RoundsHistory />
        </DiceRollContainer>
    );
};
