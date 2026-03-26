import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-slate-900 text-white px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6191da95b4?q=80&w=2070" 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Luxury Home Construction"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
            Arvin <span className="text-orange-500 font-light italic">Design</span> <br/> 
            & Construction
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Building excellence in Maple and across Ontario. Custom homes, luxury renovations, and expert project management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-sm font-bold tracking-widest uppercase text-sm transition-all shadow-xl">
              Our Projects
            </Link>
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-4 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-slate-100 transition-all">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block underline decoration-2 underline-offset-8">
              Reliability First
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Quality Craftsmanship <br/> For Your Modern Lifestyle
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Arvin Design & Construction specialize in turning visions into reality. Whether it's a structural build for a new townhouse, a condo upgrade, or essential plumbing and kitchen renovations, our Maple-based team ensures perfection in every detail.
            </p>
          </div>
          <div className="bg-slate-100 p-8 rounded-2xl border-l-8 border-orange-500">
            <blockquote className="text-2xl italic text-slate-800 font-serif">
              "We don't just build houses; we design the foundation for your future memories."
            </blockquote>
            <p className="mt-4 font-bold text-slate-900">— The Arvin Team</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;