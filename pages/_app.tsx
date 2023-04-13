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
  theme: {
    colors: {
      background: '#d9d9d9',
    },
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
    },
  }
})

export default function App({ Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
  <SSRProvider>
    <NextUIProvider>
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >
        <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
        >
          <Nav/>
            <Component {...pageProps} />
        </SessionContextProvider>
    </NextThemesProvider>
      </NextUIProvider>
  </SSRProvider>
  )
}
