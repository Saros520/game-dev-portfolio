import React from 'react';
import { Award, Users, IceCream2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Games Created', value: '5' },
    { icon: Users, label: 'Team Projects', value: '5' },
    { icon: IceCream2, label: 'Ice Cream Consumed', value: '∞' },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-dark-lighter via-dark to-dark-lighter"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(0, 0, 0, 0.85)), url('https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a very passionate software and Game Developer with 1 year of experience creating immersive 
                digital experiences. My journey began with a simple love for Math & Physics, Technology and games 
                which evolved overtime into a career dedicated to bringing innovative gaming concepts to life.
              </p>
              
              <p>
                I have expertise in custom engine development in C++ involving SDL and OpenGL, Pico8 and Love2D involving Lua. Currently working in Unreal Engine with Blueprints and C++, Unity with C# and Godot with GDScript. 
                I've so far worked on everything from Text-Based adventure games to more AAA experiences. My approach combines math & technical 
                expertise with creative storytelling to create games that not only entertain but also inspire.
              </p>
              
              <p>
                When I'm not doing math & coding, you'll find me exploring the latest gaming trends, contributing 
                to open-source projects, and brainstorming ideas for future projects such as new games or even a 
                brand new engine etc.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Core Expertise</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Game Programming', 
                  'Math & Physics', 
                  'Godot with GDScript', 
                  'Love2D with Lua', 
                  'Custom engine development using C++'
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.slice(0, 2).map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-dark-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon size={32} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
              
              {/* Ice Cream Consumed - Full Width */}
              <div
                className="col-span-2 bg-dark-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `400ms` }}
              >
                <div className="flex justify-center mb-4">
                  <IceCream2 size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stats[2].value}</div>
                <div className="text-gray-400 text-sm">{stats[2].label}</div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="mt-8 relative">
              <div className="w-full h-64 rounded-xl border border-primary/30 overflow-hidden backdrop-blur-sm">
                <img
                  src="./1000013297.jpg"
                  alt="Joshua Goulden - Game Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;