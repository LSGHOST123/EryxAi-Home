export interface TranslationSchema {
  nav: {
    tech: string;
    models: string;
    roadmap: string;
    faq: string;
    access: string;
  };
  hero: {
    active: string;
    title: string;
    titleAccent: string;
    desc: string;
    descAccent1: string;
    descAccent2: string;
    ctaPro: string;
    ctaTech: string;
    fastDisclaimer: string;
    visionActive: string;
    visionTitle: string;
    searchActive: string;
    searchTitle: string;
  };
  bento: {
    title: string;
    titleAccent: string;
    desc: string;
    items: {
      vision: { title: string; desc: string };
      search: { title: string; desc: string };
      intel: { title: string; desc: string };
      fastPro: { title: string; desc: string };
    };
  };
  modelsSec: {
    title: string;
    titleAccent: string;
    freePrice: string;
    freePeriod: string;
    freeCta: string;
    proPrice: string;
    proPeriod: string;
    proCta: string;
    freeFeatures: string[];
    proFeatures: string[];
  };
  comparison: {
    title: string;
    titleAccent: string;
    descLine1: string;
    descLine2: string;
    headerModel: string;
    headerRank: string;
    headerIntel: string;
    headerSpeed: string;
    headerVision: string;
    headerSearch: string;
    updatedAt: string;
    values: {
      ultra: string;
      instant: string;
      fast: string;
      medium: string;
      advanced: string;
      basic: string;
      realtime: string;
      no: string;
    };
  };
  roadmap: {
    title: string;
    titleAccent: string;
    phases: {
      p1: { year: string; title: string; desc: string };
      p2: { year: string; title: string; desc: string };
      p3: { year: string; title: string; desc: string };
    };
  };
  future: {
    title: string;
    titleAccent: string;
    items: {
      video: { title: string; desc: string };
      image: { title: string; desc: string };
      audio: { title: string; desc: string };
      builder: { title: string; desc: string };
    };
  };
  faq: {
    title: string;
    titleAccent: string;
    q1: string; altText1: string;
    q2: string; altText2: string;
    q3: string; altText3: string;
    q4: string; altText4: string;
  };
  footer: {
    desc: string;
    creator: string;
    navTitle: string;
    home: string;
    tech: string;
    models: string;
    roadmap: string;
    specsTitle: string;
    vision: string;
    search: string;
    engine: string;
    statusTitle: string;
    statusDesc: string;
    copyright: string;
    security: string;
  };
  modal: {
    badgeFast: string;
    badgePro: string;
    descFast: string;
    descPro: string;
    btnFast: string;
    btnPro: string;
    ggufBadge: string;
    ggufTitle: string;
    ggufDesc: string;
    safeTitle: string;
    safeDesc: string;
    footer: string;
  };
  ctaSection: {
    title: string;
    titleAccent: string;
    desc: string;
    button: string;
  };
}

