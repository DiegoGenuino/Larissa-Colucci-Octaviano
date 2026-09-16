export type VideoProvider = 'youtube' | 'file';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IdentityConfig {
  siteName: string;
  legalName: string;
  professionalName: string;
  professionalRole: string;
  professionalDescription: string;
  professionalImage: string;
  logo?: ImageAsset;
  registration: string;
}

export interface ContactConfig {
  whatsappUrl: string;
  primaryCtaLabel: string;
}

export interface HeaderConfig {
  brandHref: string;
  brandLabel: string;
  primaryNavigationLabel: string;
  mobileNavigationLabel: string;
  menuOpenLabel: string;
  links: NavigationLink[];
}

export interface HeroConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  trust: {
    text: string;
    avatars: string[];
  };
  title: Array<{ text: string; highlighted?: boolean }>;
  description: string;
  primaryCtaLabel: string;
  secondaryCta: NavigationLink;
  scrollTarget: string;
  scrollLabel: string;
}

export interface StatsConfig {
  id: string;
  label: string;
  items: Array<{ value: string; label: string }>;
}

export interface AboutConfig {
  id: string;
  image: ImageAsset & {
    srcset: Array<{ src: string; width: number }>;
    sizes: string;
  };
  cardName: string;
  cardDetail: string;
  eyebrow: string;
  credentials: Array<{ icon: string; text: string }>;
}

export interface PracticeSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export interface UrgencySectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  closingText: string;
  ctaLabel: string;
  listLabel: string;
  items: Array<{ title: string; description: string }>;
}

export interface ProcessSectionConfig {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  stepsLabel: string;
  stepLabel: string;
  items: Array<{ title: string; description: string; detail: string }>;
}

export interface DifferentialsSectionConfig {
  id: string;
  titlePrefix: string;
  highlightedTitle: string;
  titleSuffix: string;
  tabsLabel: string;
  ctaLabel: string;
  items: Array<{ icon: string; title: string; description: string }>;
}

export type ReviewsSource = 'google' | 'manual';

export interface ReviewItem {
  quote: string;
  name: string;
  details: string;
  rating: number | null;
  avatar: string;
  avatarPosition: string;
  publishedAt: string | null;
  publishedAtLabel: string;
  googleMapsUrl: string;
  authorProfileUrl: string;
  source: 'google' | 'manual';
}

export type ManualReviewItem = Pick<
  ReviewItem,
  'quote' | 'name' | 'details' | 'rating' | 'avatar' | 'avatarPosition'
> & Partial<Pick<ReviewItem, 'publishedAt' | 'publishedAtLabel' | 'googleMapsUrl' | 'authorProfileUrl'>>;

export interface ReviewsSectionConfig {
  enabled: boolean;
  id: string;
  title: string;
  highlightedTitle: string;
  platformLogo: ImageAsset;
  source: ReviewsSource;
  maxRating: number;
  ratingUnavailableLabel: string;
  orderingNotice: string;
  google: {
    placeId: string;
    limit: number;
    reviewsUrl: string;
  };
  fallbacks: {
    quote: string;
    name: string;
    details: string;
    avatar: string;
    avatarPosition: string;
    publishedAtLabel: string;
  };
  manualItems: ManualReviewItem[];
}

export interface FaqSectionConfig {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  ctaLabel: string;
  items: FaqItem[];
}

export interface FooterConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  links: NavigationLink[];
  copyrightSuffix: string;
  backToTopLabel: string;
  backToTopHref: string;
  whatsapp: {
    regionLabel: string;
    closeLabel: string;
    image: ImageAsset;
    senderName: string;
    message: string;
    actionLabel: string;
    buttonLabel: string;
  };
}

export interface VideoSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  provider: VideoProvider;
  videoId: string;
  videoUrl: string;
  poster: string;
  posterAlt: string;
  playLabel: string;
  caption: string;
}

export interface LocationSectionConfig {
  enabled: boolean;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  address: string;
  mapQuery: string;
  mapTitle: string;
  directionsLabel: string;
}

export interface AiDiscoveryConfig {
  enabled: boolean;
  llmsPath: string;
  markdownPath: string;
  summary: string;
  usageNote: string;
}

