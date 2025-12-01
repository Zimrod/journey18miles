// pages/documents/return-refund-policy.js
import ReactMarkdown from 'react-markdown'

const CUSTOMER_SERVICE_PROCEDURES = `
# Customer Service Procedures

**Last Updated: ${new Date().toUTCString().split(' ').slice(1, 4).join(' ')}**
**Company: Journey of 18 Miles**
**Website: www.journey18miles.com**

## 1. Service Philosophy & Standards

### 1.1 Our Commitment
At Journey of 18 Miles, we are committed to:
- Providing exceptional, personalized customer service
- Responding to all inquiries within 24 business hours
- Resolving issues with empathy and efficiency
- Maintaining transparency in all communications
- Continuously improving our service based on customer feedback

### 1.2 Service Hours
**Standard Support Hours:**
- Monday - Friday: 8:00 AM - 5:00 PM Botswana Time
- Saturday: 9:00 AM - 1:00 PM Botswana Time
- Sunday: Closed (Emergency support only)

**Emergency Support:**
Available for critical platform issues affecting multiple users

## 2. Communication Channels & Response Times

### 2.1 Primary Contact Methods

**Email Support:**
- General Inquiries: admin@journey18miles.com
- Technical Support: support@journey18miles.com
- Facilitators Applications: support@journey18miles.com
- **Response Time:** Within 24 business hours

**Phone Support:**
- Primary: +267 7166 3185
- **Availability:** During standard business hours
- **Voicemail:** Available after hours with next-business-day callback

**Live Chat:**
- Available on website during business hours
- **Response Time:** Under 5 minutes during active hours

### 2.2 Escalation Procedures

**Level 1: Frontline Support**
- Handles: General inquiries, basic technical issues, account questions
- Resolution Time: 24-48 hours

**Level 2: Technical Specialists**
- Handles: Complex technical issues, platform bugs, integration problems
- Escalation Time: Within 4 hours of Level 1 assessment
- Resolution Time: 48-72 hours

**Level 3: Management Escalation**
- Handles: Complaints, refund requests, policy exceptions
- Escalation Time: Immediate for urgent matters
- Resolution Time: 24 hours for response, 5 days for resolution

## 3. User-Specific Service Protocols

### 3.1 Buyer Support Procedures

**Common Buyer Issues:**
- Account setup and preference configuration
- Match notification problems
- Safe space booking assistance
- Seller communication facilitation

**Standard Responses:**
- Account issues: Resolution within 4 hours
- Technical problems: Diagnosis within 8 hours
- Match concerns: Investigation within 24 hours

### 3.2 Seller Support Procedures

**Seller Onboarding:**
- Application review: 2-3 business days
- Account activation: Within 24 hours of approval
- Initial setup assistance: Scheduled call available

**Ongoing Seller Support:**
- Match performance analysis: Weekly reports available
- Subscription management: Real-time updates
- Payment issues: Resolution within 48 hours

### 3.3 Facilitator Support Procedures

**Facilitator Application Process:**
- Initial review: 3-5 business days
- Facility verification: Scheduled within 7 days
- Onboarding completion: 2 weeks from application

**Facilitator Relationship Management:**
- Monthly performance reviews
- Dedicated account manager for Enterprise tier
- Quarterly business development consultations

## 4. Issue Resolution Framework

### 4.1 Problem Classification

**Priority 1 - Critical:**
- Platform completely unavailable
- Security breaches
- Payment system failures
- **Response:** Immediate, 24/7

**Priority 2 - High:**
- Major feature malfunction
- Multiple users affected
- Data integrity issues
- **Response:** Within 4 business hours

**Priority 3 - Medium:**
- Individual user technical issues
- Feature requests
- Account-specific problems
- **Response:** Within 24 business hours

**Priority 4 - Low:**
- General inquiries
- Documentation requests
- Feedback submissions
- **Response:** Within 48 business hours

### 4.2 Resolution Timelines

**Technical Issues:**
- Diagnosis: 24 hours
- Temporary fix: 48 hours
- Permanent solution: 5-10 business days

**Billing Issues:**
- Investigation: 24 hours
- Resolution: 3-5 business days
- Refund processing: 5-7 business days

**Account Management:**
- Updates: Real-time
- Verification: 24-48 hours
- Closure requests: 48 hours

## 5. Quality Assurance & Monitoring

### 5.1 Service Metrics

**Key Performance Indicators:**
- First response time: <24 hours (95% of cases)
- Issue resolution rate: 90% within SLA
- Customer satisfaction score: >4.5/5.0
- Escalation rate: <5% of total tickets

### 5.2 Customer Feedback Collection

**Methods:**
- Post-resolution satisfaction surveys
- Quarterly customer experience reviews
- Platform usability feedback forms
- Facilitator performance ratings

**Feedback Implementation:**
- Monthly service procedure reviews
- Quarterly policy updates based on trends
- Annual comprehensive procedure overhaul

## 6. Training & Documentation

### 6.1 Staff Training Requirements

**New Hire Training:**
- Platform knowledge: 2 weeks
- Service procedures: 1 week
- Escalation protocols: 3 days
- Shadowing period: 1 week

**Ongoing Training:**
- Monthly procedure updates
- Quarterly technical refreshers
- Annual customer service excellence training

### 6.2 Knowledge Management

**Documentation Standards:**
- All procedures documented and version-controlled
- Regular updates based on common issues
- Accessible to all support staff
- Reviewed quarterly for accuracy

## 7. Continuous Improvement

### 7.1 Procedure Evaluation

**Monthly Reviews:**
- Analyze response time trends
- Identify common issue patterns
- Assess customer satisfaction feedback
- Update knowledge base articles

**Quarterly Audits:**
- Comprehensive procedure effectiveness assessment
- Staff performance against KPIs
- Technology and tool evaluation
- Competitive service analysis

### 7.2 Innovation Initiatives

**Service Enhancements:**
- Implement new communication channels based on demand
- Develop self-service options for common issues
- Create proactive support monitoring
- Build predictive issue resolution systems

## 8. Emergency Protocols

### 8.1 Service Interruption

**Communication Plan:**
- Status page updates every 2 hours
- Email notifications to affected users
- Social media announcements
- Direct communication to enterprise clients

**Recovery Procedures:**
- Technical team mobilization within 1 hour
- Customer communication within 2 hours
- Regular updates until resolution
- Post-incident analysis and reporting

## 9. Contact & Escalation

**Immediate Escalation Contacts:**
- Customer Service Manager: +267 7166 3185
- Technical Director: Richard Jenson
- Executive Escalation: Tumai Rugara

**After-Hours Emergency:**
- Designated on-call support rotation
- Critical issue paging system
- Defined emergency response team

---

**Our Promise to You:**
We are committed to providing service that matches the transformative journey our platform enables. Your success is our success, and we will walk every mile with you.

*The Journey of 18 Miles Team*
`;

export default function CustomerServiceProcedures() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Customer Service Procedures
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
          {CUSTOMER_SERVICE_PROCEDURES}
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