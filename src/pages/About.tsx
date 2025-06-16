import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Clock, Award, Target, Heart, ArrowRight } from 'lucide-react';

function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Quality Commitment',
      description: 'We never compromise on quality. Every part we supply undergoes thorough inspection to meet the highest industry standards.',
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. We provide personalized service and build lasting relationships.',
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: 'Reliable Service',
      description: 'Timely responses, accurate information, and dependable service delivery make us your trusted partner.',
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Industry Expertise',
      description: 'Years of experience in the motorcycle parts industry enable us to provide expert guidance and solutions.',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Satisfied Customers' },
    { number: '1000+', label: 'Parts Categories' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Swaraj Green Energy
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Your trusted partner for premium motorcycle parts in Ghaziabad, 
              Uttar Pradesh, committed to quality and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to provide high-quality motorcycle parts to riders 
                across Ghaziabad and Uttar Pradesh, Swaraj Green Energy has grown to become 
                a trusted name in the industry.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that every motorcycle owner values reliability, performance, 
                and safety. That's why we've dedicated ourselves to sourcing only the finest 
                parts from reputable manufacturers and providing expert guidance to help our 
                customers make informed decisions.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence extends beyond just selling parts. We believe 
                in building relationships, providing exceptional customer service, and 
                supporting the motorcycling community with reliable, professional service.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <Target className="h-16 w-16 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To be the leading supplier of premium motorcycle parts in Uttar Pradesh, 
                  providing exceptional quality, competitive pricing, and unmatched customer 
                  service to keep riders safe and satisfied on the road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-green-100">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-green-200">
                  {achievement.number}
                </div>
                <div className="text-lg font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
                <Heart className="h-16 w-16 text-green-200 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-green-100">
                  To become the most trusted and preferred motorcycle parts supplier 
                  across North India, known for our exceptional quality, innovative 
                  solutions, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Looking Forward
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As we continue to grow, our focus remains on expanding our product range, 
                improving our services, and building stronger relationships with customers 
                throughout the region.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We are constantly investing in new technologies, partnerships, and 
                training to ensure that we stay at the forefront of the motorcycle 
                parts industry and continue to exceed our customers' expectations.
              </p>
              <Link
                to="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;