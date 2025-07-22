import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Tax Consultation',
    'SAP Implementation',
    'Brand Design',
    'Social Media Marketing',
    'AI Chatbot Integration',
    'Business Strategy'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Syed Arshad Ali
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Multi-skilled professional specializing in Taxation & Corporate Compliance, 
                Digital Design, and Social Media Marketing. Transforming businesses through 
                strategic expertise and cutting-edge AI solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>syed.arshad.ali@email.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-teal-400" />
                <span>+971 50 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                <span>Dubai, UAE</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { name: 'Twitter', color: 'hover:bg-sky-500' },
                  { name: 'Instagram', color: 'hover:bg-pink-600' },
                  { name: 'YouTube', color: 'hover:bg-red-600' }
                ].map((social, index) => (
                  <button key={index} className={`w-10 h-10 bg-gray-800 ${social.color} rounded-full transition-all duration-300 flex items-center justify-center hover:scale-110 text-sm font-semibold`}>
                    {social.name[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-teal-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-900/50 to-teal-900/50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to receive insights on taxation trends, design inspiration, marketing strategies, 
              and the latest in AI technology for business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-gray-400 text-sm">
              <span>&copy; {currentYear} Syed Arshad Ali. Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
              <span>in Dubai, UAE</span>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>
              Professional services available across UAE, India, and internationally. 
              SAP certified consultant | Adobe certified expert | Google Analytics certified
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </button>
    </footer>
  );
};

export default Footer;