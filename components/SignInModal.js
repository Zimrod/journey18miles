import { useState, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { countryCodes } from '@/lib/countryCodes' 

function SignInModal({ isOpen, onClose, onSignInSuccess }) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1')
  const [showCountryPicker, setShowCountryPicker] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState('')

  // Filter countries based on search query - only by country name
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return countryCodes
    
    const query = searchQuery.toLowerCase().trim()
    return countryCodes.filter(country => 
      country.country.toLowerCase().includes(query) ||
      country.country.toLowerCase().startsWith(query)
    )
  }, [searchQuery])

  const handleSignIn = async () => {
    // Clear previous errors
    setError('')

    // Validate individual fields with specific error messages
    if (!phoneNumber.trim() && !pinCode.trim()) {
      setError('Please enter both phone number and PIN code')
      return
    }

    if (!phoneNumber.trim()) {
      setError('Please enter your phone number')
      return
    }

    if (!pinCode.trim()) {
      setError('Please enter your PIN code')
      return
    }

    if (pinCode.length !== 4) {
      setError('Please enter a valid 4-digit PIN code')
      return
    }

    setIsLoading(true)
    try {
      console.log('Starting sign in process...')
      const fullPhoneNumber = selectedCountryCode + phoneNumber
      console.log('Sending request with:', { phoneNumber: fullPhoneNumber, pinCode })

      const response = await fetch('https://j18miles-signin-api-production.up.railway.app/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: fullPhoneNumber,
          pinCode
        })
      })

      console.log('Response status:', response.status)
      
      const result = await response.json()
      console.log('Full response:', result)

      if (!response.ok) {
        // Handle specific error messages from backend
        let errorMessage = 'Invalid phone number or PIN code. Please try again.'
        
        if (result.detail) {
          // Map backend error messages to user-friendly ones
          if (result.detail.includes('Invalid phone number') || result.detail.includes('Invalid credentials')) {
            errorMessage = 'Invalid phone number or PIN code. Please try again.'
          } else if (result.detail.includes('Invalid PIN code')) {
            errorMessage = 'Please enter a valid 4-digit PIN code'
          } else if (result.detail.includes('Service')) {
            errorMessage = 'Service temporarily unavailable. Please try again later.'
          } else {
            errorMessage = result.detail
          }
        }
        
        setError(errorMessage)
        return
      }

      // Handle success - store user data and update parent component
      console.log('Sign in successful! User:', result.user)
      
      // Store user data in localStorage or context
      localStorage.setItem('user', JSON.stringify(result.user))
      localStorage.setItem('isAuthenticated', 'true')
      
      // Notify parent component about successful sign-in
      if (onSignInSuccess) {
        onSignInSuccess(result.user)
      }
      
      // Reset form and close modal
      setPhoneNumber('')
      setPinCode('')
      setSearchQuery('')
      setError('') // Clear any errors
      onClose()
        
    } catch (error) {
      console.error('Sign in error:', error)
      // Only set error for network errors
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const formatPhoneNumber = (text) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 15)
    setPhoneNumber(cleaned)
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handlePinCodeChange = (value) => {
    setPinCode(value.replace(/\D/g, '').slice(0, 4))
    // Clear error when user starts typing
    if (error) setError('')
  }

  // Reset search when dropdown closes
  const handleDropdownToggle = () => {
    if (showCountryPicker) {
      setSearchQuery('') // Clear search when closing dropdown
    }
    setShowCountryPicker(!showCountryPicker)
  }

  // Clear errors when modal closes
  const handleClose = () => {
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
        {/* Prevent background scrolling */}
        <style jsx global>{`
        body {
            overflow: hidden;
        }
        `}</style>

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Sign In</h2>
                <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                {/* Phone Number Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                    </label>
                    <div className="flex space-x-2">
                    {/* Country Code Selector */}
                    <div className="relative">
                        <button
                        type="button"
                        onClick={handleDropdownToggle}
                        className="flex items-center justify-between w-24 px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                        >
                        <span className="text-sm">
                            {countryCodes.find(c => c.code === selectedCountryCode)?.flag} {selectedCountryCode}
                        </span>
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                            className={`w-3 h-3 text-gray-500 transition-transform ${showCountryPicker ? 'rotate-180' : ''}`}
                        />
                        </button>

                        {showCountryPicker && (
                        <div className="absolute top-full left-0 mt-1 w-64 max-h-60 bg-white border border-gray-300 rounded-lg shadow-lg z-10 flex flex-col">
                            {/* Fixed Search Header */}
                            <div className="p-3 border-b border-gray-200 bg-white sticky top-0">
                            <div className="relative">
                                <FontAwesomeIcon 
                                icon={faSearch} 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" 
                                />
                                <input
                                type="text"
                                placeholder="Search country names..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                                autoFocus
                                />
                            </div>
                            </div>

                            {/* Scrollable Country List */}
                            <div className="flex-1 overflow-y-auto max-h-48">
                            {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                    setSelectedCountryCode(country.code)
                                    setShowCountryPicker(false)
                                    setSearchQuery('') // Clear search when country is selected
                                    }}
                                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                                >
                                    <span className="mr-2 text-base">{country.flag}</span>
                                    <span className="flex-1 text-left">{country.country}</span>
                                    <span className="text-gray-600">{country.code}</span>
                                </button>
                                ))
                            ) : (
                                <div className="px-3 py-4 text-center text-sm text-gray-500">
                                No countries found
                                </div>
                            )}
                            </div>
                        </div>
                        )}
                    </div>

                    {/* Phone Number Input */}
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => formatPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                        maxLength={15}
                    />
                    </div>
                </div>

                {/* PIN Code Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    PIN Code
                    </label>
                    <input
                    type="password"
                    value={pinCode}
                    onChange={(e) => handlePinCodeChange(e.target.value)}
                    placeholder="Enter 4-digit PIN"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                    maxLength={4}
                    />
                </div>

                {/* Help Text */}
                <p className="text-xs text-gray-500">
                    Make sure you've registered through our Telegram bot and use the same phone number you shared with the bot.
                </p>
                </div>

                {/* Error Message */}
                {error && (
                <div className="px-6 pb-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                </div>
                )}

                {/* Footer */}
                <div className="flex space-x-3 p-6 border-t border-gray-200">
                <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                    disabled={isLoading}
                >
                    Cancel
                </button>
                <button
                    onClick={handleSignIn}
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
                </div>
            </div>
        </div>
    </>  
  )
}

export default SignInModal

// If you want next I can generate:

// SQL for a monthly reset of message_usage

// SQL for enforcing max group creation

// SQL for validating member joins

// n8n workflows (JSON) for message filtering + subscription enforcement