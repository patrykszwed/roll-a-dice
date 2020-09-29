import React from 'react';
import { ModalDiv, ModalSection } from './styles/styledComponents';

export const Modal = ({ handleClose, isModalVisible, children }) => {
    return (
        <ModalDiv isModalVisible={isModalVisible}>
            <ModalSection>
                {children}
                <button onClick={handleClose}>close</button>
            </ModalSection>
        </ModalDiv>
    );
};
