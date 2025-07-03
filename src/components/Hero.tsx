import React from 'react';
import { ChevronDown, Play, Code, Gamepad2 } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Solar Eclipse Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Eclipse Sun */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Sun Corona - Enhanced brightness */}
            <div className="w-32 h-32 bg-gradient-radial from-yellow-100 via-orange-200 to-transparent rounded-full animate-eclipse-glow"></div>
            
            {/* Eclipse Rays */}
            <div className="absolute inset-0 animate-eclipse-rays">
              {/* Ray 1 */}
              <div className="absolute top-0 left-1/2 w-0.5 h-20 bg-gradient-to-t from-yellow-100 to-transparent transform -translate-x-1/2 -translate-y-full opacity-80"></div>
              {/* Ray 2 */}
              <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gradient-to-b from-yellow-100 to-transparent transform -translate-x-1/2 translate-y-full opacity-80"></div>
              {/* Ray 3 */}
              <div className="absolute left-0 top-1/2 h-0.5 w-20 bg-gradient-to-l from-yellow-100 to-transparent transform -translate-y-1/2 -translate-x-full opacity-80"></div>
              {/* Ray 4 */}
              <div className="absolute right-0 top-1/2 h-0.5 w-20 bg-gradient-to-r from-yellow-100 to-transparent transform -translate-y-1/2 translate-x-full opacity-80"></div>
              
              {/* Diagonal Rays */}
              <div className="absolute top-0 right-0 w-0.5 h-16 bg-gradient-to-t from-yellow-100 to-transparent transform rotate-45 origin-bottom opacity-70"></div>
              <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-t from-yellow-100 to-transparent transform -rotate-45 origin-bottom opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-16 bg-gradient-to-b from-yellow-100 to-transparent transform -rotate-45 origin-top opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-16 bg-gradient-to-b from-yellow-100 to-transparent transform rotate-45 origin-top opacity-70"></div>
            </div>
            
            {/* Moon Shadow */}
            <div className="absolute top-2 left-2 w-28 h-28 bg-black rounded-full shadow-2xl"></div>
          </div>
        </div>

        {/* Animated Clouds */}
        <div className="absolute inset-0">
          {/* Cloud Layer 1 */}
          <div className="absolute top-1/3 w-96 h-24 animate-clouds-move opacity-40">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gray-800 rounded-full"></div>
              <div className="absolute top-2 left-12 w-24 h-16 bg-gray-800 rounded-full"></div>
              <div className="absolute top-4 left-28 w-16 h-12 bg-gray-800 rounded-full"></div>
              <div className="absolute top-1 left-40 w-18 h-14 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* Cloud Layer 2 */}
          <div className="absolute top-1/2 w-80 h-20 animate-clouds-move opacity-30" style={{ animationDelay: '-5s', animationDuration: '25s' }}>
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-16 h-16 bg-gray-700 rounded-full"></div>
              <div className="absolute top-3 left-10 w-20 h-14 bg-gray-700 rounded-full"></div>
              <div className="absolute top-2 left-24 w-14 h-10 bg-gray-700 rounded-full"></div>
            </div>
          </div>

          {/* Cloud Layer 3 */}
          <div className="absolute top-2/3 w-72 h-18 animate-clouds-move opacity-35" style={{ animationDelay: '-10s', animationDuration: '30s' }}>
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-14 h-14 bg-gray-900 rounded-full"></div>
              <div className="absolute top-2 left-8 w-18 h-12 bg-gray-900 rounded-full"></div>
              <div className="absolute top-1 left-20 w-12 h-8 bg-gray-900 rounded-full"></div>
            </div>
          </div>

          {/* Cloud Layer 4 - Upper */}
          <div className="absolute top-1/6 w-64 h-16 animate-clouds-move opacity-25" style={{ animationDelay: '-15s', animationDuration: '35s' }}>
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-12 h-12 bg-gray-600 rounded-full"></div>
              <div className="absolute top-2 left-6 w-16 h-10 bg-gray-600 rounded-full"></div>
              <div className="absolute top-1 left-18 w-10 h-6 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up">
            Greetings my name is
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-slide-up delay-100">
            <span className="text-primary animate-name-flicker">Joshua Goulden</span>
          </h1>

          {/* Welcome Message */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
            Welcome to my website Umbra Gaming where I have crafted immersive gaming experiences with cutting-edge technology and creative storytelling
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up delay-300">
            {['C++', 'Game Design', 'Godot', 'GDScript', 'Lua', 'Love2D'].map((skill, index) => (
              <span
                key={skill}
                className="bg-dark-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-primary/40 transition-all duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-400">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-secondary transition-all duration-200 hover:scale-105 hover:shadow-2xl animate-glow"
            >
              <Play size={20} />
              View My Games
              <ChevronDown className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Code size={20} />
              About Me
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icons - Fixed gamepad to not flicker */}
      <div className="absolute top-20 left-10 opacity-20">
        <Gamepad2 size={48} className="text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-pulse-slow delay-1000">
        <Code size={48} className="text-accent" />
      </div>
    </section>
  );
};

export default Hero;