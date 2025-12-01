// pages/documents/buyers-guidelines.js
import ReactMarkdown from 'react-markdown'

const BUYERS_GUIDE = `
# Buyer Success Guide
## How to Find Your Perfect Match Safely & Efficiently

**Last Updated: November 17, 2025**
**Platform: Journey of 18 Miles**

---

## 🎯 Welcome to Smarter Shopping!

Congratulations on joining Journey of 18 Miles! This guide will help you master our platform and find exactly what you're looking for while staying safe and saving time.

## 1. Registration Process: Get Started in 5 Minutes

### 1.1 Step 1: Download the Specifik Mobile App
- **Available on:** Google Play Store (Android) and Apple App Store (iOS)
- **Search for:** "Specifik"
- **Download and install** the application on your phone

### 1.2 Step 2: Telegram Bot Registration
**Option A: Direct from App**
- Open the Specifik app
- Tap "Register with Telegram"
- Click the Telegram bot link provided
- The bot will open automatically in Telegram

**Option B: Manual Telegram Setup**
- Open Telegram app
- Search for: **@BotSpecifik** 
- Start a chat with the bot
- Follow the registration prompts

### 1.3 Step 3: Complete Registration
**With the Telegram bot, you'll:**
- Enter your full name
- Provide your mobile number
- Receive a unique PIN code

### 1.4 Step 4: Activate Your Account
- Return to the Specifik mobile app
- Enter the PIN code received from the bot
- Your account will be immediately activated
- Start setting your preferences right away!

### 1.5 Account Management
**Update Your Details Anytime:**
- Personal information
- Contact details
- Location preferences
- Notification settings

*All changes sync automatically between the app and Telegram bot*

## 2. Getting Started: Your First 10 Minutes

### 2.1 Complete Your Profile (After Registration)
**Why it matters:** Better profiles get better matches and build seller trust.

**Must-do checklist:**
- [ ] Log in with the mobile number you entered and pin code you were given in Telegram
- [ ] Set your preferred notification methods
- [ ] Review your location settings

### 2.2 Set Your First Preferences
**Location:** Start with your city and expand radius as needed
**Categories:** Choose 2-3 main categories you're most interested in
**Price ranges:** Set realistic minimum and maximum budgets

*Tip: Start specific, then broaden your preferences as you learn what's available.*

## 3. Mastering Preference Settings

### 3.1 Basic Preferences (Essential)


### 3.2 Advanced Preferences (Power User)
**Keyword Alerts:** Specific brands, models, or features
**Seller Ratings:** Minimum seller rating thresholds  
**Listing Age:** Only show listings from last 7 days
**Exclusion Terms:** Words to automatically filter out

### 3.3 Multiple Preference Sets
Create different preference sets for:
- **Daily browsing** (broad categories)
- **Specific searches** (exact items you're hunting for)
- **Opportunity alerts** (great deals in any category)

## 4. Understanding Match Notifications

### 4.1 Notification Types
**Matches Destination:** Input the mobile numbers that will receive match notifications - either to Telegram or Whatsapp
**Platform Charges:** Receiving notifications is free in Telegram. For Whatsapp a $2/mth fee is charged 
**Instant Match:** Perfect match found in Telegram groups
**Direct Listing:** Seller listed directly on our platform
**Price Drop:** Item you viewed now has reduced price
**Similar Item:** Close matches to your saved searches

### 4.2 Response Time Matters
**Golden Hour:** Respond within 1 hour for best results
**Priority Access:** Active buyers get shown to sellers first
**Saved Searches:** Get notified before general public

## 5. Transaction Methods: Choose Your Comfort Level

### 5.1 Direct Transactions
**Best for:**
- Low-value items (< $100)
- Sellers with high ratings
- Items easy to verify
- Local, convenient meetups

**Safety tips for direct deals:**
- Meet in public places (coffee shops, malls)
- Bring a friend when possible
- Verify item before payment
- Use daylight hours for meetings

### 5.2 Facilitated Transactions (Recommended)
**Best for:**
- High-value items ($100+)
- First-time purchases
- Complex items needing inspection
- When safety is a priority

**Benefits of facilitated spaces:**
- Security cameras and monitoring
- Basic inspection tools available
- Transaction documentation
- Emergency support on-site

## 6. Communication Best Practices

### 6.1 Initial Contact Template

### 6.2 Red Flags to Watch For
- **Sellers** refusing to share additional photos
- **Pressure** to complete transaction quickly
- **Prices** significantly below market value
- **Vague** or evasive answers to questions
- **Requests** for unusual payment methods

### 6.3 Green Flags (Trust Indicators)
- **Detailed** item descriptions and photos
- **Prompt** and professional communication
- **Reasonable** pricing aligned with market
- **Willingness** to meet at safe spaces
- **Positive** rating history on platform

## 7. Payment & Completion

### 7.1 Recommended Payment Methods
**For facilitated transactions:**
- Buyer expected to deposit in escrow for seller to transport products to facilitator premises
- Platform-managed escrow 
- Bank transfer with receipt
- Mobile money or crypto currency with confirmation

**For direct transactions:**
- Cash in person after inspection
- Mobile money with instant verification
- Avoid: Wire transfers, gift cards, cryptocurrency

### 7.2 Transaction Documentation
**Always keep records of:**
- Item description and agreed price
- Seller contact information
- Meeting location and time
- Payment method and amount
- Any warranties or guarantees

## 8. Building Your Reputation

### 8.1 Leave Helpful Reviews
**Good reviews help everyone:**
- Rate transactions within 48 hours
- Be specific about what went well
- Constructive feedback for improvement
- Highlight exceptional sellers

### 8.2 Build Trust with Sellers
- Respond to messages promptly
- Show up on time for meetings
- Communicate clearly about your needs
- Follow through on commitments

## 9. Advanced Buyer Strategies

### 9.1 Finding Hidden Gems
- Set alerts for recently price-reduced items
- Browse "new today" listings morning and evening
- Follow trusted sellers for first access
- Use broad categories with specific keyword filters

### 9.2 Negotiation Tips
**Do:**
- Research fair market prices first
- Point out legitimate concerns politely
- Offer fair counter-offers
- Bundle multiple items for better deals

**Don't:**
- Lowball without justification
- Be aggressive or demanding
- Waste sellers' time with unrealistic offers

## 10. Safety & Security Reminders

### 10.1 Personal Safety
- Always tell someone where you're going
- Meet during daylight hours when possible
- Trust your instincts - if it feels wrong, walk away
- Use facilitated spaces for high-value or first-time transactions

### 10.2 Account Security
- Use strong, unique password
- Enable two-factor authentication
- Log out from shared devices
- Report suspicious activity immediately

## 11. Getting Help When Needed

### 11.1 Customer Support
**Email:** support@journey18miles.com
**Phone:** +267 7166 3185
**Response Time:** Within 24 business hours

### 11.2 Urgent Issues
For safety concerns during transactions:
- Contact local authorities if immediate danger
- Use emergency features in our mobile app
- Report the incident to platform support immediately

---

## 🚀 Your Success Journey Starts Now!

**Week 1 Goal:** Set up preferences and receive your first 5 matches
**Week 2 Goal:** Complete your first successful transaction
**Month 1 Goal:** Become a confident platform user with multiple successful purchases

### Ready for Your First Match?
[Browse Available Listings] [Set Your Preferences] [Learn About Safe Spaces]

*Happy hunting! The Journey of 18 Miles Team*
`;

export default function BuyersGuidelines() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Buyers Guidelines
        </h1>
        <p className="text-gray-600 text-sm">
          Set your preferences and interact directly with sellers.
        </p>
      </div>

      <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
        <ReactMarkdown
          components={{
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
          {BUYERS_GUIDE}
        </ReactMarkdown>
      </article>
    </div>
  )
}