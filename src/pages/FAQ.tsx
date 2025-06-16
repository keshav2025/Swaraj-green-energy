import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Truck, Shield, CreditCard } from 'lucide-react';

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: <HelpCircle className="h-6 w-6" />,
      items: [
        {
          question: 'What types of bike parts do you supply?',
          answer: 'We supply a comprehensive range of motorcycle parts including engine components, brake systems, suspension parts, electrical components, body parts, lighting systems, transmission parts, and exhaust systems. Our catalog covers parts for all major motorcycle brands and models.',
        },
        {
          question: 'Do you sell parts directly to consumers?',
          answer: 'We operate on an inquiry-based model rather than direct sales. This allows us to provide personalized service, accurate pricing, and ensure you get exactly what you need. Submit an inquiry through our website or contact us directly for quotes and availability.',
        },
        {
          question: 'What brands do you work with?',
          answer: 'We work with various reputable manufacturers and can source parts for all major motorcycle brands including Honda, Yamaha, Bajaj, TVS, Hero, Royal Enfield, KTM, and many others. If you need a specific brand or part, let us know and we\'ll help you find it.',
        },
        {
          question: 'Are your parts genuine or aftermarket?',
          answer: 'We supply both genuine OEM parts and high-quality aftermarket alternatives. We clearly specify the type of part in our quotes and recommendations, allowing you to choose based on your budget and requirements. All parts come with quality assurance.',
        },
      ],
    },
    {
      title: 'Ordering & Delivery',
      icon: <Truck className="h-6 w-6" />,
      items: [
        {
          question: 'How do I place an order?',
          answer: 'Start by submitting an inquiry through our website or contacting us directly. Provide details about the parts you need, including your motorcycle model, year, and specific requirements. We\'ll respond with availability, pricing, and delivery options.',
        },
        {
          question: 'What are your delivery options?',
          answer: 'We offer multiple delivery options including local pickup in Ghaziabad, courier delivery across Uttar Pradesh, and shipping nationwide. Delivery times and costs vary based on location and part availability. We\'ll provide specific details with your quote.',
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery times depend on part availability and your location. Local deliveries in Ghaziabad typically take 1-2 days, while nationwide shipping can take 3-7 business days. For urgent requirements, we offer expedited delivery options.',
        },
        {
          question: 'Do you provide installation services?',
          answer: 'While we don\'t directly provide installation services, we can recommend trusted mechanics and service centers in the Ghaziabad area. We also provide technical guidance and support for part installation when needed.',
        },
      ],
    },
    {
      title: 'Pricing & Payment',
      icon: <CreditCard className="h-6 w-6" />,
      items: [
        {
          question: 'How is pricing determined?',
          answer: 'Our pricing is based on several factors including part type, brand, quantity, current market rates, and delivery requirements. We provide transparent, competitive quotes with no hidden charges. Bulk orders may qualify for special pricing.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including bank transfers, UPI, cash on delivery (for local orders), and online payments. Payment terms will be specified in your quote and can be discussed based on your requirements.',
        },
        {
          question: 'Do you offer warranties on parts?',
          answer: 'Yes, we provide warranties on parts as per manufacturer specifications. Genuine OEM parts come with standard manufacturer warranties, while aftermarket parts come with supplier warranties. Warranty terms are clearly specified in our quotes.',
        },
        {
          question: 'Can I get a discount for bulk orders?',
          answer: 'Yes, we offer competitive pricing for bulk orders and repeat customers. The discount depends on the quantity, part types, and total order value. Contact us with your requirements for a customized quote.',
        },
      ],
    },
    {
      title: 'Quality & Support',
      icon: <Shield className="h-6 w-6" />,
      items: [
        {
          question: 'How do you ensure part quality?',
          answer: 'We work only with trusted suppliers and manufacturers. All parts undergo quality checks before dispatch. We maintain strict quality standards and only supply parts that meet safety and performance specifications.',
        },
        {
          question: 'What if I receive the wrong part?',
          answer: 'If you receive an incorrect part due to our error, we\'ll arrange for immediate replacement at no additional cost. We also provide return/exchange options for parts that don\'t meet your specifications (terms and conditions apply).',
        },
        {
          question: 'Do you provide technical support?',
          answer: 'Yes, our experienced team can provide technical guidance for part selection, compatibility, and basic installation advice. We\'re here to help ensure you get the right parts for your specific needs.',
        },
        {
          question: 'How can I contact customer support?',
          answer: 'You can reach our customer support team via phone at +91 87895 74430, email at swarajgreenenergysge@gmail.com, or through our website contact form. We typically respond to inquiries within 24 hours.',
        },
      ],
    },
    {
      title: 'Business Hours & Location',
      icon: <Clock className="h-6 w-6" />,
      items: [
        {
          question: 'What are your business hours?',
          answer: 'We\'re open Monday through Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM. For urgent requirements outside business hours, you can email us and we\'ll respond as soon as possible.',
        },
        {
          question: 'Can I visit your location?',
          answer: 'Yes, we\'re located in Ghaziabad, Uttar Pradesh. For in-person consultations or part pickups, we recommend calling ahead to ensure availability and to schedule an appointment for the best service experience.',
        },
        {
          question: 'Do you serve customers outside Ghaziabad?',
          answer: 'Absolutely! While we\'re based in Ghaziabad, we serve customers across Uttar Pradesh and nationwide. We have efficient shipping and delivery networks to ensure you receive your parts wherever you are.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Find answers to common questions about our bike parts, services, 
              and ordering process. Can't find what you're looking for? Contact us!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-6">
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 10 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex}>
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {item.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Our team is here to help! Contact us for personalized assistance 
            with your bike parts requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918789574430"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              Call +91 87895 74430
            </a>
            <a
              href="mailto:swarajgreenenergysge@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;