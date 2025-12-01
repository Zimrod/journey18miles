// components/Redefine.js
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Redefine() {
  const router = useRouter()
  
  return (
    <section className="min-h-screen bg-yellow-400" id="specifik">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
    <div className="flex flex-col md:flex-row items-center">
      
      {/* Text Content - Left Side */}
      <div className="w-full md:w-1/2 md:pr-8 lg:pr-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Redefine Social Media Interactions
          </h2>

          <ul className="text-lg md:text-xl text-gray-700 mb-8 space-y-4">
    <li className="flex items-start">
        <svg className="w-5 h-5 text-gray-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Works as a silent extension to Telegram & WhatsApp — no app switching needed for your daily deals</span>
    </li>
    <li className="flex items-start">
        <svg className="w-5 h-5 text-gray-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>One-time setup for product categories, price ranges, locations, and specific brands you're hunting for</span>
    </li>
    <li className="flex items-start">
        <svg className="w-5 h-5 text-gray-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Review past matches, track market trends, and refine your preferences based on what's actually available</span>
    </li>
    <li className="flex items-start">
        <svg className="w-5 h-5 text-gray-700 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>The app works 24/7 in the background — you only open it to update preferences or check your match statistics</span>
    </li>
</ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href=""
              className="bg-brown-500 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-xl"
            >
              Download Specifik
            </a>
            <a
              href="/"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Image Content - Right Side */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="relative w-full max-w-[600px] mx-auto">
          <img
            src="/images/specifik-ui.svg"
            alt="specifik ui"
            className="rounded-lg w-full h-auto object-contain"
            style={{ width: '540px', height: '540px' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>
)
}