export interface SeoConfig {
  siteUrl: string;
  locale: string;
  language: string;
  homePageTitle: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  defaultImageAlt: string;
  defaultImageWidth: number;
  defaultImageHeight: number;
  themeColor: string;
  favicon: string;
  keywords: string[];
  areaServed: string;
  knowsAbout: string[];
  sitemap: Array<{
    path: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }>;
}

export type DeploymentMode = 'auto' | 'git' | 'upload';

export interface DeploymentConfig {
  mode: DeploymentMode;
  projectName: string;
  subdomain: string;
  baseDomain: string;
  cnameTarget: string;
}

export interface SiteConfig {
  identity: IdentityConfig;
  contact: ContactConfig;
  header: HeaderConfig;
  hero: HeroConfig;
  stats: StatsConfig;
  about: AboutConfig;
  practiceSection: PracticeSectionConfig;
  urgencySection: UrgencySectionConfig;
  differentialsSection: DifferentialsSectionConfig;
  processSection: ProcessSectionConfig;
  reviewsSection: ReviewsSectionConfig;
  faqSection: FaqSectionConfig;
  footer: FooterConfig;
  seo: SeoConfig;
  videoSection: VideoSectionConfig;
  locationSection: LocationSectionConfig;
  aiDiscovery: AiDiscoveryConfig;
  deployment: DeploymentConfig;
}

