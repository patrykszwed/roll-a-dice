import React from 'react';
import { Button } from '../../common/button/atoms/Button';
import { rollDice } from './utils/rollDiceUtils';

export const RollDiceButton = () => {
    return <Button text='Roll a dice' onClick={rollDice} />;
};
