import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-emerald-400 rounded-full pointer-events-none mix-blend-difference z-50"
        animate={{ x: position.x - 8, y: position.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-80 h-80 bg-emerald-500/10 rounded-full pointer-events-none blur-3xl z-40"
        animate={{ x: position.x - 160, y: position.y - 160 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
    </>
  );
}