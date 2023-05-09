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
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
        </ul>
       </Card.Body>
      </Card>
    </div>
  )
};

export default Sort;
