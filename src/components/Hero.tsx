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
        {/* Eclipse - Simplified and cleaner like live site */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Eclipse Circle - Black center with subtle glow */}
            <div className="w-24 h-24 bg-black rounded-full shadow-2xl relative animate-eclipse-sync-glow">
              {/* White glow ring around circumference only */}
              <div className="absolute inset-0 rounded-full border-2 border-white opacity-60 animate-eclipse-sync-glow"></div>
              <div className="absolute inset-0 rounded-full border border-white opacity-40 animate-eclipse-sync-glow blur-sm scale-105"></div>
              <div className="absolute inset-0 rounded-full border border-white opacity-20 animate-eclipse-sync-glow blur-md scale-110"></div>
            </div>
            
            {/* Eclipse Rays - Cleaner, more subtle like live site */}
            <div className="absolute inset-0 animate-eclipse-rays opacity-70">
              {/* Main rays - 4 cardinal directions */}
              <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-gradient-to-t from-white via-yellow-100 to-transparent transform -translate-x-1/2 -translate-y-full opacity-90"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-gradient-to-b from-white via-yellow-100 to-transparent transform -translate-x-1/2 translate-y-full opacity-90"></div>
              <div className="absolute left-0 top-1/2 h-0.5 w-16 bg-gradient-to-l from-white via-yellow-100 to-transparent transform -translate-y-1/2 -translate-x-full opacity-90"></div>
              <div className="absolute right-0 top-1/2 h-0.5 w-16 bg-gradient-to-r from-white via-yellow-100 to-transparent transform -translate-y-1/2 translate-x-full opacity-90"></div>
              
              {/* Diagonal rays - shorter and more subtle */}
              <div className="absolute top-0 right-0 w-0.5 h-12 bg-gradient-to-t from-white via-yellow-100 to-transparent transform rotate-45 origin-bottom opacity-70"></div>
              <div className="absolute top-0 left-0 w-0.5 h-12 bg-gradient-to-t from-white via-yellow-100 to-transparent transform -rotate-45 origin-bottom opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-gradient-to-b from-white via-yellow-100 to-transparent transform -rotate-45 origin-top opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-12 bg-gradient-to-b from-white via-yellow-100 to-transparent transform rotate-45 origin-top opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Subtle background particles/stars */}
        <div className="absolute inset-0 opacity-60">
          {/* Moving Clouds */}
          {/* Cloud 1 - Fluffy cumulus cloud */}
          <div className="absolute top-1/6 -left-48 animate-clouds-move opacity-70" style={{ animationDelay: '0s', animationDuration: '25s' }}>
            <div className="relative">
              {/* Main cloud body */}
              <div className="w-20 h-10 bg-gray-300/70 rounded-full"></div>
              {/* Cloud puffs - creating irregular, fluffy shape */}
              <div className="absolute -top-3 left-3 w-14 h-7 bg-gray-300/65 rounded-full"></div>
              <div className="absolute -top-4 left-8 w-12 h-6 bg-gray-300/60 rounded-full"></div>
              <div className="absolute -top-2 left-14 w-16 h-8 bg-gray-300/75 rounded-full"></div>
              <div className="absolute -top-1 left-20 w-10 h-5 bg-gray-300/55 rounded-full"></div>
              <div className="absolute top-2 left-1 w-12 h-6 bg-gray-300/65 rounded-full"></div>
              <div className="absolute top-3 left-6 w-18 h-9 bg-gray-300/70 rounded-full"></div>
              <div className="absolute top-1 left-16 w-14 h-7 bg-gray-300/60 rounded-full"></div>
              <div className="absolute top-4 left-22 w-8 h-4 bg-gray-300/50 rounded-full"></div>
            </div>
          </div>
          
          {/* Cloud 2 - Wispy stratus cloud */}
          <div className="absolute top-1/4 -left-44 animate-clouds-move opacity-65" style={{ animationDelay: '8s', animationDuration: '30s' }}>
            <div className="relative">
              {/* Elongated wispy cloud */}
              <div className="w-24 h-6 bg-gray-400/60 rounded-full"></div>
              <div className="absolute -top-1 left-4 w-20 h-5 bg-gray-400/55 rounded-full"></div>
              <div className="absolute -top-2 left-8 w-16 h-4 bg-gray-400/50 rounded-full"></div>
              <div className="absolute top-2 left-2 w-18 h-5 bg-gray-400/65 rounded-full"></div>
              <div className="absolute top-1 left-12 w-22 h-6 bg-gray-400/60 rounded-full"></div>
              <div className="absolute top-3 left-6 w-14 h-4 bg-gray-400/55 rounded-full"></div>
            </div>
          </div>
          
          {/* Cloud 3 - Large cumulonimbus-style cloud */}
          <div className="absolute top-1/3 -left-56 animate-clouds-move opacity-75" style={{ animationDelay: '15s', animationDuration: '35s' }}>
            <div className="relative">
              {/* Large cloud base */}
              <div className="w-32 h-14 bg-gray-300/75 rounded-full"></div>
              {/* Multiple layers for depth and realism */}
              <div className="absolute -top-5 left-6 w-22 h-11 bg-gray-300/70 rounded-full"></div>
              <div className="absolute -top-6 left-12 w-18 h-9 bg-gray-300/65 rounded-full"></div>
              <div className="absolute -top-4 left-2 w-16 h-8 bg-gray-300/60 rounded-full"></div>
              <div className="absolute -top-3 left-20 w-20 h-10 bg-gray-300/70 rounded-full"></div>
              <div className="absolute -top-2 left-26 w-14 h-7 bg-gray-300/55 rounded-full"></div>
              <div className="absolute top-5 left-4 w-28 h-12 bg-gray-300/80 rounded-full"></div>
              <div className="absolute top-3 left-8 w-24 h-10 bg-gray-300/75 rounded-full"></div>
              <div className="absolute top-6 left-16 w-20 h-8 bg-gray-300/65 rounded-full"></div>
              <div className="absolute top-2 left-28 w-16 h-6 bg-gray-300/50 rounded-full"></div>
            </div>
          </div>
          
          {/* Cloud 4 - Medium altocumulus cloud */}
          <div className="absolute top-2/5 -left-40 animate-clouds-move opacity-68" style={{ animationDelay: '22s', animationDuration: '28s' }}>
            <div className="relative">
              {/* Patchy cloud formation */}
              <div className="w-16 h-8 bg-gray-400/65 rounded-full"></div>
              <div className="absolute -top-2 left-3 w-12 h-6 bg-gray-400/60 rounded-full"></div>
              <div className="absolute -top-3 left-7 w-10 h-5 bg-gray-400/55 rounded-full"></div>
              <div className="absolute -top-1 left-12 w-14 h-7 bg-gray-400/70 rounded-full"></div>
              <div className="absolute top-2 left-1 w-10 h-5 bg-gray-400/60 rounded-full"></div>
              <div className="absolute top-3 left-6 w-18 h-8 bg-gray-400/65 rounded-full"></div>
              <div className="absolute top-1 left-14 w-12 h-6 bg-gray-400/55 rounded-full"></div>
              <div className="absolute top-4 left-20 w-8 h-4 bg-gray-400/50 rounded-full"></div>
            </div>
          </div>
          
          {/* Cloud 5 - High cirrus cloud */}
          <div className="absolute bottom-1/3 -left-36 animate-clouds-move opacity-60" style={{ animationDelay: '30s', animationDuration: '40s' }}>
            <div className="relative">
              {/* Thin, streaky high-altitude cloud */}
              <div className="w-28 h-4 bg-gray-500/50 rounded-full"></div>
              <div className="absolute -top-1 left-4 w-24 h-3 bg-gray-500/45 rounded-full"></div>
              <div className="absolute top-1 left-2 w-20 h-3 bg-gray-500/40 rounded-full"></div>
              <div className="absolute top-2 left-8 w-26 h-4 bg-gray-500/55 rounded-full"></div>
              <div className="absolute -top-2 left-12 w-16 h-3 bg-gray-500/35 rounded-full"></div>
              <div className="absolute top-3 left-6 w-22 h-3 bg-gray-500/50 rounded-full"></div>
            </div>
          </div>
          
          {/* Cloud 6 - Small puffy cloud */}
          <div className="absolute bottom-1/4 -left-32 animate-clouds-move opacity-72" style={{ animationDelay: '38s', animationDuration: '22s' }}>
            <div className="relative">
              {/* Small, compact cumulus */}
              <div className="w-14 h-7 bg-gray-300/70 rounded-full"></div>
              <div className="absolute -top-2 left-2 w-10 h-5 bg-gray-300/65 rounded-full"></div>
              <div className="absolute -top-3 left-5 w-8 h-4 bg-gray-300/60 rounded-full"></div>
              <div className="absolute -top-1 left-8 w-12 h-6 bg-gray-300/75 rounded-full"></div>
              <div className="absolute top-2 left-1 w-8 h-4 bg-gray-300/65 rounded-full"></div>
              <div className="absolute top-3 left-4 w-16 h-7 bg-gray-300/70 rounded-full"></div>
              <div className="absolute top-1 left-10 w-10 h-5 bg-gray-300/60 rounded-full"></div>
            </div>
          </div>
          
          {/* Stars/Particles */}
          {/* Large bright stars */}
          <div className="absolute top-1/6 left-1/5 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0s', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}></div>
          <div className="absolute top-1/4 right-1/6 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1.5s', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '3s', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}></div>
          <div className="absolute bottom-1/6 right-1/5 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '4.5s', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}></div>
          <div className="absolute top-1/8 left-3/5 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '2s', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}></div>
          <div className="absolute bottom-1/8 right-2/5 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg" style={{ animationDelay: '3.5s', boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)' }}></div>
          
          {/* Medium stars */}
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/5 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-2/5 left-1/6 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-1/5 left-2/5 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '3.2s' }}></div>
          <div className="absolute bottom-1/5 right-2/5 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-3/7 left-1/7 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '4.7s' }}></div>
          <div className="absolute top-4/7 right-1/7 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute bottom-3/7 left-3/7 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute bottom-4/7 right-3/7 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '3.8s' }}></div>
          <div className="absolute top-1/7 left-5/7 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/7 right-5/7 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '4.1s' }}></div>
          
          {/* Small distant stars */}
          <div className="absolute top-1/8 left-1/8 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/7 right-1/8 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2.1s' }}></div>
          <div className="absolute top-2/7 left-1/12 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '4.3s' }}></div>
          <div className="absolute top-3/8 right-1/12 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute bottom-1/8 right-1/8 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '3.7s' }}></div>
          <div className="absolute bottom-1/7 left-1/8 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute bottom-2/7 right-1/12 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2.8s' }}></div>
          <div className="absolute bottom-3/8 left-1/12 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '4.1s' }}></div>
          <div className="absolute top-1/9 left-2/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute top-2/9 right-2/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '3.4s' }}></div>
          <div className="absolute top-4/9 left-1/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-5/9 right-1/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2.3s' }}></div>
          <div className="absolute bottom-1/9 right-2/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '4.6s' }}></div>
          <div className="absolute bottom-2/9 left-2/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute bottom-4/9 right-1/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '3.9s' }}></div>
          <div className="absolute bottom-5/9 left-1/9 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          
          {/* Tiny stars scattered around */}
          <div className="absolute top-1/10 left-3/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute top-3/10 right-3/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '3.4s' }}></div>
          <div className="absolute top-4/10 left-2/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-6/10 right-2/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '2.3s' }}></div>
          <div className="absolute bottom-1/10 right-3/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '4.6s' }}></div>
          <div className="absolute bottom-3/10 left-3/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute bottom-4/10 right-2/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '3.9s' }}></div>
          <div className="absolute bottom-6/10 left-2/10 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/11 left-4/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '2.9s' }}></div>
          <div className="absolute top-3/11 right-4/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '4.2s' }}></div>
          <div className="absolute top-5/11 left-3/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-7/11 right-3/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '3.6s' }}></div>
          <div className="absolute bottom-1/11 right-4/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute bottom-3/11 left-4/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '2.7s' }}></div>
          <div className="absolute bottom-5/11 right-3/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '4.8s' }}></div>
          <div className="absolute bottom-7/11 left-3/11 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1.6s' }}></div>
          
          {/* Additional scattered stars for density */}
          <div className="absolute top-1/12 left-5/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.7s' }}></div>
          <div className="absolute top-5/12 right-5/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '4.2s' }}></div>
          <div className="absolute top-7/12 left-4/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-9/12 right-4/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '3.6s' }}></div>
          <div className="absolute bottom-1/12 right-5/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute bottom-5/12 left-5/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.9s' }}></div>
          <div className="absolute bottom-7/12 right-4/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '4.8s' }}></div>
          <div className="absolute bottom-9/12 left-4/12 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.6s' }}></div>
          
          {/* Extra layer of tiny stars for richness */}
          <div className="absolute top-1/13 left-6/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '3.1s' }}></div>
          <div className="absolute top-3/13 right-6/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-5/13 left-5/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '2.4s' }}></div>
          <div className="absolute top-7/13 right-5/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '4.5s' }}></div>
          <div className="absolute top-9/13 left-4/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '1.9s' }}></div>
          <div className="absolute top-11/13 right-4/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '3.3s' }}></div>
          <div className="absolute bottom-1/13 right-6/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-3/13 left-6/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '2.6s' }}></div>
          <div className="absolute bottom-5/13 right-5/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '4.3s' }}></div>
          <div className="absolute bottom-7/13 left-5/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-9/13 right-4/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '3.7s' }}></div>
          <div className="absolute bottom-11/13 left-4/13 w-0.5 h-0.5 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          
          {/* More medium-bright stars */}
          <div className="absolute top-2/13 left-7/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.8s' }}></div>
          <div className="absolute top-4/13 right-7/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '4.4s' }}></div>
          <div className="absolute top-6/13 left-6/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-8/13 right-6/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '3.5s' }}></div>
          <div className="absolute top-10/13 left-5/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-12/13 right-5/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.1s' }}></div>
          <div className="absolute bottom-2/13 right-7/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '4.7s' }}></div>
          <div className="absolute bottom-4/13 left-7/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute bottom-6/13 right-6/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '3.2s' }}></div>
          <div className="absolute bottom-8/13 left-6/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-10/13 right-5/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-12/13 left-5/13 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '4.1s' }}></div>
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