// Avaliações manuais extraídas do widget Google em https://direito-medico.com/, em 16/09/2026.
// Perfil confirmado pelo link fornecido: https://maps.app.goo.gl/d3dHznMmr6brHiMp8.
// Os três comentários foram mantidos integralmente, conforme a fonte.
export const siteConfig = {
  "identity": {
    "siteName": "Dra. Larissa Colucci Octaviano | Direito da Saúde",
    "legalName": "Larissa Colucci Octaviano Advocacia",
    "professionalName": "Dra. Larissa Colucci Octaviano",
    "professionalRole": "Advogada Especialista em Direito Médico e da Saúde",
    "registration": "OAB/SP 454226",
    "professionalDescription": "Advogada especializada em Direito Médico e da Saúde, com atuação na defesa de pacientes e famílias diante de negativas de planos de saúde e do SUS. Atendimento presencial em Jaú/SP e online em todo o Brasil, com análise individual dos documentos e suporte técnico de médica perita associada.",
    "professionalImage": "/images/larissa-colucci-560.webp",
    "logo": {
      "src": "/images/larissa-colucci-logo.png",
      "width": 414,
      "height": 314,
      "alt": "Larissa Colucci Octaviano — Direito da Saúde"
    }
  },
  "contact": {
    "whatsappUrl": "https://wa.me/5514988272528",
    "primaryCtaLabel": "Falar com a advogada"
  },
  "header": {
    "brandHref": "#inicio",
    "brandLabel": "Larissa Colucci Octaviano — início",
    "primaryNavigationLabel": "Navegação principal",
    "mobileNavigationLabel": "Navegação mobile",
    "menuOpenLabel": "Abrir menu",
    "links": [
      {
        "href": "#sobre",
        "label": "A advogada"
      },
      {
        "href": "#especialidades",
        "label": "Atuação"
      },
      {
        "href": "#diferenciais",
        "label": "Diferenciais"
      },
      {
        "href": "#faq",
        "label": "Dúvidas"
      }
    ]
  },
  "hero": {
    "id": "inicio",
    "image": {
      "src": "/images/larissa-hero-1717.webp",
      "width": 1717,
      "height": 916,
      "alt": "Dra. Larissa Colucci Octaviano, advogada de Direito da Saúde",
      "srcset": [
        {
          "src": "/images/larissa-hero-960.webp",
          "width": 960
        },
        {
          "src": "/images/larissa-hero-1717.webp",
          "width": 1717
        }
      ],
      "sizes": "100vw"
    },
    "trust": {
      "text": "Direito da Saúde • Atendimento humanizado",
      "avatars": []
    },
    "title": [
      {
        "text": "Defesa dos seus direitos diante de "
      },
      {
        "text": "negativas de planos de saúde",
        "highlighted": true
      },
      {
        "text": " e do "
      },
      {
        "text": "SUS",
        "highlighted": true
      }
    ],
    "description": "Orientação jurídica para pacientes e famílias que enfrentam dificuldades de acesso a tratamentos, cirurgias e medicamentos. Atendimento em Jaú/SP e online em todo o Brasil.",
    "primaryCtaLabel": "Falar sobre meu caso",
    "secondaryCta": {
      "href": "#sobre",
      "label": "Conheça a advogada"
    },
    "scrollTarget": "#numeros",
    "scrollLabel": "Conheça nossa atuação"
  },
  "stats": {
    "id": "numeros",
    "label": "Informações institucionais",
    "items": [
      {
        "value": "Saúde",
        "label": "área de atuação especializada"
      },
      {
        "value": "Jaú/SP",
        "label": "atendimento presencial"
      },
      {
        "value": "Brasil",
        "label": "atendimento online"
      },
      {
        "value": "454226",
        "label": "inscrição OAB/SP"
      }
    ]
  },
  "about": {
    "id": "sobre",
    "image": {
      "src": "/images/larissa-colucci-560.webp",
      "width": 560,
      "height": 560,
      "alt": "Dra. Larissa Colucci Octaviano, OAB/SP 454226",
      "srcset": [
        {
          "src": "/images/larissa-colucci-560.webp",
          "width": 560
        },
        {
          "src": "/images/larissa-colucci-1024.webp",
          "width": 1024
        }
      ],
      "sizes": "(max-width: 780px) calc(100vw - 34px), 392px"
    },
    "cardName": "Dra. Larissa Colucci Octaviano",
    "cardDetail": "Direito da Saúde | OAB/SP 454226",
    "eyebrow": "Conheça a advogada",
    "credentials": [
      {
        "icon": "lucide:circle-check",
        "text": "OAB/SP 454226"
      },
      {
        "icon": "lucide:circle-check",
        "text": "Atuação especializada em Direito Médico e da Saúde"
      },
      {
        "icon": "lucide:circle-check",
        "text": "Suporte técnico de médica perita associada"
      },
      {
        "icon": "lucide:circle-check",
        "text": "Atendimento presencial em Jaú/SP e online em todo o Brasil"
      }
    ]
  },
  "practiceSection": {
    "id": "especialidades",
    "title": "Defesa dos seus direitos em",
    "highlightedTitle": "saúde",
    "description": "Análise jurídica individual para pacientes e famílias diante de dificuldades de acesso à assistência médica.",
    "items": [
      {
        "icon": "lucide:shield-alert",
        "title": "Negativas de cobertura",
        "description": "Análise de recusas de exames, internações, terapias e cirurgias prescritas, com avaliação das medidas jurídicas cabíveis."
      },
      {
        "icon": "lucide:pill",
        "title": "Medicamentos e próteses",
        "description": "Atuação em pedidos de acesso a medicamentos de alto custo, tratamentos biológicos e próteses, conforme os documentos e as particularidades do caso."
      },
      {
        "icon": "lucide:heart-pulse",
        "title": "Doenças raras e terapias",
        "description": "Orientação sobre acesso a tratamentos multidisciplinares, reabilitação e acompanhamento especializado para pacientes com necessidades específicas."
      },
      {
        "icon": "lucide:scale",
        "title": "Danos por negativa indevida",
        "description": "Avaliação de eventual reparação por danos decorrentes de recusas de cobertura, considerando os fatos e os requisitos aplicáveis a cada situação."
      }
    ]
  },
  "urgencySection": {
    "id": "quando-buscar-ajuda",
    "title": "Quando o cuidado encontra",
    "highlightedTitle": "uma barreira.",
    "description": "Uma negativa de atendimento pode trazer dúvidas em um momento delicado. Compreender os documentos e a urgência clínica ajuda a organizar os próximos passos.",
    "closingText": "Se você enfrenta uma dessas situações, entre em contato para uma análise individual do seu caso.",
    "ctaLabel": "Buscar orientação",
    "listLabel": "Situações em que buscar orientação em Direito da Saúde",
    "items": [
      {
        "title": "Tratamento ou cirurgia negados",
        "description": "Reúna a prescrição, o relatório médico e a resposta da operadora para que a situação possa ser analisada."
      },
      {
        "title": "Medicamento de alto custo não fornecido",
        "description": "A indicação médica e o histórico das solicitações ajudam a compreender as dificuldades de acesso ao medicamento."
      },
      {
        "title": "Internação ou atendimento urgente recusados",
        "description": "Informe a urgência apontada pela equipe médica e encaminhe os documentos disponíveis para avaliação jurídica."
      },
      {
        "title": "Terapias interrompidas ou limitadas",
        "description": "Relatórios sobre a continuidade do cuidado e as comunicações do plano são relevantes para a análise."
      },
      {
        "title": "Dificuldade de acesso pelo SUS",
        "description": "Organize os registros dos pedidos administrativos e os documentos médicos relacionados ao tratamento."
      }
    ]
  },
  "differentialsSection": {
    "id": "diferenciais",
    "titlePrefix": "Uma atuação em",
    "highlightedTitle": "Direito da Saúde",
    "titleSuffix": "próxima de você.",
    "tabsLabel": "Diferenciais do atendimento",
    "ctaLabel": "Conversar com a advogada",
    "items": [
      {
        "icon": "lucide:user-round-check",
        "title": "Contato direto com a advogada",
        "description": "Atendimento com a Dra. Larissa Colucci Octaviano para compreender o contexto e as necessidades de cada paciente."
      },
      {
        "icon": "lucide:heart-pulse",
        "title": "Suporte técnico médico",
        "description": "Suporte de médica perita associada para a compreensão dos documentos clínicos e o embasamento técnico da análise jurídica."
      },
      {
        "icon": "lucide:messages-square",
        "title": "Atendimento presencial e online",
        "description": "Atendimento em Jaú/SP e acompanhamento remoto para pacientes e famílias em todo o Brasil."
      },
      {
        "icon": "lucide:lock-keyhole",
        "title": "Sigilo e acolhimento",
        "description": "Tratamento cuidadoso das informações pessoais e dos documentos médicos compartilhados durante o atendimento."
      },
      {
        "icon": "lucide:file-text",
        "title": "Análise individual dos documentos",
        "description": "Cada situação é avaliada a partir dos relatórios, prescrições e registros da negativa, respeitando suas particularidades."
      },
      {
        "icon": "lucide:book-open-check",
        "title": "Comunicação clara",
        "description": "Explicações sobre as alternativas jurídicas e os próximos passos em linguagem acessível, sem promessas de resultado."
      }
    ]
  },
  "processSection": {
    "id": "como-funciona",
    "title": "Do primeiro contato aos",
    "highlightedTitle": "próximos passos.",
    "description": "Um atendimento organizado para compreender sua necessidade de saúde e avaliar os caminhos jurídicos possíveis.",
    "stepsLabel": "Etapas do atendimento em Direito da Saúde",
    "stepLabel": "Etapa",
    "items": [
      {
        "title": "Apresente sua situação",
        "description": "Conte o que aconteceu, qual tratamento foi prescrito e se há urgência indicada pelo médico.",
        "detail": "O contato inicial pode ser feito pelo WhatsApp (14) 98827-2528."
      },
      {
        "title": "Reúna os documentos",
        "description": "Encaminhe os relatórios e prescrições médicas, a negativa disponível e os registros dos pedidos de atendimento.",
        "detail": "A advogada indicará quais documentos adicionais podem ser necessários para a análise."
      },
      {
        "title": "Receba a análise jurídica",
        "description": "As alternativas são avaliadas conforme os documentos e as particularidades do caso.",
        "detail": "Quando pertinente, a análise conta com suporte técnico de médica perita associada."
      },
      {
        "title": "Acompanhe os próximos passos",
        "description": "Após a definição do trabalho, você recebe orientações e informações relevantes sobre sua condução.",
        "detail": "Medidas e prazos dependem das circunstâncias de cada caso e da apreciação dos órgãos responsáveis."
      }
    ]
  },
  "reviewsSection": {
    "enabled": true,
    "id": "avaliacoes",
    "title": "Avaliações no",
    "highlightedTitle": "Google",
    "platformLogo": {
      "src": "/images/google-icon.png",
      "width": 41,
      "height": 41,
      "alt": "Google"
    },
    "source": "manual",
    "maxRating": 5,
    "ratingUnavailableLabel": "Avaliação não disponível",
    "orderingNotice": "Avaliações selecionadas por relevância.",
    "google": {
      "placeId": "",
      "limit": 3,
      "reviewsUrl": "https://maps.app.goo.gl/d3dHznMmr6brHiMp8"
    },
    "fallbacks": {
      "quote": "Comentário não disponível",
      "name": "Usuário do Google",
      "details": "Não disponível",
      "avatar": "/images/google-icon.png",
      "avatarPosition": "center",
      "publishedAtLabel": "Data não disponível"
    },
    "manualItems": [
      {
        "quote": "Dra. Larissa é uma excelente profissional, muito atenciosa e competente . Recomendo!",
        "name": "Andreia Fazan",
        "details": "Avaliação no Google",
        "rating": 5,
        "avatar": "/images/review-andreia-fazan.jpg",
        "avatarPosition": "center",
        "publishedAt": "2026-05-08T00:00:00Z",
        "publishedAtLabel": "08/05/2026",
        "googleMapsUrl": "https://maps.app.goo.gl/d3dHznMmr6brHiMp8",
        "authorProfileUrl": ""
      },
      {
        "quote": "Excelente trabalho!\nPrestativa, trabalhando com muita clareza e responsabilidade",
        "name": "Mirian Charamitara",
        "details": "Avaliação no Google",
        "rating": 5,
        "avatar": "/images/review-mirian-charamitara.jpg",
        "avatarPosition": "center",
        "publishedAt": "2026-03-08T00:00:00Z",
        "publishedAtLabel": "08/03/2026",
        "googleMapsUrl": "https://maps.app.goo.gl/d3dHznMmr6brHiMp8",
        "authorProfileUrl": ""
      },
      {
        "quote": "Excelente profissional! Atenciosa e competente.",
        "name": "THAISSA PORTO",
        "details": "Avaliação no Google",
        "rating": 5,
        "avatar": "/images/review-thaissa-porto.jpg",
        "avatarPosition": "center",
        "publishedAt": "2025-11-28T00:00:00Z",
        "publishedAtLabel": "28/11/2025",
        "googleMapsUrl": "https://maps.app.goo.gl/d3dHznMmr6brHiMp8",
        "authorProfileUrl": ""
      }
    ]
  },
  "faqSection": {
    "id": "faq",
    "eyebrow": "Dúvidas frequentes",
    "title": "Informação clara desde o",
    "highlightedTitle": "primeiro contato",
    "description": "Estas informações são gerais. As possibilidades jurídicas dependem da análise individual dos documentos e das circunstâncias do caso.",
    "ctaLabel": "Falar sobre meu caso",
    "items": [
      {
        "question": "Como apresentar uma negativa de tratamento para análise?",
        "answer": "Encaminhe a resposta do plano, quando disponível, junto com a prescrição e o relatório médico. No atendimento, a advogada orientará quais outros documentos são necessários para compreender sua situação."
      },
      {
        "question": "É possível avaliar uma medida urgente?",
        "answer": "A urgência indicada nos documentos médicos será considerada na análise jurídica. A possibilidade de um pedido urgente e sua apreciação dependem das circunstâncias do caso; não há garantia de decisão favorável ou de prazo."
      },
      {
        "question": "O atendimento inclui medicamentos de alto custo e dificuldades com o SUS?",
        "answer": "Sim. Essas situações fazem parte da atuação do escritório. Cada pedido é analisado individualmente a partir dos documentos médicos, das solicitações realizadas e dos requisitos aplicáveis."
      },
      {
        "question": "Posso ser atendido se moro em outra cidade ou estado?",
        "answer": "Sim. O atendimento online permite o envio digital dos documentos e o contato remoto. O escritório também realiza atendimento presencial em Jaú/SP, mediante agendamento."
      },
      {
        "question": "Como funciona o suporte da médica perita associada?",
        "answer": "O suporte técnico médico auxilia na compreensão de laudos e informações clínicas relevantes à análise jurídica. Sua participação é avaliada conforme as necessidades do caso."
      }
    ]
  },
  "footer": {
    "eyebrow": "Atendimento em Direito da Saúde",
    "title": "Sua saúde merece",
    "highlightedTitle": "atenção.",
    "description": "Dra. Larissa Colucci Octaviano — OAB/SP 454226. Atendimento em Jaú/SP e online. WhatsApp: (14) 98827-2528. E-mail: lacolucci.adv@gmail.com. Instagram: @larissacolucci_adv.",
    "links": [
      {
        "href": "#sobre",
        "label": "A advogada"
      },
      {
        "href": "#especialidades",
        "label": "Atuação"
      },
      {
        "href": "#diferenciais",
        "label": "Diferenciais"
      },
      {
        "href": "#faq",
        "label": "Dúvidas"
      }
    ],
    "copyrightSuffix": "Todos os direitos reservados.",
    "backToTopLabel": "Voltar ao topo",
    "backToTopHref": "#inicio",
    "whatsapp": {
      "regionLabel": "Atendimento pelo WhatsApp",
      "closeLabel": "Fechar convite",
      "image": {
        "src": "/images/larissa-avatar.webp",
        "width": 96,
        "height": 96,
        "alt": "Dra. Larissa Colucci Octaviano"
      },
      "senderName": "Dra. Larissa Colucci",
      "message": "Olá! Como posso ajudar? Conte sua situação pelo WhatsApp.",
      "actionLabel": "Iniciar conversa",
      "buttonLabel": "Abrir atendimento pelo WhatsApp"
    }
  },
  "seo": {
    "siteUrl": "https://larissacolucci.feito.website",
    "locale": "pt_BR",
    "language": "pt-BR",
    "homePageTitle": "Direito da Saúde em Jaú/SP",
    "defaultTitle": "Dra. Larissa Colucci Octaviano | Advogada de Direito da Saúde em Jaú - SP",
    "titleTemplate": "%s | Larissa Colucci Octaviano",
    "defaultDescription": "Advocacia em Direito Médico e da Saúde em Jaú/SP. Análise de negativas de planos de saúde e SUS, medicamentos de alto custo e tratamentos. Atendimento online.",
    "defaultImage": "/images/larissa-og-texto.webp",
    "defaultImageAlt": "Larissa Colucci Octaviano — Direito da Saúde. Jaú/SP e atendimento online.",
    "defaultImageWidth": 1726,
    "defaultImageHeight": 911,
    "themeColor": "#14263e",
    "favicon": "/images/larissa-colucci-favicon.svg",
    "keywords": [
      "advogado direito da saude jau",
      "negativa plano de saude jau",
      "liminar medicamento alto custo",
      "dra larissa colucci octaviano",
      "advogada especialista direito medico"
    ],
    "areaServed": "Jaú, Estado de São Paulo e Brasil (atendimento online)",
    "knowsAbout": [
      "Direito Médico",
      "Direito da Saúde",
      "Negativa de Cobertura de Plano de Saúde",
      "Liminares Médicas",
      "Medicamentos de Alto Custo",
      "Ações contra o SUS"
    ],
    "sitemap": [
      {
        "path": "/",
        "changeFrequency": "monthly",
        "priority": 1
      }
    ]
  },
  "videoSection": {
    "enabled": false,
    "eyebrow": "Apresentação institucional",
    "title": "Conheça nossa",
    "highlightedTitle": "atuação.",
    "description": "Advocacia em Direito Médico e da Saúde.",
    "provider": "youtube",
    "videoId": "",
    "videoUrl": "",
    "poster": "",
    "posterAlt": "",
    "playLabel": "Assistir apresentação",
    "caption": "Vídeo institucional"
  },
  "locationSection": {
    "enabled": true,
    "eyebrow": "Localização",
    "title": "Atendimento presencial em",
    "highlightedTitle": "Jaú/SP.",
    "description": "Atendimento presencial mediante agendamento e online em todo o Brasil. Entre em contato para confirmar o horário.",
    "address": "R. Sete de Setembro, 640 — Vila Nova, Jaú/SP, CEP 17201-480, Brasil",
    "mapQuery": "R. Sete de Setembro, 640 - Vila Nova, Jaú - SP, 17201-480",
    "mapTitle": "Localização de Larissa Colucci Octaviano em Jaú/SP",
    "directionsLabel": "Abrir no Google Maps"
  },
  "aiDiscovery": {
    "enabled": false,
    "llmsPath": "/llms.txt",
    "markdownPath": "/index.md",
    "summary": "Larissa Colucci Octaviano Advocacia, sob responsabilidade da Dra. Larissa Colucci Octaviano, OAB/SP 454226, atua em Direito Médico e da Saúde, negativas de planos de saúde e SUS, acesso a medicamentos e tratamentos. Atendimento presencial em Jaú/SP e online no Brasil. Contato: (14) 98827-2528 e lacolucci.adv@gmail.com.",
    "usageNote": "O conteúdo é institucional e informativo. Não substitui análise jurídica individual e não deve ser interpretado como promessa de resultado."
  },
  "deployment": {
    "mode": "auto",
    "projectName": "larissa-colucci-advocacia",
    "subdomain": "larissacolucci",
    "baseDomain": "feito.website",
    "cnameTarget": "cname.vercel-dns-0.com"
  }
} satisfies SiteConfig;
