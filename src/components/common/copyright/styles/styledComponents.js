import styled, { css } from 'styled-components';

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 1vh;
    ${({ theme }) =>
        css`
            color: ${theme.colors.darkerGrey};
        `};
`;
