import Counter from '@/components/Counter'
import React from 'react'
import { Grid } from '@nextui-org/react'
import Sort from '@/components/Sort'


const Playground = () => {
  return (
    <>
      <h1>Here is basically an area where there's a ton of little coding things for practice!</h1>
      <Grid>
        <Counter />
        <Sort />
      </Grid>
    </>
  )
}

export default Playground
