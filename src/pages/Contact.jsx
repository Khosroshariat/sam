import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6 leading-tight"
          >
            Let's Build Your <span className="text-orange-600 font-light italic">Vision</span>
          </motion.h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            Ready to start your next project in Maple or the GTA? Contact our team for a detailed consultation and estimate.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden bg-white border border-slate-100">
          
          {/* Left Side: Dark Branding & Details */}
          <div className="lg:col-span-2 bg-slate-900 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-10 tracking-tight">Contact <br />Information</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="bg-slate-800 p-3 rounded-xl text-orange-500 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-1">Our Office</p>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      1 Rumsey Road, Maple,<br /> Ontario, L6A4L9 Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-slate-800 p-3 rounded-xl text-orange-500 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-1">Direct Lines</p>
                    <p className="text-slate-300 font-medium">+1 (416) 400-7778</p>
                    <p className="text-slate-300 font-medium">+1 (647) 328-4048</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">Service Hours</p>
                <p className="text-slate-200 text-sm">Monday — Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-slate-200 text-sm">Saturday: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="lg:col-span-3 p-10 md:p-14 bg-white">
            {isSubmitted ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-5xl mb-8 shadow-sm">✓</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Sent</h3>
                <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Arvin Design & Construction. A project manager will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-orange-600 font-black tracking-widest text-xs uppercase hover:text-orange-700 transition"
                >
                  ← Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Michael Chen"
                      required
                      className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-700" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="michael@example.com"
                      required
                      className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-700" 
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block ml-1">Nature of Project</label>
                  <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none appearance-none cursor-pointer font-medium text-slate-700">
                    <option>Custom Home Construction</option>
                    <option>Luxury Condo Renovation</option>
                    <option>Kitchen & Bath Transformation</option>
                    <option>Commercial Design</option>
                    <option>General Maintenance</option>
                  </select>
                  <div className="absolute right-4 bottom-4 pointer-events-none text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block ml-1">Project Brief</label>
                  <textarea 
                    rows="4" 
                    placeholder="Describe your goals, timeline, and location..." 
                    required
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all placeholder:text-slate-300 font-medium text-slate-700 resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-2xl shadow-slate-200 transition-all duration-300 uppercase tracking-[0.2em] text-xs"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;