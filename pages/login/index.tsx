import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../../components/Account';

export const metadata = {
  title: 'Login Page'
};

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className='w-full flex justify-center align-middle'>
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
    </div>
  )
};

export default Login;
