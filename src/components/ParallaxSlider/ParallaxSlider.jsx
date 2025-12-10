import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

function ParallaxSlider() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scene transitions
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scene2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.5, 0.65],
    [0, 1, 1, 0]
  );
  const scene3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.65, 1],
    [0, 1, 1]
  );

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      {/* SCENE 1 - "IN THE CODE" */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: scene1Opacity }}
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"
        >
          {/* Background layer - slowest */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 0.3], [0, 200]),
              scale: useTransform(scrollYProgress, [0, 0.3], [1, 1.2]),
            }}
            className="absolute inset-0"
          >
            {/* Aici pui imagine fundal blur */}
            <div className="w-full h-full bg-gradient-to-b from-purple-900/50 to-transparent"></div>
          </motion.div>

          {/* Floating code symbols - medium speed */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 0.3], [0, 150]) }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Pune PNG: simboluri de cod plutitoare */}
            {/* <div className="text-9xl opacity-10 text-amber-400">{"{ }"}</div> */}
          </motion.div>

          {/* Coffee cup with steam - fastest */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 0.3], [0, 100]),
              rotate: useTransform(scrollYProgress, [0, 0.3], [0, -15]),
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            {/* Pune PNG: cana de cafea mare */}
            <img
              src="/images/coffee.png"
              alt="coffee"
              className="relative z-10 w-full h-full object-contain"
            />
          </motion.div>

          {/* Text overlay */}
          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.15, 0.25],
                [1, 1, 0]
              ),
              y: useTransform(scrollYProgress, [0, 0.3], [0, -50]),
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h1 className="text-7xl md:text-[10rem] lg:text-[13rem] font-black mb-4 leading-none">
              <span className="text-amber-400">Coffee</span>
              <span className="text-white mx-4">Coder</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold leading-none mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
               Crafting Digital Experiences
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg text-sm md:text-base">
            Transformăm ideile tale în proiecte memorabile.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </motion.div>

        {/* SCENE 2 - "TO THE WEB" */}
        <motion.div
          style={{ opacity: scene2Opacity }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-teal-900 to-black"
        >
          {/* Planet/Globe background */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0.3, 0.65], [100, -100]),
              scale: useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]),
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96"
          >
            <img
              src="/images/coffee.png"
              alt="planet"
              className="w-full h-full object-contain"
            />
            {/* Pune PNG: glob pamantesc sau sfera 3D */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-50 blur-2xl"></div>
          </motion.div>

          {/* Laptop illustration */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0.3, 0.65], [200, -50]),
              scale: useTransform(scrollYProgress, [0.35, 0.5], [0.8, 1]),
            }}
            className="absolute bottom-1/4 left-1/4 w-64 h-48"
          >
            {/* Pune PNG: laptop deschis cu cod pe ecran */}
            <div className="w-full h-full bg-gray-800 rounded-lg"></div>
          </motion.div>

          {/* Birds/particles */}
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.3, 0.65], [-100, 100]),
              y: useTransform(scrollYProgress, [0.3, 0.65], [0, -80]),
            }}
            className="absolute top-1/3 left-1/2"
          >
            <img
              src="/images/coffee.png"
              alt="planet"
              className="w-full h-full object-contain"
            />

            {/* Pune PNG: păsări sau particule */}
            <div className="text-4xl">{"< / >"}</div>
          </motion.div>

          {/* Text */}
          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.35, 0.45, 0.6],
                [0, 1, 0]
              ),
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <p className="text-gray-400 text-lg mb-4 uppercase tracking-widest">
       Your Vision

            </p>
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 leading-none">
           Our  Reality
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                web
              </span>
            </h1>
            <p className="text-gray-300 max-w-md text-lg">
             Transformăm conceptele în platforme digitale funcționale.
            </p>
          </motion.div>
        </motion.div>

        {/* SCENE 3 - "A CODE ODYSSEY" */}
        <motion.div
          style={{ opacity: scene3Opacity }}
          className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-black"
        >
          {/* Clouds bottom */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0.65, 1], [100, -50]),
              scale: useTransform(scrollYProgress, [0.65, 0.8], [1.2, 1]),
            }}
            className="absolute bottom-0 left-0 right-0 h-1/2"
          >
            {/* Pune PNG: nori roz/portocalii */}
            <div className="w-full h-full bg-gradient-to-t from-amber-600/30 to-transparent blur-xl"></div>
          </motion.div>

          {/* UFO/Cloud elements */}
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.65, 1], [-50, 50]),
              y: useTransform(scrollYProgress, [0.65, 1], [0, -30]),
            }}
            className="absolute top-1/3 left-1/3 w-32 h-32"
          >
            {/* Pune PNG: element plutitor */}
            <div className="w-full h-full bg-white/10 rounded-full backdrop-blur"></div>
          </motion.div>

          {/* Developer figure */}
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0.65, 1], [50, 0]),
              scale: useTransform(scrollYProgress, [0.65, 0.8], [0.9, 1]),
            }}
            className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
          >
            {/* Pune PNG: silueta developer */}
            <div className="w-32 h-48 bg-gradient-to-t from-amber-500 to-orange-600 rounded-full"></div>
          </motion.div>

          {/* Text */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.7, 0.8], [0, 1]),
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <p className="text-gray-400 text-lg mb-4 uppercase tracking-widest">
   From Concept
            </p>
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 leading-none">
            to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
             Masterpiece
              </span>
            </h1>
            <p className="text-gray-300 max-w-md text-lg mb-8">
            Fiecare linie de cod spune povestea brandului tău.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold rounded-full text-lg"
            >
              Începe Proiectul
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ParallaxSlider;
