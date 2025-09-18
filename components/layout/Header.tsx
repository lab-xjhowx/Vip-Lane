'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Search, Menu, X, Sun, Moon, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Crown className="h-8 w-8 text-vip-gold group-hover:text-vip-gold-dark transition-colors" />
              <div className="absolute -inset-1 bg-vip-gradient-gold rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
            </div>
            <span className="text-2xl font-bold vip-gradient">
              VIPLane
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Início
            </Link>
            <Link 
              href="#categorias" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Categorias
            </Link>
            <Link 
              href="#cursos" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Cursos
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-foreground/70 hover:text-foreground transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="#categorias" 
                className="block text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
              <Link 
                href="#cursos" 
                className="block text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}