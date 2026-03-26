import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linkStyle = ({ isActive }) => 
    `text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
      isActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
    }`;

  const mobileLinkStyle = ({ isActive }) => 
    `text-2xl font-black tracking-widest uppercase transition-colors ${
      isActive ? 'text-orange-600' : 'text-white'
    }`;

  return (
    <nav className="bg-white sticky top-0 z-[200] border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center relative z-[210] bg-white">
        
        {/* Logo Section */}
        <Link to="/" onClick={closeMenu} className="group flex items-center gap-3">
          <div className="bg-slate-950 p-2.5 rounded-xl group-hover:bg-orange-600 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-black text-slate-950 tracking-tighter leading-none">ARVIN</h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-6 h-px bg-orange-400"></div>
              <span className="text-[10px] tracking-[0.2em] font-light uppercase text-orange-600">Design & Construction</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/services" className={linkStyle}>Services</NavLink>
          <NavLink to="/contact" className="bg-slate-950 text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-orange-600 transition-all shadow-xl active:scale-[0.98]">
            Consultation
          </NavLink>
        </div>

        {/* Burger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-950 focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Solid Background Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-[190] bg-slate-950 flex flex-col pt-32 px-10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-10">
              <NavLink to="/" onClick={closeMenu} className={mobileLinkStyle}>Home</NavLink>
              <NavLink to="/services" onClick={closeMenu} className={mobileLinkStyle}>Services</NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={mobileLinkStyle}>Contact</NavLink>
              
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className="w-full text-center bg-orange-600 text-white py-5 rounded-2xl font-black tracking-widest uppercase text-sm shadow-lg"
              >
                Book Consultation
              </Link>

              <div className="pt-10 border-t border-slate-800">
                <p className="text-orange-500 font-bold tracking-widest text-[10px] uppercase mb-2">Office Location</p>
                <p className="text-white text-lg">1 Rumsey Road, Maple,Ontario</p>
                <p className="text-slate-400 mt-4">+1 (416) 400-7778 <br /> +1 (647) 328-4048 </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;