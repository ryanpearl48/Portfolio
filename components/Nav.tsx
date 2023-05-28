import React from "react";
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Navbar, Text, Link, Dropdown } from '@nextui-org/react';

const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="sm">
            <Link href="/">
              Portfolio Playground
            </Link>
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Dropdown>
            <Dropdown.Button className=" text-blue-500">Options</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item textValue="Portfolio" key='portfolio'><Link href='/portfolio'>Portfolio</Link></Dropdown.Item>
              <Dropdown.Item textValue="Cards" key='card'><Link href='/cards'>Technology Cards</Link></Dropdown.Item>
              <Dropdown.Item textValue="About Me" key='about-me'><Link href='/about-me'>About Me</Link></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

        <div>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
      </Navbar.Content>
    </Navbar>
  </div>
  )
};

export default Nav;
