'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Users, Clock, Badge, Play, CheckCircle, ExternalLink } from 'lucide-react';
import { Course } from '@/lib/types';
import { Button } from '@/components/ui/Button';

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'testimonials'>('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!course) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatStudentCount = (count: number) => {
    return new Intl.NumberFormat('pt-BR').format(count);
  };

  const calculateDiscount = () => {
    if (!course.originalPrice) return 0;
    return Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);
  };

  const handlePurchase = () => {
    // Abrir link de afiliado em nova aba
    window.open(course.affiliateLink, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-background rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Scrollable Content */}
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={800}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Course Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-vip-gradient-gold text-black px-3 py-1 rounded-full text-sm font-bold mr-3">
                      {course.category}
                    </span>
                    <div className="flex items-center text-white">
                      <Badge className="h-4 w-4 mr-1" />
                      <span className="text-sm">{course.level}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
                  
                  <div className="flex items-center text-white/90 space-x-6">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-vip-gold text-vip-gold mr-1" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-1" />
                      <span>{formatStudentCount(course.studentCount)} alunos</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    {/* Tabs */}
                    <div className="flex border-b border-border mb-6">
                      {[
                        { id: 'overview', label: 'Visão Geral' },
                        { id: 'modules', label: 'Módulos' },
                        { id: 'testimonials', label: 'Depoimentos' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id as any)}
                          className={`px-4 py-2 font-medium transition-colors ${
                            activeTab === tab.id
                              ? 'text-vip-gold border-b-2 border-vip-gold'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-6">
                      {activeTab === 'overview' && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-bold mb-3">Sobre o Curso</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {course.description}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold mb-3">O que você vai aprender</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {course.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold mb-3">Instrutor</h3>
                            <div className="flex items-center">
                              <Image
                                src={course.instructorImage}
                                alt={course.instructor}
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-full object-cover mr-4"
                              />
                              <div>
                                <h4 className="font-semibold">{course.instructor}</h4>
                                <p className="text-muted-foreground text-sm">
                                  Especialista em {course.category}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'modules' && (
                        <div>
                          <h3 className="text-xl font-bold mb-4">Conteúdo do Curso</h3>
                          <div className="space-y-4">
                            {course.modules.map((module, index) => (
                              <div key={module.id} className="vip-card p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-vip-gradient-gold text-black rounded-full flex items-center justify-center font-bold text-sm mr-3">
                                      {index + 1}
                                    </div>
                                    <div>
                                      <h4 className="font-semibold">{module.title}</h4>
                                      <p className="text-sm text-muted-foreground">
                                        {module.lessons} aulas • {module.duration}
                                      </p>
                                    </div>
                                  </div>
                                  <Play className="h-5 w-5 text-vip-gold" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'testimonials' && (
                        <div>
                          <h3 className="text-xl font-bold mb-4">Depoimentos dos Alunos</h3>
                          <div className="space-y-6">
                            {course.testimonials.map((testimonial) => (
                              <div key={testimonial.id} className="vip-card p-6">
                                <div className="flex items-start">
                                  <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                      <h4 className="font-semibold mr-2">{testimonial.name}</h4>
                                      <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                          <Star key={i} className="h-4 w-4 fill-vip-gold text-vip-gold" />
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-muted-foreground">{testimonial.comment}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Price Card */}
                    <div className="vip-card p-6 sticky top-6">
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center mb-2">
                          <span className="text-3xl font-bold">
                            {formatPrice(course.price)}
                          </span>
                          {course.originalPrice && (
                            <div className="ml-2">
                              <div className="text-lg text-muted-foreground line-through">
                                {formatPrice(course.originalPrice)}
                              </div>
                              <div className="text-sm bg-green-500 text-white px-2 py-1 rounded">
                                -{calculateDiscount()}%
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <Button
                          variant="vip"
                          size="lg"
                          className="w-full"
                          onClick={handlePurchase}
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Comprar Agora
                        </Button>
                        
                        <p className="text-xs text-muted-foreground mt-2">
                          Acesso vitalício • Certificado de conclusão
                        </p>
                      </div>

                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duração:</span>
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nível:</span>
                          <span className="font-medium">{course.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Alunos:</span>
                          <span className="font-medium">{formatStudentCount(course.studentCount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avaliação:</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-vip-gold text-vip-gold mr-1" />
                            <span className="font-medium">{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}