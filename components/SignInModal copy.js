import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/sign-in-success` } // Changed to sign-in-success
      });

      if (error) {
        setMessage('Something went wrong. Please try again.');
      } else {
        setMessage('Check your email for a magic link to sign in!');
      }
    } catch (err) {
      console.error('Sign in error:', err);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 hover:border-green-600 transition rounded-md px-4 py-2 focus:ring-2 focus:ring-lime-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-lime-500 text-gray-800 py-2 rounded-md shadow-md hover:shadow-xl transition"
          >
            {loading ? 'Sending...' : 'Send Magic Link'}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}

        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-500 text-sm hover:text-gray-900"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
