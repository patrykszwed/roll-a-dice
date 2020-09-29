import React from 'react';
import { DiceRollLayoutContainer } from './styles/styledComponents';
import { DiceRollScreen } from '../screens/DiceRollScreen';
import { useAskAboutLoadingPreviouslySavedGame } from '../utils/hooks';

export const DiceRollLayout = () => {
    useAskAboutLoadingPreviouslySavedGame();
    return (
        <DiceRollLayoutContainer>
            <DiceRollScreen />
        </DiceRollLayoutContainer>
    );
};
