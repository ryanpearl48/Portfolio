import React from 'react';
import { Card, Dropdown } from "@nextui-org/react";

const Sort = () => {

  return (
    <div>
      <Card>
       <Card.Header>Sort Items</Card.Header>
       <Card.Body>
        <Dropdown>
          <Dropdown.Button>Sort Alphabetically</Dropdown.Button>
            <Dropdown.Item>A-Z</Dropdown.Item>
            <Dropdown.Item>Z-A</Dropdown.Item>
        </Dropdown>
       </Card.Body>
      </Card>
    </div>
  )
}

export default Sort;
