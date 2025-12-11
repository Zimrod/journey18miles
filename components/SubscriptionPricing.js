// components/SubscriptionPricing.jshandlePlanSelect
import { useState } from 'react';

export default function SubscriptionPricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'yearly'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlanSelect = (planName) => {
    const currentPlans = plans[billingPeriod];
    const plan = currentPlans.find(p => p.name === planName);
    
    if (planName === 'Custom') {
        window.location.href = '/contact'; // or use your router if using React Router
    } else {
        // Show modal for other plans
        setSelectedPlan(plan);
        setShowModal(true);
    }
  };

  const handleProceedToPayment = async () => {
    setLoading(true);
    try {
      // Get user from localStorage (from group_owners table)
      const userData = localStorage.getItem('user');
      if (!userData) {
        alert('Please sign in first');
        setLoading(false);
        return;
      }

      const user = JSON.parse(userData);
      const owner_id = user.id; // This should be the UUID from group_owners table
      
      if (!owner_id) {
        alert('User information incomplete. Please sign in again.');
        setLoading(false);
        return;
      }

      console.log('Using owner_id from group_owners:', owner_id);

      // Map plan features to subscription table fields
      const getSubscriptionData = (plan, billingPeriod, ownerId) => {
        const planMapping = {
          'Starter': {
            tier: 'starter',
            max_groups: 1,
            max_members_per_group: 1,
            max_messages_per_cycle: 300
          },
          'Professional': {
            tier: 'professional', 
            max_groups: 3,
            max_members_per_group: 6,
            max_messages_per_cycle: 1500
          },
          'Enterprise': {
            tier: 'enterprise',
            max_groups: 10,
            max_members_per_group: 20,
            max_messages_per_cycle: 3600
          },
          'Custom': {
            tier: 'custom',
            max_groups: 0,
            max_members_per_group: 0,
            max_messages_per_cycle: 0
          }
        };

        const baseData = planMapping[plan.name] || {
          tier: plan.name.toLowerCase(),
          max_groups: 0,
          max_members_per_group: 0,
          max_messages_per_cycle: 0
        };

        return {
          ...baseData,
          owner_id: ownerId,
          plan_name: plan.name,
          price: plan.price,
          billing_period: billingPeriod,
          status: 'pending_payment'
        };
      };

      const subscriptionData = getSubscriptionData(selectedPlan, billingPeriod, owner_id);

      // STEP 1: Create subscription record with pending status
      const subscriptionResponse = await fetch('https://j18miles-subscriptions-api-production.up.railway.app/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscriptionData),
      });

      const subscriptionResult = await subscriptionResponse.json();
      console.log("Subscription creation response:", subscriptionResult);

      if (!subscriptionResult.success) {
        console.error('Subscription creation failed:', subscriptionResult);
        alert('Failed to create subscription. Please try again.');
        return;
      }

      // STEP 2: Initialize payment with Absa payment gateway
      const numericPrice = parseFloat(selectedPlan.price.replace(/[^\d.]/g, ''));
      
      const paymentPayload = {
        amount: numericPrice,
        currency: 'USD',
        customer_email: user.cell_number ? `${user.cell_number}@temp.com` : 'customer@example.com',
        customer_name: user.full_name || 'Customer',
        subscription_id: subscriptionResult.subscription_id,
        owner_id: owner_id,
        plan_name: selectedPlan.name,
        billing_period: billingPeriod,
        return_url: `${window.location.origin}/payment-success`,
        cancel_url: `${window.location.origin}/pricing`
      };

      // PLACEHOLDER: Absa Payment Gateway API Call
      console.log('Initiating payment with Absa gateway:', paymentPayload);
      
      // Simulate payment gateway call
      const paymentResponse = await fetch('https://j18miles-subscriptions-api-production.up.railway.app/api/initiate-payment', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentPayload),
      });

      const paymentResult = await paymentResponse.json();
      console.log("Payment initiation response:", paymentResult);

      if (paymentResult.success && paymentResult.payment_url) {
        // Redirect to payment page
        window.location.href = paymentResult.payment_url;
      } else {
        console.error('Payment initiation failed:', paymentResult);
        alert('Payment initiation failed. Please try again.');
      }

    } catch (error) {
      console.error('Error in payment process:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const plans = {
    monthly: [
      {
        name: 'Starter',
        price: '$10',
        description: 'Great for small businesses',
        features: [
          '1 Telegram group',
          '1 group member',
          '300 messages per month',
          '20 matches per month',
          'Priority email support',
          'Custom preferences'
        ],
        cta: 'Choose Bundle',
        popular: false
      },
      {
        name: 'Professional',
        price: '$25',
        description: 'Ideal for growing businesses',
        features: [
          '3 Telegram groups',
          '6 group members',
          '1,200 messages per month',
          '60 matches per month',
          'Real-time analytics dashboard',
          'Priority support',
          'API access',
          'Custom integrations'
        ],
        cta: 'Choose Bundle',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$60',
        description: 'For high-volume operations',
        features: [
          '10 Telegram groups',
          '20 group members',
          '3,600 messages per month',
          '200 matches per month',
          'Advanced analytics & reporting',
          '24/7 dedicated support',
          'Full API access',
          'White-label options',
          'Custom development'
        ],
        cta: 'Choose Bundle',
        popular: false
      },
      {
        name: 'Custom',
        price: 'Let’s talk',
        description: 'Tailored to your exact needs',
        features: [
          'Custom message filtering limits',
          'Custom match limits (up to unlimited)',
          'Priority or dedicated support options',
          'Advanced analytics & reporting',
          'Bespoke integrations & automations',
          'Service-level agreements (SLA)',
          'Account manager',
          'On-demand scaling'
        ],
        cta: 'Request Quote',
        popular: false
      }
    ]
  };

  const currentPlans = plans[billingPeriod];

  return (
    <section id="pricing" className="py-16 px-6 sm:px-12 md:px-20 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Monthly Bundle
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Scale your Telegram group management with our flexible pricing plans. 
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-purple-500 scale-105 shadow-xl' 
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                {plan.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">
                    {plan.originalPrice}
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : plan.name === 'Free'
                    ? 'bg-green-100 text-gray-900 hover:bg-green-200'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>        

      {/* Confirmation Modal */}
      {showModal && selectedPlan && selectedPlan.name !== 'Custom' && (
        <>
          {/* Prevent background scrolling */}
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>

          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-yellow-100 rounded-xl p-8 shadow-lg w-full max-w-md relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-2">Confirm Your Plan</h2>
              <p className="text-gray-700 mb-4">
                You're about to subscribe to the <strong>{selectedPlan.name}</strong> bundle for{' '}
                {selectedPlan.price}.
              </p>
              <button
                onClick={handleProceedToPayment}
                disabled={loading}
                className={`w-full bg-gray-700 text-white py-2 rounded-lg transition ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                }`}
              >
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </>
      )}

        {/* Recommendation Note */}
        <div className="mt-12 text-center">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-purple-900 mb-2">
              💡 Smart Choice
            </h4>
            <p className="text-purple-800">
              The <strong>Professional plan</strong> offers the best value for growing businesses, 
              providing the perfect balance of features and affordability. Start with the Starter plan to test 
              the waters, then upgrade when you're ready to scale.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}