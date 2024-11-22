import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-black/20 z-10" />

      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-400/20 rotate-45 blur-2xl" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 z-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <motion.div
              className="text-emerald-400 text-xl mb-6 font-space-grotesk"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Especialista em Marketing Digital
            </motion.div>
            <motion.div
              className="space-y-2 md:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black font-space-grotesk tracking-tight leading-[0.9] md:leading-[0.9]"
                style={{
                  background: 'linear-gradient(to right, #fff, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                JOÃO PEDRO
              </motion.h1>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black font-space-grotesk tracking-tight leading-[0.9] md:leading-[0.9]"
                style={{
                  background: 'linear-gradient(to right, #10b981, #fff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              ></motion.h1>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black font-space-grotesk tracking-tight leading-[0.9] md:leading-[0.9]"
                style={{
                  background: 'linear-gradient(to right, #fff, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                MOTTA VALLADÃO
              </motion.h1>
            </motion.div>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mt-12 mb-12 font-inter"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Transformando marcas através de estratégias e campanhas inovadoras e
            criatividade para resultados reais.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-emerald-400 w-8 h-8" />
      </motion.div>
    </motion.section>
  );
}
