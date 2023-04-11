import { Link } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { useSession } from '@supabase/auth-helpers-react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

const Nav = () => {
  const session = useSession();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className="flex items-center">
    <Dropdown>
      <Dropdown.Button flat>Settings</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
         {!session ?
          <Dropdown.Item key="login"><Link href="/login">Login</Link></Dropdown.Item>
         : <Dropdown.Item key="login"><Link href="/login">My Profile</Link></Dropdown.Item>}
        </Dropdown.Menu>
    </Dropdown>

    <div>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>

    </div>
  )
}

export default Nav
