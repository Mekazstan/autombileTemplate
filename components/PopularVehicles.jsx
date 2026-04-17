"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PopularVehicles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl font-black tracking-widest uppercase"
          >
            Most Popular Vehicles
          </motion.h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 h-auto lg:h-[450px]">
          
          {/* Column 1: Left Tall */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-72 lg:h-full group overflow-hidden cursor-pointer"
          >
            <Image 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" 
              alt="Mercedes Benz" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end">
              <h4 className="text-white font-bold tracking-widest uppercase text-sm">Mercedes Benz</h4>
              <div className="w-8 h-8 rounded-full bg-[#A4E022] flex items-center justify-center opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-black text-xs font-black">▶</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Middle Stacked */}
          <div className="flex flex-col gap-2 lg:gap-4 h-[500px] lg:h-full">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex-1 group overflow-hidden cursor-pointer"
            >
              <Image 
                src="https://images.unsplash.com/photo-1555353540-64fd1b622830?w=800&q=80" 
                alt="Chevrolet" // Yellow car
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h4 className="text-white font-bold tracking-widest uppercase text-sm">Chevrolet</h4>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex-1 group overflow-hidden cursor-pointer"
            >
              <Image 
                src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80" 
                alt="BMW" // Dark car
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h4 className="text-white font-bold tracking-widest uppercase text-sm">BMW</h4>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Right Tall */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative h-72 lg:h-full group overflow-hidden cursor-pointer"
          >
            <Image 
              src="https://images.unsplash.com/photo-1559828551-5ef215e4a87b?w=800&q=80" 
              alt="Hyundai" // Red car
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end">
              <h4 className="text-white font-bold tracking-widest uppercase text-sm">Hyundai</h4>
              <div className="w-8 h-8 rounded-full bg-[#A4E022] flex items-center justify-center opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-black text-xs font-black">▶</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Carousel indicators (Decorative) */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
        </div>

      </div>
    </section>
  );
}
