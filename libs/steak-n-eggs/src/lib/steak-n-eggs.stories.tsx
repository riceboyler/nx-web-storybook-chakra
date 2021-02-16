import React from 'react';
import { SteakNEggs, SteakNEggsProps } from './steak-n-eggs';

export default {
  component: SteakNEggs,
  title: 'SteakNEggs',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SteakNEggsProps = {};

  return <SteakNEggs />;
};
