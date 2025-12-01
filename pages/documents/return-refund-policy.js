// pages/documents/return-refund-policy.js
import ReactMarkdown from 'react-markdown'

const RETURN_REFUND_POLICY = `
# Return & Refund Policy

**Last Updated: ${new Date().toUTCString().split(' ').slice(1, 4).join(' ')}**

## 1. Subscription Services Refund Policy

### 1.1 Seller Subscriptions
**Launch Offer (First 6 Months):**
- **$5 One-Time Payment**: Fully refundable if no matches are made within 90 days
- **Subscription Activation**: First successful match triggers monthly subscription
- **Monthly Subscriptions**: Refundable only if no matches occur in the first 30 days of each billing cycle

**Standard Subscriptions:**
- Refund requests must be made within 14 days of subscription start
- Partial refunds may be issued for unused time if no matches were made
- Once matches occur, subscriptions become non-refundable

### 1.2 Provider Subscriptions
**Performance-Based Guarantee:**
- If we deliver less than 70% of promised transaction volume for 3 consecutive months, you qualify for a 50% refund or account credit
- Setup and verification fees are non-refundable once facility approval is completed
- Monthly subscriptions are refundable on a pro-rata basis if we fail to deliver adequate buyer traffic

### 1.3 Match Credits
- Match credits never expire and are transferable between categories
- Used credits are non-refundable
- Unused credits can be transferred to other sellers but not refunded for cash

## 2. Transaction Disputes & Mediation

### 2.1 Safe Space Transactions
For transactions conducted at our verified safe spaces:
- Basic mediation services are included
- Platform liability is limited to commission refunds (1-2% of transaction value)
- We do not refund the actual product purchase amount
- Dispute resolution focuses on fair process, not product quality judgments

### 2.2 Direct Transactions
For buyer-seller transactions conducted without safe spaces:
- Platform provides limited guidance only
- No refunds or mediation services offered
- Users transact at their own risk
- We recommend using safe spaces for high-value items

## 3. Buyer Protection

### 3.1 Platform Services
- Buyer matching and notification services are completely free
- No refunds necessary as no payments are required from buyers

### 3.2 Safe Space Usage Fees
- Fees for using verified safe spaces are non-refundable once booked
- Cancellations must be made 24 hours in advance for credit toward future use
- No-shows forfeit the space usage fee

## 4. Bank & Payment Processing Fees

### 4.1 Non-Refundable Fees
All bank and payment processing fees (2.5%-5% of transaction amounts) are **non-refundable** in any circumstance. These are third-party financial institution charges beyond our control.

### 4.2 Refund Calculations
When refunds are issued:
- Original transaction fees are deducted
- Refunds are issued to original payment methods
- Processing time: 5-10 business days

## 5. Special Circumstances

### 5.1 Platform Service Interruption
If our platform experiences extended downtime (more than 48 consecutive hours):
- Affected users receive service credit extensions
- Pro-rata refunds considered for premium subscribers

### 5.2 Duplicate Charges
- Report duplicate charges within 7 days
- We investigate and refund duplicates within 24 hours
- Provide transaction IDs for verification

### 5.3 Unauthorized Account Activity
- Report suspicious activity immediately
- We work with financial institutions to resolve issues
- Account security is shared responsibility

## 6. How to Request Refunds

### 6.1 Contact Information
**Journey of 18 Miles Platform Support**  
Email: support@journey18miles.com  
Phone: [+267 7166 3185]  
Response Time: 24-48 business hours

### 6.2 Required Information
- Your account email/username
- Subscription or transaction ID
- Date of purchase/transaction
- Detailed reason for refund request
- Supporting evidence (screenshots, etc.)

## 7. Policy Updates

We reserve the right to modify this policy with 30 days notice. Current subscribers maintain the policy terms active at their subscription start date.

## 8. Regional Compliance

This policy complies with consumer protection regulations in our operating regions across Africa. Local laws may provide additional protections in specific jurisdictions.

---

**Need Help?**  
Contact our support team at support@journey18miles.com for any questions about this policy or to discuss your specific situation.

*Journey of 18 Miles - Building Africa's Most Trusted Trading Platform*
`;

export default function ReturnRefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Return & Refund Policy
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
          {RETURN_REFUND_POLICY}
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