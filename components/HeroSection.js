// components/HeroSection.js
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function HeroSection() {
  const router = useRouter()
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-lime-100 to-lime-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content - Left Side (50% on desktop, full width on mobile) */}
          <div className="w-full md:w-1/2 md:pr-8 lg:pr-12">
            <div className="text-center md:text-left">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-6 leading-tight">
                The Smartest Way to Buy, Sell & Trade Safely
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Specifik filters thousands of Telegram messages to connect buyers & sellers who can transact in safe spaces. They can opt to transact without middlemen & agents.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                    onClick={() => router.push('/')}
                    className="bg-lime-600 text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-xl"
                >
                    Explore
                </button>
                <button 
                    onClick={() => router.push('/')}
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-lime-600 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Image Content - Right Side (hidden on mobile, 50% on desktop) */}
          <div className="w-full md:w-1/2 md:block flex justify-center">
            <div className="relative w-full max-w-xl mx-auto">
              <Image
                src="/images/landing.svg"
                alt="African children reading and sharing stories"
                width={1200}
                height={1000}
                className="rounded-lg w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}