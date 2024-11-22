import { motion } from 'framer-motion';
import About from './components/About';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Cursor />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-12 text-gray-400 font-inter"
        >
          © 2024 João Pedro Motta Valladão. Todos os direitos reservados.
        </motion.footer>
      </main>
    </div>
  );
}