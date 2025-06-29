
import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: CheckCircle, number: '200+', label: 'Projects Completed' },
    { icon: Clock, number: '3+', label: 'Years Experience' },
    { icon: Award, number: '50+', label: 'Awards Won' }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About TechStudio
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              We are a passionate team of developers, designers, and digital strategists 
              committed to delivering exceptional digital solutions. Our mission is to help 
              businesses thrive in the digital age through innovative technology and 
              creative design.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              From startups to enterprise-level companies, we've helped organizations 
              across various industries achieve their digital goals through our 
              comprehensive range of services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105">
                Learn More
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
