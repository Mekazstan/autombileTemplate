"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SpecialOffers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative z-20 max-w-5xl mx-auto px-6 -mt-24 mb-24">
      <div ref={ref} className="relative flex flex-col md:flex-row shadow-2xl border border-white/10">
        
        {/* Left Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 bg-[#111] p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group cursor-pointer hover:bg-[#151515] transition-colors"
        >
          <div className="z-10 text-center sm:text-left shrink-0">
            <h2 className="text-white text-3xl font-black italic tracking-wide mb-1">₦149</h2>
            <p className="text-[#A4E022] text-[10px] font-bold tracking-widest uppercase mb-4">Monthly</p>
            <p className="text-white/50 text-[10px] md:text-xs tracking-wider uppercase font-bold">Drive A 2014 Mazda 3</p>
          </div>
          <motion.div className="w-full h-32 relative" whileHover={{ scale: 1.05 }}>
            <Image 
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&q=80"
              alt="Red Car Concept"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover sm:object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        </motion.div>

        {/* OR Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-white/20 text-white/50 text-[10px] font-bold flex items-center justify-center z-30 shadow-lg hidden md:flex">
          OR
        </div>

        {/* Right Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 bg-[#0A0A0A] p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group cursor-pointer hover:bg-[#111] transition-colors"
        >
          <div className="z-10 text-center sm:text-left shrink-0">
            <h2 className="text-white text-3xl font-black italic tracking-wide mb-1">₦149</h2>
            <p className="text-white text-[10px] font-bold tracking-widest uppercase mb-4">Monthly</p>
            <p className="text-white/50 text-[10px] md:text-xs tracking-wider uppercase font-bold">Drive A 2014 Nissan Versa</p>
          </div>
          <motion.div className="w-full h-32 relative" whileHover={{ scale: 1.05 }}>
            <Image 
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80"
              alt="Blue Car Concept"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover sm:object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
