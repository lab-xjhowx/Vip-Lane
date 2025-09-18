'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Badge } from 'lucide-react';
import { Course } from '@/lib/types';
import { Button } from '@/components/ui/Button';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatStudentCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <motion.div
      className="vip-card group cursor-pointer min-w-[300px] md:min-w-[350px]"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Button variant="vip" size="sm" className="w-full">
              Ver Detalhes
            </Button>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-vip-gradient-gold text-black px-3 py-1 rounded-full text-sm font-bold">
            {formatPrice(course.price)}
          </div>
        </div>

        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <div className="glass-effect text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <Badge className="h-3 w-3 mr-1" />
            {course.level}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-vip-gold text-sm font-medium mb-2">
          {course.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-vip-gold transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <div className="relative">
            <Image
              src={course.instructorImage}
              alt={course.instructor}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="absolute -inset-0.5 bg-vip-gradient-gold rounded-full opacity-60 blur-sm"></div>
          </div>
          <span className="ml-2 text-sm font-medium">{course.instructor}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-vip-gold text-vip-gold mr-1" />
              <span className="font-medium">{course.rating}</span>
            </div>
            
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{formatStudentCount(course.studentCount)}</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        {/* Original Price */}
        {course.originalPrice && (
          <div className="mt-2">
            <span className="text-sm text-muted-foreground line-through">
              De {formatPrice(course.originalPrice)}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}