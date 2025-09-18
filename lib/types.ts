export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  price: number;
  originalPrice?: number;
  rating: number;
  studentCount: number;
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: 'Marketing Digital' | 'Programação' | 'Empreendedorismo';
  instructor: string;
  instructorImage: string;
  affiliateLink: string;
  highlights: string[];
  modules: Module[];
  testimonials: Testimonial[];
}

export interface Module {
  id: string;
  title: string;
  lessons: number;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  comment: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  courseCount: number;
}