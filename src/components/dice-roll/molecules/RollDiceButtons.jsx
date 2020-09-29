import React from 'react';
import { RollDiceButtonsContainer } from './styles/styledComponents';
import { RollDiceButton } from '../atoms/RollDiceButton';

export const RollDiceButtons = () => {
    return (
        <RollDiceButtonsContainer>
            <RollDiceButton />
        </RollDiceButtonsContainer>
    );
};
