// components/FAQSection.js
import { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    // Initial 6 visible questions
    {
      question: "How does the message filtering work?",
      answer: "Our AI-powered system analyzes thousands of Telegram messages against your specific preferences. When matching products are found, you receive instant notifications with complete details.",
      category: "buyer"
    },
    {
      question: "What happens after I find a product I want?",
      answer: "You can contact the seller directly through our platform or choose to meet at one of our verified safe spaces. For high-value items, we recommend using our secure transaction spaces.",
      category: "buyer"
    },
    {
      question: "How do I list my products as a seller?",
      answer: "Simply create a seller profile, set your product details once, and our system automatically matches you with interested buyers across multiple Telegram groups. No more repetitive posting.",
      category: "seller"
    },
    {
      question: "What are the benefits of becoming a facilitator?",
      answer: "Facilitators earn monthly subscription revenue plus commissions on transactions. We handle buyer-seller matching and routing, while you provide safe physical spaces for transactions.",
      category: "facilitator"
    },
    {
      question: "Is there a fee for buyers to use the platform?",
      answer: "No, buyers use our platform completely free. You only pay sellers directly for products. Safe space usage may involve minimal facility fees handled by facilitators.",
      category: "buyer"
    },
    {
      question: "How are disputes handled between buyers and sellers?",
      answer: "For transactions conducted through our safe spaces, we provide basic mediation. For direct transactions, we recommend clear communication and documentation between parties.",
      category: "general"
    },
    // Additional 6 questions (initially hidden)
    {
      question: "What subscription plans are available for sellers?",
      answer: "We offer flexible plans starting from $5/month with our launch offer, scaling based on your sales volume and feature needs. All plans include basic matching and notifications.",
      category: "seller"
    },
    {
      question: "How do facilitator commissions work?",
      answer: "Facilitators earn 2-3% commission on transaction value conducted at their spaces, plus monthly subscription fees. Higher tiers offer better commission rates and more transaction volume.",
      category: "facilitator"
    },
    {
      question: "Can I use the platform without Telegram?",
      answer: "Yes! While we specialize in Telegram group filtering, buyers can browse direct listings and sellers can reach buyers through our internal marketplace without Telegram involvement.",
      category: "general"
    },
    {
      question: "What safety measures are in place for transactions?",
      answer: "We offer optional verified safe spaces with security monitoring, transaction documentation, and basic dispute resolution. Facilitators are vetted and facilities are inspected regularly.",
      category: "buyer"
    },
    {
      question: "How quickly will I start getting matches as a seller?",
      answer: "Most sellers see their first matches within 24 hours. The system continuously scans Telegram groups and our buyer database to find perfect matches for your products.",
      category: "seller"
    },
    {
      question: "What are the requirements to become a facilitator?",
      answer: "Facilitators need secure physical spaces, basic amenities, proper business registration, and insurance. We help with setup and provide ongoing support to ensure success.",
      category: "facilitator"
    },
    {
      question: "Can I sell services, not just physical products?",
      answer: "Absolutely! Our platform supports service listings including freelance work, repairs, consultations, and more. Set your service details and get matched with clients.",
      category: "seller"
    },
    {
      question: "What happens if a facilitator doesn't get enough business?",
      answer: "We have performance-based subscription models. If we don't deliver sufficient transaction volume, facilitators pay reduced fees. We're invested in your success.",
      category: "facilitator"
    },
    {
      question: "How do I set my product preferences as a buyer?",
      answer: "Download our simple Specifik mobile app to specify categories, price ranges, locations, and specific features. You can save multiple preference sets for different needs.",
      category: "buyer"
    },
    {
      question: "Are there geographic limitations?",
      answer: "We're launching in key markets but expanding rapidly. Currently focused on urban centers with plans for nationwide coverage. Check your city's availability during signup.",
      category: "general"
    },
    {
      question: "What payment methods are supported?",
      answer: "We support cash transactions at safe spaces, mobile money, bank transfers, and eventually platform-managed escrow for high-value items. Flexibility is key for different markets.",
      category: "general"
    },
    {
      question: "How do I upgrade my seller or facilitator account?",
      answer: "You can upgrade anytime through your dashboard. Higher tiers offer more features, better visibility, and increased transaction limits. No long-term contracts required.",
      category: "general"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);
  const hiddenCount = faqs.length - 6;

  return (
    <section id="faq-section" className="bg-blue-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        {/* Category Filters */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            All Questions
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            For Buyers
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            For Sellers
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            For facilitators
          </button>
        </div> */}

        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-400 rounded-lg overflow-hidden bg-blue-50">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full px-5 py-4 text-left text-lg font-medium text-gray-800 hover:bg-orange-50 transition"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600">
                  {faq.answer}
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      {faq.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More/Less Button */}
        {!showAll && hiddenCount > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              <Plus className="w-4 h-4" />
              Show {hiddenCount} More Questions
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              <ChevronUp className="w-4 h-4" />
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}