export const translations: Record<'pt' | 'en', TranslationSchema> = {
  pt: {
    nav: {
      tech: "Tecnologia",
      models: "Modelos",
      roadmap: "Roadmap",
      faq: "FAQ",
      access: "Acessar Agora"
    },
    hero: {
      active: "ERYX AI v1.0 - Protocolo Neural Ativo",
      title: "A INTELIGÊNCIA",
      titleAccent: "DEFINITIVA.",
      desc: "Ultra inteligente, rápida e equipada com Vision Mode e Web Search integrados.",
      descAccent1: "FAST (Ilimitado)",
      descAccent2: "PRO (Elite)",
      ctaPro: "Ativar ERYX PRO",
      ctaTech: "Ver Tecnologia",
      fastDisclaimer: "ERYX FAST: 100% Gratuito e Ilimitado para sempre.",
      visionActive: "Vision Mode",
      visionTitle: "Análise Visual Ativa",
      searchActive: "Web Search",
      searchTitle: "Busca em Tempo Real"
    },
    bento: {
      title: "ENGENHARIA",
      titleAccent: "NEURAL.",
      desc: "Desenvolvemos uma arquitetura de inteligência que ultrapassa os limites do processamento convencional.",
      items: {
        vision: {
          title: "Vision Mode",
          desc: "Capacidade de ver, entender e analisar imagens e documentos complexos com precisão cirúrgica."
        },
        search: {
          title: "Web Search",
          desc: "Acesso à internet em tempo real para trazer as informações mais recentes e precisas."
        },
        intel: {
          title: "Ultra Inteligência",
          desc: "Raciocínio avançado e lógica superior para resolver problemas complexos em segundos."
        },
        fastPro: {
          title: "Fast & Pro",
          desc: "Escolha entre a velocidade instantânea do FAST ou a profundidade ilimitada do PRO."
        }
      }
    },
    modelsSec: {
      title: "ESCOLHA SEU",
      titleAccent: "PODER.",
      freePrice: "GRÁTIS",
      freePeriod: "PARA SEMPRE / ILIMITADO",
      freeCta: "Usar Agora",
      proPrice: "R$ 15-25",
      proPeriod: "POR MÊS / ILIMITADO",
      proCta: "Ativar PRO",
      freeFeatures: [
        "Uso Totalmente Ilimitado",
        "Velocidade Instantânea",
        "Vision Mode Básico",
        "Web Search Ativo",
        "Suporte 24/7"
      ],
      proFeatures: [
        "Acesso Pro 100% Ilimitado",
        "Raciocínio Profundo Extremo",
        "Vision Mode Avançado Completo",
        "Web Search Premium e Dedicado",
        "Prioridade de Processamento Global",
        "Acesso Antecipado a Novas Versões"
      ]
    },
    comparison: {
      title: "BENCHMARK",
      titleAccent: "GLOBAL.",
      descLine1: "Comparação técnica calibrada em hardware equivalente.",
      descLine2: "Nota: O padrão de 100% de inteligência equivale à elite dos modelos de fronteira (e.g. GPT-5.5, Claude 4.8, Gemini 3.1 Pro).",
      headerModel: "Modelo",
      headerRank: "Rank",
      headerIntel: "Inteligência",
      headerSpeed: "Velocidade",
      headerVision: "Vision",
      headerSearch: "Web Search",
      updatedAt: "Dados atualizados em Março de 2026",
      values: {
        ultra: "Ultra",
        instant: "Instante",
        fast: "Rápido",
        medium: "Médio",
        advanced: "Avançado",
        basic: "Básico",
        realtime: "Real-time",
        no: "Não"
      }
    },
    roadmap: {
      title: "NOSSO",
      titleAccent: "ROADMAP.",
      phases: {
        p1: { year: "v1.0 (Atual)", title: "Lançamento", desc: "Modelos FAST e PRO com Vision e Web Search integrados." },
        p2: { year: "v2.0 (2026)", title: "Evolução Neural", desc: "Multimodal, Cinemática e Inteligência Artificial Avançada." },
        p3: { year: "v3.0 (2027)", title: "Full Stack", desc: "Criação de Apps e Sistemas completos do zero." }
      }
    },
    future: {
      title: "O QUE VEM",
      titleAccent: "POR AÍ.",
      items: {
        video: { title: "Vídeo Neural", desc: "Criação de vídeos realistas a partir de texto." },
        image: { title: "Imagem 4K", desc: "Geração de arte e fotos em ultra resolução." },
        audio: { title: "Áudio & Voz", desc: "Clonagem de voz e composição musical." },
        builder: { title: "App Builder", desc: "Desenvolvimento de software full stack via chat." }
      }
    },
    faq: {
      title: "Dúvidas",
      titleAccent: "Frequentes",
      q1: "O ERYX FAST é realmente ilimitado?",
      altText1: "Sim! O modelo FAST foi otimizado para ser gratuito e ilimitado para todos os usuários, garantindo acesso democrático e contínuo à inteligência artificial.",
      q2: "Como funciona a assinatura do ERYX PRO?",
      altText2: "O ERYX PRO é uma versão premium paga por assinatura mensal super acessível, com valor estimado entre R$ 15 e R$ 25. Ao assinar, você tem uso 100% ilimitado, garantindo máxima performance e prioridade neural sem cotas de uso ou bloqueios diários.",
      q3: "O Vision Mode aceita quais arquivos?",
      altText3: "Aceitamos imagens (JPG, PNG, WebP) e documentos PDF para análise visual, extração de texto e compreensão de contexto.",
      q4: "A busca na web é em tempo real?",
      altText4: "Sim. O ERYX AI se conecta aos principais motores de busca para garantir que você tenha informações atualizadas até o presente momento."
    },
    footer: {
      desc: "A inteligência artificial que redefine os limites do conhecimento humano. Criada para ser rápida, inteligente e acessível.",
      creator: "CRIADOR: LUCAS SIMIONI",
      navTitle: "Navegação",
      home: "Início",
      tech: "Tecnologia",
      models: "Modelos",
      roadmap: "Roadmap",
      specsTitle: "ERYX AI v1.0",
      vision: "Vision Mode",
      search: "Web Search",
      engine: "Neural Engine",
      statusTitle: "Status do Protocolo:",
      statusDesc: "Atualmente operando em servidor básico (Intel Xeon de entrada). Upgrade agendado e iminente para aceleração por GPU dedicada NVIDIA T4 para velocidade e processamento neural instantâneo.",
      copyright: "© 2026 ERYX AI. Todos os direitos reservados.",
      security: "Protocolo de Segurança Neural Ativo"
    },
    modal: {
      badgeFast: "Gratuito & Ilimitado",
      badgePro: "Pago & Ilimitado (R$ 15 - R$ 25/mês)",
      descFast: "Modelo totalmente gratuito e sem limites, ideal para tarefas gerais de alta velocidade e análise visual ágil.",
      descPro: "O poder neural absoluto para tarefas de altíssima complexidade, raciocínio avançado e inferência de ponta via assinatura de R$ 15 a R$ 25 p/ mês.",
      btnFast: "Eryx Fast",
      btnPro: "Eryx Pro",
      ggufBadge: "Mais Rápido & Leve",
      ggufTitle: "Versão GGUF",
      ggufDesc: "Altamente recomendada localmente. O formato GGUF é mais rápido e leve, garantindo máxima otimização com menor consumo de memória RAM/VRAM.",
      safeTitle: "Versão SAFETENSORS",
      safeDesc: "Modelo completo sem quantização (.safetensors). Ideal para inferência em FP16 ou fine-tuning em placas dedicadas de alta performance.",
      footer: "Hugging Face Hub • Conexão Segura Ativa"
    },
    ctaSection: {
      title: "A ERA ERYX",
      titleAccent: "COMEÇA AGORA.",
      desc: "Não fique para trás na maior revolução tecnológica da história. Ative seu protocolo neural hoje.",
      button: "Ativar ERYX PRO Agora"
    }
  },
  en: {
    nav: {
      tech: "Technology",
      models: "Models",
      roadmap: "Roadmap",
      faq: "FAQ",
      access: "Access Now"
    },
    hero: {
      active: "ERYX AI v1.0 - Active Neural Protocol",
      title: "THE ULTIMATE",
      titleAccent: "INTELLIGENCE.",
      desc: "Ultra intelligent, fast, and equipped with built-in Vision Mode and Web Search.",
      descAccent1: "FAST (Unlimited)",
      descAccent2: "PRO (Elite)",
      ctaPro: "Activate ERYX PRO",
      ctaTech: "See Technology",
      fastDisclaimer: "ERYX FAST: 100% Free and Unlimited forever.",
      visionActive: "Vision Mode",
      visionTitle: "Active Visual Analysis",
      searchActive: "Web Search",
      searchTitle: "Real-Time Search"
    },
    bento: {
      title: "NEURAL",
      titleAccent: "ENGINEERING.",
      desc: "We have developed an intelligence architecture that goes beyond the limits of conventional processing.",
      items: {
        vision: {
          title: "Vision Mode",
          desc: "Ability to see, understand, and analyze complex images and documents with surgical precision."
        },
        search: {
          title: "Web Search",
          desc: "Real-time internet access to deliver the latest and most accurate information."
        },
        intel: {
          title: "Ultra Intelligence",
          desc: "Advanced reasoning and superior logic to solve complex problems in seconds."
        },
        fastPro: {
          title: "Fast & Pro",
          desc: "Choose between the instant speed of FAST or the unlimited depth of PRO."
        }
      }
    },
    modelsSec: {
      title: "CHOOSE YOUR",
      titleAccent: "POWER.",
      freePrice: "FREE",
      freePeriod: "FOREVER / UNLIMITED",
      freeCta: "Use Now",
      proPrice: "R$ 15-25",
      proPeriod: "PER MONTH / UNLIMITED",
      proCta: "Activate PRO",
      freeFeatures: [
        "100% Unlimited Use",
        "Instant Speed",
        "Basic Vision Mode",
        "Active Web Search",
        "24/7 Support"
      ],
      proFeatures: [
        "100% Unlimited Pro Access",
        "Extreme Deep Reasoning",
        "Full Advanced Vision Mode",
        "Premium & Dedicated Web Search",
        "Global Processing Priority",
        "Early Access to New Versions"
      ]
    },
    comparison: {
      title: "GLOBAL",
      titleAccent: "BENCHMARK.",
      descLine1: "Technical comparison calibrated on equivalent hardware.",
      descLine2: "Note: The 100% intelligence standard is equivalent to the elite frontier models (e.g., GPT-5.5, Claude 4.8, Gemini 3.1 Pro).",
      headerModel: "Model",
      headerRank: "Rank",
      headerIntel: "Intelligence",
      headerSpeed: "Speed",
      headerVision: "Vision",
      headerSearch: "Web Search",
      updatedAt: "Data updated in March 2026",
      values: {
        ultra: "Ultra",
        instant: "Instant",
        fast: "Fast",
        medium: "Medium",
        advanced: "Advanced",
        basic: "Basic",
        realtime: "Real-time",
        no: "No"
      }
    },
    roadmap: {
      title: "OUR",
      titleAccent: "ROADMAP.",
      phases: {
        p1: { year: "v1.0 (Current)", title: "Launch", desc: "FAST and PRO models with integrated Vision and Web Search." },
        p2: { year: "v2.0 (2026)", title: "Neural Evolution", desc: "Multimodal, Cinematic and Advanced Artificial Intelligence." },
        p3: { year: "v3.0 (2027)", title: "Full Stack", desc: "Creation of complete Apps and Systems from scratch." }
      }
    },
    future: {
      title: "WHAT'S COMING",
      titleAccent: "NEXT.",
      items: {
        video: { title: "Neural Video", desc: "Creation of realistic videos from text descriptions." },
        image: { title: "4K Image", desc: "Art and photo generation in ultra resolution." },
        audio: { title: "Audio & Voice", desc: "Voice cloning and professional music composition." },
        builder: { title: "App Builder", desc: "Full-stack software development via chat interfaces." }
      }
    },
    faq: {
      title: "Frequently Asked",
      titleAccent: "Questions",
      q1: "Is ERYX FAST really unlimited?",
      altText1: "Yes! The FAST model has been optimized to be free and unlimited for all users, ensuring democratic and continuous access to artificial intelligence.",
      q2: "How does the ERYX PRO subscription work?",
      altText2: "ERYX PRO is an extremely affordable premium version with a monthly subscription estimated between R$ 15 and R$ 25. By subscribing, you get 100% unlimited use, ensuring maximum performance and neural priority without usage caps or daily locks.",
      q3: "What files does Vision Mode accept?",
      altText3: "We accept images (JPG, PNG, WebP) and PDF documents for visual analysis, text extraction, and context understanding.",
      q4: "Is web search in real-time?",
      altText4: "Yes. ERYX AI connects to major search engines to ensure you have the most up-to-date information up to the present moment."
    },
    footer: {
      desc: "The artificial intelligence that redefines the limits of human knowledge. Built to be fast, intelligent, and affordable.",
      creator: "CREATOR: LUCAS SIMIONI",
      navTitle: "Navigation",
      home: "Home",
      tech: "Technology",
      models: "Models",
      roadmap: "Roadmap",
      specsTitle: "ERYX AI v1.0",
      vision: "Vision Mode",
      search: "Web Search",
      engine: "Neural Engine",
      statusTitle: "Protocol Status:",
      statusDesc: "Currently operating on a basic server (entry-level Intel Xeon). Upgrade scheduled and imminent for dedicated NVIDIA T4 GPU acceleration to deliver instant speed and neural processing.",
      copyright: "© 2026 ERYX AI. All rights reserved.",
      security: "Active Neural Security Protocol"
    },
    modal: {
      badgeFast: "Free & Unlimited",
      badgePro: "Paid & Unlimited (R$ 15 - R$ 25/mo)",
      descFast: "Fully free and unlimited model, ideal for general high-speed tasks and agile visual analysis.",
      descPro: "The absolute neural power for highly complex tasks, advanced reasoning, and cutting-edge inference via subscription of R$ 15 to R$ 25 per month.",
      btnFast: "Eryx Fast",
      btnPro: "Eryx Pro",
      ggufBadge: "Faster & Lighter",
      ggufTitle: "GGUF Version",
      ggufDesc: "Highly recommended locally. The GGUF format is faster and lighter, ensuring maximum optimization with less RAM/VRAM usage.",
      safeTitle: "SAFETENSORS Version",
      safeDesc: "Full model without quantization (.safetensors). Ideal for FP16 inference or fine-tuning on dedicated high-performance GPUs.",
      footer: "Hugging Face Hub • Safe Connection Active"
    },
    ctaSection: {
      title: "THE ERYX ERA",
      titleAccent: "STARTS NOW.",
      desc: "Don't get left behind in the greatest technological revolution in history. Activate your neural protocol today.",
      button: "Activate ERYX PRO Now"
    }
  }
};
