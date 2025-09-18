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
    description: 'Acesso a mais de 4.000 vídeo aulas atualizadas, permitindo que você aprenda a criar qualquer website, sistema, aplicativo web ou aplicativo nativo. Desenvolvimento de habilidades adicionais, como design (Apps & Web), infraestrutura & DevOPS, inglês e marketing digital para programadores.',
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
      { id: '5', title: 'Projetos Práticos', lessons: 100, duration: '75h' },
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
    description: 'Aprenda VBA do básico ao avançado e descubra como automatizar tarefas, criar funções e formulários personalizados no Excel. Com essas habilidades, você pode aumentar sua produtividade e reduzir erros em seu dia-a-dia. Seja um profissional preparado e aprenda VBA agora mesmo!',
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
        comment: 'Automatizei todos os meus relatórios! Economizo 4 horas por dia de trabalho.'
      }
    ]
  },
  {
    id: 'power-apps-expert',
    title: 'POWER APPS Expert na Prática | 2025',
    description: 'Já pensou em criar aplicativos para sua empresa, sem nenhuma necessidade de conhecimento em linguagem de programação? Com o Microsoft Power Apps isso agora é possível! Aproveite para surfar nessa nova oportunidade no mundo da tecnologia, tornando-se Expert na Power Plataform da Microsoft.',
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