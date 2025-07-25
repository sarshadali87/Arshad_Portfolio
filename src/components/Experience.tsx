import React from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'Mar-2022 - Oct-2024',
      role: 'Assistant Manager Accounts & Taxation',
      company: 'Indus Pharma Group',
      location: 'Karachi / Pakistan',
      description: 'Leading comprehensive business solutions combining tax expertise with digital Delivering integrated financial and tax solutions with a strategic focus on compliance, reporting, and value-driven support.',
      achievements: [
        'Managed tax planning, compliance, and return filing (Income Tax, Sales Tax, WHT)',
        'Improved month-end closing and financial reporting accuracy',
        'Coordinated with SECP, FBR, and external auditors for compliance',
        'Managed cross-border tax compliance and documentation'
      ],
      technologies: ['SAP B-One', 'ChatGPT API', ]
    },
    {
      period: 'Oct-2020 - Mar-2022',
      role: 'Assistant Manager Taxation & Compliance',
      company: 'Horizon Steel (Pvt) Ltd',
      location: 'Karachi, Pakistan',
      description: 'Led digital transformation initiatives and managed corporate tax compliance for the organization.',
      achievements: [
        'Implemented SAP Business One across the organization',
        'Reduced tax compliance time by 60% through automation',
        // 'Led a team of 12 tax professionals',
        // 'Designed digital workflows saving $500K annually'
      ],
      technologies: ['SAP Business One', 'Advanced Excel']
    },
    {
      period: 'Jul-2015 - Oct-2020',
      role: 'Compliance Executive-JM Grade',
      company: 'IFFCO Pakistan (Pvt) Ltd-Iffco Group U.A.E',
      location: 'Karachi, Pakistan',
      description: 'Experienced in tax compliances, SECP filings, legal drafting, and regulatory compliances indepedently and in cordination with consultants.',
      achievements: [
        'Ensured timely tax filings, statutory compliance, and favorable audit outcomes.',
        'Managed SECP matters including incorporations, filings, and legal documentation.',
        'Resolved FBR/SECP notices and supported regulatory audits.',
        'Advised on tax planning, corporate structuring, and legal compliance',
        'Maintained statutory records and coordinated with legal/tax consultants',
      ],
      technologies: ['SAP S4 Hana', 'Ms. Excel Advance', 'Lotus (ERP)']
    },
    {
      period: 'mar-2013 - Apr-2015',
      role: 'Tax Assistant',
      company: 'KPMG Taseer Hadi & Co. Chartered Accountant',
      location: 'Karachi, Pakistan',
      description: 'Started career in tax consulting with focus on domestic tax compliance and advisory for emerging businesses.',
      achievements: [
        'Handled various individual and corporate tax returns of clients',
        'Assisted in complex tax audits and assessments',
        'Developed automated tax calculation templates',
        'Learned and applied tax laws & regulations',
      ],
      technologies: ['efbr','IRIS', 'Excel', 'Tax Software', 'GST Systems']
    }
  ];

  const certifications = [
    { name: 'Certificate in Participation in annual budget workshop/sessions', issuer: 'Softax (Pvt) Limited', year: 'Yearly Session' },
    { name: 'Certificate in Learning Data Analytics, Financial Modeling, Accounting', issuer: 'LinkedIn Learing', year: 'Ongoing' },
    { name: 'Certificate in Excel Skills For Business', issuer: 'Macquarie University', year: '2020' },
    { name: 'Certificate of Completion -Microsoft Excel Data Analysis & Dashboard Reporting', issuer: 'Udemy Online', year: '2020' },
    { name: 'Certificate of Participation - Sindh Sales Tax On Services ', issuer: 'Lintel Academy ', year: '2019' },
    { name: 'Certificate of Participation - Advance Salary Taxation & Income Tax Return [e-Filing] ', issuer: 'Softax (Pvt) Limited', year: '2017' },
    { name: 'Certificate of Participation - E-Filing of Sales Tax Return ', issuer: 'Softax (Pvt) Limited', year: '2017' },
    { name: 'Certificate in Connect & Communicate', issuer: 'Torque Corp', year: '2016' },
    { name: 'Certificate of Achievement- Dashboard & Business Intelligence with Excel 2013', issuer: 'Innovative Institute of Management & IT Training', year: '2016' },
    { name: 'Certificate in Building a Value-Driven Culture', issuer: 'Torque Corp', year: '2015' },
    { name: 'Certificate in computerized accounting', issuer: 'IQ Concept Pass', year: '2011' },
  ];

  return (
    <section id="experience" className="py-20 bg-sky-950 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 dark:text-white mb-4">
            Experience & Certifications
          </h2>
          <p className="text-lg text-orange-50 dark:text-gray-400 max-w-2xl mx-auto">
            Over a decade of progressive experience across leading domestic and multinational organizations and cutting-edge certifications
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-50 dark:text-white mb-12 text-center">Professional Journey</h3>
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
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h5>
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
          <h3 className="text-2xl font-bold text-gray-50 dark:text-white mb-12 text-center">Certifications & Credentials</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-950 to-teal-400 dark:from-blue-900/30 dark:to-teal-900/30 rounded-lg">
                    <Award className="w-6 h-6 text-blue-100 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-950 dark:text-white mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">{cert.issuer}</p>
                    <p className="text-xs text-sky-950 dark:text-blue-400 font-medium">{cert.year}</p>
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