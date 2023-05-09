import React, { useState, useEffect } from 'react';
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react';
import { Database } from '../types/supabase';
import { Input, Button } from '@nextui-org/react';
type Profiles = Database['public']['Tables']['profiles']['Row'];

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<Profiles['username']>('')
  const [website, setWebsite] = useState<Profiles['website']>('')
  const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>('')

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles['username']
    website: Profiles['website']
    avatar_url: Profiles['avatar_url']
  }) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto mt-2 pt-4'>
    <div className='flex items-center flex-col'>
      <div className='pb-4'>
        <label htmlFor="email"></label>
        <Input
        labelLeft='User Email'
        size='lg'
        bordered
        id="email"
        type="text"
        value={session.user.email}
        disabled
        />
      </div>
      <div className='pb-4'>
        <label htmlFor="username"></label>
        <Input
          clearable
          size='lg'
          bordered
          labelLeft='Username'
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='pb-4'>
        <Button
          ghost
          bordered
          shadow
          size={'lg'}
          className="button primary block"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </Button>
      </div>

      <div className='pb-4'>
        <Button
        ghost
        bordered
        shadow
        size={'lg'}
        className="button block"
        onClick={() => supabase.auth.signOut()}>
          Sign Out
        </Button>
      </div>
    </div>
    </div>
  )
};
