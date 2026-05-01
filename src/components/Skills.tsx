import React, { useState } from 'react';

const Skills = () => {
  const techStackData = {
    'Programming Languages': [
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'GDScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
      { name: 'Lua', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
      { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Blueprints' }
    ],
    'Game Engines': [
      { name: 'Custom C++ Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Love2D', logo: 'https://love2d.org/style/logo.png' },
      { name: 'Pico8', logo: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop' },
      { name: 'Godot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
      { name: 'Unreal Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
      { name: 'Unity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' }
    ],
    'Specializations': [
      { name: 'Gameplay AI' },
      { name: '2-D Game Development' },
      { name: '3-D Game Development' },
      { name: 'Git & Versioning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ],
    'Platforms': [
      { name: 'PC' },
      { name: 'Mobile' }
    ]
  };

  const otherSkillsData = {
    'Design & Art': [
      { name: 'Adobe Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'Adobe Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'Adobe Premiere', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
      { name: 'Davinci Resolve', logo: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop' },
      { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
      { name: 'Maya', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg' },
      { name: 'Tiled', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tiled/tiled-original.svg' },
      { name: 'Aseprite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aseprite/aseprite-original.svg' },
    ],
    'Other Useful Skills': [
      { name: 'Math & Physics', description: 'My math and physics skills consist of knowledge acquired from Saint Mary\'s University, which includes 1st year physics and calculus as well as 2nd year modern physics, intermediate calculus, and linear algebra. Also have experience from Eastern College on how to apply math and physics to games.' },
      { name: 'Leadership', description: 'Have experience from Eastern College taking initiative with getting other colleagues together when starting software related projects. Making in depth Game Design Documents so team members know the direction the project is going in, and encouraged consistent flow of communication between team members to ensure everyone is up to speed and worked around issues that arise during development.' },
      { name: 'Writing', description: "Consistently demonstrated effective writing techniques throughout my education career. Such as creating short stories or creating ideas for books and games. Have put my writing to the test when working on the 2 month Unreal Engine Death Through Deception Project. Where players can come across notebooks to learn more about the world they're in, which in turn encourages player exploration." },
      { name: 'Organization', description: 'Can organize folders and files efficiently for software projects. Also effective in keeping code sorted and easy to read through commenting. Always open to learning better industry standard methods to keeping projects clean and tidy.' }
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
              <div className="w-full p-6 text-left">
                <h3 className="text-2xl font-semibold text-primary">Tech Stack</h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  I have expertise in multiple programming languages and game engines. Such as custom engine development in C++ involving SDL and OpenGL, Pico8, Love2D involving Lua, Godot with GdScript, Unreal Engine with Blueprints plus currently learning C++ with Unreal in my internship, plus Unity with C#. I've so far worked on everything from Text-Based adventure games to more AAA experiences. My approach combines math & technical expertise with creative storytelling to create games that not only entertain but also inspire. I am very determined in creating engaging gameplay experiences, from concept to completion, with a focus on innovative mechanics and immersive storytelling.
                </p>
              </div>

              {/* Tech Stack Content */}
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
            </div>

            {/* Other Skills Dropdown */}
            <div className="bg-dark-card rounded-xl border border-primary/20">
              <div className="w-full p-6 text-left">
                <h3 className="text-2xl font-semibold text-primary">Other Skills</h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  I also have experience with video making/editing in multiple different applications such as Davinci Resolve and Adobe Premiere. Also improved audio quality on numerous video projects using Davinci Resolve. Have developed skills in Designing and Creating Assets for games such as characters, animation sprite sheets, chests, and Terrains in Maya, Tiled, and Aseprite. Used Blender to create a custom humanoid Skeleton rig in a timely manner for the final boss in Grave Interest involving Unity Engine. Still learning Blender and Maya during free time.
                </p>
              </div>

              {/* Other Skills Content */}
              <div className="px-6 pb-6 space-y-8 animate-slide-up text-left">
                {Object.entries(otherSkillsData).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-white mb-4 border-b border-primary/20 pb-2">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {skills.map((skill, index) => (
                        <div
                          key={typeof skill === 'string' ? skill : skill.name}
                          className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-primary/5"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {typeof skill === 'object' && skill.logo ? (
                            <>
                              <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-6 h-6 object-contain flex-shrink-0"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const dot = target.nextElementSibling as HTMLElement;
                                  if (dot) dot.style.display = 'block';
                                }}
                              />
                              <div
                                className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5"
                                style={{ display: 'none' }}
                              ></div>
                            </>
                          ) : (
                            <div className="w-2 h-2 flex-shrink-0 rounded-full bg-primary mt-1.5"></div>
                          )}
                          <div className="flex flex-col">
                            <span>{typeof skill === 'string' ? skill : skill.name}</span>
                            {typeof skill === 'object' && skill.description && (
                              <span className="text-sm text-gray-400 mt-1 leading-relaxed">{skill.description}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
