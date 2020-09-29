import React from 'react';
import { LoadingIndicatorContainer } from '../styles/styledComponents';

/**
 * Component displays loading indicator with spinning animation.
 */
export const LoadingIndicator = () => {
  return (
    <LoadingIndicatorContainer>
      <span>&#9676;</span>
    </LoadingIndicatorContainer>
  );
};
