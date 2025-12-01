import ContactForm from '@/components/ContactForm'
import Layout from '@/components/Layout'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our books, writer submissions, or anything else? 
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}