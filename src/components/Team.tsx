
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Harish',
      roles: ['CEO', 'CTO', 'CMO', 'CSO'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Visionary leader with expertise in technology strategy, marketing, and business development.'
    },
    {
      name: 'Kumar',
      roles: ['COO'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Operations expert focused on streamlining processes and ensuring exceptional project delivery.'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                
                <div className="flex space-x-4">
                  <button className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="bg-primary/10 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:scale-110">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
