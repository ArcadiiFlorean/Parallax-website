import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Coffee } from 'lucide-react'

function ZoomSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 15, 20])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.8, 0])
  const buttonScale = useTransform(scrollYProgress, [0.6, 1], [0, 1])
  const buttonOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])
  
  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
        
        {/* Glowing background effect */}
        <motion.div
          style={{ 
            scale: useTransform(scrollYProgress, [0, 1], [0, 15]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0])
          }}
          className="absolute inset-0 bg-gradient-radial from-amber-500/20 via-orange-500/10 to-transparent"
        />
        
        {/* Zoom text */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute text-center"
        >
          <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
            READY?
          </h2>
        </motion.div>
        
        {/* CTA Content - appears after zoom */}
        <motion.div
          style={{ scale: buttonScale, opacity: buttonOpacity }}
          className="text-center z-20 px-6"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="mb-8"
          >
            <Coffee className="w-20 h-20 mx-auto text-amber-500 mb-6" strokeWidth={1.5} />
            <h3 className="text-5xl md:text-6xl font-black text-white mb-4">
              Hai să Creăm
            </h3>
            <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-8">
              Ceva Împreună!
            </h3>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Transformă-ți viziunea în realitate digitală. Website-ul tău de vis așteaptă să prindă viață.
            </p>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black text-xl rounded-full overflow-hidden"
          >
            <span className="relative z-10">Începe Proiectul</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: [-200, 200] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.button>
          
          <p className="text-sm text-gray-500 mt-6">
            Consultație gratuită • Răspuns rapid • Rezultate garantate
          </p>
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ZoomSection