import { Star, Award, Heart, Code } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Krish Narayanan',
      title: 'Camp Director',
      role: 'Computer Science Professor',
      description: 'Leading CS education initiatives for over 10 years, passionate about inspiring young women in tech.',
      color: 'primary',
      icon: Award
    },
    {
      name: 'Alex Chen',
      title: 'Lead Tech Mentor',
      role: 'CS Graduate Student',
      description: 'Full-stack developer and advocate for inclusive coding education. Loves making programming fun!',
      color: 'teal',
      icon: Code
    },
    {
      name: 'Maria Rodriguez',
      title: 'Creative Coordinator',
      role: 'UX Design Student',
      description: 'Brings creativity to coding with interactive projects and hands-on design thinking activities.',
      color: 'pink',
      icon: Heart
    },
    {
      name: 'Emily Park',
      title: 'Workshop Facilitator',
      role: 'CS Senior',
      description: 'Former camper turned mentor! Specializes in making complex concepts accessible and engaging.',
      color: 'yellow',
      icon: Star
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600 bg-primary-50 text-primary-600',
      teal: 'from-teal-500 to-teal-600 bg-teal-50 text-teal-600',
      pink: 'from-pink-500 to-pink-600 bg-pink-50 text-pink-600',
      yellow: 'from-yellow-500 to-yellow-600 bg-yellow-50 text-yellow-600'
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
            Meet Our Amazing Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate educators and mentors dedicated to empowering young women in technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const colorClasses = getColorClasses(member.color);
            const Icon = member.icon;
            
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {/* Avatar Placeholder */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${colorClasses.split('bg-')[0]} mx-auto mb-4 flex items-center justify-center`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Name and Title */}
                <h3 className="text-xl font-bold text-gray-800 text-center mb-1">
                  {member.name}
                </h3>
                <div className={`text-sm font-semibold text-center mb-2 px-3 py-1 rounded-full ${colorClasses.split('bg-')[1]} ${colorClasses.split(' ')[2]} inline-block mx-auto`}>
                  {member.title}
                </div>
                <p className="text-sm text-gray-500 text-center mb-3 font-medium">
                  {member.role}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {member.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-teal-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Women in Tech Speakers
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Throughout the camp, we'll be joined by inspiring women working in technology companies, 
              startups, and research institutions. These role models will share their journeys, 
              offer career insights, and show our campers the incredible possibilities in computer science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;