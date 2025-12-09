import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ShoppingCart, Briefcase, Layers } from 'lucide-react'

function Showcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])
  
  const projects = [
    {
      id: 1,
      title: "Landing Pages",
      subtitle: "High-Converting",
      description: "Pagini optimizate pentru conversii maximale. Design modern, animații fluide și call-to-action strategice.",
      icon: Sparkles,
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-950 via-orange-900 to-black",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      features: ["SEO Optimizat", "Mobile-First", "Fast Loading"]
    },
    {
      id: 2,
      title: "E-Commerce",
      subtitle: "Online Shops",
      description: "Magazine online complete cu shopping cart, plăți integrate și management produse. Experiență premium de cumpărare.",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-950 via-cyan-900 to-black",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      features: ["Stripe/PayPal", "Inventory", "Admin Panel"]
    },
    {
      id: 3,
      title: "Portfolio",
      subtitle: "Creative Showcase",
      description: "Website-uri creative care îți prezintă munca într-un mod spectaculos. Galerii interactive și storytelling vizual.",
      icon: Layers,
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-950 via-pink-900 to-black",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      features: ["3D Effects", "Galleries", "Animations"]
    },
    {
      id: 4,
      title: "Business",
      subtitle: "Corporate Sites",
      description: "Website-uri profesionale pentru companii. Prezentare elegantă, secțiuni complete și integrări business.",
      icon: Briefcase,
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-950 via-emerald-900 to-black",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      features: ["CMS", "Multi-language", "Analytics"]
    }
  ]
  
  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <motion.div style={{ x }} className="flex h-full">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className={`min-w-full h-full relative overflow-hidden bg-gradient-to-br ${project.bgGradient}`}
              >
                {/* Background image with parallax */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    x: useTransform(
                      scrollYProgress,
                      [index * 0.25, (index + 1) * 0.25],
                      [100, -100]
                    ),
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-20 h-full flex items-center justify-center px-8">
                  <div className="max-w-3xl mx-auto text-center">
                    
                    {/* Number indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white font-bold text-sm mb-6`}
                    >
                      0{project.id} / 04
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-6"
                    >
                      <Icon className={`w-16 h-16 mx-auto text-transparent bg-clip-text bg-gradient-to-r ${project.color}`} strokeWidth={1.5} />
                    </motion.div>
                    
                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className={`text-lg font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                        {project.subtitle}
                      </p>
                      <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6">
                        {project.title}
                      </h2>
                    </motion.div>
                    
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-wrap justify-center gap-3"
                    >
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                    
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/50 text-sm"
                  >
                    Scroll pentru mai mult →
                  </motion.div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Showcase