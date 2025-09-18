'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/course/CategoryGrid';
import { CourseCarousel } from '@/components/course/CourseCarousel';
import { CourseModal } from '@/components/course/CourseModal';
import { categories, courses } from '@/lib/data';
import { Course } from '@/lib/types';

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleCategorySelect = (categoryId: string) => {
    const element = document.getElementById('cursos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCoursesByCategory = (categoryName: string) => {
    return courses.filter(course => course.category === categoryName);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Category Grid */}
      <CategoryGrid 
        categories={categories} 
        onCategorySelect={handleCategorySelect}
      />

      {/* Courses Section */}
      <section id="cursos" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Catálogo <span className="vip-gradient">Premium</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cursos cuidadosamente selecionados para acelerar sua jornada de sucesso
            </p>
          </motion.div>

          {/* Marketing Digital */}
          <CourseCarousel
            title="📈 Marketing Digital"
            courses={getCoursesByCategory('Marketing Digital')}
            onCourseClick={handleCourseClick}
          />

          {/* Programação */}
          <CourseCarousel
            title="💻 Programação"
            courses={getCoursesByCategory('Programação')}
            onCourseClick={handleCourseClick}
          />

          {/* Empreendedorismo */}
          <CourseCarousel
            title="🚀 Empreendedorismo"
            courses={getCoursesByCategory('Empreendedorismo')}
            onCourseClick={handleCourseClick}
          />
        </div>
      </section>

      {/* Course Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}