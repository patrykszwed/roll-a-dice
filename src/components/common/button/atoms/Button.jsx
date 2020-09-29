import React from 'react';

import { StyledButton, ButtonDiv } from '../styles/styledComponents';

export const Button = ({ text, onClick, isDisabled }) => {
    return (
        <ButtonDiv>
            <StyledButton disabled={isDisabled} onClick={onClick}>
                {text}
            </StyledButton>
        </ButtonDiv>
    );
};
