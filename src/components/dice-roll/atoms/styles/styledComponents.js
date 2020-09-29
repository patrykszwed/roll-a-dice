import styled, { css } from 'styled-components';

export const GamePropertyContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const GamePropertyText = styled.p`
    color: ${({ theme }) => theme.colors.darkerGrey};
    font-size: 50px;
    ${({ isPropertyValueText }) =>
        isPropertyValueText &&
        css`
            margin-left: 2vh;
        `};
`;

export const RoundContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const RoundText = styled.p`
    color: ${({ theme }) => theme.colors.darkerGrey};
    font-size: 30px;
    ${({ isScoreText }) =>
        isScoreText &&
        css`
            margin-left: 2vh;
        `};
`;
