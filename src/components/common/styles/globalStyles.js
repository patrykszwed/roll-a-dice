import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        color: ${({ theme }) => theme.colors.mainBlue};
        font-family: Open-Sans, Helvetica, Sans-Serif,sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
