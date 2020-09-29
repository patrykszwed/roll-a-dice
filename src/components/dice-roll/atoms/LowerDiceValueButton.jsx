import React from 'react';
import { Button } from '../../common/button/atoms/Button';
import { rollDiceForLowerValuePredicted } from './utils/rollDiceUtils';
import { useShouldButtonsBeDisabled } from '../utils/hooks';

export const LowerDiceValueButton = () => {
    const isDisabled = useShouldButtonsBeDisabled();
    return (
        <Button text='Next dice value will be lower' onClick={rollDiceForLowerValuePredicted} isDisabled={isDisabled} />
    );
};
