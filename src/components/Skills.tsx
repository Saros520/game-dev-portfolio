import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [activeDropdown, setActiveDropdown] = useState<'tech' | 'other' | null>(null);

  const toggleDropdown = (dropdown: 'tech' | 'other') => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const techStackData = {
    'Programming Languages': [
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'GDScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
      { name: 'Lua', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    'Game Engines': [
      { name: 'Custom C++ Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Love2D', logo: 'https://love2d.org/style/logo.png' },
      { name: 'Pico8', logo: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop' },
      { name: 'Godot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' }
    ],
    'Specializations': [
      { name: 'Gameplay AI' },
      { name: '2-D Game Development' }
    ],
    'Platforms': [
      { name: 'PC' }
    ]
  };

  const otherSkillsData = {
    'Design & Art': [
      { name: 'Adobe Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'Adobe Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'Adobe Premiere', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
      { name: 'DaVinci Resolve', logo: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop' },
      { name: 'Git & Versioning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ],
    'Other Useful Skills': [
      { name: 'Math & Physics' },
      { name: 'Leadership' },
      { name: 'Writing' },
      { name: 'Organization' }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-primary">Knowledge</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Below is a comprehensive toolkit of what I've used for creating exceptional gaming experiences across multiple platforms and technologies. As well as a list of other skills I have acquired throughout my years in high school, university and college.
          </p>

          {/* Dropdown Categories */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tech Stack Dropdown */}
            <div className="bg-dark-card rounded-xl border border-primary/20">
              <button
                onClick={() => toggleDropdown('tech')}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors rounded-xl"
              >
                <h3 className="text-2xl font-semibold text-primary">Tech Stack</h3>
                {activeDropdown === 'tech' ? (
                  <ChevronUp className="text-primary" size={24} />
                ) : (
                  <ChevronDown className="text-primary" size={24} />
                )}
              </button>

              {/* Tech Stack Content */}
              {activeDropdown === 'tech' && (
                <div className="px-6 pb-6 space-y-8 animate-slide-up">
                  {Object.entries(techStackData).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold text-white mb-4 border-b border-primary/20 pb-2">
                        {category}
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {skills.map((skill, index) => (
                          <div
                            key={typeof skill === 'string' ? skill : skill.name}
                            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-primary/5"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {typeof skill === 'object' && skill.logo ? (
                              <>
                                <img 
                                  src={skill.logo} 
                                  alt={skill.name}
                                  className="w-6 h-6 object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const dot = target.nextElementSibling as HTMLElement;
                                    if (dot) dot.style.display = 'block';
                                  }}
                                />
                                <div 
                                  className="w-2 h-2 rounded-full bg-primary"
                                  style={{ display: 'none' }}
                                ></div>
                              </>
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            )}
                            <span>{typeof skill === 'string' ? skill : skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Skills Dropdown */}
            <div className="bg-dark-card rounded-xl border border-primary/20">
              <button
                onClick={() => toggleDropdown('other')}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors rounded-xl"
              >
                <h3 className="text-2xl font-semibold text-primary">Other Skills</h3>
                {activeDropdown === 'other' ? (
                  <ChevronUp className="text-primary" size={24} />
                ) : (
                  <ChevronDown className="text-primary" size={24} />
                )}
              </button>

              {/* Other Skills Content */}
              {activeDropdown === 'other' && (
                <div className="px-6 pb-6 space-y-8 animate-slide-up">
                  {Object.entries(otherSkillsData).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold text-white mb-4 border-b border-primary/20 pb-2">
                        {category}
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {skills.map((skill, index) => (
                          <div
                            key={typeof skill === 'string' ? skill : skill.name}
                            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-primary/5"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {typeof skill === 'object' && skill.logo ? (
                              <>
                                <img 
                                  src={skill.logo} 
                                  alt={skill.name}
                                  className="w-6 h-6 object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const dot = target.nextElementSibling as HTMLElement;
                                    if (dot) dot.style.display = 'block';
                                  }}
                                />
                                <div 
                                  className="w-2 h-2 rounded-full bg-primary"
                                  style={{ display: 'none' }}
                                ></div>
                              </>
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            )}
                            <span>{typeof skill === 'string' ? skill : skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-400 mb-6">
            Always learning and adapting to new technologies in the ever-evolving gaming industry
          </p>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            See Skills in Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;