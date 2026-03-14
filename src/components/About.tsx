import React from 'react';
import { User, Code, Gamepad2, Trophy, Target, Lightbulb, IceCream2 } from 'lucide-react';

const About = () => {
  const coreExpertise = [
    'Custom C++ Game Engine Development',
    'Gameplay Programming',
    'Math & Physics',
    'Love2D with Lua',
    'Environment building with Generation programming',
    'Programmed More Advanced Enemy AI Systems',
    '2D Game Development',
    '3D Game Development',
    'Godot with GDScript',
    'Unreal Engine with Blueprints',
    'Unity Engine with C#'
  ];

  const achievements = [
    {
      icon: <Trophy className="text-primary" size={24} />,
      title: 'Game Development Student',
      description: 'Studying advanced game development techniques and industry practices'
    },
    {
      icon: <Code className="text-primary" size={24} />,
      title: 'Multiple Engine Expertise',
      description: 'Proficient in Custom C++, Love2D, Godot, Unity, and Unreal Engine'
    },
    {
      icon: <Gamepad2 className="text-primary" size={24} />,
      title: 'Published Games',
      description: 'Successfully released multiple games on itch.io platform'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate game developer crafting immersive digital experiences with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4 text-white">
                Hi, I'm Joshua Goulden
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a very passionate software and Game Developer with over a year and a half of experience creating immersive digital experiences. My journey began with a simple interest for Math & Physics, Technology, the weather and games which evolved overtime into a career dedicated to bringing innovative gaming concepts to life.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I have expertise in multiple programming languages and game engines. Programming languages and engines such as custom engine development in C++ involving SDL and OpenGL, Pico8, Love2D involving Lua, Godot with GdScript, Unreal Engine with Blueprints and learning C++ with Unreal in my spare time, plus Unity with C#. I've so far worked on everything from Text-Based adventure games to more AAA experiences. My approach combines math & technical expertise with creative storytelling to create games that not only entertain but also inspire. I am very determined in creating engaging gameplay experiences, from concept to completion, with a focus on innovative mechanics and immersive storytelling.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not doing math & coding, you'll find me exploring the latest gaming trends, contributing to open-source projects, and brainstorming ideas for future projects such as new games or even a brand new game engine in the distant future etc.
              </p>
            </div>

            {/* Core Expertise */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <Target className="text-primary" size={20} />
                Core Expertise
              </h4>
              <ul className="space-y-2">
                {coreExpertise.map((skill, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 text-gray-300 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-slide-in-right">
            {/* Statistics Blocks */}
            <div className="mb-8 space-y-4">
              {/* Top two blocks - side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-card rounded-xl p-6 border border-primary/20 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">14</div>
                  <div className="text-gray-400 text-sm">Games Created</div>
                </div>
                <div className="bg-dark-card rounded-xl p-6 border border-primary/20 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">8</div>
                  <div className="text-gray-400 text-sm">Team Projects</div>
                </div>
              </div>
              
              {/* Bottom block - wider */}
              <div className="bg-dark-card rounded-xl p-6 border border-primary/20 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IceCream2 className="text-primary" size={24} />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">∞</div>
                <div className="text-gray-400 text-sm">Ice Cream Consumed</div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src="/game-dev-portfolio/Screenshot_2025-07-04_210112.png"
                  alt="Joshua Goulden - Game Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-slow">
                <Code size={24} className="text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-pulse-slow delay-1000">
                <Gamepad2 size={24} className="text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-white flex items-center justify-center gap-2">
            <Lightbulb className="text-primary" size={28} />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-dark-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {achievement.icon}
                  <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <p className="text-gray-400 mb-6">
            Ready to bring your game ideas to life? Let's collaborate and create something amazing together.
          </p>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 mr-4"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
