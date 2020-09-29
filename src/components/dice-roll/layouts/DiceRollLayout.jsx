import React from 'react';
import { DiceRollLayoutContainer } from './styles/styledComponents';
import { DiceRollScreen } from '../screens/DiceRollScreen';

export const DiceRollLayout = () => {
    return (
        <DiceRollLayoutContainer>
            <DiceRollScreen />
        </DiceRollLayoutContainer>
    );
};
