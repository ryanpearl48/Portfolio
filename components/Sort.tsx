import React from 'react';
import { Card, Dropdown } from "@nextui-org/react";

const Sort = () => {

  const sortAz = () => {
    
  };

  const sortZa = () => {

  };

  return (
    <div>
      <Card>
       <Card.Header>Sort Items</Card.Header>
       <Card.Body>
        <Dropdown>
          <Dropdown.Button onChange={"A-Z" ? sortAz : sortZa}>Sort Alphabetically</Dropdown.Button>
            <Dropdown.Item>A-Z</Dropdown.Item>
            <Dropdown.Item>Z-A</Dropdown.Item>
        </Dropdown>
       </Card.Body>
      </Card>
    </div>
  )
}

export default Sort;
