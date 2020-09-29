import React from 'react';
import { DiceRollScreenContainer } from './styles/styledComponents';
import { Logo } from '../../common/logo/atoms/Logo';
import { Copyright } from '../../common/copyright/atoms/Copyright';
import { DiceRoll } from '../organisms/DiceRoll';

export const DiceRollScreen = () => {
    return (
        <DiceRollScreenContainer>
            <Logo />
            <DiceRoll />
            <Copyright />
        </DiceRollScreenContainer>
    );
};
