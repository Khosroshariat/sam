import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../assets/6.jpg'
import image2 from '../assets/7.jpg'
import image3 from '../assets/5.jpg'
import image4 from '../assets/3.jpg'
import image5 from '../assets/1.jpg'
import image6 from '../assets/2.jpg'
import image7 from '../assets/10.jpg'
import image8 from '../assets/4.jpg'
import image9 from '../assets/9.jpg'
import image10 from '../assets/8.jpg'

const projects = [
  { 
    id: 1, 
    title: 'Luxury Condo Suite', 
    category: 'Condo', 
    img: [image4],
    desc: 'High-end interior finishing and custom cabinetry for urban living.',
    gallery: [
      [image6], 
      [image5]
    ]
  },
  { 
    id: 2, 
    title: 'Modern Chef Kitchen', 
    category: 'Kitchen', 
    img: [image3],
    desc: 'Complete kitchen redesign with premium marble and smart appliances.',
    gallery: [
      [image1], 
      [image2]
    ]
  },
  { 
    id: 3, 
    title: 'House & Townhouse Full Design', 
    category: 'Houses & Townhouses', 
    img: [image7],
    desc: 'Full-scale design and renovation for residential properties, from structural changes to finishing touches.',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', 
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
      [image8]
    ]
  },
  { 
    id: 4, 
    title: 'Bathroom &  Plumbing', 
    category: 'Plumbing', 
    img: [image9],
    desc: 'High-end bathroom transformations combining luxury tile work with master-level plumbing infrastructure and premium fixture installation.',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800',
      [image10]
    ]
  },
];

const categories = ['All', 'Condo', 'Houses & Townhouses', 'Kitchen', 'Plumbing'];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Our Expertise
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8">
            Portfolio of <span className="text-orange-600 font-light italic">Excellence</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="relative px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-300"
              >
                <span className={`relative z-10 ${activeFilter === cat ? 'text-white' : 'text-slate-400'}`}>
                  {cat}
                </span>
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-orange-600 rounded-full shadow-lg shadow-orange-600/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </header>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filtered.map(item => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(item)}
                className="group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden rounded-[2rem] bg-slate-100 mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest text-[10px] border border-white/40 px-6 py-2 rounded-full backdrop-blur-sm">VIEW PROJECT</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.title}</h3>
                <p className="text-orange-600 text-[10px] font-black uppercase tracking-widest mt-1">{item.category}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
              onClick={() => setSelectedProject(null)} // Click outside to close
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 bg-slate-100 hover:bg-orange-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-slate-500"
                >
                  ✕
                </button>

                {/* Modal Content - Left Sidebar (Image) */}
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img src={selectedProject.img} className="w-full h-full object-cover" alt="Main project" />
                </div>

                {/* Modal Content - Right (Details & Gallery) */}
                <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto">
                  <span className="text-orange-600 font-black tracking-widest text-[10px] uppercase">{selectedProject.category}</span>
                  <h2 className="text-3xl font-black text-slate-900 mt-2 mb-4">{selectedProject.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-8">{selectedProject.desc}</p>
                  
                  <div className="space-y-4">
                    <p className="font-black text-[10px] tracking-widest text-slate-400 uppercase">Recent Project Gallery</p>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.gallery.map((url, i) => (
                        <div key={i} className="rounded-xl overflow-hidden h-32 bg-slate-100 border border-slate-100">
                          <img src={url} alt="Gallery" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="mt-10 w-full bg-slate-900 text-white py-4 rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-orange-600 transition-all"
                  >
                    Close Project
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Services;