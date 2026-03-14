import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [upcomingSlide, setUpcomingSlide] = useState(0);

  const majorProjects = [
    {
      id: 0,
      title: 'Grave Interest',
      description: 'You play as a medieval knight desperate to find any sort of treasure, gold or magical abilities to help pay off your family debt to a very powerful bandit gang or finally put an end to them and their tyranny. This Bandit gang has taken family members and countless others before you for failing to pay back their debts. Explore through caves, dungeons and catacombs to find valuable loot to take on the champion of this labyrinth to prove yourself worthy. Afterwards finally take out this powerful bandit gang that has taken over the kingdom above you. Are you up to the challenge? This is a 3-D, rogue-like, souls-like game made in Unity Engine.',
      image: '/game-dev-portfolio/Screenshot_2026-03-13_205248.png',
      playLink: '#' // Placeholder since it's in development
    },
    {
      id: 1,
      title: 'Riftbreaker: Ascension',
      description: 'In this medieval, 3-D, FPS title made with Unity Engine. You play as a special ops soldier who is part of a top secret operation involving time and world travel. That was until the experiment went horribly wrong, now you find yourself in a world that looks medieval in nature that has been taken over by Voodoo magic. Get back to the Rift and close it before something ugly gets out. The fate of two worlds is now in your hands.',
      image: '/game-dev-portfolio/Screenshot_2026-03-13_194705.png',
      playLink: '#' // Placeholder since it's in development
    },
    {
      id: 2,
      title: 'Flight From The Mire',
      description: 'This is a 2-D, platformer game made with Unity Engine. You play as an adventurer who ventured too deep into an evil swamp that\'s swarming with creatures looking for a fight. Face your fears and jump in to battle your way through this dark environment. Will you be able to make it out of here alive?',
      image: '/game-dev-portfolio/Screenshot_2026-03-13_194320.png',
      playLink: '#' // Placeholder since it's in development
    },
    {
      id: 3,
      title: 'Death Through Deception',
      description: 'You play as an investigator named Detective Christian Harper sent to investigate the recent tragedies that have plagued the region of Hope\'s End, one of which your adoptive brother Jacob Smith is a part of. A well known news reporter named Winslow Macintyre of local news station "Village Voices" has also paid close attention to this evolving story going on. The most recent tragedy has a disturbingly high death count happening in the woods nearby the village of "Hope\'s End". This was supposed to be a fun treasure hunt event started up by local Hope\'s End Treasure Hunter Jacob Smith. Where Jacob supposedly hid a lot of his treasure findings over the years out in the woods for hikers and other treasure hunters to find. But is something much darker taking place here? Jump into this 3-D, mystery, survival horror game made in Unreal Engine to find out.',
      image: '/game-dev-portfolio/Screenshot_2026-01-14_234427.png',
      playLink: '#' // Placeholder since it's in development
    },
    {
      id: 4,
      title: 'Speed Demons',
      description: 'This is a 3-D racing title made in Unreal Engine, where you have to reach checkpoints before the time runs out and in the final level you face off against an Ai car. Will you be able to achieve victory in this speed machine game?',
      image: '/game-dev-portfolio/Screenshot_2026-01-14_233353.png',
      playLink: '#' // Placeholder since it's in development
    },
    {
      id: 5,
      title: 'Adrenaline Rush',
      description: 'This is a 2-D, rage inducing platformer made in Unreal Engine. Where you play as a mountain climber attempting to retrieve as many lost soul coins as you can. Will you be able to reach the top of this mountain and return these poor souls trapped in coin back to their rightful place? Beware though, this is a challenge.',
      image: '/game-dev-portfolio/Screenshot_2026-01-13_005633.png',
      playLink: '#' // Placeholder since it's in development
    },
    {
      id: 6,
      title: 'One Stormy Day',
      description: 'You play as a camper motoring his boat in the middle of a dangerous storm trying to return to his camp in this ominous, 2-D, side-scroller game made in Godot. Where you have to avoid rocks, and aquatic enemies. Will you be able to get off this treacherous lake in time?',
      image: '/game-dev-portfolio/Screenshot_2026-03-13_161859.png',
      playLink: '#' // Placeholder since it's in development
    },
    {
      id: 7,
      title: 'Gyruss',
      description: 'Recreated Gyruss which is a space shooter arcade game using a custom engine built in C++. You control a space ship, shoot at enemy invaders and dodge projectiles, you have 3 lives. Once you loose all 3 lives that\'s game over, this is endless, see how long you can survive.',
      image: '/game-dev-portfolio/Screenshot_2025-06-26_111805.png',
      playLink: 'https://joshuagoulden520.itch.io/gyrussremade'
    },
    {
      id: 8,
      title: 'Autobahn',
      description: 'Made a 2-D, GTA inspired, top-down pixilated game using a custom engine built in C++. You can choose which vehicle you want to drive before entering, avoid traffic as you try to escape from the cops, you can take 3 hits from other vehicles, but once you\'re caught by a cop its game over, this is endless, How far can you go?',
      image: '/game-dev-portfolio/Screenshot_2025-06-26_111940.png',
      playLink: 'https://joshuagoulden520.itch.io/autobahn'
    }
  ];

  const otherProjects = [
    {
      id: 1,
      title: 'Game Jam Bubble Blast',
      description: 'You control a little cloud guy with a bubble gun that can shoot ordinary bubbles and charge up to shoot a big bubble to jump into and float around in, dodging spikes. Made this 2-D platformer with Love2D engine in lua during a Game Jam in the span of 4 days.',
      image: '/game-dev-portfolio/Screenshot_2025-06-26_112119.png'
    },
    {
      id: 2,
      title: 'Original Realm Hopper',
      description: 'You play as a knight that must travel through portals to different worlds within The Far-Realms to kill enemies to stop the event known as "The Fracture" from destroying the Multiverse. Created this original version of the 2-D, rogue-like, open area section game in Love2D engine with Lua in the span of 2 weeks.',
      image: '/game-dev-portfolio/Screenshot_2025-06-26_112202.png'
    },
    {
      id: 3,
      title: 'Shadow Play',
      description: 'This was basically the first game I ever programmed. This is a text-based adventure game I made from scratch in C++ where you play as a knight sent by King Aragorn to defend the kingdom of Elenor from evil.',
      image: '/game-dev-portfolio/Screenshot_2025-06-26_111630.png'
    },
    {
      id: 4,
      title: 'Cosmo Revolt',
      description: 'In this 2-D, sci-fi, platformer made in Unreal Engine, you play as a super soldier that gets sick and tired of being experimented on. You break out of your capsule container, and now the whole ship is on alert. Get off this ship before you find yourself back in captivity. This game was made in 1 week.',
      image: '/game-dev-portfolio/Screenshot_2026-01-13_005109.png'
    },
    {
      id: 5,
      title: 'Nitro Blitz',
      description: 'This is a nighttime, 3-D, holiday style racing game where you play as a pickup truck, race against other pickup trucks and come across santa claus pickups which gives you speed boosts to blitz down the race track. This project was made in 1 week using Unity Engine.',
      image: '/game-dev-portfolio/Screenshot_2026-03-13_212853.png'
    },
    {
      id: 6,
      title: 'TBA',
      description: 'TBA',
      image: null
    }
  ];

  const upcomingProjects = [
    {
      id: 1,
      title: 'Realm Hopper',
      description: 'You play as a portal travelling knight to search for treasure, upgrade gear, defeating enemies, bosses to collect Key stones from each world to fight The evil Mind Origin and stop it from consuming The Multiverse. Join The Realm Hoppers Guild and help conquer this chaotic event, stop Mega Industries, and end The Fracture Event. This is the official full version of Realm Hopper that started getting made in Love2D now currently being worked on in Godot Engine with GDScript.',
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'TBA',
      description: 'TBA',
      image: null
    },
    {
      id: 3,
      title: 'TBA',
      description: 'TBA',
      image: null
    },
    {
      id: 4,
      title: 'TBA',
      description: 'TBA',
      image: null
    },
    {
      id: 5,
      title: 'TBA',
      description: 'TBA',
      image: null
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % otherProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 + otherProjects.length) % otherProjects.length);
  };

  const getCurrentProjects = () => {
    const projects = [];
    for (let i = 0; i < 3; i++) {
      projects.push(otherProjects[(currentSlide + i) % otherProjects.length]);
    }
    return projects;
  };

  const nextUpcomingSlide = () => {
    setUpcomingSlide((prev) => (prev + 3) % upcomingProjects.length);
  };

  const prevUpcomingSlide = () => {
    setUpcomingSlide((prev) => (prev - 3 + upcomingProjects.length) % upcomingProjects.length);
  };

  const getCurrentUpcomingProjects = () => {
    const projects = [];
    for (let i = 0; i < 3; i++) {
      projects.push(upcomingProjects[(upcomingSlide + i) % upcomingProjects.length]);
    }
    return projects;
  };

  return (
    <section id="projects" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of games and interactive experiences I've created so far across various genres
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('major-projects')}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-all duration-200 hover:scale-105"
            >
              Major Projects
            </button>
            <button
              onClick={() => scrollToSection('other-projects')}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-all duration-200 hover:scale-105"
            >
              Other Projects
            </button>
            <button
              onClick={() => scrollToSection('upcoming-projects')}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-all duration-200 hover:scale-105"
            >
              Upcoming Projects
            </button>
          </div>

          {/* Major Projects Title */}
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
            Major Projects
          </h3>
        </div>

        {/* Major Projects Section */}
        <section id="major-projects" className="mb-20">
          <div className="space-y-16">
            {majorProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  project.title === 'Adrenaline Rush' ? 'lg:grid-flow-col-dense' :
                  project.title === 'Autobahn' ? '' : 
                  project.title === 'Death Through Deception' ? 'lg:grid-flow-col-dense' :
                  project.title === 'Flight From The Mire' ? '' :
                  project.title === 'Grave Interest' ? '' :
                  project.title === 'Riftbreaker: Ascension' ? 'lg:grid-flow-col-dense' :
                  project.title === 'One Stormy Day' ? '' : 
                  project.title === 'Gyruss' ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Info */}
                <div className={`space-y-6 ${
                  project.title === 'Adrenaline Rush' ? 'lg:col-start-2' :
                  project.title === 'Speed Demons' ? '' :
                  project.title === 'Death Through Deception' ? 'lg:col-start-2' :
                  project.title === 'Flight From The Mire' ? '' :
                  project.title === 'Grave Interest' ? '' :
                  project.title === 'Riftbreaker: Ascension' ? 'lg:col-start-2' :
                  project.title === 'Autobahn' ? '' : 
                  project.title === 'One Stormy Day' ? '' : 
                  project.title === 'Gyruss' ? 'lg:col-start-2' : ''
                }`}>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Image and Play Button */}
                <div className={`relative group ${
                  project.title === 'Adrenaline Rush' ? 'lg:col-start-1' :
                  project.title === 'Speed Demons' ? '' :
                  project.title === 'Death Through Deception' ? 'lg:col-start-1' :
                  project.title === 'Flight From The Mire' ? '' :
                  project.title === 'Grave Interest' ? '' :
                  project.title === 'Riftbreaker: Ascension' ? 'lg:col-start-1' :
                  project.title === 'Autobahn' ? '' : 
                  project.title === 'One Stormy Day' ? '' : 
                  project.title === 'Gyruss' ? 'lg:col-start-1' : ''
                }`}>
                  <div className="relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-80 group-hover:scale-105 transition-transform duration-300 ${
                        project.title === 'Autobahn' ? 'object-cover object-top' : 
                        project.title === 'Speed Demons' ? 'object-cover object-top' : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                  </div>
                  
                  {/* Play Button */}
                  <div className="mt-6">
                    <a
                      href={project.playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-dark px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 flex items-center gap-2 w-full justify-center lg:w-auto"
                    >
                      <Play size={20} />
                      Play Game
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects Section */}
        <section id="other-projects" className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Other Projects
            </h3>
            <p className="text-lg text-gray-300">
              Below is a list of other projects I have worked on.
            </p>
          </div>

          {/* Projects Slider */}
          <div className="relative">
            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {getCurrentProjects().map((project, index) => (
                <div
                  key={`${project.id}-${currentSlide}`}
                  className="bg-dark-card rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-48 hover:scale-110 transition-transform duration-300 ${
                            project.title === 'Shadow Play' ? 'object-cover object-top' : 'object-cover'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent"></div>
                      </>
                    ) : (
                      // Placeholder for TBA project
                      <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center border-b border-accent/20">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Play size={24} className="text-accent" />
                          </div>
                          <p className="text-gray-400 text-sm">Coming Soon</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-dark-card border border-primary/20 rounded-full text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                disabled={otherProjects.length <= 3}
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(otherProjects.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index * 3)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      Math.floor(currentSlide / 3) === index
                        ? 'bg-primary'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-dark-card border border-primary/20 rounded-full text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                disabled={otherProjects.length <= 3}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Upcoming Projects Section */}
        <section id="upcoming-projects" className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Upcoming Projects
            </h3>
            <p className="text-lg text-gray-300">
              Below is a list of projects planned but not yet complete, currently work in progress.
            </p>
          </div>

          {/* Upcoming Projects Slider */}
          <div className="relative">
            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {getCurrentUpcomingProjects().map((project, index) => (
                <div
                  key={`upcoming-${project.id}-${upcomingSlide}`}
                  className="bg-dark-card rounded-xl overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent"></div>
                        
                        {/* Work in Progress Badge */}
                        <div className="absolute top-4 right-4 bg-accent/90 text-dark px-3 py-1 rounded-full text-xs font-semibold">
                          Work in Progress
                        </div>
                      </>
                    ) : (
                      // Placeholder for TBA project
                      <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center border-b border-accent/20">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Play size={24} className="text-accent" />
                          </div>
                          <p className="text-gray-400 text-sm">Coming Soon</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevUpcomingSlide}
                className="p-3 bg-dark-card border border-accent/20 rounded-full text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-200"
                disabled={upcomingProjects.length <= 3}
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(upcomingProjects.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setUpcomingSlide(index * 3)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      Math.floor(upcomingSlide / 3) === index
                        ? 'bg-accent'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextUpcomingSlide}
                className="p-3 bg-dark-card border border-accent/20 rounded-full text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-200"
                disabled={upcomingProjects.length <= 3}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-400 mb-6">
            Want to see more projects or collaborate on something new?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
