import React from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2018 - Present',
      role: 'Senior Tax Consultant & Digital Strategist',
      company: 'Independent Consultant',
      location: 'Remote / Dubai',
      description: 'Leading comprehensive business solutions combining tax expertise with digital marketing strategies for international clients.',
      achievements: [
        'Managed 50+ client portfolios across multiple industries',
        'Implemented AI-powered tax optimization solutions',
        'Generated $2M+ in tax savings for clients',
        'Built and scaled social media presence for 30+ brands'
      ],
      technologies: ['SAP S/4 HANA', 'ChatGPT API', 'Meta Business', 'Google Analytics']
    },
    {
      period: '2015 - 2018',
      role: 'Senior Tax Manager',
      company: 'IFFCO Group',
      location: 'Dubai, UAE',
      description: 'Led digital transformation initiatives and managed corporate tax compliance for one of the largest conglomerates in the Middle East.',
      achievements: [
        'Implemented SAP Business One across 15 subsidiaries',
        'Reduced tax compliance time by 60% through automation',
        'Led a team of 12 tax professionals',
        'Designed digital workflows saving $500K annually'
      ],
      technologies: ['SAP Business One', 'Advanced Excel', 'Power BI', 'SharePoint']
    },
    {
      period: '2012 - 2015',
      role: 'Tax Consultant',
      company: 'KPMG',
      location: 'Dubai, UAE',
      description: 'Provided tax advisory services to multinational corporations and high-net-worth individuals with focus on international tax planning.',
      achievements: [
        'Advised Fortune 500 companies on tax structuring',
        'Specialized in UAE-India tax treaties and transfer pricing',
        'Completed 200+ tax compliance projects',
        'Achieved 98% client satisfaction rating'
      ],
      technologies: ['CaseWare', 'CCH Axcess', 'Excel VBA', 'ONESOURCE']
    },
    {
      period: '2010 - 2012',
      role: 'Junior Tax Associate',
      company: 'Deloitte',
      location: 'Mumbai, India',
      description: 'Started career in tax consulting with focus on domestic tax compliance and advisory for emerging businesses.',
      achievements: [
        'Handled 100+ individual and corporate tax returns',
        'Assisted in complex tax audits and assessments',
        'Developed automated tax calculation templates',
        'Earned fast-track promotion to senior associate'
      ],
      technologies: ['Tally ERP', 'Excel', 'Tax Software', 'GST Systems']
    }
  ];

  const certifications = [
    { name: 'Certified SAP S/4 HANA Consultant', issuer: 'SAP', year: '2019' },
    { name: 'Google Analytics Certified', issuer: 'Google', year: '2020' },
    { name: 'Meta Marketing Science Certification', issuer: 'Meta', year: '2021' },
    { name: 'AI in Business Certificate', issuer: 'Stanford Online', year: '2022' },
    { name: 'Chartered Accountant (CA)', issuer: 'ICAI', year: '2013' },
    { name: 'Adobe Certified Expert (ACE)', issuer: 'Adobe', year: '2020' }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Over a decade of progressive experience across leading organizations and cutting-edge certifications
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">Professional Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {/* Period badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>

                    {/* Role and company */}
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-semibold">{exp.company}</span>
                      <MapPin className="w-4 h-4 mx-2" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">Certifications & Credentials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{cert.year}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;