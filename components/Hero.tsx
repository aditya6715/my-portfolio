'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center p-6"
    >
      <h2 className="text-3xl font-bold">Hi, I’m Aditya 👋</h2>
      <p className="mt-2 text-lg max-w-xl mx-auto">
        A CSE undergrad at NIT Jamshedpur, building scalable web apps and smart AI tools. Let's code a better world.
      </p>
    </motion.section>
  );
}