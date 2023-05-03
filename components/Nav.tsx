import React from "react";
import { useSession } from '@supabase/auth-helpers-react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Navbar, Text, Link, Dropdown } from '@nextui-org/react';

const Nav = () => {
  const session = useSession();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="sm">
              Portfolio Playground
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant='highlight'>
          <Navbar.Link  href="/">Return Home</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Dropdown>
            <Dropdown.Button shadow>Settings</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
              {!session ?
              <Dropdown.Item textValue="Login" key="login"><Link href="/login">Login</Link></Dropdown.Item>
              : <Dropdown.Item textValue="My Profile" key="login"><Link href="/login">My Profile</Link></Dropdown.Item>}
              <Dropdown.Item textValue="Portfolio" withDivider key='portfolio'><Link href='/portfolio'>Portfolio</Link></Dropdown.Item>
              <Dropdown.Item textValue="Cards" key='card'><Link href='/cards'>Cards</Link></Dropdown.Item>
              <Dropdown.Item textValue="About Me" key='about-me'><Link href='/about-me'>About Me</Link></Dropdown.Item>
              <Dropdown.Item textValue="Playground" key='playground'><Link href='/playground'>Playground</Link></Dropdown.Item>
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
}

export default Nav
