import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SignInModal from "./SignInModal";
import { supabase } from '@/lib/supabase'

function Nav() {
  const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    let numItems = 0
    cart.forEach(item => {
      numItems += item.variantQuantity
    })
    setCartItems(numItems)
  }, [cart])

  // Get current user session
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession()
//       setUser(session?.user || null)
//     }

//     getSession()

    // Listen for auth state changes
    // const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    //   setUser(session?.user || null)
    // })

//     return () => subscription.unsubscribe()
//   }, [])

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     setIsUserMenuOpen(false)
//   }

  const truncateEmail = (email) => {
    if (!email) return ''
    const atIndex = email.indexOf('@')
    if (atIndex === -1) return email
    return email.substring(0, Math.min(7, atIndex)) + '...'
  }

  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-4 sm:px-6 pb-2 pt-3 md:pt-4">

        <Link href="/" passHref className="cursor-pointer">
          <h1 className="flex no-underline items-center">
            <img height="32" width="32" alt="logo" className="h-6 w-6 md:h-7 md:w-7 mr-1 object-contain" src="/icons/logo.svg" />
            <span className="text-lg md:text-xl font-primary font-bold tracking-tight">
              {process.env.siteTitle}
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 relative">
  {['Home', 'Scrolling', 'Specifik', 'Pricing', 'FAQ', 'Download', 'Contact'].map((item, index) => {
    const path = 
      item === 'Home'
        ? '/'
        : item === 'Contact'
          ? '/contact'  // This goes to a separate page
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
          {/* User email and dropdown */}
          <div className="flex items-center space-x-2">
            {user && (
              <span className="text-sm text-gray-600 hidden md:block">
                {truncateEmail(user.email)}
              </span>
            )}
            <div className="relative">
              <button
                className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-lime-100 transition-colors duration-200"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <FontAwesomeIcon icon={faUser} className={`w-5 h-5 ${user ? 'text-green-500' : 'text-gray-400'}`} />
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-md">
                  {user ? (
                    <button
                    //   onClick={handleSignOut}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 transition-colors"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false)
                          setIsSignInOpen(true)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 transition-colors"
                      >
                        Sign In
                      </button>
                      <Link
                        href="/#community"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Cart Icon */}
          <Link
            href="/cart"
            passHref
            className="relative p-1.5 rounded-lg hover:bg-lime-100 transition-colors duration-200"
            aria-label="cart"
          >
            <FontAwesomeIcon className="text-palette-primary w-5 md:w-6" icon={faShoppingCart} />
            {cartItems > 0 && (
              <div className="absolute top-0 right-0 text-[10px] md:text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-1.5 md:px-2 transform translate-x-2 -translate-y-2 md:translate-x-3 md:-translate-y-3">
                {cartItems}
              </div>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-1 p-4">
  {['Home', 'Scrolling', 'Specifik', 'Pricing', 'FAQ', 'Download', 'Contact'].map((item, index) => {
    const path = 
      item === 'Home'
        ? '/'
        : item === 'Contact'
          ? '/contact'  // This goes to a separate page
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
          </nav>
        </div>
      )}

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </header>
  )
}

export default Nav