import React from 'react';
import { useRoundsHistoryFromStore } from '../utils/hooks';
import { RoundsHistoryContainer } from './styles/styledComponents';
import { Round } from '../atoms/Round';

export const RoundsHistory = () => {
    const roundsHistory = useRoundsHistoryFromStore();

    return (
        <RoundsHistoryContainer>
            {roundsHistory.map((round) => (
                <Round key={round.number} score={round.score} number={round.number} />
            ))}
        </RoundsHistoryContainer>
    );
};
