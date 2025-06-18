import React from 'react';
import { Calendar, MapPin, Users, Lightbulb, Award, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Calendar,
      title: 'When',
      description: 'July 15-26, 2024',
      color: 'primary'
    },
    {
      icon: MapPin,
      title: 'Where',
      description: 'EMU Campus & Online',
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Who',
      description: 'Middle School Girls (Grades 6-8)',
      color: 'pink'
    }
  ];

  const activities = [
    { icon: Lightbulb, text: 'Interactive coding lessons and projects', color: 'primary' },
    { icon: Users, text: 'Collaborative team challenges', color: 'teal' },
    { icon: Rocket, text: 'Fun games and STEM activities', color: 'pink' },
    { icon: Award, text: 'Guest speakers - Women in Tech', color: 'yellow' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600 text-primary-500 bg-primary-50',
      teal: 'from-teal-500 to-teal-600 text-teal-500 bg-teal-50',
      pink: 'from-pink-500 to-pink-600 text-pink-500 bg-pink-50',
      yellow: 'from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
            About the Camp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover coding, creativity, and confidence in our supportive learning environment
          </p>
        </div>

        {/* Camp Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const colorClasses = getColorClasses(item.color);
            const Icon = item.icon;
            
            return (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Activities Section */}
        <div className="bg-gradient-to-br from-primary-50 via-white to-teal-50 rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            What We'll Do Together
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {activities.map((activity, index) => {
              const colorClasses = getColorClasses(activity.color);
              const Icon = activity.icon;
              
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`p-3 rounded-full ${colorClasses.split('bg-')[1]}`}>
                    <Icon className={`h-6 w-6 ${colorClasses.split(' ')[2]}`} />
                  </div>
                  <p className="text-gray-700 flex-1">{activity.text}</p>
                </div>
              );
            })}
          </div>

          {/* Why It Matters */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Why This Camp Matters
            </h4>
            <p className="text-gray-700 text-center leading-relaxed">
              We're passionate about encouraging girls to explore technology and computer science. 
              By creating a welcoming, supportive environment, we're working to bridge the gender gap 
              in STEM fields and empower the next generation of female tech leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;