import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/lib/supabase'

export default function SignInSuccess() {
  const router = useRouter()
  const [status, setStatus] = useState('Signing you in...')

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) {
      setStatus('No authentication token found.')
      return
    }

    const params = new URLSearchParams(hash.slice(1))
    const access_token = params.get('access_token')

    if (!access_token) {
      setStatus('Invalid or missing token.')
      return
    }

    // Use token to sign the user in
    supabase.auth.setSession({
      access_token,
      refresh_token: params.get('refresh_token')
    }).then(({ data, error }) => {
      if (error) {
        setStatus('Failed to sign in. Please try again.')
      } else {
        setStatus('Successfully signed in! Redirecting...')
        setTimeout(() => router.push('/'), 2000) // Redirect after 2s
      }
    })
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-3">Sign In Successful</h1>
        <p className="text-gray-600">{status}</p>
      </div>
    </div>
  )
}