import React from 'react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      category: 'Tax & Compliance',
      tools: [
        { name: 'SAP S/4 HANA', logo: '💼' },
        { name: 'SAP Business One', logo: '🏢' },
        { name: 'CaseWare', logo: '📊' },
        { name: 'CCH Axcess', logo: '📋' },
        { name: 'ONESOURCE', logo: '🔍' },
        { name: 'Tally ERP', logo: '📈' }
      ]
    },
    {
      category: 'Design & Creative',
      tools: [
        { name: 'Adobe Creative Suite', logo: '🎨' },
        { name: 'Figma', logo: '🎯' },
        { name: 'Sketch', logo: '✏️' },
        { name: 'Canva', logo: '🖌️' },
        { name: 'InDesign', logo: '📖' },
        { name: 'After Effects', logo: '🎬' }
      ]
    },
    {
      category: 'Marketing & Analytics',
      tools: [
        { name: 'Google Analytics', logo: '📊' },
        { name: 'Meta Business', logo: '📱' },
        { name: 'LinkedIn Ads', logo: '💼' },
        { name: 'Google Ads', logo: '🎯' },
        { name: 'Mailchimp', logo: '📧' },
        { name: 'Hootsuite', logo: '📲' }
      ]
    },
    {
      category: 'AI & Development',
      tools: [
        { name: 'ChatGPT API', logo: '🤖' },
        { name: 'Dialogflow', logo: '💬' },
        { name: 'Python', logo: '🐍' },
        { name: 'Node.js', logo: '🟢' },
        { name: 'React', logo: '⚛️' },
        { name: 'TensorFlow', logo: '🧠' }
      ]
    },
    {
      category: 'Business & Productivity',
      tools: [
        { name: 'Microsoft 365', logo: '📎' },
        { name: 'SharePoint', logo: '🔗' },
        { name: 'Power BI', logo: '📊' },
        { name: 'Slack', logo: '💬' },
        { name: 'Notion', logo: '📝' },
        { name: 'Zoom', logo: '📹' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      tools: [
        { name: 'AWS', logo: '☁️' },
        { name: 'Azure', logo: '🌐' },
        { name: 'Google Cloud', logo: '🔵' },
        { name: 'Vercel', logo: '▲' },
        { name: 'Docker', logo: '🐳' },
        { name: 'GitHub', logo: '🐱' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and technologies to deliver exceptional results across all domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{tool.logo}</div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{tool.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Proficiency Levels
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">95%</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tax & SAP Systems</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expert level proficiency with 10+ years experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">90%</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Design Tools</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Advanced proficiency in creative software suite</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">85%</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing Platforms</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Certified expert in major marketing platforms</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">80%</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI & Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Growing expertise in AI and development tools</p>
            </div>
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I stay updated with the latest tools and technologies through continuous learning and certification programs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                Currently Learning: Advanced AI Integration
              </span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm">
                Next: Blockchain for Tax Applications
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;