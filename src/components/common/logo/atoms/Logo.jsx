import React from 'react';
import { LogoContainer } from '../styles/styledComponents';

/**
 * Component displays logo of the app.
 */
export const Logo = () => {
    return (
        <LogoContainer>
            <img width={200} height={150} src={require('../../../../images/logo.png')} alt='Logo' />
        </LogoContainer>
    );
};
