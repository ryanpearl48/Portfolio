import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { SSRProvider } from 'react-bootstrap';
import Nav from '@/components/Nav';
import '../styles/globals.css'

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

export default function App({ Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
  <SSRProvider>
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >
      <NextUIProvider>
        <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
        >
          <Nav/>
            <Component {...pageProps} />
        </SessionContextProvider>
      </NextUIProvider>
    </NextThemesProvider>
  </SSRProvider>
  )
}
