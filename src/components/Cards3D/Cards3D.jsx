import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react'

function Cards3D() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const cards = [
    {
      number: "01",
      title: "Consultație",
      subtitle: "Înțelegem Viziunea",
      icon: MessageSquare,
      color: "from-amber-500 to-orange-600",
      description: "Discutăm ideile tale, obiectivele și cerințele proiectului. Consultație gratuită pentru a înțelege perfect ce ai nevoie."
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Creăm Conceptul",
      icon: Palette,
      color: "from-blue-500 to-cyan-600",
      description: "Dezvoltăm mockup-uri și prototipuri interactive. Revizuiri nelimitate până când designul e perfect."
    },
    {
      number: "03",
      title: "Dezvoltare",
      subtitle: "Aducem la Viață",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      description: "Cod clean, performanță maximă, animații fluide. Testare riguroasă pe toate device-urile."
    },
    {
      number: "04",
      title: "Launch",
      subtitle: "Live & Suport",
      icon: Rocket,
      color: "from-green-500 to-emerald-600",
      description: "Deploy profesional, optimizare SEO și suport continuu. Website-ul tău e gata să strălucească!"
    }
  ]
  
  return (
    <section ref={containerRef} className="min-h-screen py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-semibold text-lg mb-4 block">// Cum Lucrăm</span>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            Procesul Nostru
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            De la idee la lansare, ghidam fiecare pas cu profesionalism și dedicare
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon
            const cardProgress = useTransform(
              scrollYProgress,
              [i * 0.15, (i + 1) * 0.15],
              [0, 1]
            )
            const rotateY = useTransform(cardProgress, [0, 1], [25, 0])
            const scale = useTransform(cardProgress, [0, 1], [0.85, 1])
            const opacity = useTransform(cardProgress, [0, 1], [0, 1])
            
            return (
              <motion.div
                key={i}
                style={{ 
                  rotateY,
                  scale,
                  opacity,
                  transformStyle: "preserve-3d"
                }}
                whileHover={{ 
                  rotateY: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-300">
                  
                  {/* Number badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} text-white font-black text-lg mb-6`}>
                    {card.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className={`w-12 h-12 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-black text-white mb-2">
                    {card.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-4`}>
                    {card.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {card.description}
                  </p>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Cards3D