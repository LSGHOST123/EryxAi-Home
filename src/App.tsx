import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Eye, 
  Search, 
  Video, 
  Image as ImageIcon, 
  Music, 
  Code, 
  Sparkles, 
  Trophy, 
  BarChart3,
  SlidersHorizontal,
  Terminal,
  Activity
} from 'lucide-react';
import { translations } from './translations';

// --- Scroll Reveal Helper ---
const RevealOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

// --- Interactive Mouse Spotlight Card Helper ---
const SpotlightCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  id?: string;
}> = ({ children, className = "", glowColor = "rgba(34, 197, 94, 0.12)", onClick, id }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Dynamic Cursor Spotlight */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

// --- Ambient Neural Background ---
const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
      <div className="grid-bg absolute inset-0" />
      <div className="glow-mesh absolute inset-0" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
    </div>
  );
};

// --- Navbar Component ---
interface NavbarProps {
  onOpenAccess: (type: 'FAST' | 'PRO') => void;
  lang: 'pt' | 'en';
  onLanguageChange: (lang: 'pt' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAccess, 
  lang, 
  onLanguageChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.tech, href: '#tecnologia' },
    { label: t.models, href: '#modelos' },
    { label: t.roadmap, href: '#roadmap' },
    { label: t.faq, href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3.5 bg-black/85 backdrop-blur-md border-b border-white/10' : 'py-7 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <Brain className="text-black" size={22} />
          </div>
          <div className="text-xl font-black tracking-tighter uppercase">
            ERYX <span className="text-accent">1.0</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Language Selector Capsule */}
          <div className="flex bg-white/5 border border-white/10 rounded-full p-0.5 items-center">
            <button 
              type="button"
              onClick={() => onLanguageChange('pt')}
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                lang === 'pt' ? 'bg-accent text-black font-black' : 'text-white/60 hover:text-white'
              }`}
            >
              PT
            </button>
            <button 
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                lang === 'en' ? 'bg-accent text-black font-black' : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenAccess('FAST')}
            className="bg-accent text-black px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-accent/20 cursor-pointer text-center"
          >
            {t.access}
          </motion.button>
        </div>

        <button className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-bold uppercase tracking-widest text-white/60" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}

            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                {lang === 'pt' ? "Idioma" : "Language"}
              </span>
              <div className="flex bg-white/5 border border-white/10 rounded-full p-0.5 items-center">
                <button 
                  type="button"
                  onClick={() => onLanguageChange('pt')}
                  className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    lang === 'pt' ? 'bg-accent text-black font-black' : 'text-white/60'
                  }`}
                >
                  PT
                </button>
                <button 
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    lang === 'en' ? 'bg-accent text-black font-black' : 'text-white/60'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button 
              onClick={() => { setIsOpen(false); onOpenAccess('FAST'); }}
              className="bg-accent text-black py-4 rounded-xl font-bold text-center text-sm uppercase tracking-widest cursor-pointer w-full mt-2"
            >
              {t.access}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Interactive Neural Playground in Hero ---
interface PlaygroundTab {
  id: 'vision' | 'search' | 'reasoning';
  title: string;
  icon: React.ReactNode;
  prompt: string;
  sampleResponse: string;
  tags: string[];
  latency: string;
  speed: string;
}

