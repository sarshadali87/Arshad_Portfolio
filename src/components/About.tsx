import React from 'react';
import { Download, MessageSquare, Award, Users, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Syed_Arshad_Ali_CV.pdf';
    link.click();
  };

  const achievements = [
    { icon: Award, title: 'KPMG Taseer Hadi & Co (Ex. Tax Assistant)', desc: 'Responsible for managing tax compliance of local and international clients' },
    { icon: Award, title: 'IFFCO Pakistan (Pvt) Ltd-IFFCO Group UAE (Ex. Compliance Executive)', desc: 'Responsible for managing tax filings, ensuring corporate & regulatory compliances of the organization'},
    { icon: Award, title: 'Horizon Steel (Pvt) Ltd (Ex. Assistant Manager Accounts & Taxation)', desc: 'Oversees tax compliance and manages financial accounting to ensure accurate reporting and regulatory adherence.'},
    { icon: Award, title: 'Indus Pharma Group (Ex. Assistant Manager Accounts & Taxation)', desc: 'Handle tax compliances, accouting activity and payroll processing' },
        
    // { icon: Users, title: 'IFFCO Pakistan (Pvt) Ltd-IFFCO Group UAE (Ex. Compliance Executive)', desc: 'Expert solutions in tax planning, corporate and regulatory compliance' },
    // { icon: Target, title: 'SAP Specialist', desc: 'Certified in S/4 HANA and SAP Business One systems' },
    // { icon: Zap, title: 'AI Integration', desc: 'Pioneer in implementing AI-powered business solutions' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experienced professional specializing in taxation, corporate compliances, digital designing, and social media marketing—offering integrated solutions for financial accuracy and impactful brand presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I am a dedicated finance and compliance professional with over 15 years of progressive experience in taxation, corporate and regulatory compliances, accounting, and advisory services. Throughout my career, I have had the privilege of working with leading organizations such as KPMG and IFFCO Group, where I managed complex tax matters, SECP filings & other anciliary work for the organization.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                My professional journey is driven by a strong commitment to excellence, continuous improvement, and delivering strategic, value-added solutions in a dynamic regulatory environment.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                <button className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Ask AI Assistant
                </button>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <achievement.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image and Stats */}
          <div className="space-y-8">
            {/* Professional Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-1 rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional workspace"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">Expertise Areas</h4>
              <div className="space-y-4">
                {[
                  { skill: 'Tax & Corporate Compliance', level: 95 },
                  { skill: 'Accounts', level: 70 },
                  { skill: 'SAP S4 Hana & B-ONE User', level: 80 },
                  { skill: 'Digital Designing', level: 75 },
                  { skill: 'Social Media Marketing', level: 70 },
                  { skill: 'AI Integration', level: 80 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;