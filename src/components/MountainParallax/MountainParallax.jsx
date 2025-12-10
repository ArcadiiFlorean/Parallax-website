import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function MountainParallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background gradient - fundal smooth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900" />

        {/* Layer 1 - Background 1000.png (CEL MAI ÎNCET) */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 150]), // ← POZITIV = COBOARĂ
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.15]),
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50"></div>
          <img
            src="/images/1000.png"
            alt="mountains background"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-slate-900/20"></div>
        </motion.div>

        {/* Layer 2 - Foreground 2000.png (CEL MAI RAPID) */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 400]), // ← POZITIV = COBOARĂ MAI RAPID
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.08]),
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60 blur-xl"></div>
          <img
            src="/images/2000.png"
            alt="mountains front"
            className="w-full h-full object-cover mix-blend-normal"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Overlay gradient general pentru depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Text Overlay */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.5, 0]),
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20"
        >
          <motion.p
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
            }}
            className="text-cyan-400 text-sm md:text-base mb-4 uppercase tracking-[0.3em] font-light"
          >
            We Craft
          </motion.p>
          
          <motion.h1
            style={{
              scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.8]),
            }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none drop-shadow-2xl"
          >
            <span className="text-white block drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Digital</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 block drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]">
              Experiences
            </span>
          </motion.h1>
          
          <motion.p
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
            }}
            className="text-gray-300 max-w-xl text-base md:text-lg leading-relaxed drop-shadow-lg"
          >
            Fiecare pixel spune o poveste. Fiecare animație creează emoție.
          </motion.p>

          <motion.button
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]),
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-base md:text-lg shadow-2xl hover:shadow-cyan-500/50 transition-shadow"
          >
            Explorează
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-xs mb-2 uppercase tracking-wider">Scroll</span>
            <svg
              className="w-6 h-10 text-white/40"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MountainParallax;