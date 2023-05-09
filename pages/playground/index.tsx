import Counter from '@/components/Counter';
import React from 'react';
import { Grid } from '@nextui-org/react';
import Sort from '@/components/Sort';

export const metadata = {
  title: 'Playground',
  description: 'Fun coding things for practice.'
};

const Playground = () => {
  return (
    <Grid.Container>
      <h1>Here is basically an area where there's a ton of little coding things for refreshers and practice!</h1>
      <Grid lg={4}>
        <Counter />
      </Grid>
      <Grid lg={4}>
        <Sort />
      </Grid>
    </Grid.Container>
  )
};

export default Playground;
