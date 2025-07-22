import React from 'react';
import { ArrowRight, Download, MessageCircle, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  const handleDownloadCV = () => {
    // Replace with actual CV download link
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Syed_Arshad_Ali_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Available for Projects
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Syed Arshad Ali
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 bg-clip-text text-transparent font-semibold">
                  Tax Expert | Digital Designer | Marketing Strategist | AI Tech
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Multi-skilled professional with 10+ years of experience in Taxation & Corporate Compliance, 
                Digital Design, and Social Media Marketing. Former KPMG consultant specializing in 
                SAP systems and AI-powered business solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex gap-4">
                <button 
                  onClick={handleDownloadCV}
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-6 py-4 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" /> Resume
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </button>
              </div>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-200 dark:border-blue-800 animate-spin" style={{animationDuration: '8s'}}></div>
              <div className="absolute inset-4 rounded-full border-2 border-teal-200 dark:border-teal-800 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-8 rounded-full border-2 border-orange-200 dark:border-orange-800 animate-spin" style={{animationDuration: '4s'}}></div>
              
              {/* Profile Image */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-orange-400 p-1">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Syed Arshad Ali"
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
              
              {/* Play button for intro video */}
              <button className="absolute bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <Play className="w-6 h-6 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;