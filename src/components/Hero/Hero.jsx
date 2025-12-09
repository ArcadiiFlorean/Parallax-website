import { motion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'

function Hero() {
  const { scrollY } = useScroll()
  
  // Straturi cu viteze FOARTE diferite
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -100])   // Fundal - cel mai încet
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -300])   // Mijloc
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -500])   // Cafea
  const layer4Y = useTransform(scrollY, [0, 1000], [0, -700])   // Cod/prim plan
  const textY = useTransform(scrollY, [0, 500], [0, -400])      // Text - foarte rapid
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  
  return (
    <section className="hero-section relative h-screen overflow-hidden">
      
      {/* Layer 1 - Fundal workspace blur */}
      <motion.div 
        style={{ y: layer1Y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
    <img 
  src="/images/parallax.png" 
  alt="workspace" 
  className="w-full h-full object-cover opacity-30 blur-sm"
/>
      </motion.div>
      
      {/* Layer 2 - Desk with laptop */}
      <motion.div 
        style={{ y: layer2Y }}
        className="absolute inset-0 z-10"
      >
        <img 
          src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=1600&q=80" 
          alt="laptop" 
          className="absolute bottom-0 left-0 w-full h-3/4 object-cover object-top opacity-40"
        />
      </motion.div>
      
      {/* Layer 3 - Coffee cup */}
      <motion.div 
        style={{ y: layer3Y }}
        className="absolute inset-0 z-20"
      >
        <img 
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80" 
          alt="coffee" 
          className="absolute bottom-10 right-10 md:right-20 w-48 md:w-64 h-48 md:h-64 object-contain opacity-60"
        />
      </motion.div>
      
      {/* Layer 4 - Code screen glow */}
      <motion.div 
        style={{ y: layer4Y }}
        className="absolute inset-0 z-30"
      >
        <div className="absolute bottom-0 left-10 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      </motion.div>
      
      {/* Floating code symbols */}
      <div className="floating-elements">
        <span className="code-symbol" style={{top: '20%', left: '10%'}}>{'{ }'}</span>
        <span className="code-symbol" style={{top: '60%', left: '15%'}}>{'</>'}</span>
        <span className="code-symbol" style={{top: '30%', right: '10%'}}>{'<>'}</span>
        <span className="code-symbol" style={{top: '70%', right: '15%'}}>{'( )'}</span>
      </div>
      
      {/* Text content - fastest */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex items-center justify-center z-40"
      >
        <div className="text-center px-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl mb-4"
          >
            Coffee<span className="text-amber-500">Coder</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-amber-300 font-light"
          >
            Website-uri & Landing Pages cu Calitate Premium
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero