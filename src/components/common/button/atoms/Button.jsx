import React from 'react';

import { StyledButton } from '../styles/styledComponents';

export const Button = ({ text, onClick, isDisabled }) => {
    return (
        <StyledButton disabled={isDisabled} onClick={onClick}>
            {text}
        </StyledButton>
    );
};
