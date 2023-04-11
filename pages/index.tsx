import Nav from "@/components/Nav";
import DropDown from "@/components/Dropdown";
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';


export const metadata = {
  title: 'Home Page'
}

const Home = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <>
      <Nav />
      <DropDown />
      <h1 className="text-3xl font-bold underline">Blah blah</h1>
      <div>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
    </>
  )
}

export default Home
