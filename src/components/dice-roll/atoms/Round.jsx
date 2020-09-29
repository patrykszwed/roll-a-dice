import React from 'react';
import { RoundContainer, RoundText } from './styles/styledComponents';

export const Round = ({ score, number }) => {
    return (
        <RoundContainer>
            <RoundText>Round {number} score:</RoundText>
            <RoundText isScoreText>{score}</RoundText>
        </RoundContainer>
    );
};
