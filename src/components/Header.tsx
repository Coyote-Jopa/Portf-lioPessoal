import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-black text-poppins"
      >
        JP
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-poppins-black"
      >
        <Menu size={24} />
      </motion.button>
    </motion.header>
  );
}
