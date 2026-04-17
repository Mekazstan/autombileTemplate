"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(164,224,34,0.05)]' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between lg:justify-center lg:gap-14 text-[11px] font-bold tracking-[0.2em] uppercase">
        
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-[#A4E022] hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-[#A4E022] transition-colors">Inventory</a>
          <a href="#" className="hover:text-[#A4E022] transition-colors">Get Pre-Approved</a>
        </div>

        {/* Center Logo */}
        <a href="#" className="flex flex-col items-center justify-center relative shrink-0 group">
          <div className="w-16 h-16 border-2 border-[#A4E022] rounded-full flex items-center justify-center relative group-hover:shadow-[0_0_15px_rgba(164,224,34,0.3)] transition-shadow duration-300">
            {/* Strike */}
            <div className="absolute inset-x-0 w-[120%] -left-[10%] h-[2px] bg-[#A4E022]" /> 
            <span className="text-[#A4E022] text-2xl font-black italic relative z-10 drop-shadow-md">AM</span>
          </div>
          <span className="text-[7px] tracking-[0.3em] text-[#A4E022] absolute -bottom-5 opacity-90">AMBER MOTORS</span>
        </a>

        {/* Mobile menu toggle */}
        <button className="lg:hidden text-white hover:text-[#A4E022] transition-colors">
          <FaBars size={24} />
        </button>

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#" className="hover:text-[#A4E022] transition-colors">Assurance</a>
          <a href="#" className="hover:text-[#A4E022] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#A4E022] transition-colors">Contact Us</a>
          
          <div className="flex items-center gap-3 ml-2">
            <a href="#" aria-label="Facebook" className="w-7 h-7 border border-white/20 flex items-center justify-center hover:border-[#A4E022] hover:text-[#A4E022] hover:scale-110 transition-all duration-300">
              <FaFacebookF size={12} />
            </a>
            <a href="#" aria-label="Twitter" className="w-7 h-7 border border-white/20 flex items-center justify-center hover:border-[#A4E022] hover:text-[#A4E022] hover:scale-110 transition-all duration-300">
              <FaTwitter size={12} />
            </a>
          </div>
        </div>

      </div>
    </motion.nav>
  );
}
