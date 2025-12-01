// pages/documents/delivery-shipping-policy.js
import ReactMarkdown from 'react-markdown'

const DELIVERY_SHIPPING_POLICY = `
# Delivery & Shipping Policy

**Last Updated: November 17, 2025**
**Company: Journey of 18 Miles**
**Website: www.journey18miles.com**

## 1. Platform Delivery Services Overview

Journey of 18 Miles operates as a digital marketplace connecting buyers, sellers, and providers. Our delivery and shipping services are categorized based on transaction types and user roles.

## 2. Digital Services Delivery

### 2.1 Platform Access & Account Activation
**Instant Digital Delivery:**
- Buyer accounts: Activated immediately upon registration
- Seller accounts: Activated within 24 hours of subscription payment verification
- Provider accounts: Activated within 3-5 business days after facility verification

**Service Availability:**
- Platform accessible 24/7 with scheduled maintenance notifications
- Real-time message filtering and matching services
- Instant notifications for matched products and buyers

### 2.2 Match Delivery & Notifications
**Delivery Method:** Digital notifications via:
- Platform dashboard
- Email notifications
- SMS alerts (optional)
- Mobile app push notifications

**Delivery Timeline:**
- Matches delivered in real-time as they are identified
- Notification delays: Typically under 5 minutes
- Scheduled digest options available

## 3. Physical Transaction Services

### 3.1 Safe Space Transactions
**Service Description:**
We provide verified physical locations where buyers and sellers can conduct transactions safely.

**Booking & Availability:**
- Safe spaces can be booked through the platform
- Same-day bookings available based on provider capacity
- Advance bookings: Up to 30 days in advance
- Cancellation: 24-hour notice required for full credit

**Service Delivery:**
- Transaction facilitation at provider locations
- Basic inspection facilities provided
- Secure payment handling available
- Transaction documentation provided

### 3.2 Provider Network Coverage
**Current Coverage:**
- Launch phase: Focused on major urban centers
- Expansion: Progressive rollout based on user density
- Rural access: Digital-only services initially

**Service Quality Standards:**
- All providers verified and inspected
- Minimum security requirements enforced
- Regular quality audits conducted
- User rating system for continuous improvement

## 4. Shipping for Physical Products

### 4.1 Seller Responsibility
**Primary Shipping Responsibility:**
Sellers are responsible for arranging and managing shipping for physical products. Journey of 18 Miles facilitates connections but does not handle physical logistics.

**Seller Shipping Requirements:**
- Clear shipping information in product listings
- Accurate delivery time estimates
- Proper packaging and handling
- Insurance for high-value items

### 4.2 Platform Shipping Partners
**Recommended Carriers:**
- Local courier services based on seller location
- National postal services
- Specialized carriers for specific item types
- International shipping partners for cross-border transactions

**Shipping Cost Responsibility:**
- Determined and disclosed by sellers
- Clearly stated in product listings
- Buyers responsible unless otherwise specified
- Platform not liable for shipping disputes

## 5. Delivery Timeframes & Guarantees

### 5.1 Digital Services
**Match Delivery:**
- Real-time: 90% of matches delivered within 5 minutes
- Maximum delay: 60 minutes during peak loads
- Scheduled maintenance: 48-hour advance notice

**Platform Performance:**
- Uptime guarantee: 99.5% monthly availability
- Scheduled maintenance: Maximum 4 hours monthly
- Emergency maintenance: Immediate notification

### 5.2 Physical Services
**Safe Space Bookings:**
- Confirmation: Within 2 hours of booking
- Availability: Real-time calendar integration
- Changes: 24-hour modification window

**Provider Services:**
- Operating hours: As specified by individual providers
- Emergency support: Available for booked transactions
- Quality assurance: Regular provider performance reviews

## 6. International Services

### 6.1 Cross-Border Transactions
**Digital Services:**
- Available globally where not restricted by local laws
- Multi-currency support
- Multi-language interface (progressive rollout)

**Physical Services:**
- Initially focused on primary operating regions
- Progressive international expansion
- Partner network development for global coverage

### 6.2 Regional Limitations
**Restricted Regions:**
Services may be limited in regions with:
- Legal restrictions on digital marketplaces
- Payment processing limitations
- Export/import restrictions affecting transactions

## 7. Service Modifications & Updates

### 7.1 Platform Enhancements
**Continuous Delivery:**
- Regular feature updates deployed automatically
- User notification for significant changes
- Backward compatibility maintained where possible

**Service Expansion:**
- New regions added based on user demand
- Additional services introduced progressively
- Partner network expanded continuously

### 7.2 Maintenance & Downtime
**Planned Maintenance:**
- Scheduled during low-traffic periods
- 48-hour advance notification
- Maximum 4-hour duration

**Emergency Maintenance:**
- Immediate platform notification
- Rapid resolution prioritization
- Post-incident reporting

## 8. Problem Resolution

### 8.1 Delivery Issues
**Digital Service Problems:**
- Report via support ticket system
- Initial response within 4 business hours
- Resolution timeline based on issue complexity

**Physical Service Problems:**
- Immediate provider contact for urgent issues
- Platform mediation available
- Escalation to customer service management

### 8.2 Service Quality Concerns
**Provider Performance:**
- User rating system for quality monitoring
- Regular provider performance reviews
- Progressive action for underperforming providers

**Platform Performance:**
- Continuous monitoring and optimization
- User feedback incorporation
- Regular service quality assessments

## 9. Policy Updates

We reserve the right to modify this Delivery & Shipping Policy to reflect:
- Service expansions and improvements
- Regulatory requirements
- User feedback and industry best practices
- Technological advancements

Significant changes will be communicated 30 days in advance.

## 10. Contact & Support

**Delivery & Shipping Inquiries:**
Email: support@journey18miles.com
Phone: +267 7166 3185
Response Time: Within 24 business hours

**Urgent Transaction Issues:**
Designated emergency support line for active transactions

---

**Our Commitment:**
We are dedicated to providing reliable, efficient delivery of both our digital matching services and physical transaction facilities. Your trust in our platform is our highest priority.

*The Journey of 18 Miles Team*
`;

export default function DeliveryShipping() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Delivery & Shipping Policy
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
          {DELIVERY_SHIPPING_POLICY}
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