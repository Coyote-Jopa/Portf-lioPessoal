import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-black mb-12 font-space-grotesk">Contato</h2>
          
          <div className="space-y-6">
            <motion.a
              href="mailto:joaopedro.mottavalladao@gmail.com"
              className="flex items-center justify-center gap-4 text-emerald-400 hover:text-emerald-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
              <span className="font-inter text-lg">joaopedro.mottavalladao@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="tel:+5521987218971"
              className="flex items-center justify-center gap-4 text-emerald-400 hover:text-emerald-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              <span className="font-inter text-lg">(21) 98721-8971</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}