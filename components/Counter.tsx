import React, { useState } from 'react';
import { Card, Text, Link, Grid } from "@nextui-org/react";

const Counter = () => {
  const [counter, setCounter] = useState(Number)

  const plusCounter = () => {
    setCounter(counter+1)
  }

  const minusCounter = () => {
    setCounter(counter-1)
  }

  return (
    <div>
      <Card>
       <Card.Header>Counter: {counter}</Card.Header>
       <Card.Body>
         <button onClick={plusCounter}> ➕ </button>
         <button onClick={minusCounter}> ➖ </button>
       </Card.Body>
      </Card>
    </div>
  )
}

export default Counter;
