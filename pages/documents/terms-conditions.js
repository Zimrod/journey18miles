// pages/documents/terms-conditions.js
import ReactMarkdown from 'react-markdown'

const TERMS_CONDITIONS = `
# Terms & Conditions

**Last Updated: November 17, 2024**
**Company: Journey of 18 Miles**
**Website: www.journey18miles.com**

## 1. Acceptance of Terms

By accessing and using the Journey of 18 Miles platform ("Platform"), you agree to be bound by these Terms and Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our Platform.

## 2. Definitions

**"Platform"** refers to the Journey of 18 Miles website, mobile applications, and related services.

**"Buyer"** means any individual or entity using the Platform to search for, browse, or purchase products or services.

**"Seller"** means any individual or entity using the Platform to list, offer, or sell products or services.

**"Provider"** means any business or individual operating verified safe spaces for transactions.

**"Content"** includes all information, text, graphics, photos, and other materials uploaded to the Platform.

## 3. Account Registration and Security

### 3.1 Eligibility
You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our Platform.

### 3.2 Account Creation
- Provide accurate, current, and complete information during registration
- Maintain and promptly update your account information
- You are responsible for all activities under your account
- Notify us immediately of any unauthorized use of your account

### 3.3 Account Types
**Buyer Accounts:** Free access to browse, search, and contact sellers
**Seller Accounts:** Subscription-based access to list products and connect with buyers
**Provider Accounts:** Business verification required for safe space operations

## 4. Platform Services

### 4.1 For Buyers
- Access to filtered product listings from Telegram groups and direct sellers
- Preference-based matching and notifications
- Optional safe space transaction facilities
- Free basic services with optional premium features

### 4.2 For Sellers
- Product listing and matching services
- Access to interested buyers
- Multiple subscription tiers available
- Performance analytics and insights

### 4.3 For Providers
- Safe space hosting services
- Transaction facilitation
- Commission-based earnings
- Subscription-based platform access

## 5. Financial Terms

### 5.1 Subscription Fees
**Seller Subscriptions:**
- Various tiers based on features and transaction limits
- Automatic renewal unless canceled
- Price changes communicated 30 days in advance

**Provider Subscriptions:**
- Performance-based pricing models
- Minimum volume guarantees with pro-rata adjustments
- Setup fees for facility verification

### 5.2 Commissions and Payments
- Platform earns commissions on safe space transactions (2-3%)
- Providers earn revenue sharing on hosted transactions
- All payments processed through approved payment gateways
- Currency: Botswana Pula (BWP) or other supported currencies

### 5.3 Refund Policy
Refunds governed by our separate Return & Refund Policy. By using our services, you acknowledge and agree to the refund terms outlined therein.

## 6. User Responsibilities and Conduct

### 6.1 Prohibited Activities
You agree not to:
- Post false, inaccurate, or misleading content
- Engage in fraudulent, deceptive, or illegal activities
- Infringe upon intellectual property rights
- Harass, abuse, or harm other users
- Circumvent Platform fees or commission structures
- Use the Platform for any unauthorized commercial purposes

### 6.2 Content Standards
All user-generated content must:
- Be accurate and truthful
- Comply with all applicable laws
- Not contain offensive, defamatory, or illegal material
- Respect intellectual property rights
- Be appropriate for a general audience

### 6.3 Transaction Conduct
- Buyers and sellers are responsible for their transactions
- Platform provides optional safe spaces but does not guarantee transaction outcomes
- Users transact at their own risk for direct transactions
- Safe space transactions include basic mediation services

## 7. Intellectual Property

### 7.1 Platform Content
All Platform design, text, graphics, logos, and software are owned by Journey of 18 Miles and protected by intellectual property laws.

### 7.2 User Content
By posting content on the Platform, you grant Journey of 18 Miles a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content for Platform operations.

### 7.3 Trademarks
"Journey of 18 Miles" and related logos are trademarks of our company. Unauthorized use is prohibited.

## 8. Privacy and Data Protection

Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using the Platform, you consent to our data practices as described in the Privacy Policy.

## 9. Limitation of Liability

### 9.1 Platform Services
Journey of 18 Miles provides a platform for connecting buyers and sellers. We are not party to transactions between users and are not responsible for:

- The quality, safety, or legality of items listed
- The truth or accuracy of user content
- The ability of sellers to sell items or buyers to pay for them
- User actions online or offline

### 9.2 Financial Limits
Our total liability to you for all claims arising from or related to these terms or your use of the Platform shall not exceed the total commissions we earned from your transactions in the six months preceding the claim.

### 9.3 Jurisdictional Limitations
Some jurisdictions do not allow the exclusion or limitation of liability, so the above limitations may not apply to you.

## 10. Dispute Resolution

### 10.1 Mediation
For disputes arising from safe space transactions, we provide basic mediation services. Both parties must participate in good faith.

### 10.2 Governing Law
These Terms shall be governed by and construed in accordance with the laws of Botswana.

### 10.3 Arbitration
Any dispute arising from these Terms shall be resolved through binding arbitration in Gaborone, Botswana, in accordance with the Arbitration Act of Botswana.

## 11. Termination

### 11.1 By User
You may terminate your account at any time by contacting customer support or through your account settings.

### 11.2 By Platform
We may suspend or terminate your account if you:
- Violate these Terms and Conditions
- Engage in fraudulent or illegal activities
- Create risk or possible legal exposure for us
- Fail to pay applicable fees

### 11.3 Effects of Termination
- Your right to use the Platform immediately ceases
- Outstanding fees remain payable
- User content may be retained as required by law

## 12. Modifications to Terms

We reserve the right to modify these Terms at any time. We will provide notice of material changes through the Platform or via email. Continued use after changes constitutes acceptance of modified Terms.

## 13. Force Majeure

We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including acts of God, government actions, war, civil disturbance, terrorism, or internet service failures.

## 14. Severability

If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.

## 15. Entire Agreement

These Terms, together with our Privacy Policy and Return & Refund Policy, constitute the entire agreement between you and Journey of 18 Miles regarding your use of the Platform.

## 16. Contact Information

For questions about these Terms and Conditions:

**Journey of 18 Miles**  
Email: legal@journey18miles.com  
Phone: +267 7166 3185  
Address: Commerce Park, Gaborone, Botswana

---

*By using our Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.*
`;

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms & Conditions
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
          {TERMS_CONDITIONS}
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