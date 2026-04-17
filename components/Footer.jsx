"use client";
import { FaApple, FaGooglePlay, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-12 text-white/50">
      
      {/* Newsletter Strip */}
      <div className="bg-[#111111] py-8 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-white/80 text-lg font-light tracking-widest uppercase flex items-center gap-3">
            Subscribe to our <span className="text-[#A4E022] font-bold">Newsletter</span>
          </h3>
          <div className="flex w-full md:w-auto mt-4 md:mt-0">
            <input 
              type="email" 
              placeholder="Enter your email now" 
              className="bg-black border border-white/10 px-4 py-3 text-xs w-full md:w-64 focus:outline-none focus:border-[#A4E022] transition-colors"
            />
            <button className="bg-[#A4E022] text-black px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-colors">
              Subscribe <FaRegEnvelope />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Column 1: App */}
        <div>
          <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-6">App Coming Soon</h4>
          <p className="text-[10px] leading-relaxed mb-6 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 border border-white/20 rounded px-3 py-1.5 hover:border-[#A4E022] hover:text-[#A4E022] transition-colors">
              <FaApple size={18} />
              <div className="text-left">
                <span className="block text-[6px] uppercase tracking-wider">Available on the</span>
                <span className="block text-[9px] font-bold">App Store</span>
              </div>
            </button>
            <button className="flex items-center gap-2 border border-white/20 rounded px-3 py-1.5 hover:border-[#A4E022] hover:text-[#A4E022] transition-colors">
              <FaGooglePlay size={16} />
              <div className="text-left">
                <span className="block text-[6px] uppercase tracking-wider">Get it on</span>
                <span className="block text-[9px] font-bold">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Column 2: Location & Hours */}
        <div>
          <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-6">Location</h4>
          <ul className="space-y-4 text-[10px] font-semibold">
            <li>No. 15 Aminu Kano Crescent, Wuse 2, Abuja 900288</li>
            <li>Block C, Garki International Market, Garki, Abuja</li>
            <li>Plot 724, Central Business District, Abuja 900103</li>
          </ul>

          <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mt-8 mb-4">Hours</h4>
          <ul className="space-y-2 text-[10px] font-semibold">
            <li className="flex justify-between"><span>Monday - Saturday</span> <span>9:30 am - 8:00 pm</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>11:00 am - 5:00 pm</span></li>
          </ul>
        </div>

        {/* Column 3: Policies & Services */}
        <div>
          <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-6">Policies & Services</h4>
          <ul className="space-y-3 text-[10px] font-semibold">
            <li><a href="#" className="hover:text-[#A4E022]">F. A. Q.</a></li>
            <li><a href="#" className="hover:text-[#A4E022]">Get Pre-Approved In Seconds!</a></li>
            <li><a href="#" className="hover:text-[#A4E022]">Schedule a Test Drive</a></li>
            <li><a href="#" className="hover:text-[#A4E022]">Site Map</a></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-6">Legal Information</h4>
          <ul className="space-y-3 text-[10px] font-semibold">
            <li><a href="#" className="hover:text-[#A4E022]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#A4E022]">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      {/* Deep Copyright Strip */}
      <div className="bg-black py-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] tracking-widest uppercase font-bold text-white/30 text-center md:text-left">
            Copyright © {new Date().getFullYear()}. All Rights Reserved | Design By: <span className="text-[#A4E022]">Qwantom</span>
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/30 hover:text-[#A4E022] transition-colors"><FaFacebookF size={12} /></a>
            <a href="#" className="text-white/30 hover:text-[#A4E022] transition-colors"><FaTwitter size={12} /></a>
            <a href="#" className="text-white/30 hover:text-[#A4E022] transition-colors"><FaYoutube size={12} /></a>
            <a href="#" className="text-white/30 hover:text-[#A4E022] transition-colors"><FaInstagram size={12} /></a>
          </div>
        </div>
      </div>

    </footer>
  );
}
