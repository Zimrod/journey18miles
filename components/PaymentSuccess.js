import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function PaymentSuccess() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      router.push('/')
    }, 9000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <>
      <Head>
        <title>Payment Successful - BeSpecifik</title>
        <meta name="description" content="Payment completed successfully" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Animated Checkmark */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Circle */}
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-scale-in">
                {/* Checkmark */}
                <svg 
                  className="w-12 h-12 text-white animate-draw-check"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
            Success!
          </h1>
          
          <p className="text-lg text-gray-600 mb-2 animate-fade-in-delayed">
            Your payment was processed successfully.
          </p>
          
          <p className="text-gray-500 mb-6 animate-fade-in-delayed-2">
            Your subscription is now active. Redirecting you to the homepage...
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-green-500 h-2 rounded-full animate-progress-bar"></div>
          </div>

          {/* Continue Button */}
          <button
            onClick={() => router.push('/')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
          >
            Continue to Homepage
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes draw-check {
          0% {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
          }
          100% {
            stroke-dasharray: 50;
            stroke-dashoffset: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-draw-check {
          animation: draw-check 0.8s ease-out 0.3s forwards;
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.6s ease-out 0.7s forwards;
          opacity: 0;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in 0.6s ease-out 0.9s forwards;
          opacity: 0;
        }

        .animate-progress-bar {
          animation: progress-bar 3s ease-in-out forwards;
        }
      `}</style>
    </>
  )
}