'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Course } from '@/lib/types';
import { CourseCard } from './CourseCard';

interface CourseCarouselProps {
  title: string;
  courses: Course[];
  onCourseClick: (course: Course) => void;
}

export function CourseCarousel({ title, courses, onCourseClick }: CourseCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <motion.h2 
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-card hover:bg-accent transition-colors"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="netflix-scroll"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ scrollSnapAlign: 'start' }}
            >
              <CourseCard
                course={course}
                onClick={() => onCourseClick(course)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}