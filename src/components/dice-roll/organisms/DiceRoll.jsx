import React from 'react';
import { DiceRollContainer } from './styles/styledComponents';
import { RollDiceButtons } from '../molecules/RollDiceButtons';

export const DiceRoll = () => {
    return (
        <DiceRollContainer>
            <RollDiceButtons />
        </DiceRollContainer>
    );
};
