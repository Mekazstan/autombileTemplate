"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaStoreAlt, FaCar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6"; // Using standard Fa icon for delivery/driving
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md"; // Great sign & drive icon

export default function ProcessSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { icon: <FaStoreAlt size={32} />, title: "Come Visit Us", desc: "Know More" },
    { icon: <FaCar size={32} />, title: "Pick your Vehicle", desc: "Know More" },
    { icon: <MdOutlineAirlineSeatReclineExtra size={36} />, title: "Sign & Drive", desc: "Know More" },
  ];

  return (
    <section className="py-20 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h3 className="text-white/60 font-light text-xl lg:text-2xl mb-16 tracking-wide">
          Three Simple Steps to <span className="text-[#A4E022] font-bold">Buy your Dream Car</span>
        </h3>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[28%] left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 border-2 border-[#A4E022] rounded-lg flex items-center justify-center text-[#A4E022] mb-6 bg-black group-hover:bg-[#A4E022] group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(164,224,34,0.2)]">
                {step.icon}
              </div>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">
                {step.title}
              </h4>
              <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold group-hover:text-white transition-colors flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A4E022] inline-block" /> {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
