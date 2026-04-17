"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FirstTimeBuyer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full py-32 lg:py-48 flex items-center bg-black overflow-hidden">
      {/* Background Cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80" // Dashboard interior
          alt="Car Interior"
          fill
          className="object-cover"
        />
        {/* Shadow gradient for heavy contrast */}
        <div className="absolute inset-0 bg-black/80 lg:bg-black/70 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 w-full relative z-10 flex justify-end">
        
        {/* Right Aligned CTA Box */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-[4px] border-[#A4E022] p-8 lg:p-12 w-full max-w-2xl bg-black/50 backdrop-blur-sm"
        >
          <h2 className="text-white text-3xl font-black italic uppercase mb-2 drop-shadow-lg">
            FIRST-TIME BUYER?
          </h2>
          <h3 className="text-[#A4E022] text-[11px] font-bold tracking-widest uppercase mb-6">
            DON'T WORRY, WE HAVE A PROGRAM FOR YOU
          </h3>

          <p className="text-white/70 text-xs leading-loose font-medium mb-8 pr-4">
            Duis justo velit odio accumsan nec sed diam sed. Molesite vitae curcus porttitor tellus. Aenean enim dolor aliquet en scelerisque, except et tortor. Curabitur donec velit feugiat ut ac...
          </p>

          <motion.a 
            href="#program"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border border-white/30 text-white/80 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:border-[#A4E022] hover:text-[#A4E022] transition-colors"
          >
            READ MORE 
            <span className="ml-2">▶</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
