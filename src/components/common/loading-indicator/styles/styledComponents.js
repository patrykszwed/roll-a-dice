import styled, { css, keyframes } from 'styled-components';

const rotatingAnim = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIndicatorContainer = styled.div`
    animation: ${rotatingAnim} 1.5s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        font-size: 6em;
        ${({ theme }) =>
            css`
                color: ${theme.colors.mainBlue};
            `};
    }
`;
