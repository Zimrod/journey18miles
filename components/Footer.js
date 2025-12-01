import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="bg-green-50 py-8 px-4 font-primary">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 text-palette-primary mt-1" />
              <div>
                <p className="text-gray-700">Commerce Park</p>
                <p className="text-gray-700">Gaborone, Botswana</p>
              </div>
            </div>
          </div>

          {/* Customer Service Contacts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Customer Service</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="w-5 text-palette-primary" />
                <span className="text-gray-700">+267 7166 3185</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="w-5 text-palette-primary" />
                <span className="text-gray-700">+263 777 709 534</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 text-palette-primary" />
                <span className="text-gray-700">admin@journey18miles.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li><a href="/about" className="text-gray-700 hover:text-palette-primary transition">About Us</a></li> */}
              <li><a href="/contact" className="text-gray-700 hover:text-palette-primary transition">Contact Us</a></li>
              <li><a href="#faq-section" className="text-gray-700 hover:text-palette-primary transition">FAQ</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
            <div className="text-gray-700 space-y-1">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Policy Documents Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Important Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/documents/customer-service-procedures" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Customer Service Procedures</h4>
              <p className="text-sm text-gray-600">Contact information for inquiries and complaints</p>
            </a>
            
            <a href="/documents/return-refund-policy" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Return/Refund Policy</h4>
              <p className="text-sm text-gray-600">Clear guidelines on refunds and returns</p>
            </a>
            
            <a href="/documents/delivery-shipping-policy" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Delivery & Shipping Policy</h4>
              <p className="text-sm text-gray-600">Delivery methods, timelines, and logistics</p>
            </a>
            
            <a href="/documents/privacy-policy" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Privacy Policy</h4>
              <p className="text-sm text-gray-600">Consumer data privacy and protection</p>
            </a>
            
            <a href="/documents/terms-conditions" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Terms & Conditions</h4>
              <p className="text-sm text-gray-600">Website usage terms and conditions</p>
            </a>

            <a href="/documents/buyers-guidelines" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Buyers Guidelines</h4>
              <p className="text-sm text-gray-600">Find the product or service you need</p>
            </a>

            <a href="/documents/sellers-guidelines" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Sellers Guidelines</h4>
              <p className="text-sm text-gray-600">How to set your product match preferences</p>
            </a>

            <a href="/documents/facilitators-guidelines" className="text-gray-700 hover:text-palette-primary transition block p-3 bg-green-100 rounded-lg shadow-sm hover:shadow-md">
              <h4 className="font-medium mb-1">Facilitator Guidelines</h4>
              <p className="text-sm text-gray-600">Make a commission for every transaction</p>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
            <span className="text-gray-600">© {new Date().getFullYear()} Journey of 18 Miles. All rights reserved.</span>
            <span className="text-gray-600">Built with</span>
            <FontAwesomeIcon icon={faHeart} className="w-4 text-red-600 mx-1" />
            <span className="text-gray-600">by</span>
            <a
              href="/"
              className="text-palette-primary font-bold hover:underline"
            >
              Tech Bandits
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer