import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Evolução de Marca',
    description: 'Transformação completa de marca para um cliente do varejo',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
    tags: ['Branding', 'Estratégia', 'Digital'],
  },
  {
    title: 'Gestão de Mídias Sociais',
    description: 'Campanha inovadora nas redes sociais com sucesso viral',
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80',
    tags: ['Mídias Sociais', 'Conteúdo', 'Analytics'],
  },
  {
    title: 'Marketing Digital 360°',
    description: 'Estratégia completa de marketing digital e implementação',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    tags: ['Marketing', 'SEO', 'Publicidade'],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-emerald-950/20 py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-32"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 font-space-grotesk">
              Projetos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-inter">
              Conheça alguma das áreas de minha especialidade !
            </p>
          </div>

          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <motion.h3
                    className="text-4xl font-bold text-white mb-4 font-space-grotesk"
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-6 font-inter">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-emerald-400/10 text-emerald-400 px-4 py-1 rounded-full text-sm font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ gap: '16px' }}
                    className="flex items-center gap-2 text-emerald-400 font-medium"
                  ></motion.button>
                </div>
                <div className="order-1 md:order-2">
                  <div className="overflow-hidden rounded-xl">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
