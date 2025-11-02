
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import person from '../../public/person.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Harish Babu',
      roles: ['CEO', 'CMO'],
      image: person,
      bio: 'Strategic visionary leading company growth and brand innovation with a strong focus on marketing excellence and leadership.'
    },
    {
      name: 'Kumar Swamy Reddy',
      roles: ['COO'],
      image: person,
      bio: 'Expert in operations and execution, ensuring smooth delivery, resource optimization, and process efficiency across teams.'
    },
    {
      name: 'Dilli Babu',
      roles: ['CPO', 'CDO'],
      image: person,
      bio: 'Driving product innovation and data-led decisions with deep insight into user experience, analytics, and digital strategy.'
    },
    {
      name: 'Bharath Kumar',
      roles: ['CFO'],
      image: person,
      bio: 'Financial strategist managing budgets, investments, and long-term financial planning for sustainable business growth.'
    },
    {
      name: 'Abdul Rasheed',
      roles: ['CTO'],
      image: person,
      bio: 'Technology leader responsible for the company’s tech vision, system architecture, and driving engineering excellence.'
    }
  ];

  return (
    <section id="team" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals behind Yaapps's success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {member.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.roles.map((role, roleIndex) => (
                    <span
                      key={roleIndex}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {member.bio}
                </p>
                
                {/* <div className="flex space-x-4">
                  <button className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                    <Mail className="w-5 h-5" />
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
