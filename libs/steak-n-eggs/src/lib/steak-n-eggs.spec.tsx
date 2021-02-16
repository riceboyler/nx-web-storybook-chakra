import React from 'react';
import { render } from '@testing-library/react';

import SteakNEggs from './steak-n-eggs';

describe('SteakNEggs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SteakNEggs />);
    expect(baseElement).toBeTruthy();
  });
});
