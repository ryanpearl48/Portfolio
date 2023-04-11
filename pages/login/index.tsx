import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../../components/Account'
import { Link } from '@nextui-org/react'

export const metadata = {
  title: 'Login Page'
}

const Login = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
        />
      ) : (
        <Account session={session} />
      )}
      <Link href='/' className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4'>Return Home</Link>
    </div>
  )
}

export default Login;