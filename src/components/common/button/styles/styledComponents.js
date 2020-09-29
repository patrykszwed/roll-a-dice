import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 15vw;
    margin-top: 5vh;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ed3330;
    padding: 1em;
    border-radius: 5px;
    right: 0;
    border: none;
    transition: all 0.4s ease 0s;
    margin-right: 1vw;
    margin-left: 1vw;
    &:disabled {
        background: darkgray;
    }
`;
