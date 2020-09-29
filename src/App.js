import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { DiceRollLayout } from './components/dice-roll/layouts/DiceRollLayout';
import { store } from './redux/store';
import { Theme } from './components/common/styles/theme';
import GlobalStyle from './components/common/styles/globalStyles';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Provider store={store}>
                <DiceRollLayout />
            </Provider>
        </ThemeProvider>
    );
}

export default App;
