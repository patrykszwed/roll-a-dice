import React from 'react';
import { RollDiceButtonsContainer } from './styles/styledComponents';
import { LowerDiceValueButton } from '../atoms/LowerDiceValueButton';
import { HigherDiceValueButton } from '../atoms/HigherDiceValueButton';

export const RollDiceButtons = () => {
    return (
        <RollDiceButtonsContainer>
            <LowerDiceValueButton />
            <HigherDiceValueButton />
        </RollDiceButtonsContainer>
    );
};
