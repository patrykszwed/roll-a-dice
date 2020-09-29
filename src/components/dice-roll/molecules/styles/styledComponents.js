import styled from 'styled-components';
import { DICE_IMAGE_HEIGHT, DICE_IMAGE_WIDTH } from '../../constants/constants';

export const RollDiceButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const RollDiceImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
`;

export const RoundsHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 0;
    margin-top: 2vh;
    margin-left: 2vw;
`;

export const DiceImage = styled.img`
    width: ${DICE_IMAGE_WIDTH}px;
    height: ${DICE_IMAGE_HEIGHT}px;
`;

export const GameStatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5vh;
    align-items: center;
`;
