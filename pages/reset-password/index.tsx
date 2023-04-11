import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { supabase } from '@/lib/supabase-client';


const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [loading] = useState(false);
  const [error, setError] = useState(Boolean);
  const [success, setSuccess] = useState(false);

  const handleReset = async (e: any) => {
    e.preventDefault();
    if (password.length < 6) {
      console.error("Password must be more than 6 characters long");
      return;
    } else {
      const { data, error } = await supabase.auth.updateUser({
        password: password,
      });
      if (data) {
        setError(false);
        setSuccess(true);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div>
      {success ? '' : <h1>Please Enter Your New Password</h1> }
      {success ? (
        <h2>
          Password has been reset successfully. You can now{' '}
          <Link href="/profile">sign in</Link>.
        </h2>
      ) : (
        <form onSubmit={handleReset}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
          type="submit"
          disabled={loading}>
          {loading ? 'Loading...' : 'Reset Password'}
          </Button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
