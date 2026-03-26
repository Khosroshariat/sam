import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-white text-2xl font-bold tracking-tight">
            ARVIN <span className="text-orange-500 font-light italic">Design & Construction</span>
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium residential construction and renovation services across Ontario. 
            From custom home builds to expert kitchen and bathroom transformations.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Request a Quote</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Contact Details</h4>
          <div className="text-sm space-y-2">
            <p className="flex items-start">
              <span className="text-orange-500 mr-2">📍</span>
              1 Rumsey Road, Maple, Ontario, L6A4L9 Canada
            </p>
            <p className="flex items-center">
              <span className="text-orange-500 mr-2">📞</span>
              +1 (416) 400-7778
            </p>
            <p className="flex items-center">
              <span className="text-orange-500 mr-2">📞</span>
              +1 (647) 328-4048
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-12 pt-8 text-center text-xs tracking-widest">
        © 2026 ARVIN DESIGN & CONSTRUCTION. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;