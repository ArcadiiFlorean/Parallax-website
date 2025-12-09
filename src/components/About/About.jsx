import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  
  return (
    <section ref={ref} className="min-h-screen bg-black relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/20 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <motion.div 
            style={{ y }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-amber-500/30">
              <img src="/profile.jpg" alt="Coffee Coder" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-amber-500 text-black px-4 py-2 rounded-xl font-bold text-sm">
              Freelancer
            </div>
          </motion.div>
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-semibold mb-3 block text-sm">// Despre Mine</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Coffee<span className="text-amber-500">Coder</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Dezvoltator web independent specializat în <span className="text-amber-400 font-semibold">website-uri moderne</span> și landing pages cu efecte 3D.
            </p>
            
            <p className="text-base text-gray-400 leading-relaxed">
              Combin creativitatea cu precizia tehnică pentru rezultate excepționale.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default About