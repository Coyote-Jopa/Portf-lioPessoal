import { motion } from 'framer-motion';
import { Camera, Palette, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen bg-black py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-600/10 rotate-45 blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-black mb-12 font-space-grotesk text-center">
            Sobre Mim
          </h2>

          <div className="bg-gradient-to-br from-emerald-900/10 to-emerald-900/5 p-8 rounded-2xl border border-emerald-900/20 mb-12">
            <p className="text-gray-400 text-lg leading-relaxed font-inter mb-6">
              Sou um profissional apaixonado por marketing digital e design
              criativo, com mais de 5 anos de experiência transformando ideias
              em campanhas de sucesso. Minha jornada começou com o fascínio pela
              interseção entre criatividade e estratégia, e desde então venho
              explorando meu potencial máximo no ambiente digital e sempre
              buscando a excelência.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-inter">
              Especializado em Adobe Photoshop, Corel Drawn e estratégias de
              marketing digital, trabalho para criar soluções que não apenas
              atendam, mas superem as expectativas dos clientes. Minha abordagem
              combina análise de dados com criatividade para desenvolver
              campanhas que realmente conectam com o público-alvo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Camera size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space-grotesk">
                Criatividade
              </h3>
              <p className="text-gray-400 font-inter">
                Transformando conceitos em visuais impactantes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Palette size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space-grotesk">
                Design
              </h3>
              <p className="text-gray-400 font-inter">
                Especialista em Adobe Photoshop e design digital
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space-grotesk">
                Marketing
              </h3>
              <p className="text-gray-400 font-inter">
                Estratégias eficientes para resultados reais
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
