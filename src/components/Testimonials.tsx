import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechVenture Inc.',
      company: 'Technology Startup',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Syed transformed our tax structure completely, saving us over $500K annually. His expertise in both traditional tax planning and modern AI tools is unmatched. The SAP implementation was flawless and his team provided excellent ongoing support.',
      project: 'Tax Optimization & SAP Implementation'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder & Creative Director',
      company: 'Luxury Fashion Brand',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The brand identity Syed created for us perfectly captured our vision. Our brand recognition increased by 300% within 6 months. His design process is thorough, creative, and results-driven. Highly recommended for any branding project.',
      project: 'Complete Brand Identity & Design'
    },
    {
      id: 3,
      name: 'Amanda Rodriguez',
      position: 'Marketing Director',
      company: 'E-commerce Platform',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Our social media presence was struggling until we worked with Syed. His data-driven approach and creative campaigns resulted in 250% growth in user acquisition. The ROI on our marketing spend improved dramatically.',
      project: 'Social Media Marketing & Strategy'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Operations Manager',
      company: 'Manufacturing Corp',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The AI chatbot integration Syed implemented for our customer service revolutionized our operations. We now handle 3x more inquiries with the same team size. His technical expertise and business understanding are exceptional.',
      project: 'AI Chatbot Integration'
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'CFO',
      company: 'International Trading',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Syed on our international tax compliance was a game-changer. His knowledge of cross-border taxation and regulatory requirements saved us from potential issues and optimized our global tax strategy.',
      project: 'International Tax Compliance'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Business Owner',
      company: 'Restaurant Chain',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The complete rebrand Syed delivered exceeded all expectations. From logo design to marketing materials, everything was perfectly executed. Our revenue increased by 40% in the first quarter after the rebrand.',
      project: 'Restaurant Chain Rebranding'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-sky-950 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-orange-50 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what my clients say about working with me and the results we achieved together
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-blue-600" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentSlide].position}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonials[currentSlide].company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    Project: {testimonials[currentSlide].project}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-50 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">98%</div>
            <div className="text-gray-50 dark:text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
            <div className="text-gray-50 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
            <div className="text-gray-50 dark:text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;