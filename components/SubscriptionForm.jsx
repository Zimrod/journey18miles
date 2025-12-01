// components/SubscriptionForm.jsx
import { useState } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('parent');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // reset status

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userType })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="community" className="my-12 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Join Our Community
        </h3>
        <p className="text-gray-600 mb-8">
          Be part of our growing network of parents, readers, and authors shaping African storytelling.
        </p>

        {/* Success & Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-700 font-medium">
              ✅ Check your email to verify your subscription! 
              Please confirm your email address to start receiving updates.
            </p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 font-medium">
              ❌ Something went wrong. Please try again later.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0"
        >
          {/* User Type Selection */}
          <div className="flex justify-center space-x-6">
            <label className="inline-flex items-center text-gray-700">
              <input
                type="radio"
                name="userType"
                value="parent"
                checked={userType === 'parent'}
                onChange={(e) => setUserType(e.target.value)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">Parent/Reader</span>
            </label>
            <label className="inline-flex items-center text-gray-700">
              <input
                type="radio"
                name="userType"
                value="author"
                checked={userType === 'author'}
                onChange={(e) => setUserType(e.target.value)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">Author/Writer</span>
            </label>
          </div>

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-lime-600 text-gray-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-colors duration-200 shadow-md"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}
