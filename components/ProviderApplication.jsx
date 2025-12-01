import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ProviderApplication() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState({});

  const onSubmit = (data) => {
    console.log('Application Data:', data);
    // Handle application submission
    alert('Application submitted successfully! We will review your application within 2-3 business days.');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Become a Verified Provider
          </h1>
          <p className="text-lg text-gray-600">
            Join our trusted network of safe transaction spaces
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between w-full">
            {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center flex-1">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step <= currentStep
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                    >
                        {step}
                    </div>
                    {step < 5 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            step < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        />
                    )}
                </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Business Info</span>
            <span>Facility Details</span>
            <span>Services</span>
            <span>Financial</span>
            <span>Review</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-8">
          {/* Step 1: Business Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Business Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Legal Business Name *
                  </label>
                  <input
                    type="text"
                    {...register("legalBusinessName", { required: "Legal business name is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter registered business name"
                  />
                  {errors.legalBusinessName && (
                    <p className="text-red-500 text-sm mt-1">{errors.legalBusinessName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trading Name (if different)
                  </label>
                  <input
                    type="text"
                    {...register("tradingName")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter trading name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Registration Number *
                  </label>
                  <input
                    type="text"
                    {...register("registrationNumber", { required: "Registration number is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter official registration number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years in Operation *
                  </label>
                  <input
                    type="number"
                    {...register("yearsInOperation", { 
                      required: "Years in operation is required",
                      min: { value: 1, message: "Must be at least 1 year" }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    {...register("businessType", { required: "Business type is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select business type</option>
                    <option value="warehouse">Warehouse/Storage Facility</option>
                    <option value="retail">Retail Space</option>
                    <option value="commercial">Commercial Office Space</option>
                    <option value="auto_shop">Auto Repair Shop</option>
                    <option value="shopping_mall">Shopping Mall</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Website
                  </label>
                  <input
                    type="url"
                    {...register("website")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Primary Contact Person</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("primaryContactName", { required: "Contact name is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      {...register("contactPosition", { required: "Position is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Manager, Owner"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("contactEmail", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="contact@business.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register("contactPhone", { required: "Phone number is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1234567890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Number *
                    </label>
                    <input
                      type="tel"
                      {...register("emergencyContact", { required: "Emergency contact is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Facility Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Facility Details</h2>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Physical Address *
                  </label>
                  <input
                    type="text"
                    {...register("fullAddress", { required: "Address is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Street address, city, state, zip code"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      {...register("city", { required: "City is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="City name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      {...register("state", { required: "State/Province is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="State or province"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      {...register("country", { required: "Country is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GPS Coordinates (Optional)
                    </label>
                    <input
                      type="text"
                      {...register("gpsCoordinates")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., -17.829220, 31.053961"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Facility Size (sq meters) *
                    </label>
                    <input
                      type="number"
                      {...register("facilitySize", { 
                        required: "Facility size is required",
                        min: { value: 10, message: "Minimum 10 sq meters required" }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Square meters"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Facility Features</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Security Features *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'CCTV Surveillance',
                        'Security Guards',
                        'Access Control System',
                        'Alarm System',
                        'Adequate Lighting',
                        'Secure Parking'
                      ].map((feature) => (
                        <label key={feature} className="flex items-center">
                          <input
                            type="checkbox"
                            {...register(`securityFeatures.${feature}`)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Available Amenities
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Waiting Area',
                        'Meeting Rooms',
                        'Restrooms',
                        'Parking Spaces',
                        'Loading Bay',
                        'WiFi Internet',
                        'Power Backup',
                        'First Aid Kit'
                      ].map((amenity) => (
                        <label key={amenity} className="flex items-center">
                          <input
                            type="checkbox"
                            {...register(`amenities.${amenity}`)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Operating Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Opening Time *
                    </label>
                    <input
                      type="time"
                      {...register("openingTime", { required: "Opening time is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Closing Time *
                    </label>
                    <input
                      type="time"
                      {...register("closingTime", { required: "Closing time is required" })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      {...register("operatesWeekends")}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Open on weekends</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Service Capabilities */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Service Capabilities</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">General Transaction Capacity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum Daily Vehicle Transactions *
                      </label>
                      <input
                        type="number"
                        {...register("maxVehiclesDaily", { 
                          required: "This field is required",
                          min: { value: 1, message: "Minimum 1 vehicle required" }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum Daily Electronics Transactions *
                      </label>
                      <input
                        type="number"
                        {...register("maxElectronicsDaily", { 
                          required: "This field is required",
                          min: { value: 1, message: "Minimum 1 transaction required" }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maximum Daily General Goods Transactions *
                      </label>
                      <input
                        type="number"
                        {...register("maxGoodsDaily", { 
                          required: "This field is required",
                          min: { value: 1, message: "Minimum 1 transaction required" }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secure Storage Capacity (items) *
                      </label>
                      <input
                        type="number"
                        {...register("storageCapacity", { 
                          required: "This field is required",
                          min: { value: 1, message: "Minimum 1 item required" }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Specialized Services (Optional)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Specializations
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          'Art & Collectibles Authentication',
                          'Vehicle Diagnostics & Inspection',
                          'Agricultural Commodity Handling',
                          'Electronics Testing & Certification',
                          'Jewelry & Luxury Goods',
                          'Real Estate Document Verification',
                          'International Shipping Services',
                          'Bulk Commodity Storage'
                        ].map((service) => (
                          <label key={service} className="flex items-center">
                            <input
                              type="checkbox"
                              {...register(`specializations.${service}`)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialized Equipment Available
                      </label>
                      <textarea
                        {...register("specializedEquipment")}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe any specialized equipment you have (e.g., vehicle diagnostic tools, art authentication equipment, etc.)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Staff Qualifications & Certifications
                      </label>
                      <textarea
                        {...register("staffQualifications")}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe staff qualifications, certifications, or expertise"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Financial & Legal */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Financial & Legal Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Subscription Tier Selection *</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        tier: 'starter',
                        name: 'Starter',
                        price: '$1,000/month',
                        features: ['Up to $150,000 in monthly transaction value', 'Up to 100 buyers/month', 'Basic support']
                      },
                      {
                        tier: 'professional',
                        name: 'Professional',
                        price: '$2,000/month',
                        features: ['Up to $300,000 in monthly transaction value', 'Up to 300 buyers/month', 'Priority support']
                      },
                      {
                        tier: 'enterprise',
                        name: 'Enterprise',
                        price: '$4,000/month',
                        features: ['Up to $600,000 in monthly transaction value', 'Up to 500 buyers/month', 'Dedicated support']
                      }
                    ].map((plan) => (
                      <label key={plan.tier} className="relative">
                        <input
                          type="radio"
                          {...register("subscriptionTier", { required: "Please select a subscription tier" })}
                          value={plan.tier}
                          className="sr-only"
                        />
                        <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                          <div className="font-semibold text-lg">{plan.name}</div>
                          <div className="text-2xl font-bold text-blue-600 my-2">{plan.price}</div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {plan.features.map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.subscriptionTier && (
                    <p className="text-red-500 text-sm mt-2">{errors.subscriptionTier.message}</p>
                  )}
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Banking Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Name *
                      </label>
                      <input
                        type="text"
                        {...register("bankName", { required: "Bank name is required" })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Bank name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Holder Name *
                      </label>
                      <input
                        type="text"
                        {...register("accountHolderName", { required: "Account holder name is required" })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Account holder name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Number *
                      </label>
                      <input
                        type="text"
                        {...register("accountNumber", { required: "Account number is required" })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Account number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Routing/Sort Code *
                      </label>
                      <input
                        type="text"
                        {...register("routingCode", { required: "Routing code is required" })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Routing or sort code"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Document Upload</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'businessLicense', label: 'Business License Certificate *' },
                      { name: 'taxCertificate', label: 'Tax Compliance Certificate *' },
                      { name: 'insuranceCertificate', label: 'Insurance Certificate *' },
                      { name: 'facilityPhotos', label: 'Facility Photos (Multiple)' },
                      { name: 'idDocument', label: 'Primary Contact ID Document *' }
                    ].map((doc) => (
                      <div key={doc.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {doc.label}
                        </label>
                        <input
                          type="file"
                          {...register(doc.name, { 
                            required: doc.label.includes('*') ? "This document is required" : false 
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          multiple={doc.name === 'facilityPhotos'}
                        />
                        {errors[doc.name] && (
                          <p className="text-red-500 text-sm mt-1">{errors[doc.name].message}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Review & Submit Application</h2>

              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Business Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><strong>Legal Name:</strong> {watch('legalBusinessName')}</div>
                    <div><strong>Registration #:</strong> {watch('registrationNumber')}</div>
                    <div><strong>Business Type:</strong> {watch('businessType')}</div>
                    <div><strong>Years Operating:</strong> {watch('yearsInOperation')}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Facility Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><strong>Address:</strong> {watch('fullAddress')}</div>
                    <div><strong>City:</strong> {watch('city')}</div>
                    <div><strong>Country:</strong> {watch('country')}</div>
                    <div><strong>Facility Size:</strong> {watch('facilitySize')} sq meters</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Subscription Plan</h3>
                  <div className="text-sm">
                    <strong>Selected Tier:</strong> {watch('subscriptionTier')?.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Terms & Agreements</h3>
                <div className="space-y-4">
                  {[
                    'I certify that all information provided is accurate and complete',
                    'I agree to maintain the required insurance coverage',
                    'I agree to comply with all platform quality standards',
                    'I understand that approval is subject to verification',
                    'I agree to the commission sharing structure (70% platform / 30% provider)',
                    'I consent to background checks and facility inspections'
                  ].map((term, index) => (
                    <label key={index} className="flex items-start">
                      <input
                        type="checkbox"
                        {...register(`agreement${index}`, { 
                          required: "You must agree to all terms" 
                        })}
                        className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{term}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Application review within 2-3 business days</li>
                  <li>• Possible facility inspection may be required</li>
                  <li>• You will receive email notification of approval status</li>
                  <li>• Upon approval, you will get access to the provider dashboard</li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>

        {/* Footer Info */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>Questions? Contact our provider support team at support@journey18miles.com</p>
          <p className="mt-2">Average approval time: 2-3 business days</p>
        </div>
      </div>
    </div>
  );
}