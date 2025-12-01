import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignOutAlt, faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SignInModal from "./SignInModal";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [user, setUser] = useState(null)

  const TELEGRAM_BOT_USERNAME = 'be_specifik_bot'

  // Check for existing user session on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const storedUser = localStorage.getItem('user')
        const isAuthenticated = localStorage.getItem('isAuthenticated')
        
        console.log('Auth check - storedUser:', storedUser)
        console.log('Auth check - isAuthenticated:', isAuthenticated)
        
        if (isAuthenticated === 'true' && storedUser) {
          const userData = JSON.parse(storedUser)
          console.log('Setting user from localStorage:', userData)
          setUser(userData)
        }
      } catch (error) {
        console.error('Error checking auth status:', error)
      }
    }

    checkAuthStatus()
  }, [])

  const openTelegramBot = () => {
    const telegramUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}`
    window.open(telegramUrl, '_blank')
  }

  const handleSignInSuccess = (userData) => {
    console.log('Sign in success callback, user:', userData)
    setUser(userData)
  }

  const handleSignOut = () => {
    console.log('Signing out...')
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    setUser(null)
    setIsUserMenuOpen(false)
  }

  // Get first name from full_name and truncate if longer than 8 characters
  const getFirstName = () => {
    if (!user || !user.full_name) return ''
    
    const fullName = user.full_name.trim()
    const firstName = fullName.split(' ')[0] // Get first name only
    
    if (firstName.length > 8) {
      return firstName.substring(0, 8) + '...'
    }
    
    return firstName
  }

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-4 sm:px-6 pb-2 pt-3 md:pt-4">

        <Link href="/" passHref className="cursor-pointer">
          <h1 className="flex no-underline items-center">
            <img height="50" width="50" alt="logo" className="h-8 w-8 md:h-8 md:w-8 mr-2 object-contain" src="/icons/logo.svg" />
            <span className="text-lg md:text-xl font-primary font-bold tracking-tight">
              {process.env.siteTitle}
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 relative">
          {['Home', 'Scrolling', 'Specifik', 'Pricing', 'FAQ', 'Facilitators', 'Contact'].map((item, index) => {
            const path = 
              item === 'Home'
                ? '/'
                : item === 'Contact'
                  ? '/contact'  
                  : item === 'Facilitators'
                    ? '/facilitators'
                    : `/#${item.toLowerCase()}`
            
            const isActive = hoveredLink === index
            
            return (
              <Link
                key={index}
                href={path}
                className="relative px-4 py-2 transition-all duration-300 ease-in-out"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className={`
                  absolute inset-0 bg-lime-200 rounded-lg transition-all duration-300 ease-in-out
                  ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                  -z-10
                `} />
                
                <span className={`
                  text-sm text-gray-700 relative z-10 transition-colors duration-200
                  ${isActive ? 'text-gray-900 font-medium' : 'hover:text-gray-900'}
                `}>
                  {item}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4 relative">
          {/* Desktop Sign In/Register/Sign Out Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <div className="relative">
                {/* User dropdown button */}
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-lime-100 rounded-lg transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                  <span>{getFirstName()}</span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`w-3 h-3 text-gray-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown menu */}
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-lime-100 transition-colors rounded-lg"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => setIsSignInOpen(true)}
                  className="px-4 py-2 text-sm text-gray-700 hover:border-gray-700 rounded-lg transition-colors duration-200 border border-gray-300 rounded-lg "
                >
                  Sign In
                </button>
                <button
                  onClick={openTelegramBot}
                  className="px-4 py-2 text-sm text-gray-700 hover:border-gray-700 rounded-lg transition-colors duration-200 border border-gray-300 rounded-lg "
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center space-x-2">
            {user ? (
              <div className="relative">
                {/* Mobile user dropdown button - only icon and arrow */}
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 p-2 text-gray-700 hover:bg-lime-100 rounded-lg transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`w-3 h-3 text-gray-500 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Mobile dropdown menu */}
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-200">
                      {getFirstName()}
                    </div>
                    <button
                      onClick={() => {
                        handleSignOut()
                        setIsUserMenuOpen(false)
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-lime-100 transition-colors"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : null}
            
            {/* Hamburger Button */}
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-lime-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="w-5 h-5 text-gray-700" 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg">
          <nav className="flex flex-col space-y-1 p-4">
            {['Home', 'Scrolling', 'Specifik', 'Pricing', 'FAQ', 'Facilitators', 'Contact'].map((item, index) => {
              const path = 
                item === 'Home'
                  ? '/'
                  : item === 'Contact'
                    ? '/contact'
                  : item === 'Facilitators'
                    ? '/facilitators'
                    : `/#${item.toLowerCase()}`
              
              return (
                <Link
                  key={index}
                  href={path}
                  className="text-sm text-gray-700 px-4 py-2.5 rounded-lg hover:bg-lime-200 hover:text-gray-900 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            })}
            
            {/* Mobile Auth Buttons */}
            <div className="border-t border-gray-200 pt-4 mt-2">
              {user ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm text-gray-500">
                    Signed in as {getFirstName()}
                  </div>
                  <button
                    onClick={() => {
                      handleSignOut()
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-left text-sm text-gray-700 px-4 py-2.5 rounded-lg hover:bg-lime-200 hover:text-gray-900 transition-all duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsSignInOpen(true)
                    }}
                    className="w-full text-left text-sm text-gray-700 px-4 py-2.5 rounded-lg hover:bg-lime-200 hover:text-gray-900 transition-all duration-200"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      openTelegramBot()
                    }}
                    className="w-full text-left text-sm text-gray-700 px-4 py-2.5 rounded-lg hover:bg-lime-200 hover:text-gray-900 transition-all duration-200"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}

      <SignInModal 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
        onSignInSuccess={handleSignInSuccess}
      />
    </header>
  )
}

export default Nav