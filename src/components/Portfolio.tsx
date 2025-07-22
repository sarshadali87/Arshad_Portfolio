import React, { useState } from 'react';
import { Filter, ExternalLink, PlayCircle, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Tax Projects', 'Design Projects', 'Marketing Campaigns'];

  const projects = [
    {
      id: 1,
      title: 'Multi-National Tax Restructuring',
      category: 'Tax Projects',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete tax structure optimization for a Fortune 500 company, resulting in 30% tax savings.',
      technologies: ['SAP S/4 HANA', 'Tax Planning', 'Compliance'],
      client: 'Confidential MNC',
      result: '$2M+ Annual Savings'
    },
    {
      id: 2,
      title: 'E-commerce Brand Identity',
      category: 'Design Projects',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity design for a luxury e-commerce platform including logo, packaging, and digital assets.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
      client: 'Luxury Retail Brand',
      result: '300% Brand Recognition'
    },
    {
      id: 3,
      title: 'Social Media Campaign - Tech Startup',
      category: 'Marketing Campaigns',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: '360-degree social media campaign for a fintech startup, increasing user acquisition by 250%.',
      technologies: ['Meta Ads', 'Google Analytics', 'Content Strategy'],
      client: 'FinTech Startup',
      result: '250% User Growth'
    },
    {
      id: 4,
      title: 'SAP Implementation - Manufacturing',
      category: 'Tax Projects',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'End-to-end SAP S/4 HANA implementation for manufacturing company with integrated tax modules.',
      technologies: ['SAP S/4 HANA', 'Process Optimization', 'Training'],
      client: 'Manufacturing Corp',
      result: '60% Process Efficiency'
    },
    {
      id: 5,
      title: 'Restaurant Chain Branding',
      category: 'Design Projects',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Visual identity redesign for restaurant chain including menu design, signage, and digital presence.',
      technologies: ['Brand Design', 'Print Design', 'Digital Assets'],
      client: 'Restaurant Chain',
      result: '40% Revenue Increase'
    },
    {
      id: 6,
      title: 'B2B Lead Generation Campaign',
      category: 'Marketing Campaigns',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'LinkedIn and email marketing campaign for B2B software company, generating 500+ qualified leads.',
      technologies: ['LinkedIn Ads', 'Email Marketing', 'CRM Integration'],
      client: 'Software Company',
      result: '500+ Qualified Leads'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my work across taxation, design, and marketing with measurable results
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Filter className="w-4 h-4" />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                      <PlayCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                    {project.category.replace(' Projects', '').replace(' Campaigns', '')}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Client:</span>
                      <span className="ml-2 font-medium text-gray-900 dark:text-white">{project.client}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-500 dark:text-gray-400">Result:</span>
                    <span className="ml-2 font-semibold text-green-600 dark:text-green-400">{project.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's discuss how I can help you achieve similar results for your business.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;