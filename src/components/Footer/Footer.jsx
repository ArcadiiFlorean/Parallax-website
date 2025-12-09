import { motion } from 'framer-motion'
import { Coffee, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden border-t border-white/5">
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-500" />
              <h3 className="text-2xl font-black text-white">
                Coffee<span className="text-amber-500">Coder</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Website-uri moderne și landing pages cu efecte 3D spectaculoase. Transformăm viziuni în experiențe digitale premium.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              {['Acasă', 'Despre', 'Servicii', 'Proces', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-amber-500 transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-4">Servicii</h4>
            <ul className="space-y-2">
              {['Landing Pages', 'E-Commerce', 'Portfolio Sites', 'Business Websites', 'Web Apps'].map((service, i) => (
                <li key={i} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:hello@coffeecoder.com" className="hover:text-amber-500 transition">
                  hello@coffeecoder.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:+40123456789" className="hover:text-amber-500 transition">
                  +40 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>România</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-sm"
            >
              © 2024 CoffeeCoder. Toate drepturile rezervate.
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, link: '#' },
                { icon: Linkedin, link: '#' },
                { icon: Twitter, link: '#' },
                { icon: Instagram, link: '#' }
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer