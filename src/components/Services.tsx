
import React from 'react';
import { Palette, Code, Smartphone, ShoppingCart, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that engage and convert visitors into customers.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable websites using the latest technologies and best practices.'
    },
    {
      icon: Smartphone,
      title: 'Android/iOS Development',
      description: 'Developing native and cross-platform mobile applications that work seamlessly across all devices.'
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce/Shopify Website',
      description: 'Creating powerful online stores that drive sales and provide exceptional shopping experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing',
      description: 'Strategic digital marketing solutions to grow your brand and reach your target audience effectively.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
