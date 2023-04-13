import { Link } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { useSession } from '@supabase/auth-helpers-react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Navbar, Text } from '@nextui-org/react';

const Nav = () => {
  const session = useSession();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div className="flex items-center">
      <Navbar isBordered variant={'sticky'}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="sm">
            Portfolio Playground
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="/">Return Home</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Dropdown>
            <Dropdown.Button flat>Settings</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
              {!session ?
              <Dropdown.Item key="login"><Link href="/login">Login</Link></Dropdown.Item>
              : <Dropdown.Item key="login"><Link href="/login">My Profile</Link></Dropdown.Item>}
              <Dropdown.Item key='portfolio'><Link href='/portfolio'>Portfolio</Link></Dropdown.Item>
              <Dropdown.Item key='card'><Link href='/cards'>Cards</Link></Dropdown.Item>
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
