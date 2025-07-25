import React from 'react';
import { Calculator, Palette, TrendingUp, Bot, ArrowRight, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Taxation & Compliance Services',
      description: 'Expert tax planning, corporate compliance, and regulatory advisory services with deep knowledge of tax laws.',
      features: ['Tax Return Filing', 'Corporate Compliance', 'NTN Registration', 'Tax Planning', 'Others'],
      price: '',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Digital Designing',
      description: 'Creative digital solutions including brand identity and visual communication that resonates with your audience.',
      features: ['Logo Design', 'Flyers', 'Visiting Cards', 'Packaging Design', 'Presentation', 'Posters', 'Social Media Post'],
      price: '',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing & Strategy',
      description: 'Data-driven social media strategies, content creation, and campaign management to boost your online presence and engagement.',
      features: ['Social Strategy', 'Content Creation', 'Ad Campaigns', 'Analytics', 'Community Management'],
      price: '',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Integration for Businesses',
      description: 'Custom AI chatbot solutions to automate customer service, lead generation, and business processes using cutting-edge AI technology.',
      features: ['Custom Chatbots', 'Lead Generation', 'Customer Support', 'Process Automation', 'AI Training', 'Integration Support'],
      price: '',
      color: 'from-teal-500 to-green-600'
    }
  ];

  const handleContact = (service: string) => {
    const message = `Hi! I'm interested in your ${service}. Can you provide more details?`;
    window.open(`https://wa.me/00923022892886?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-sky-950 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business success across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
              {/* Service Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                  <DollarSign className="w-5 h-5 mr-1" />
                  {service.price}
                </div>
                <button 
                  onClick={() => handleContact(service.title)}
                  className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group-hover:scale-105`}
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I also offer tailored packages combining multiple services to meet your specific business needs.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;