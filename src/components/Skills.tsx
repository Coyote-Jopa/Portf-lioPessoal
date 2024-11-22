import { motion } from 'framer-motion';
import { Lightbulb, Megaphone, PenTool, BarChart } from 'lucide-react';

const skills = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Planejamento Estratégico',
    description:
      'Desenvolvimento de estratégias de marketing alinhadas aos objetivos do negócio',
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Design Criativo',
    description:
      'Especialista em Adobe Photoshop e criação de conteúdo visual impactante',
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Gestão de Campanhas',
    description:
      'Criação e execução de campanhas de marketing em múltiplos canais',
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Análise e Otimização',
    description:
      'Abordagem orientada por dados para otimizar o desempenho das campanhas',
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-black py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-6 font-space-grotesk">
            Especialidades
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-inter">
            Combinando visão criativa com expertise técnica para entregar
            soluções especificas e direcionadas para o marketing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-emerald-900/10 to-emerald-900/5 p-8 rounded-2xl border border-emerald-900/20"
            >
              <div className="text-emerald-400 mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">
                {skill.title}
              </h3>
              <p className="text-gray-400 font-inter">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
