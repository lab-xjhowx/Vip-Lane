import { Course, Category } from './types';

export const categories: Category[] = [
  {
    id: 'programacao',
    name: 'Programação',
    description: 'Domine as linguagens e tecnologias mais demandadas do mercado',
    icon: '💻',
    courseCount: 4,
  },
  {
    id: 'marketing-digital',
    name: 'Marketing Digital',
    description: 'Ferramentas e estratégias para maximizar suas vendas online',
    icon: '📈',
    courseCount: 3,
  },
  {
    id: 'automacao',
    name: 'Automação & Produtividade',
    description: 'Automatize processos e aumente sua produtividade',
    icon: '⚡',
    courseCount: 4,
  },
  {
    id: 'empreendedorismo',
    name: 'Empreendedorismo',
    description: 'Transforme suas ideias em negócios de sucesso',
    icon: '🚀',
    courseCount: 2,
  },
];

export const courses: Course[] = [
  // Programação
  {
    id: 'jornada-dev-eficiente',
    title: 'Jornada Dev Eficiente',
    description: 'A Jornada Dev Eficiente existe para que você treine sua capacidade de escrever código de qualidade em cenários variados. Ela te prepara para a alta performance. E quem se sente mais preparado(a), vai mais longe!',
    shortDescription: 'Treine sua capacidade de escrever código de qualidade',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 497,
    originalPrice: 897,
    rating: 4.9,
    studentCount: 8420,
    duration: '50 horas',
    level: 'Intermediário',
    category: 'Programação',
    instructor: 'Alberto Luiz',
    instructorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://go.hotmart.com/L100511717F',
    highlights: [
      'Código de qualidade em cenários variados',
      'Preparação para alta performance',
      'Técnicas de desenvolvimento eficiente',
      'Boas práticas de programação',
      'Projetos práticos desafiadores',
      'Mentalidade de desenvolvedor sênior'
    ],
    modules: [
      { id: '1', title: 'Fundamentos da Eficiência', lessons: 12, duration: '10h' },
      { id: '2', title: 'Código Limpo e Qualidade', lessons: 15, duration: '12h' },
      { id: '3', title: 'Cenários Práticos', lessons: 18, duration: '15h' },
      { id: '4', title: 'Performance e Otimização', lessons: 20, duration: '13h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Carlos Mendes',
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Mudou completamente minha forma de programar. Agora escrevo código muito mais limpo!'
      }
    ]
  },
  {
    id: 'pacote-fullstack',
    title: 'Pacote Full-Stack',
    description: 'Acesso a mais de 4.000 vídeo aulas atualizadas, permitindo que você aprenda a criar qualquer website, sistema, aplicativo web ou aplicativo nativo.',
    shortDescription: 'Mais de 4.000 aulas para se tornar um desenvolvedor completo',
    thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1497,
    originalPrice: 2997,
    rating: 4.9,
    studentCount: 25420,
    duration: '200+ horas',
    level: 'Iniciante',
    category: 'Programação',
    instructor: 'Equipe Full-Stack Master',
    instructorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://go.hotmart.com/W86492316L',
    highlights: [
      'Mais de 4.000 vídeo aulas atualizadas',
      'Front-End, Back-End e Mobile',
      'ReactJS, Angular, Vue, NodeJS',
      'Design para Apps & Web',
      'Infraestrutura & DevOPS',
      'Acesso vitalício com suporte'
    ],
    modules: [
      { id: '1', title: 'Front-End Completo', lessons: 50, duration: '40h' },
      { id: '2', title: 'Back-End e APIs', lessons: 45, duration: '35h' },
      { id: '3', title: 'Mobile Development', lessons: 40, duration: '30h' },
      { id: '4', title: 'DevOps e Deploy', lessons: 25, duration: '20h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Ana Silva',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Conteúdo incrível! Consegui meu primeiro emprego como Full-Stack em 8 meses!'
      }
    ]
  },
  {
    id: 'vba-expert',
    title: 'VBA Expert na Prática | 2025',
    description: 'Aprenda VBA do básico ao avançado e descubra como automatizar tarefas, criar funções e formulários personalizados no Excel.',
    shortDescription: 'Domine VBA e automatize suas tarefas no Excel',
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 297,
    originalPrice: 597,
    rating: 4.8,
    studentCount: 12540,
    duration: '35 horas',
    level: 'Iniciante',
    category: 'Programação',
    instructor: 'Especialista VBA',
    instructorImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://go.hotmart.com/T100596966C',
    highlights: [
      'VBA do básico ao avançado',
      'Automatização de tarefas',
      'Funções e formulários personalizados',
      'Macros e códigos do zero',
      'Operadores lógicos avançados',
      'Projetos práticos no Excel'
    ],
    modules: [
      { id: '1', title: 'Fundamentos do VBA', lessons: 10, duration: '8h' },
      { id: '2', title: 'Macros e Automação', lessons: 12, duration: '10h' },
      { id: '3', title: 'Formulários Avançados', lessons: 8, duration: '7h' },
      { id: '4', title: 'Projetos Práticos', lessons: 15, duration: '10h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Roberto Santos',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Automatizei todos os meus relatórios! Economizo 4 horas por dia.'
      }
    ]
  },
  {
    id: 'power-apps-expert',
    title: 'POWER APPS Expert na Prática | 2025',
    description: 'Crie aplicativos para sua empresa sem conhecimento em programação usando Microsoft Power Apps.',
    shortDescription: 'Crie aplicativos profissionais sem programação',
    thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 397,
    originalPrice: 797,
    rating: 4.8,
    studentCount: 9540,
    duration: '40 horas',
    level: 'Iniciante',
    category: 'Programação',
    instructor: 'Equipe Viscari',
    instructorImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://go.hotmart.com/Q100596983X',
    highlights: [
      'Criação de apps sem programação',
      'Microsoft Power Platform',
      'Design responsivo para mobile',
      'Integração com dados corporativos',
      'Automação de processos',
      'Do amador ao avançado'
    ],
    modules: [
      { id: '1', title: 'Introdução ao Power Apps', lessons: 8, duration: '6h' },
      { id: '2', title: 'Criação de Apps Básicos', lessons: 12, duration: '10h' },
      { id: '3', title: 'Recursos Avançados', lessons: 15, duration: '12h' },
      { id: '4', title: 'Integração e Deploy', lessons: 10, duration: '12h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Fernanda Costa',
        image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Criei 5 aplicativos para minha empresa sem saber programar!'
      }
    ]
  },
  // Marketing Digital
  {
    id: 'leadzy',
    title: 'Leadzy',
    description: 'O Leadzy eleva o atendimento via WhatsApp oferecendo respostas automáticas com áudios que parecem gravados na hora.',
    shortDescription: 'Revolucione seu atendimento no WhatsApp',
    thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 197,
    originalPrice: 397,
    rating: 4.9,
    studentCount: 15420,
    duration: 'Acesso vitalício',
    level: 'Iniciante',
    category: 'Marketing Digital',
    instructor: 'Equipe Leadzy',
    instructorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://go.hotmart.com/V100968766U',
    highlights: [
      'Respostas automáticas no WhatsApp',
      'Áudios como se fossem gravados na hora',
      'Gatilhos automáticos',
      'Scripts de vendas otimizados',
      'Melhora experiência do cliente',
      'Aumenta conversões'
    ],
    modules: [
      { id: '1', title: 'Configuração Inicial', lessons: 5, duration: '2h' },
      { id: '2', title: 'Respostas Automáticas', lessons: 8, duration: '4h' },
      { id: '3', title: 'Scripts de Vendas', lessons: 6, duration: '3h' },
      { id: '4', title: 'Otimização Avançada', lessons: 7, duration: '3h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Maria Santos',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Triplicou minha taxa de conversão no WhatsApp!'
      }
    ]
  },
  {
    id: 'super-links',
    title: 'Super Links',
    description: 'Plugin essencial para afiliados aumentarem vendas com Facebook Ads e blogs.',
    shortDescription: 'Plugin essencial para afiliados aumentarem vendas',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 297,
    originalPrice: 597,
    rating: 4.8,
    studentCount: 8930,
    duration: 'Plugin + Treinamento',
    level: 'Intermediário',
    category: 'Marketing Digital',
    instructor: 'Fabio Vasconcelos',
    instructorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://go.hotmart.com/T86440927E',
    highlights: [
      'Plugin para duplicar/triplicar vendas',
      'Funciona com Facebook Ads',
      'Otimizado para blogs',
      'Ferramenta obrigatória para afiliados',
      'Estratégias de vendas incluídas',
      'Suporte especializado'
    ],
    modules: [
      { id: '1', title: 'Instalação e Configuração', lessons: 4, duration: '2h' },
      { id: '2', title: 'Estratégias de Vendas', lessons: 8, duration: '6h' },
      { id: '3', title: 'Facebook Ads Integration', lessons: 6, duration: '4h' },
      { id: '4', title: 'Otimização Avançada', lessons: 7, duration: '5h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Pedro Lima',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Quadruplicou minhas vendas como afiliado!'
      }
    ]
  },
  {
    id: 'zap-suite',
    title: 'ZapSuite',
    description: 'Automatize suas vendas no WhatsApp e dobre seu faturamento em 2025.',
    shortDescription: 'Automatize vendas no WhatsApp e dobre faturamento',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 197,
    originalPrice: 397,
    rating: 4.9,
    studentCount: 6540,
    duration: 'Software + Treinamento',
    level: 'Iniciante',
    category: 'Marketing Digital',
    instructor: 'Equipe ZapSuite',
    instructorImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://kiwify.app/mFqf933?afid=sGAFoDd9',
    highlights: [
      'Automatização completa de vendas',
      'Interface simples e intuitiva',
      'Funis de vendas automatizados',
      'Respostas em texto e áudio',
      'Ideal para empresários',
      'Operações otimizadas'
    ],
    modules: [
      { id: '1', title: 'Setup Inicial', lessons: 5, duration: '2h' },
      { id: '2', title: 'Criação de Funis', lessons: 10, duration: '6h' },
      { id: '3', title: 'Automação Avançada', lessons: 8, duration: '5h' },
      { id: '4', title: 'Otimização de Resultados', lessons: 7, duration: '4h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Juliana Moreira',
        image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Dobrei meu faturamento em 3 meses!'
      }
    ]
  },
  // Empreendedorismo
  {
    id: 'mentoria-juncao-milionaria',
    title: 'MENTORIA JUNÇÃO MILIONARIA',
    description: 'Curso abrangente para empreendedores aprimorarem vendas online com estratégias eficazes.',
    shortDescription: 'Estratégias para sucesso financeiro com vendas online',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1997,
    originalPrice: 3997,
    rating: 4.9,
    studentCount: 3240,
    duration: '60 horas',
    level: 'Avançado',
    category: 'Empreendedorismo',
    instructor: 'Mentor Milionário',
    instructorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    affiliateLink: 'https://pay.cakto.com.br/7noVZQr?affiliate=dCW3Qec9',
    highlights: [
      'Estratégias de vendas online eficazes',
      'Marketing digital avançado',
      'Conversão de leads otimizada',
      'Mentoria personalizada',
      'Resultados em menos tempo',
      'Sucesso financeiro comprovado'
    ],
    modules: [
      { id: '1', title: 'Fundamentos das Vendas Online', lessons: 15, duration: '12h' },
      { id: '2', title: 'Marketing Digital Avançado', lessons: 20, duration: '18h' },
      { id: '3', title: 'Conversão e Funis', lessons: 18, duration: '15h' },
      { id: '4', title: 'Escalabilidade do Negócio', lessons: 22, duration: '15h' },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Carla Empreendedora',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
        rating: 5,
        comment: 'Faturei R$ 500k em 6 meses após aplicar as estratégias!'
      }
    ]
  },
];
