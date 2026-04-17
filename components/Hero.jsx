"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center bg-black overflow-hidden pt-20">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
          alt="Luxury Dealership"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Heavy shadow gradients so the text pops perfectly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Neon Framed Box with Staggered Children */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.8, staggerChildren: 0.2, delayChildren: 0.3, ease: [0.22, 1, 0.36, 1] } 
            }
          }}
          className="relative border-[6px] border-[#A4E022] p-8 lg:p-12 w-fit bg-black/40 backdrop-blur-xs"
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="text-[#A4E022] text-xs font-bold tracking-widest uppercase mb-4 block drop-shadow-md"
          >
            Amber Motors
          </motion.span>
          
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-white text-5xl lg:text-7xl font-black italic uppercase leading-[0.95] drop-shadow-2xl"
          >
            Welcome To <br />
            Your <br />
            Dealership
          </motion.h1>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 text-white/80 text-sm font-semibold max-w-sm leading-relaxed"
          >
            At Amber Motors, the widest selection on used Professionals and auto loans guaranteed.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
