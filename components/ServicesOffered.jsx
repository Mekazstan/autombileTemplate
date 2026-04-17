"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const SERVICES = [
  { img: "https://images.unsplash.com/photo-1632733711679-529326f6db12?w=800&q=80", title: "BATTERY CHANGE", desc: "Dead or alive, we offer battery replacement on your vehicle." },
  { img: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80", title: "BRAKES CHANGE", desc: "Keep your brakes healthy and stable with full-scale brake service from us." },
  { img: "https://images.unsplash.com/photo-1616616053860-03a118831e50?w=800&q=80", title: "OIL CHANGE", desc: "In need of an oil change? Bring it to us for fast and on-hands service." },
];

export default function ServicesOffered() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-[#050505] relative border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-xl lg:text-2xl font-light tracking-wide mb-3"
          >
            Services <span className="text-[#A4E022] font-bold">Offered</span>
          </motion.h2>
          <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest">
            Check out the exclusive services offered when you buy your vehicle with us!
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full h-36 lg:h-44 relative mb-6 overflow-hidden border border-white/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h4 className="text-white font-bold tracking-[0.15em] text-[10px] mb-3 uppercase flex flex-col items-start gap-2 relative">
                {service.title}
                <span className="w-6 h-0.5 bg-[#A4E022] inline-block group-hover:w-full transition-all duration-300" />
              </h4>
              <p className="text-white/40 text-[10px] leading-relaxed font-semibold">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
