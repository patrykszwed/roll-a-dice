import React from 'react';
import { Button } from '../../common/button/atoms/Button';
import { rollDiceForHigherValuePredicted } from './utils/rollDiceUtils';
import { useShouldButtonsBeDisabled } from '../utils/hooks';

export const HigherDiceValueButton = () => {
    const isDisabled = useShouldButtonsBeDisabled();

    return (
        <Button
            text='Next dice value will be higher'
            onClick={rollDiceForHigherValuePredicted}
            isDisabled={isDisabled}
        />
    );
};
