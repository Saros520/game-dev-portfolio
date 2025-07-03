import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({
    from_email: '',
    message: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      from_email: '',
      message: ''
    };

    // Email validation
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!validateEmail(formData.from_email)) {
      newErrors.from_email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return !newErrors.from_email && !newErrors.message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_6d0cgjh', // Your Service ID
        'template_d0ua8qf', // Your Template ID
        {
          from_email: formData.from_email.trim(),
          message: formData.message.trim(),
        },
        '3jWORblftQyjbCb8U' // Your Public Key
      );

      setSubmitStatus('success');
      setFormData({ from_email: '', message: '' });
      setErrors({ from_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form is valid for submit button state
  const isFormValid = formData.from_email.trim() && 
                     formData.message.trim() && 
                     validateEmail(formData.from_email) && 
                     formData.message.trim().length >= 10;

  return (
    <section id="contact" className="py-20 bg-dark-lighter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
            Let's Connect
          </h2>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-white">
            Contact Me
          </h3>
          
          {/* Company Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary/50 flex items-center justify-center overflow-hidden">
              <img
                src="./UmbraGamingCompanyLogo 2025-06-29 003028 copy.png"
                alt="UmbraGaming Logo"
                className="w-full h-full object-cover scale-110"
                onError={(e) => {
                  // Fallback to User icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <User size={48} className="text-primary" style={{ display: 'none' }} />
            </div>
          </div>

          <p className="text-gray-300 mb-8">
            I'm open to anything, Send me a message below if you're serious about contacting me to hire me or getting started on a project with me.
          </p>
        </div>

        {/* Contact Form */}
        <div className="animate-slide-in-left">
          <div className="bg-dark-card rounded-xl p-8 border border-primary/20">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success/20 border border-success/30 rounded-lg flex items-center gap-3">
                <CheckCircle size={20} className="text-success" />
                <p className="text-success">Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-error/20 border border-error/30 rounded-lg flex items-center gap-3">
                <AlertCircle size={20} className="text-error" />
                <p className="text-error">Sorry, there was an error sending your message. Please try again or contact me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Your Email */}
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-dark border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.from_email 
                      ? 'border-error focus:border-error focus:ring-error/20' 
                      : 'border-primary/30 focus:border-primary focus:ring-primary/20'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.from_email && (
                  <p className="mt-2 text-sm text-error flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.from_email}
                  </p>
                )}
              </div>

              {/* Your Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your idea for a project, or any other important matter *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  minLength={10}
                  className={`w-full px-4 py-3 bg-dark border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message 
                      ? 'border-error focus:border-error focus:ring-error/20' 
                      : 'border-primary/30 focus:border-primary focus:ring-primary/20'
                  }`}
                  placeholder="Tell me about your project ideas, collaboration opportunities, or any other important matters you'd like to discuss... (minimum 10 characters)"
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <p className="text-sm text-error flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {formData.message.length}/10 minimum characters
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isFormValid && !isSubmitting
                    ? 'bg-primary text-white hover:bg-secondary hover:scale-105'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {isFormValid ? 'Send Message' : 'Please fill all required fields'}
                  </>
                )}
              </button>

              {/* Form Requirements */}
              <div className="text-xs text-gray-500 space-y-1">
                <p>* Required fields</p>
                <p>• Valid email address required</p>
                <p>• Message must be at least 10 characters</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;