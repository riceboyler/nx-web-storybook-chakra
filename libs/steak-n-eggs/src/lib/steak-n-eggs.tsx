import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SteakNEggsProps {}

const StyledSteakNEggs = styled.div`
  color: pink;
`;

export function SteakNEggs(props: SteakNEggsProps) {
  return (
    <StyledSteakNEggs>
      <h1>Welcome to steak-n-eggs!</h1>
    </StyledSteakNEggs>
  );
}

export default SteakNEggs;
