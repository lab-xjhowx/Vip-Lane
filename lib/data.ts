import { Course, Category } from './types';

export const categories: Category[] = [
  {
    id: 'marketing-digital',
    name: 'Marketing Digital',
    description: 'Domine as estratégias mais eficazes do marketing online',
    icon: '📈',
    courseCount: 3,
  },
  {
    id: 'programacao',
    name: 'Programação',
    description: 'Aprenda as linguagens e tecnologias mais demandadas',
    icon: '💻',
    courseCount: 3,
  },
  {
    id: 'empreendedorismo',
    name: 'Empreendedorismo',
    description: 'Transforme suas ideias em negócios de sucesso',
    icon: '🚀',
    courseCount: 3,
  },
];

export const courses: Course[] = [
  // Marketing Digital
  {
    id: 'marketing-digital-completo',
    title: 'Marketing Digital Completo',
    description: 'Domine todas as estratégias de marketing digital necessárias para alavancar seus negócios. Do básico ao avançado, aprenda SEO, Google Ads, Facebook Ads, Instagram Marketing, Email Marketing e muito mais.',
    shortDescription: 'Curso completo de marketing digital do zero ao profissional',
    thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 497,
    originalPrice: 997,
    rating: 4.9,
    studentCount: 15420,
    duration: '40 horas',
    level: 'Iniciante',
    category: 'Marketing Digital',
    instructor: 'Carlos Silva',
    instructorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/marketing-digital-completo',
    highlights: [
      'SEO e otimização para buscadores',
      'Google Ads e Facebook Ads',
      'Instagram e TikTok Marketing',
      'Email Marketing avançado',
      'Analytics e métricas',
      'Certificado de conclusão'
    ],
    modules: [
      { id: '1', title: 'Fundamentos do Marketing Digital', lessons: 8, duration: '6h' },
      { id: '2', title: 'SEO e Otimização', lessons: 10, duration: '8h' },
      { id: '3', title: 'Tráfego Pago', lessons: 12, duration: '10h' },
      { id: '4', title: 'Redes Sociais', lessons: 15, duration: '12h' },
      { id: '5', title: 'Email Marketing', lessons: 6, duration: '4h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Maria Santos',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Curso incrível! Aprendi muito e já estou aplicando nas minhas campanhas.'
      }
    ]
  },
  {
    id: 'copywriting-conversao',
    title: 'Copywriting de Alta Conversão',
    description: 'Aprenda a arte da escrita persuasiva que vende. Domine as técnicas de copywriting mais eficazes para criar textos que convertem visitantes em clientes e maximizam suas vendas.',
    shortDescription: 'Escreva textos que vendem e convertem como um profissional',
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 397,
    originalPrice: 797,
    rating: 4.8,
    studentCount: 8930,
    duration: '25 horas',
    level: 'Intermediário',
    category: 'Marketing Digital',
    instructor: 'Ana Rodrigues',
    instructorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/copywriting-conversao',
    highlights: [
      'Fórmulas de copywriting que funcionam',
      'Headlines que chamam atenção',
      'CTAs irresistíveis',
      'Copy para diferentes canais',
      'Testes A/B para copy',
      'Templates prontos para usar'
    ],
    modules: [
      { id: '1', title: 'Fundamentos do Copywriting', lessons: 6, duration: '5h' },
      { id: '2', title: 'Headlines e Títulos', lessons: 8, duration: '6h' },
      { id: '3', title: 'Body Copy e Storytelling', lessons: 10, duration: '8h' },
      { id: '4', title: 'CTAs e Conversão', lessons: 7, duration: '6h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Pedro Lima',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Minha taxa de conversão triplicou após aplicar as técnicas do curso!'
      }
    ]
  },
  {
    id: 'funil-vendas-avancado',
    title: 'Funil de Vendas Avançado',
    description: 'Construa funis de vendas altamente eficazes que automatizam suas vendas 24/7. Aprenda a criar jornadas de compra otimizadas que nutrem leads e maximizam o faturamento.',
    shortDescription: 'Construa funis que vendem no automático',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 697,
    originalPrice: 1297,
    rating: 4.9,
    studentCount: 6540,
    duration: '35 horas',
    level: 'Avançado',
    category: 'Marketing Digital',
    instructor: 'Roberto Costa',
    instructorImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/funil-vendas-avancado',
    highlights: [
      'Arquitetura de funis de alta conversão',
      'Páginas de captura otimizadas',
      'Sequências de email automáticas',
      'Upsells e downsells estratégicos',
      'Automação completa',
      'Casos reais de sucesso'
    ],
    modules: [
      { id: '1', title: 'Estratégia de Funis', lessons: 8, duration: '7h' },
      { id: '2', title: 'Landing Pages', lessons: 10, duration: '9h' },
      { id: '3', title: 'Email Marketing Automation', lessons: 12, duration: '10h' },
      { id: '4', title: 'Upsells e Cross-sells', lessons: 9, duration: '9h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Juliana Moreira',
        image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Construí um funil que me trouxe mais de R$ 100k em vendas automáticas!'
      }
    ]
  },
  // Programação
  {
    id: 'fullstack-javascript',
    title: 'Full Stack JavaScript Moderno',
    description: 'Torne-se um desenvolvedor full stack completo dominando JavaScript, React, Node.js, Express, MongoDB e todas as tecnologias modernas do desenvolvimento web.',
    shortDescription: 'Do zero ao desenvolvedor full stack em JavaScript',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 897,
    originalPrice: 1597,
    rating: 4.9,
    studentCount: 12350,
    duration: '60 horas',
    level: 'Iniciante',
    category: 'Programação',
    instructor: 'Lucas Ferreira',
    instructorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/fullstack-javascript',
    highlights: [
      'JavaScript ES6+ completo',
      'React com Hooks e Context',
      'Node.js e Express',
      'MongoDB e Mongoose',
      'Deploy na AWS',
      'Projetos reais do mercado'
    ],
    modules: [
      { id: '1', title: 'JavaScript Fundamentals', lessons: 15, duration: '12h' },
      { id: '2', title: 'React Development', lessons: 18, duration: '15h' },
      { id: '3', title: 'Backend com Node.js', lessons: 20, duration: '16h' },
      { id: '4', title: 'Banco de Dados', lessons: 12, duration: '10h' },
      { id: '5', title: 'Deploy e DevOps', lessons: 8, duration: '7h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Thiago Nascimento',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Consegui meu primeiro emprego como dev depois de 6 meses estudando!'
      }
    ]
  },
  {
    id: 'python-data-science',
    title: 'Python para Data Science',
    description: 'Domine Python e suas principais bibliotecas para análise de dados, machine learning e inteligência artificial. Torne-se um cientista de dados requisitado no mercado.',
    shortDescription: 'Python completo para ciência de dados e IA',
    thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 797,
    originalPrice: 1497,
    rating: 4.8,
    studentCount: 9870,
    duration: '50 horas',
    level: 'Intermediário',
    category: 'Programação',
    instructor: 'Dra. Camila Santos',
    instructorImage: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/python-data-science',
    highlights: [
      'Python do básico ao avançado',
      'Pandas, NumPy e Matplotlib',
      'Machine Learning com Scikit-learn',
      'Deep Learning com TensorFlow',
      'Projetos de portfolio',
      'Certificação internacional'
    ],
    modules: [
      { id: '1', title: 'Python Fundamentals', lessons: 12, duration: '10h' },
      { id: '2', title: 'Data Analysis', lessons: 15, duration: '12h' },
      { id: '3', title: 'Machine Learning', lessons: 18, duration: '15h' },
      { id: '4', title: 'Deep Learning', lessons: 10, duration: '8h' },
      { id: '5', title: 'Projetos Práticos', lessons: 8, duration: '5h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Rafael Oliveira',
        image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Mudei de carreira e hoje trabalho como Data Scientist em uma multinacional!'
      }
    ]
  },
  {
    id: 'mobile-react-native',
    title: 'Desenvolvimento Mobile com React Native',
    description: 'Crie aplicativos móveis profissionais para iOS e Android com React Native. Aprenda a desenvolver apps nativos performáticos usando JavaScript.',
    shortDescription: 'Desenvolva apps móveis profissionais para iOS e Android',
    thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 697,
    originalPrice: 1297,
    rating: 4.7,
    studentCount: 7650,
    duration: '45 horas',
    level: 'Intermediário',
    category: 'Programação',
    instructor: 'Marina Silva',
    instructorImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/mobile-react-native',
    highlights: [
      'React Native do zero',
      'Navegação e roteamento',
      'APIs e integração backend',
      'Push notifications',
      'Publicação nas stores',
      'Apps reais para portfolio'
    ],
    modules: [
      { id: '1', title: 'React Native Basics', lessons: 10, duration: '8h' },
      { id: '2', title: 'Navigation & Routing', lessons: 8, duration: '6h' },
      { id: '3', title: 'APIs & Backend', lessons: 12, duration: '10h' },
      { id: '4', title: 'Native Features', lessons: 15, duration: '12h' },
      { id: '5', title: 'Publishing Apps', lessons: 6, duration: '9h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Bruno Martins',
        image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Desenvolvi 3 apps que já estão nas stores e gerando renda passiva!'
      }
    ]
  },
  // Empreendedorismo
  {
    id: 'e-commerce-milionario',
    title: 'E-commerce Milionário',
    description: 'Construa um império digital do zero. Aprenda a criar, escalar e automatizar seu e-commerce para faturar milhões. Estratégias testadas e aprovadas por quem já fez.',
    shortDescription: 'Do zero ao primeiro milhão com e-commerce',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1497,
    originalPrice: 2997,
    rating: 4.9,
    studentCount: 5420,
    duration: '80 horas',
    level: 'Iniciante',
    category: 'Empreendedorismo',
    instructor: 'Felipe Augusto',
    instructorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/e-commerce-milionario',
    highlights: [
      'Escolha de nicho lucrativo',
      'Criação da loja completa',
      'Fornecedores e logística',
      'Marketing para e-commerce',
      'Automação e escalabilidade',
      'Mentalidade milionária'
    ],
    modules: [
      { id: '1', title: 'Fundação do Negócio', lessons: 12, duration: '15h' },
      { id: '2', title: 'Criação da Loja', lessons: 15, duration: '18h' },
      { id: '3', title: 'Operacional e Logística', lessons: 18, duration: '20h' },
      { id: '4', title: 'Marketing e Vendas', lessons: 20, duration: '22h' },
      { id: '5', title: 'Escalabilidade', lessons: 8, duration: '5h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Carla Mendes',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Em 1 ano saí do zero e cheguei a R$ 1,2 milhão em faturamento!'
      }
    ]
  },
  {
    id: 'infoprodutos-authority',
    title: 'Autoridade em Infoprodutos',
    description: 'Transforme seu conhecimento em um negócio lucrativo. Aprenda a criar, lançar e vender infoprodutos de alta qualidade que posicionam você como autoridade no seu nicho.',
    shortDescription: 'Monetize seu conhecimento com infoprodutos de sucesso',
    thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 997,
    originalPrice: 1997,
    rating: 4.8,
    studentCount: 8930,
    duration: '55 horas',
    level: 'Intermediário',
    category: 'Empreendedorismo',
    instructor: 'Rodrigo Almeida',
    instructorImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/infoprodutos-authority',
    highlights: [
      'Validação de ideias lucrativas',
      'Criação de conteúdo premium',
      'Plataformas e tecnologias',
      'Estratégias de lançamento',
      'Construção de autoridade',
      'Escalabilidade do negócio'
    ],
    modules: [
      { id: '1', title: 'Estratégia e Validação', lessons: 10, duration: '12h' },
      { id: '2', title: 'Criação do Produto', lessons: 15, duration: '18h' },
      { id: '3', title: 'Plataforma e Tecnologia', lessons: 8, duration: '10h' },
      { id: '4', title: 'Lançamento e Marketing', lessons: 12, duration: '15h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Patricia Rocha',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Criei meu primeiro infoproduto e já vendi mais de R$ 500k!'
      }
    ]
  },
  {
    id: 'mindset-empreendedor',
    title: 'Mindset Empreendedor de Elite',
    description: 'Desenvolva a mentalidade dos empreendedores mais bem-sucedidos do mundo. Supere crenças limitantes, desenvolva disciplina e conquiste a liberdade financeira.',
    shortDescription: 'A mentalidade que separa vencedores de perdedores',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 597,
    originalPrice: 1197,
    rating: 4.9,
    studentCount: 11240,
    duration: '30 horas',
    level: 'Iniciante',
    category: 'Empreendedorismo',
    instructor: 'Marcos Vinicius',
    instructorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://exemplo.com/affiliate/mindset-empreendedor',
    highlights: [
      'Mindset de abundância',
      'Disciplina e foco extremo',
      'Gestão de tempo produtiva',
      'Networking estratégico',
      'Inteligência emocional',
      'Visão de longo prazo'
    ],
    modules: [
      { id: '1', title: 'Fundamentos do Mindset', lessons: 8, duration: '8h' },
      { id: '2', title: 'Disciplina e Hábitos', lessons: 10, duration: '10h' },
      { id: '3', title: 'Produtividade Extrema', lessons: 6, duration: '6h' },
      { id: '4', title: 'Relacionamentos e Network', lessons: 6, duration: '6h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Daniel Santos',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Mudou completamente minha forma de pensar e agir. Resultados incríveis!'
      }
    ]
  },
];