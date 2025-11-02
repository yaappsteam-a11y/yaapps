
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import prohour from '../../public/prohour.jpeg';
import upsc from '../../public/upsc.jpeg';
import wondertag from '../../public/wondertag-black.jpeg';
import grills from '../../public/grills.jpeg';
import spractice from '../../public/spractice.jpeg';
import driving from '../../public/driving.jpeg';
import expense from '../../public/expense.jpeg';
import { link } from 'fs';
const drivingMockTest = "https://driving.mocktest.yaapps.com/user";
const Portfolio = () => {
  const projects = [
    {
      title: 'ProHour',
      description: 'An all-in-one time tracking and productivity app tailored for professionals and freelancers.',
      image: prohour,
      link: 'https://prohour.yaapps.com',
      tags: ['']
    },
    {
      title: 'UPSC Time',
      description: 'A focused countdown and stopwatch tool designed to simulate real UPSC exam conditions.',
      image: upsc,
      link: 'https://upsc.yaapps.com',
      tags: ['']
    },
    {
      title: 'ExpenseWise',
      description: 'A smart and intuitive tool to log, categorize, and manage daily expenses with visual insights.',
      image: expense,
      link: 'https://expense-tracker.yaapps.com',
      tags: ['']
    },
    {
      title: 'Spractice',
      description: 'Interactive practice platform for skill development.',
      image: spractice,
      link: 'https://spractice.yaapps.com',
      tags: ['']
    },
    {
      title: 'WonderTag',
      description: 'A creative social platform where users can tag, explore, and share content based on interest categories.',
      image: wondertag,
      link: 'https://wondertag.yaapps.com',
      tags: ['']
    },
    {
      title: 'Grills & Shakes',
      description: 'A complete restaurant management system with digital menu, order tracking, and delivery integration.',
      image: grills,
      link: 'https://grillsandshakes.yaapps.com',
      tags: ['']
    },
    {
      title: 'Driving Mock Test',
      description: 'A mobile-first web app offering realistic mock tests for driving license exam preparation.',
      image: driving,
      link: drivingMockTest,
      tags: ['']
    }
  ];


  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our latest projects and successful client collaborations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      {/* <ExternalLink className="w-5 h-5" /> */}
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                        </a>
                    </button>
                    {/* <button className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </button> */}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
