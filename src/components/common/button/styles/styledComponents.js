import styled from 'styled-components';

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledButton = styled.button`
    width: 20%;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ed3330;
    padding: 1em;
    border-radius: 5px;
    right: 0;
    border: none;
    transition: all 0.4s ease 0s;
    &:disabled {
        background: darkgray;
    }
    margin-top: 2vh;
    margin-bottom: 2vh;
`;
