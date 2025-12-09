import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  
  const packages = [
    {
      name: "Starter",
      subtitle: "Perfect pentru început",
      price: "499",
      currency: "€",
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
      popular: false,
      features: [
        "Landing Page (1 pagină)",
        "Design responsive",
        "Animații de bază",
        "SEO optimizat",
        "Contact form",
        "2 revizii incluse",
        "Livrare în 7 zile"
      ]
    },
    {
      name: "Professional",
      subtitle: "Cel mai popular",
      price: "999",
      currency: "€",
      icon: Crown,
      color: "from-amber-500 to-orange-600",
      popular: true,
      features: [
        "Website complet (5 pagini)",
        "Design premium custom",
        "Animații 3D & Parallax",
        "SEO avansat",
        "Blog integrat",
        "CMS pentru editare",
        "5 revizii incluse",
        "Livrare în 14 zile",
        "1 lună suport gratuit"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Soluții complete",
      price: "Custom",
      currency: "",
      icon: Rocket,
      color: "from-purple-500 to-pink-600",
      popular: false,
      features: [
        "Website nelimitat",
        "E-commerce complet",
        "Design & brand identity",
        "Animații ultra-premium",
        "Integrări API",
        "Admin panel custom",
        "Revizii nelimitate",
        "Suport prioritar 24/7",
        "Hosting 1 an gratuit"
      ]
    }
  ]
  
  return (
    <section ref={ref} className="min-h-screen py-32 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-amber-500 font-semibold text-lg mb-4 block">// Pachete & Prețuri</span>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            Alege Pachetul Perfect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparență totală. Fără costuri ascunse. Doar rezultate premium.
          </p>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative ${pkg.popular ? 'md:-mt-8' : ''}`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r ${pkg.color} text-white font-bold text-sm rounded-full shadow-lg z-10`}>
                    ⭐ Cel mai popular
                  </div>
                )}
                
                <div className={`h-full bg-gradient-to-br ${pkg.popular ? 'from-white/10 to-white/5 border-2 border-amber-500/50' : 'from-white/5 to-white/[0.02] border border-white/10'} backdrop-blur-lg rounded-3xl p-8 relative overflow-hidden group`}>
                  
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Package name */}
                    <h3 className="text-3xl font-black text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">{pkg.subtitle}</p>
                    
                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        {pkg.currency && <span className="text-2xl text-gray-400">{pkg.currency}</span>}
                        <span className={`text-5xl font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                          {pkg.price}
                        </span>
                      </div>
                      {pkg.currency && <p className="text-gray-500 text-sm mt-2">preț fix, o singură plată</p>}
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center mt-0.5`}>
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                        pkg.popular 
                          ? `bg-gradient-to-r ${pkg.color} text-white shadow-lg shadow-amber-500/50` 
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {pkg.price === "Custom" ? "Contactează-ne" : "Alege Pachetul"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 mt-12"
        >
          💡 Toate pachetele includ consultație gratuită • Plăți securizate • Garanție de satisfacție
        </motion.p>
      </div>
    </section>
  )
}

export default Services