// components/Providers.js
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Providers() {
  const router = useRouter()

  return (
    <section className="min-h-screen bg-gray-200" id="facilitate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="flex flex-col md:flex-row-reverse items-center">
            
                {/* Text Content - Right Side on desktop */}
                <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                            Host Buyer & Seller Transactions, Earn Steady Income
                        </h2>

                        <ul className="text-lg md:text-xl text-gray-800 mb-8 space-y-4">
    <li className="flex items-start">
        <svg className="w-5 h-5 text-lime-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Pre-matched buyers & sellers delivered to you</span>
    </li>
    <li className="flex items-start">
        <svg className="w-5 h-5 text-lime-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>You provide safe, monitored physical environment</span>
    </li>
    <li className="flex items-start">
        <svg className="w-5 h-5 text-lime-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Commission on every transaction</span>
    </li>
    <li className="flex items-start">
        <svg className="w-5 h-5 text-lime-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Extra commissions on escrow services</span>
    </li>
</ul>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            
                            <Link href="/facilitators">
                                <button className="bg-brown-600 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-xl">
                                    Apply to be a Facilitator
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Image Content - Left Side on desktop */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0">
                    <div className="relative w-full max-w-[600px] mx-auto">
                        <img
                            src="/images/warehouse-goods.svg"
                            alt="African storybooks illustration"
                            className="rounded-lg w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}