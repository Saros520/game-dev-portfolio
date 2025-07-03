import React from 'react';
import { Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Deidrei Yetman',
      image: './Screenshot 2025-06-27 113005.png',
      quote: 'Josh is an interesting person to work with, never a dull moment for sure with his constant flow of ideas and creativity. Determined, creative, headstrong. Those would be the first three word I\'d describe him with. Set in his ways, he really leans into his work when the gears of his imaginations get flowing.',
      role: 'Game Development Student'
    },
    {
      id: 2,
      name: 'Keigan Macniel',
      image: './Screenshot 2025-06-26 161055.png',
      quote: 'I had the opportunity to work with Josh on Autobahn, a team project in our game dev course. Josh brought a lot of enthusiasm and a strong personal vision to the project, and he stayed engaged throughout the process. He often took initiative in making creative decisions and was never afraid to try new ideas. He\'s a friendly and motivated team member who puts effort into seeing a project through to completion, and his dedication to the work was clear from start to finish.',
      role: 'Junior Game Developer'
    },
    {
      id: 3,
      name: 'Andrew Hollet',
      image: './Screenshot 2025-06-27 090154.png',
      quote: 'I worked with Joshua on a project and he was very hard working and determined. He would work tirelessly to accomplish his tasks and it\'s easy to see his passion. I would definitely work with Joshua again.',
      role: 'Game Development Student'
    },
    {
      id: 4,
      name: 'Alexander Wright',
      image: './Screenshot 2025-06-27 113046.png',
      quote: 'Josh is a very kind person, He is very good with Code and is very thorough when making Storylines for video games. I enjoy working with him and hope to do so in the future.',
      role: 'Game Development Student'
    },
    {
      id: 5,
      name: 'TBA',
      image: null,
      quote: 'TBA',
      role: 'Junior Game Developer'
    },
    {
      id: 6,
      name: 'TBA',
      image: null,
      quote: 'TBA',
      role: 'Game Development Student'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What colleagues and collaborators say about working with me on various game development projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-dark-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote size={24} className="text-primary" />
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/30 flex items-center justify-center">
                    <User size={24} className="text-primary" />
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                {testimonial.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-400 text-center mb-4">
                {testimonial.role}
              </p>

              {/* Quote */}
              <blockquote className="text-gray-300 text-sm leading-relaxed text-center italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Bottom Section - Ready for the Next Challenge */}
        <div className="text-center animate-fade-in">
          <div className="bg-dark-card rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Ready for the Next Challenge
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects that push the boundaries of interactive entertainment. 
              Let's create something amazing together!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-dark px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              Discuss Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;