// pages/documents/privacy-policy.js
import ReactMarkdown from 'react-markdown'

const PRIVACY_POLICY = `
# Consumer Data Privacy Policy

**Last Updated: ${new Date().toUTCString().split(' ').slice(1, 4).join(' ')}**

## 1. Introduction

### 1.1 Purpose
At Journey of 18 Miles, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

### 1.2 Scope
This policy applies to all personal data collected through our website, email communications, and any related services, sales, marketing, or events.

## 2. Information We Collect

### 2.1 Personal Information You Provide
When you make a purchase or create an account, we may collect:
- Name and contact information (email address, phone number)
- Billing and shipping addresses
- Payment information (processed securely by our payment providers)
- Communication preferences

### 2.2 Information Collected Automatically
When you visit our website, we may collect:
- IP address and browser type
- Device information
- Pages visited and time spent on site
- Referring website addresses
- Cookies and similar tracking technologies

### 2.3 Information from Third Parties
We may receive information about you from:
- Payment processors (to confirm transaction completion)
- Analytics providers (Google Analytics)
- Marketing partners (with your consent)

## 3. How We Use Your Information

### 3.1 To Provide Our Services
We use your information to:
- Process your orders and deliver products
- Communicate about your account and purchases
- Provide customer support
- Send transactional emails (order confirmations, shipping updates)

### 3.2 For Marketing Communications
With your consent, we may:
- Send information about new stories, authors, and promotions
- Inform you about special events and author features

### 3.3 To Improve Our Services
We use data to:
- Analyze website usage and trends
- Enhance user experience and website functionality
- Develop new products and services

## 4. Legal Basis for Processing

### 4.1 Contract Performance
We process your data when necessary to fulfill orders and provide the services you request.

### 4.2 Legitimate Interests
We process data for our legitimate business interests, such as improving our services and marketing, while ensuring these interests don't override your rights.

### 4.3 Consent
Where required by law, we obtain your consent before processing your personal data for specific purposes.

## 5. Data Sharing and Disclosure

### 5.1 Service Providers
We may share your information with:
- Payment processors (PayPal, Stripe, etc.)
- Email service providers for communications
- IT and cloud storage providers

### 5.2 Legal Requirements
We may disclose your information if required to do so by law or in response to valid requests by public authorities.

### 5.3 Business Transfers
In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

## 6. International Data Transfers

### 6.1 Data Processing
Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy.

## 7. Data Retention

### 7.1 Retention Period
We retain your personal information only for as long as necessary to:
- Fulfill the purposes we collected it for
- Satisfy any legal, accounting, or reporting requirements
- Support ongoing customer relationships

### 7.2 Criteria for Determining Retention
We consider the amount, nature, and sensitivity of the data, potential risk from unauthorized use, and legal requirements when determining retention periods.

## 8. Your Data Protection Rights

### 8.1 Access and Update
You have the right to:
- Access the personal information we hold about you
- Request correction of inaccurate or incomplete information
- Request deletion of your personal data
- Object to processing of your personal data
- Request restriction of processing your personal data
- Request transfer of your data to another service
- Withdraw consent at any time

### 8.2 Exercising Your Rights
To exercise any of these rights, please contact us at **admin@journey18miles.com**. We respond to all legitimate requests within one month.

## 9. Cookies and Tracking Technologies

### 9.1 Types of Cookies We Use
- Essential cookies (necessary for website functionality)
- Analytics cookies (to understand how visitors use our site)
- Marketing cookies (to deliver relevant advertisements)

### 9.2 Cookie Management
You can set your browser to refuse all or some cookies, or to alert you when websites set or access cookies.

## 10. Data Security

### 10.1 Protection Measures
We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.

### 10.2 Security Practices
These measures include:
- SSL encryption for data transmission
- Secure payment processing
- Regular security assessments
- Limited access to personal data on a need-to-know basis

## 11. Policy Updates

### 11.1 Changes to This Policy
We may update this privacy policy from time to time. The updated version will be indicated by a revised "Last Updated" date and will be effective immediately.

### 11.2 Notification of Changes
We will notify you of any material changes by posting the new policy on our website and, where appropriate, through email notification.

## 12. Contact Us

For questions about this privacy policy or our data practices:
**Journey of 18 Miles**  
Email: admin@journey18miles.com  
Phone: +267 7166 3185 / +263 777 709 534  
Business Hours: Monday-Friday, 8:00 AM - 5:00 PM Botswana Time
`;

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Consumer Data Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm">
          Last Updated: {new Date().toUTCString().split(' ').slice(1, 4).join(' ')}
        </p>
      </div>

      {/* Policy Content */}
      <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <ReactMarkdown
          components={{
            // Custom styling for markdown elements
            h2: ({node, ...props}) => (
              <h2 
                {...props} 
                className="text-xl font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200 first:mt-0"
              />
            ),
            h3: ({node, ...props}) => (
              <h3 
                {...props} 
                className="text-lg font-medium text-gray-800 mt-6 mb-3"
              />
            ),
            p: ({node, ...props}) => (
              <p 
                {...props} 
                className="text-gray-700 text-sm leading-6 mb-4"
              />
            ),
            ul: ({node, ...props}) => (
              <ul 
                {...props} 
                className="text-gray-700 text-sm list-disc list-inside mb-4 space-y-1"
              />
            ),
            li: ({node, ...props}) => (
              <li 
                {...props} 
                className="text-gray-700 text-sm"
              />
            ),
            strong: ({node, ...props}) => (
              <strong 
                {...props} 
                className="font-semibold text-gray-900"
              />
            ),
          }}
        >
          {PRIVACY_POLICY}
        </ReactMarkdown>

        {/* Section Dividers */}
        <style jsx>{`
          h2 {
            position: relative;
          }
          h2:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
          }
        `}</style>
      </article>
    </div>
  )
}