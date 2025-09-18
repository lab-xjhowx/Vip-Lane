'use client';

import { motion } from 'framer-motion';
import { Category } from '@/lib/types';

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
}

export function CategoryGrid({ categories, onCategorySelect }: CategoryGridProps) {
  return (
    <section id="categorias" className="py-20 bg-hero-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Escolha Sua <span className="vip-gradient">Especialização</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cursos premium desenvolvidos por especialistas para transformar sua carreira
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="vip-card p-8 text-center cursor-pointer group"
              onClick={() => onCategorySelect(category.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-vip-gold transition-colors">
                {category.name}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <div className="inline-flex items-center justify-center w-full px-4 py-2 bg-vip-gradient-gold text-black rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {category.courseCount} cursos disponíveis
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}