const InteractiveNeuralConsole: React.FC<{ lang: 'pt' | 'en' }> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'search' | 'reasoning'>('vision');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const tabs: PlaygroundTab[] = [
    {
      id: 'vision',
      title: lang === 'pt' ? 'Vision Mode' : 'Vision Mode',
      icon: <Eye size={16} className="text-accent" />,
      prompt: 'CALL_TOOL:vision_mode("tensor_schematic_v1.png")',
      sampleResponse: lang === 'pt'
        ? "✓ Reconhecimento Óptico: Diagrama de barramento neural identificado.\n✓ Segmentação: 3 camadas de tensores ativas, 99.8% acurácia.\n✓ Extração: Parâmetros FP16 mapeados sem distorção visual."
        : "✓ Optical Recognition: Neural bus diagram detected.\n✓ Segmentation: 3 tensor layers active, 99.8% accuracy.\n✓ Extraction: FP16 parameters mapped with zero optical noise.",
      tags: ["Optical OCR", "Multimodal FP16", "Instant Scan"],
      latency: "12ms",
      speed: "192 tok/s"
    },
    {
      id: 'search',
      title: lang === 'pt' ? 'Web Search Live' : 'Web Search Live',
      icon: <Search size={16} className="text-accent" />,
      prompt: lang === 'pt'
        ? 'CALL_TOOL:web_search("Últimos avanços de pesos abertos 2026")'
        : 'CALL_TOOL:web_search("Latest 2026 open weights state-of-the-art")',
      sampleResponse: lang === 'pt'
        ? "✓ Varredura Global: 4 fontes verificadas em tempo real.\n✓ Síntese Confiável: Indexação semântica sem alucinações.\n✓ Resposta: Arquiteturas esparsas superam modelos monolíticos com 60% menos memória."
        : "✓ Global Sweep: 4 verified sources indexed in real-time.\n✓ Grounded Synthesis: Zero hallucination confidence metric.\n✓ Output: Sparse MoE architectures outperform dense weights using 60% less VRAM.",
      tags: ["Real-time Grounding", "Live Citation", "Zero-Lag"],
      latency: "18ms",
      speed: "185 tok/s"
    },
    {
      id: 'reasoning',
      title: lang === 'pt' ? 'Raciocínio Lógico' : 'Deep Logic',
      icon: <Cpu size={16} className="text-accent" />,
      prompt: lang === 'pt'
        ? 'CALL_TOOL:deep_reasoning("Otimizar pipeline de tensores quantizados GGUF Q4_K_M")'
        : 'CALL_TOOL:deep_reasoning("Optimize GGUF Q4_K_M quantized tensor pipeline")',
      sampleResponse: lang === 'pt'
        ? "✓ Passo 1: Vetorização AVX-512 alinhada à cache L3.\n✓ Passo 2: Compressão de pesos por bloco de 32 elementos.\n✓ Conclusão: Taxa de transferência elevada para 34.2 GB/s em hardware comum."
        : "✓ Step 1: AVX-512 vectorization aligned to L3 cache.\n✓ Step 2: Weight compression in 32-element blocks.\n✓ Result: Throughput elevated to 34.2 GB/s on consumer hardware.",
      tags: ["Chain-of-Thought", "GGUF Native", "Zero-Overhead"],
      latency: "14ms",
      speed: "210 tok/s"
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  const currentResponse = currentTab.sampleResponse;

  useEffect(() => {
    setIsTyping(true);
    setDisplayText('');
    let i = 0;
    const full = currentResponse;
    const interval = setInterval(() => {
      if (i < full.length) {
        setDisplayText(full.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 12);
    return () => clearInterval(interval);
  }, [currentResponse]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 text-left">
      <div className="glass rounded-[2rem] border border-white/10 p-1 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/5 gap-3">
          {/* Action Tabs */}
          <div className="flex items-center gap-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-accent text-black shadow-md shadow-accent/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Telemetry pill */}
          <div className="flex items-center gap-3 text-[10px] font-mono text-white/50">
            <span className="flex items-center gap-1 text-accent">
              <Activity size={12} className="animate-pulse" /> {currentTab.latency}
            </span>
            <span className="hidden sm:inline bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
              ⚡ {currentTab.speed}
            </span>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-6 bg-black/40 font-mono text-xs">
          {/* Prompt line */}
          <div className="flex items-center gap-2 text-accent/90 mb-4 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
            <Terminal size={14} className="shrink-0 text-accent" />
            <span className="text-white/40">$</span>
            <span className="text-accent font-semibold">{currentTab.prompt}</span>
          </div>

          {/* Animated Execution Response */}
          <div className="min-h-[90px] text-white/80 whitespace-pre-line leading-relaxed pl-2 border-l-2 border-accent/40">
            {displayText}
            {isTyping && <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle" />}
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
            {currentTab.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[9px] uppercase tracking-wider font-bold bg-white/5 text-white/60 px-2.5 py-1 rounded-lg border border-white/5 flex items-center gap-1"
              >
                <Sparkles size={10} className="text-accent" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Hero Section ---
const Hero = ({ onOpenAccess, lang }: { onOpenAccess: (type: 'FAST' | 'PRO') => void; lang: 'pt' | 'en' }) => {
  const t = translations[lang].hero;
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[3px] text-accent">
              {t.active}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.92] tracking-tighter mb-8 text-gradient">
            {t.title} <br />
            <span className="text-accent italic">{t.titleAccent}</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-text-dim max-w-2xl mx-auto mb-10 font-medium leading-tight">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenAccess('PRO')}
              className="w-full sm:w-auto bg-accent text-black px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-wider shadow-[0_0_40px_rgba(34,197,94,0.3)] flex items-center justify-center gap-3 cursor-pointer"
            >
              {t.ctaPro} <ArrowRight size={20} />
            </motion.button>
            <a href="#tecnologia" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wider glass hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              {t.ctaTech}
            </a>
          </div>
          
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">
            {t.fastDisclaimer}
          </p>
        </RevealOnScroll>

        {/* Live Interactive Neural Console */}
        <RevealOnScroll>
          <InteractiveNeuralConsole lang={lang} />
        </RevealOnScroll>
      </div>

      {/* Floating Ambient Badges */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-8 hidden xl:block"
      >
        <div className="glass p-4 rounded-2xl border-accent/20 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Eye size={18} />
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-widest text-text-dim">{t.visionActive}</div>
            <div className="text-xs font-bold">{t.visionTitle}</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-8 hidden xl:block"
      >
        <div className="glass p-4 rounded-2xl border-accent/20 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Search size={18} />
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-widest text-text-dim">{t.searchActive}</div>
            <div className="text-xs font-bold">{t.searchTitle}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// --- Bento Grid Section with Spotlight Interaction ---
const BentoGrid = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].bento;
  
  const items = [
    {
      title: t.items.vision.title,
      desc: t.items.vision.desc,
      icon: <Eye className="text-accent" size={30} />,
      size: "md:col-span-1",
      badge: "Optical OCR"
    },
    {
      title: t.items.search.title,
      desc: t.items.search.desc,
      icon: <Search className="text-accent" size={30} />,
      size: "md:col-span-1",
      badge: "Real-Time Web"
    },
    {
      title: t.items.intel.title,
      desc: t.items.intel.desc,
      icon: <Cpu className="text-accent" size={30} />,
      size: "md:col-span-1",
      badge: "Pure Precision"
    },
    {
      title: t.items.fastPro.title,
      desc: t.items.fastPro.desc,
      icon: <Zap className="text-accent" size={30} />,
      size: "md:col-span-1",
      badge: "Dual Architecture"
    }
  ];

  return (
    <section id="tecnologia" className="py-32 px-6 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            {t.title} <span className="text-accent">{t.titleAccent}</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto text-lg">
            {t.desc}
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <SpotlightCard className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-accent/30 group">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-accent/20 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-accent/80 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-dim leading-relaxed text-lg">{item.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Models Section ---
const ModelsSection = ({ onOpenAccess, lang }: { onOpenAccess: (type: 'FAST' | 'PRO') => void; lang: 'pt' | 'en' }) => {
  const m = translations[lang].modelsSec;
  const models = [
    {
      name: "ERYX FAST",
      price: m.freePrice,
      period: m.freePeriod,
      features: m.freeFeatures,
      cta: m.freeCta,
      highlight: false,
      badge: lang === 'pt' ? "Gratuito" : "Free"
    },
    {
      name: "ERYX PRO",
      price: m.proPrice,
      period: m.proPeriod,
      features: m.proFeatures,
      cta: m.proCta,
      highlight: true,
      badge: lang === 'pt' ? "Mais Popular" : "Most Popular"
    }
  ];

  return (
    <section id="modelos" className="py-32 px-6 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            {m.title} <span className="text-accent">{m.titleAccent}</span>
          </h2>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {models.map((model, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SpotlightCard 
              className={`p-10 md:p-12 rounded-[3rem] border ${
                model.highlight 
                  ? 'bg-accent/5 border-accent/30 shadow-[0_0_50px_rgba(34,197,94,0.1)]' 
                  : 'glass border-white/5'
              } flex flex-col h-full`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                  model.highlight ? 'bg-accent text-black' : 'bg-white/10 text-white'
                }`}>
                  {model.badge}
                </span>
                <span className="text-[10px] font-mono text-white/40">v1.0 Ready</span>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-black mb-2">{model.name}</h3>
                <div className="text-accent font-black text-5xl italic tracking-tighter">{model.price}</div>
                <div className="text-xs text-text-dim/60 font-black uppercase tracking-widest mt-2">{model.period}</div>
              </div>

              <ul className="space-y-4 mb-4 flex-1">
                {model.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-text-dim">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenAccess(model.name.includes("PRO") ? 'PRO' : 'FAST')}
                className={`mt-8 w-full py-4 rounded-2xl font-black uppercase text-center text-sm tracking-wider transition-all cursor-pointer ${
                  model.highlight 
                    ? 'bg-accent text-black shadow-lg shadow-accent/20' 
                    : 'glass hover:bg-white/10 text-white'
                }`}
              >
                {model.cta}
              </motion.button>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Interactive Comparison Section ---
const ComparisonSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].comparison;
  const [sortBy, setSortBy] = useState<'rank' | 'intelligence' | 'speed'>('rank');

  const rawData = [
    { 
      name: "ERYX 1.0 PRO", 
      rank: "1º", 
      rankNum: 1, 
      intelligence: 68, 
      intelligenceStr: "68%", 
      speedScore: 98,
      speed: t.values.ultra, 
      vision: t.values.advanced, 
      search: t.values.realtime, 
      highlight: true,
      tag: t.tagPro
    },
    { 
      name: "ERYX 1.0 FAST", 
      rank: "2º", 
      rankNum: 2, 
      intelligence: 59, 
      intelligenceStr: "59%", 
      speedScore: 100,
      speed: t.values.instant, 
      vision: t.values.basic, 
      search: t.values.realtime, 
      highlight: true,
      tag: t.tagFast
    },
    { name: "QWEN 3.5 4B", rank: "3º", rankNum: 3, intelligence: 56, intelligenceStr: "56%", speedScore: 80, speed: t.values.fast, vision: t.values.basic, search: t.values.no, highlight: false },
    { name: "GEMMA 2 9B", rank: "4º", rankNum: 4, intelligence: 54, intelligenceStr: "54%", speedScore: 60, speed: t.values.medium, vision: t.values.basic, search: t.values.no, highlight: false },
    { name: "MISTRAL 7B", rank: "5º", rankNum: 5, intelligence: 51, intelligenceStr: "51%", speedScore: 60, speed: t.values.medium, vision: t.values.no, search: t.values.no, highlight: false },
    { name: "LLAMA 3.1 3B", rank: "6º", rankNum: 6, intelligence: 48, intelligenceStr: "48%", speedScore: 78, speed: t.values.fast, vision: t.values.no, search: t.values.no, highlight: false },
    { name: "MINICPM 3B", rank: "7º", rankNum: 7, intelligence: 44, intelligenceStr: "44%", speedScore: 75, speed: t.values.fast, vision: t.values.basic, search: t.values.no, highlight: false },
    { name: "PHI-3 3.8B", rank: "8º", rankNum: 8, intelligence: 41, intelligenceStr: "41%", speedScore: 70, speed: t.values.fast, vision: t.values.no, search: t.values.no, highlight: false },
  ];

  const sortedData = [...rawData].sort((a, b) => {
    if (sortBy === 'intelligence') {
      return b.intelligence - a.intelligence;
    }
    if (sortBy === 'speed') {
      return b.speedScore - a.speedScore;
    }
    return a.rankNum - b.rankNum;
  });

  return (
    <section id="comparacao" className="py-32 px-6 max-w-5xl mx-auto">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            {t.title} <span className="text-accent">{t.titleAccent}</span>
          </h2>
          <p className="text-text-dim max-w-3xl mx-auto text-lg leading-relaxed">
            {t.descLine1} <br className="hidden md:inline" />
            <span className="text-sm text-text-dim/60">{t.descLine2}</span>
          </p>
        </div>

        {/* Sort by Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-text-dim/80 mr-2 flex items-center gap-1.5">
            <SlidersHorizontal size={14} className="text-accent" />
            {t.sortLabel}
          </span>
          <button
            type="button"
            onClick={() => setSortBy('rank')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              sortBy === 'rank' ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            {t.sortRank}
          </button>
          <button
            type="button"
            onClick={() => setSortBy('intelligence')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              sortBy === 'intelligence' ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            {t.sortIntel}
          </button>
          <button
            type="button"
            onClick={() => setSortBy('speed')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              sortBy === 'speed' ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            {t.sortSpeed}
          </button>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="glass rounded-[2rem] overflow-x-auto border-white/5 relative">
          <div className="min-w-[800px] md:min-w-0">
            <div className="grid grid-cols-7 p-6 bg-white/5 text-[10px] font-black uppercase tracking-widest text-text-dim border-b border-white/5">
              <div className="col-span-2">{t.headerModel}</div>
              <div>{t.headerRank}</div>
              <div>{t.headerIntel}</div>
              <div>{t.headerSpeed}</div>
              <div>{t.headerVision}</div>
              <div>{t.headerSearch}</div>
            </div>
            
            {sortedData.map((item, i) => (
              <motion.div 
                key={item.name}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className={`grid grid-cols-7 p-6 md:p-8 items-center border-b border-white/5 last:border-0 transition-all ${item.highlight ? 'bg-accent/5 relative' : 'hover:bg-white/[0.02]'}`}
              >
                {item.highlight && (
                  <div className="absolute left-0 top-0 w-1 h-full bg-accent shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
                )}
                <div className={`col-span-2 font-black text-base md:text-lg ${item.highlight ? 'text-accent' : ''} flex flex-col items-start gap-1`}>
                  <div className="flex items-center gap-2">
                    {item.highlight && <Trophy size={16} className="text-accent shrink-0" />}
                    <span>{item.name}</span>
                  </div>
                  {item.tag && (
                    <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-accent/15 text-accent border border-accent/20">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="font-black text-2xl italic text-white/20">{item.rank}</div>
                
                {/* Visual Progress bar on intelligence score */}
                <div>
                  <div className="font-bold text-sm md:text-base mb-1">{item.intelligenceStr}</div>
                  <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${item.highlight ? 'bg-accent shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-white/40'}`} 
                      style={{ width: `${item.intelligence}%` }} 
                    />
                  </div>
                </div>

                <div className="font-bold text-sm md:text-base">{item.speed}</div>
                <div className="font-bold text-sm md:text-base">{item.vision}</div>
                <div className="font-bold text-sm md:text-base">{item.search}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      
      <div className="mt-12 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[3px] text-white/30">
        <BarChart3 size={14} className="text-accent" /> {t.updatedAt}
      </div>
    </section>
  );
};

// --- Roadmap Section with Interactive Timeline ---
const RoadmapSection = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].roadmap;
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases = [
    { 
      year: t.phases.p1.year, 
      title: t.phases.p1.title, 
      desc: t.phases.p1.desc,
      status: lang === 'pt' ? 'ATIVO & DISPONÍVEL' : 'ACTIVE & LIVE',
      active: true
    },
    { 
      year: t.phases.p2.year, 
      title: t.phases.p2.title, 
      desc: t.phases.p2.desc,
      status: lang === 'pt' ? 'EM DESENVOLVIMENTO' : 'IN DEVELOPMENT',
      active: false
    },
    { 
      year: t.phases.p3.year, 
      title: t.phases.p3.title, 
      desc: t.phases.p3.desc,
      status: lang === 'pt' ? 'PLANEJAMENTO AVANÇADO' : 'ADVANCED PLANNING',
      active: false
    }
  ];

  return (
    <section id="roadmap" className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              {t.title} <span className="text-accent">{t.titleAccent}</span>
            </h2>
            <p className="text-text-dim text-sm uppercase tracking-widest font-mono">
              {lang === 'pt' ? 'Evolução Sequencial dos Protocolos' : 'Sequential Protocol Lifecycle'}
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              onClick={() => setSelectedPhase(i)}
              className="cursor-pointer"
            >
              <SpotlightCard 
                className={`p-8 md:p-10 rounded-3xl border transition-all ${
                  selectedPhase === i 
                    ? 'glass-accent border-accent/40 shadow-[0_0_30px_rgba(34,197,94,0.15)]' 
                    : 'glass border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-6 gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 ${
                      phase.active 
                        ? 'bg-accent border-black shadow-[0_0_12px_rgba(34,197,94,0.8)] animate-pulse' 
                        : 'bg-black border-white/40'
                    }`} />
                    <span className="text-accent font-black text-2xl md:text-3xl italic tracking-tighter">{phase.year}</span>
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0 ${
                    phase.active ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-white/5 text-white/40'
                  }`}>
                    {phase.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold mb-3">{phase.title}</h4>
                <p className="text-sm text-text-dim leading-relaxed">{phase.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Future Features Section ---
const FutureFeatures = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].future;
  const features = [
    { icon: <Video />, title: t.items.video.title, desc: t.items.video.desc },
    { icon: <ImageIcon />, title: t.items.image.title, desc: t.items.image.desc },
    { icon: <Music />, title: t.items.audio.title, desc: t.items.audio.desc },
    { icon: <Code />, title: t.items.builder.title, desc: t.items.builder.desc }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            {t.title} <span className="text-accent">{t.titleAccent}</span>
          </h2>
        </div>
      </RevealOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <SpotlightCard className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center group hover:border-accent/30">
              <div className="mb-6 p-4 rounded-2xl bg-white/5 text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                {f.icon}
              </div>
              <h4 className="font-bold text-xl mb-2">{f.title}</h4>
              <p className="text-text-dim text-sm leading-relaxed">{f.desc}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- FAQ Section ---
const FAQ = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.q1, a: t.altText1 },
    { q: t.q2, a: t.altText2 },
    { q: t.q3, a: t.altText3 },
    { q: t.q4, a: t.altText4 }
  ];

  return (
    <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
      <RevealOnScroll>
        <h2 className="text-4xl font-black text-center mb-16 tracking-tighter uppercase">
          {t.title} <span className="text-accent">{t.titleAccent}</span>
        </h2>
      </RevealOnScroll>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="glass rounded-3xl p-8 cursor-pointer hover:border-accent/30 transition-all border border-white/5"
            >
              <div className="flex justify-between items-center font-bold text-xl">
                <span>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === i ? 'rotate-90 bg-accent/20 text-accent' : 'text-white/60'
                }`}>
                  <ChevronRight size={18} />
                </div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 text-text-dim leading-relaxed text-base border-t border-white/5 mt-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Footer Section ---
const Footer = ({ lang }: { lang: 'pt' | 'en' }) => {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              <Brain className="text-black" size={18} />
            </div>
            <div className="text-xl font-black tracking-tighter uppercase">
              ERYX <span className="text-accent">1.0</span>
            </div>
          </div>
          <p className="text-text-dim text-sm leading-relaxed mb-6">
            {t.desc}
          </p>
          <div className="text-xs font-semibold text-accent">
            {t.creator}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6">{t.navTitle}</h5>
            <ul className="space-y-4 text-sm text-text-dim">
              <li><a href="#" className="hover:text-accent transition-colors">{lang === 'pt' ? "Início" : "Home"}</a></li>
              <li><a href="#tecnologia" className="hover:text-accent transition-colors">{nav.tech}</a></li>
              <li><a href="#modelos" className="hover:text-accent transition-colors">{nav.models}</a></li>
              <li><a href="#roadmap" className="hover:text-accent transition-colors">{nav.roadmap}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6">{t.specsTitle}</h5>
            <ul className="space-y-4 text-sm text-text-dim">
              <li className="flex items-center gap-2 font-bold text-accent">{t.creator}</li>
              <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Vision Mode</li>
              <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Web Search</li>
              <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> GGUF & Safetensors</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-text-dim/50 uppercase tracking-widest">
          {t.copyright}
        </p>
        <div className="flex items-center gap-4 text-[10px] text-text-dim/50 uppercase tracking-widest">
          <Shield size={12} className="text-accent" /> {t.security}
        </div>
      </div>
    </footer>
  );
};

// --- Access Modal with Instant Copy Command & Real Links ---
interface AccessPanelModalProps {
  type: 'FAST' | 'PRO' | null;
  onClose: () => void;
  onTypeChange: (type: 'FAST' | 'PRO') => void;
  lang: 'pt' | 'en';
}

const AccessPanelModal: React.FC<AccessPanelModalProps> = ({ type, onClose, onTypeChange, lang }) => {
  if (!type) return null;
  const t = translations[lang].modal;

  const data = {
    FAST: {
      name: "ERYX 1.0 FAST",
      badge: t.badgeFast,
      desc: t.descFast,
      safetensors: "https://huggingface.co/spaces/LSGHOST/Eryx-1.0-Fast",
      gguf: "https://huggingface.co/spaces/LSGHOST/Eryx-1.0-Fast-GGUF"
    },
    PRO: {
      name: "ERYX 1.0 PRO",
      badge: t.badgePro,
      desc: t.descPro,
      safetensors: "https://huggingface.co/spaces/LSGHOST/Eryx-1.0-Pro",
      gguf: "https://huggingface.co/spaces/LSGHOST/Eryx-1.0-Pro-GGUF"
    }
  };

  const current = data[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
      />

      {/* Modal Window */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-[#030703]/95 border border-accent/20 rounded-[2.5rem] p-8 md:p-10 shadow-[0_0_50px_rgba(34,197,94,0.15)] overflow-hidden z-10"
      >
        {/* Glow */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-accent p-2 rounded-full hover:bg-white/5 transition-all cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex gap-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${
              type === 'PRO' ? 'bg-accent/15 text-accent border border-accent/20' : 'bg-white/10 text-white'
            }`}>
              {current.badge}
            </span>
          </div>
          <h3 className="text-3xl font-black mb-2 tracking-tight text-white">
            {current.name}
          </h3>
          <p className="text-sm text-text-dim max-w-md">
            {current.desc}
          </p>
        </div>

        {/* Switcher tabs */}
        <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-2xl mb-6 border border-white/5">
          <button 
            type="button"
            onClick={() => onTypeChange('FAST')}
            className={`py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              type === 'FAST' ? 'bg-accent text-black shadow-lg shadow-accent/10 font-bold' : 'text-white/60 hover:text-white font-bold'
            }`}
          >
            Eryx Fast
          </button>
          <button 
            type="button"
            onClick={() => onTypeChange('PRO')}
            className={`py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              type === 'PRO' ? 'bg-accent text-black shadow-lg shadow-accent/10 font-bold' : 'text-white/60 hover:text-white font-bold'
            }`}
          >
            Eryx Pro
          </button>
        </div>

        {/* Format Download Links */}
        <div className="space-y-3.5">
          {/* Option 1: GGUF */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={current.gguf}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative p-5 rounded-3xl border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all group overflow-hidden"
          >
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent text-black px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest">
              <Zap size={8} /> {t.ggufBadge}
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-accent/25 flex items-center justify-center text-accent shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <Cpu size={20} />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-accent flex items-center gap-2">
                  {t.ggufTitle} <Sparkles size={13} className="text-accent" />
                </h4>
                <p className="text-xs text-text-dim leading-relaxed mt-0.5 group-hover:text-white transition-colors">
                  {t.ggufDesc}
                </p>
              </div>
            </div>
          </motion.a>

          {/* Option 2: SAFETENSORS */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={current.safetensors}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 shrink-0">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-white group-hover:text-accent transition-colors">
                  {t.safeTitle}
                </h4>
                <p className="text-xs text-text-dim leading-relaxed mt-0.5 group-hover:text-white/80 transition-colors">
                  {t.safeDesc}
                </p>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Helper note */}
        <p className="text-center text-[10px] uppercase tracking-widest text-text-dim/40 mt-6">
          {t.footer}
        </p>
      </motion.div>
    </div>
  );
};

// --- Home Page ---
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const getBasename = () => {
  const { hostname, pathname } = window.location;
  if (hostname.includes('github.io')) {
    const repoMatch = pathname.match(/^\/([^/]+)/);
    return repoMatch ? `/${repoMatch[1]}` : '';
  }
  return '';
};

const Home = () => {
  const [accessModalType, setAccessModalType] = useState<'FAST' | 'PRO' | null>(null);
  const [lang, setLang] = useState<'pt' | 'en'>(() => {
    const saved = localStorage.getItem('eryx-lang');
    if (saved === 'pt' || saved === 'en') return saved;
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'pt';
    return browserLang;
  });

  const handleLanguageChange = (newLang: 'pt' | 'en') => {
    setLang(newLang);
    localStorage.setItem('eryx-lang', newLang);
  };

  const cta = translations[lang].ctaSection;

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <Navbar 
        onOpenAccess={(type) => setAccessModalType(type)} 
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />
      
      <main>
        <Hero onOpenAccess={(type) => setAccessModalType(type)} lang={lang} />
        <BentoGrid lang={lang} />
        <ModelsSection onOpenAccess={(type) => setAccessModalType(type)} lang={lang} />
        <ComparisonSection lang={lang} />
        <RoadmapSection lang={lang} />
        <FutureFeatures lang={lang} />
        <FAQ lang={lang} />
        
        {/* Final CTA */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 -z-10" />
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                {cta.title} <br /><span className="text-accent italic">{cta.titleAccent}</span>
              </h2>
              <p className="text-xl md:text-2xl text-text-dim mb-12 max-w-2xl mx-auto">
                {cta.desc}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAccessModalType('PRO')}
                className="inline-flex bg-accent text-black px-16 py-6 rounded-2xl font-black text-xl uppercase tracking-wider shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:bg-white transition-all cursor-pointer"
              >
                {cta.button}
              </motion.button>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer lang={lang} />

      <AnimatePresence>
        {accessModalType && (
          <AccessPanelModal 
            type={accessModalType} 
            onClose={() => setAccessModalType(null)} 
            onTypeChange={(type) => setAccessModalType(type)} 
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
