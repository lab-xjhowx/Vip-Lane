'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToCategories = () => {
    const element = document.getElementById('categorias');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-vip-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vip-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-vip-gradient-gold text-black rounded-full text-sm font-semibold mb-8"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Plataforma Premium • Conteúdo VIP
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transforme Sua Carreira com
            <br />
            <span className="vip-gradient">Cursos VIP</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Acesso exclusivo aos melhores cursos de <strong>Marketing Digital</strong>, 
            <strong> Programação</strong> e <strong>Empreendedorismo</strong>. 
            Conteúdo premium que gera resultados reais.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="vip"
              size="lg"
              onClick={scrollToCategories}
              className="text-lg px-8 py-4"
            >
              Explorar Cursos VIP
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4 border-vip-gold text-vip-gold hover:bg-vip-gold hover:text-black"
            >
              Ver Todos os Cursos
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vip-gradient-gold rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold">50k+</div>
              <div className="text-sm text-muted-foreground">Alunos Ativos</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vip-gradient-gold rounded-full flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-vip-gradient-gold rounded-full flex items-center justify-center mb-2">
                <Sparkles className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold">9</div>
              <div className="text-sm text-muted-foreground">Cursos Premium</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-vip-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vip-gold rounded-full animate-bounce mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}