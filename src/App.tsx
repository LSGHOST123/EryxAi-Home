import React, { useState, useEffect } from 'react';
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
  BarChart3
} from 'lucide-react';

// --- Components ---

const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax]">
        {/* Concentric Circles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-accent/20 rounded-full"
            style={{ 
              width: `${i * 20}%`, 
              height: `${i * 20}%`,
              opacity: 1 - (i * 0.15)
            }}
          />
        ))}
        {/* Neural Pulse Line */}
        <div className="radar-line" />
      </div>
      <div className="grid-bg absolute inset-0" />
      <div className="glow-mesh absolute inset-0" />
    </div>
  );
};

interface NavbarProps {
  onOpenAccess: (type: 'FAST' | 'PRO') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <Brain className="text-black" size={24} />
          </div>
          <div className="text-xl font-black tracking-tighter uppercase">
            ERYX <span className="text-accent">AI</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Tecnologia', 'Modelos', 'Roadmap', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenAccess('FAST')}
            className="bg-accent text-black px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-accent/20 cursor-pointer text-center"
          >
            Acessar Agora
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
            {['Tecnologia', 'Modelos', 'Roadmap', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-sm font-bold uppercase tracking-widest text-white/60" onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
            <button 
              onClick={() => { setIsOpen(false); onOpenAccess('FAST'); }}
              className="bg-accent text-black py-4 rounded-xl font-bold text-center text-sm uppercase tracking-widest cursor-pointer w-full"
            >
              Acessar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenAccess }: { onOpenAccess: (type: 'FAST' | 'PRO') => void }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-accent mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[3px] text-accent">
              ERYX AI v1.0 - Protocolo Neural Ativo
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-gradient">
            A INTELIGÊNCIA <br />
            <span className="text-accent italic">DEFINITIVA.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-text-dim max-w-2xl mx-auto mb-12 font-medium leading-tight">
            Ultra inteligente, rápida e equipada com Vision Mode e Web Search integrados. <br className="hidden md:block" />
            Disponível nos modelos <span className="text-accent">FAST (Ilimitado)</span> e <span className="text-accent">PRO (Elite)</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenAccess('PRO')}
              className="w-full sm:w-auto bg-accent text-black px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-wider shadow-[0_0_40px_rgba(34,197,94,0.3)] flex items-center justify-center gap-3 cursor-pointer"
            >
              Ativar ERYX PRO <ArrowRight size={20} />
            </motion.button>
            <a href="#tecnologia" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg uppercase tracking-wider glass hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              Ver Tecnologia
            </a>
          </div>
          
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">
            ERYX FAST: 100% Gratuito e Ilimitado para sempre.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="glass p-4 rounded-2xl border-accent/20 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Eye size={20} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-text-dim">Vision Mode</div>
            <div className="text-sm font-bold">Análise Visual Ativa</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <div className="glass p-4 rounded-2xl border-accent/20 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Search size={20} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-text-dim">Web Search</div>
            <div className="text-sm font-bold">Busca em Tempo Real</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const BentoGrid = () => {
  const items = [
    {
      title: "Vision Mode",
      desc: "Capacidade de ver, entender e analisar imagens e documentos complexos com precisão cirúrgica.",
      icon: <Eye className="text-accent" size={32} />,
      size: "md:col-span-1",
      bg: "bg-gradient-to-br from-accent/10 to-transparent"
    },
    {
      title: "Web Search",
      desc: "Acesso à internet em tempo real para trazer as informações mais recentes e precisas.",
      icon: <Search className="text-accent" size={32} />,
      size: "md:col-span-1",
      bg: "bg-bg-surface"
    },
    {
      title: "Ultra Inteligência",
      desc: "Raciocínio avançado e lógica superior para resolver problemas complexos em segundos.",
      icon: <Cpu className="text-accent" size={32} />,
      size: "md:col-span-1",
      bg: "bg-bg-surface"
    },
    {
      title: "Fast & Pro",
      desc: "Escolha entre a velocidade instantânea do FAST ou a profundidade ilimitada do PRO.",
      icon: <Zap className="text-accent" size={32} />,
      size: "md:col-span-1",
      bg: "bg-gradient-to-bl from-accent/10 to-transparent"
    }
  ];

  return (
    <section id="tecnologia" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
          ENGENHARIA <span className="text-accent">NEURAL.</span>
        </h2>
        <p className="text-text-dim max-w-2xl mx-auto text-lg">
          Desenvolvemos uma arquitetura de inteligência que ultrapassa os limites do processamento convencional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${item.size} ${item.bg} glass p-10 rounded-[2.5rem] border-white/5 hover:border-accent/30 transition-all group relative overflow-hidden`}
          >
            <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 group-hover:bg-accent/20 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-text-dim leading-relaxed text-lg">{item.desc}</p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ModelsSection = ({ onOpenAccess }: { onOpenAccess: (type: 'FAST' | 'PRO') => void }) => {
  const models = [
    {
      name: "ERYX FAST",
      price: "GRÁTIS",
      period: "PARA SEMPRE / ILIMITADO",
      features: [
        "Uso Totalmente Ilimitado",
        "Velocidade Instantânea",
        "Vision Mode Básico",
        "Web Search Ativo",
        "Suporte 24/7"
      ],
      cta: "Usar Agora",
      highlight: false
    },
    {
      name: "ERYX PRO",
      price: "R$ 15-25",
      period: "POR MÊS / ILIMITADO",
      features: [
        "Acesso Pro 100% Ilimitado",
        "Raciocínio Profundo Extremo",
        "Vision Mode Avançado Completo",
        "Web Search Premium e Dedicado",
        "Prioridade de Processamento Global",
        "Acesso Antecipado a Novas Versões"
      ],
      cta: "Ativar PRO",
      highlight: true
    }
  ];

  return (
    <section id="modelos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
          ESCOLHA SEU <span className="text-accent">PODER.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {models.map((model, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-12 rounded-[3rem] border ${model.highlight ? 'bg-accent/5 border-accent/30 shadow-[0_0_50px_rgba(34,197,94,0.1)]' : 'glass border-white/5'} flex flex-col`}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-black mb-2">{model.name}</h3>
              <div className="text-accent font-black text-5xl italic tracking-tighter">{model.price}</div>
              <div className="text-xs text-text-dim/60 font-black uppercase tracking-widest mt-2">{model.period}</div>
            </div>
            <ul className="space-y-4 mb-4 flex-1">
              {model.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-text-dim">
                  <CheckCircle2 size={18} className="text-accent" />
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const data = [
    { name: "ERYX 1.0 PRO", rank: "1º", intelligence: "99%", speed: "Ultra", vision: "Avançado", search: "Real-time", highlight: true },
    { name: "QWEN 3.5 4B", rank: "2º", intelligence: "93%", speed: "Rápido", vision: "Básico", search: "Não", highlight: false },
    { name: "GEMMA 2 9B", rank: "3º", intelligence: "90%", speed: "Médio", vision: "Básico", search: "Não", highlight: false },
    { name: "MISTRAL 7B", rank: "4º", intelligence: "86%", speed: "Médio", vision: "Não", search: "Não", highlight: false },
    { name: "LLAMA 3.1 3B", rank: "5º", intelligence: "84%", speed: "Rápido", vision: "Não", search: "Não", highlight: false },
    { name: "MINICPM 3B", rank: "6º", intelligence: "81%", speed: "Rápido", vision: "Básico", search: "Não", highlight: false },
    { name: "PHI-3 3.8B", rank: "7º", intelligence: "78%", speed: "Rápido", vision: "Não", search: "Não", highlight: false },
  ];

  return (
    <section id="comparacao" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
          BENCHMARK <span className="text-accent">GLOBAL.</span>
        </h2>
        <p className="text-text-dim max-w-2xl mx-auto text-lg">
          Comparação técnica baseada em testes de processamento neural e resposta cognitiva.
        </p>
      </div>

      <div className="glass rounded-[2rem] overflow-x-auto border-white/5 relative">
        <div className="min-w-[800px] md:min-w-0">
          <div className="grid grid-cols-7 p-6 bg-white/5 text-[10px] font-black uppercase tracking-widest text-text-dim border-b border-white/5">
            <div className="col-span-2">Modelo</div>
            <div>Rank</div>
            <div>Inteligência</div>
            <div>Velocidade</div>
            <div>Vision</div>
            <div>Web Search</div>
          </div>
          
          {data.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid grid-cols-7 p-8 items-center border-b border-white/5 last:border-0 transition-all ${item.highlight ? 'bg-accent/5 relative' : ''}`}
            >
              {item.highlight && (
                <div className="absolute left-0 top-0 w-1 h-full bg-accent shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
              )}
              <div className={`col-span-2 font-black text-lg md:text-xl ${item.highlight ? 'text-accent' : ''} flex items-center gap-3`}>
                {item.highlight && <Trophy size={20} className="text-accent shrink-0" />}
                {item.name}
              </div>
              <div className="font-black text-2xl italic text-white/20">{item.rank}</div>
              <div className="font-bold text-sm md:text-base">{item.intelligence}</div>
              <div className="font-bold text-sm md:text-base">{item.speed}</div>
              <div className="font-bold text-sm md:text-base">{item.vision}</div>
              <div className="font-bold text-sm md:text-base">{item.search}</div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[3px] text-white/20">
        <BarChart3 size={14} /> Dados atualizados em Março de 2026
      </div>
    </section>
  );
};

const RoadmapSection = () => {
  const phases = [
    { year: "v1.0 (Atual)", title: "Lançamento", desc: "Modelos FAST e PRO com Vision e Web Search integrados." },
    { year: "v2.0 (2026)", title: "Evolução Neural", desc: "Multimodal, Cinemática e Inteligência Artificial Avançada." },
    { year: "v3.0 (2027)", title: "Full Stack", desc: "Criação de Apps e Sistemas completos do zero." }
  ];

  return (
    <section id="roadmap" className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-24 tracking-tighter">
          NOSSO <span className="text-accent">ROADMAP.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pt-16 group"
            >
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-accent group-hover:scale-150 transition-transform z-20 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
              <div className="text-center">
                <div className="text-accent font-black text-3xl mb-4 italic tracking-tighter">{phase.year}</div>
                <h4 className="text-xl font-bold mb-4">{phase.title}</h4>
                <p className="text-sm text-text-dim leading-relaxed">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FutureFeatures = () => {
  const features = [
    { icon: <Video />, title: "Vídeo Neural", desc: "Criação de vídeos realistas a partir de texto." },
    { icon: <ImageIcon />, title: "Imagem 4K", desc: "Geração de arte e fotos em ultra resolução." },
    { icon: <Music />, title: "Áudio & Voz", desc: "Clonagem de voz e composição musical." },
    { icon: <Code />, title: "App Builder", desc: "Desenvolvimento de software full stack via chat." }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
          O QUE VEM <span className="text-accent">POR AÍ.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center group hover:border-accent/30 transition-all">
            <div className="mb-6 p-4 rounded-2xl bg-white/5 text-accent group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h4 className="font-bold text-xl mb-2">{f.title}</h4>
            <p className="text-text-dim text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "O ERYX FAST é realmente ilimitado?", a: "Sim! O modelo FAST foi otimizado para ser gratuito e ilimitado para todos os usuários, garantindo acesso democrático e contínuo à inteligência artificial." },
    { q: "Como funciona a assinatura do ERYX PRO?", a: "O ERYX PRO é uma versão premium paga por assinatura mensal super acessível, com valor estimado entre R$ 15 e R$ 25. Ao assinar, você tem uso 100% ilimitado, garantindo máxima performance e prioridade neural sem cotas de uso ou bloqueios diários." },
    { q: "O Vision Mode aceita quais arquivos?", a: "Aceitamos imagens (JPG, PNG, WebP) e documentos PDF para análise visual, extração de texto e compreensão de contexto." },
    { q: "A busca na web é em tempo real?", a: "Sim. O ERYX AI se conecta aos principais motores de busca para garantir que você tenha informações atualizadas até o presente momento." }
  ];

  return (
    <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16 tracking-tighter uppercase">Dúvidas <span className="text-accent">Frequentes</span></h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group glass rounded-3xl p-8 cursor-pointer hover:border-accent/30 transition-all">
            <summary className="flex justify-between items-center font-bold text-xl list-none">
              {faq.q}
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-180 transition-transform">
                <ChevronRight size={20} className="text-accent" />
              </div>
            </summary>
            <p className="pt-8 text-text-dim leading-relaxed text-lg">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
      <div className="max-w-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
            <Brain className="text-black" size={18} />
          </div>
          <div className="text-xl font-black tracking-tighter uppercase">
            ERYX <span className="text-accent">AI</span>
          </div>
        </div>
        <p className="text-text-dim text-sm leading-relaxed mb-8">
          A inteligência artificial que redefine os limites do conhecimento humano. Criada para ser rápida, inteligente e acessível.
        </p>
        <div className="text-[10px] font-black uppercase tracking-[3px] text-accent/60">
          CRIADOR: LUCAS SIMIONI
        </div>
      </div>

      <div className="grid grid-cols-2 gap-16">
        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-6">Navegação</h5>
          <ul className="space-y-4 text-sm text-text-dim">
            <li><a href="#" className="hover:text-accent transition-colors">Início</a></li>
            <li><a href="#tecnologia" className="hover:text-accent transition-colors">Tecnologia</a></li>
            <li><a href="#modelos" className="hover:text-accent transition-colors">Modelos</a></li>
            <li><a href="#roadmap" className="hover:text-accent transition-colors">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-6">ERYX AI v1.0</h5>
          <ul className="space-y-4 text-sm text-text-dim">
            <li className="flex items-center gap-2 font-bold text-accent/80">CRIADOR: LUCAS SIMIONI</li>
            <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Vision Mode</li>
            <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Web Search</li>
            <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Neural Engine</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Servidor Hardware Status */}
    <div className="max-w-7xl mx-auto mt-16 p-6 rounded-2xl border border-[#eab308]/10 bg-[#eab308]/5 text-xs text-[#eab308]/80 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
      <Zap size={16} className="animate-pulse text-[#eab308] shrink-0" />
      <span>
        <strong>Status do Protocolo:</strong> Atualmente operando em servidor básico (Intel Xeon de entrada). Upgrade agendado e iminente para aceleração por GPU dedicada <strong>NVIDIA T4</strong> para velocidade e processamento neural instantâneo.
      </span>
    </div>
    
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] text-text-dim/50 uppercase tracking-widest">
        © 2026 ERYX AI. Todos os direitos reservados.
      </p>
      <div className="flex items-center gap-4 text-[10px] text-text-dim/50 uppercase tracking-widest">
        <Shield size={12} /> Protocolo de Segurança Neural Ativo
      </div>
    </div>
  </footer>
);

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const getBasename = () => {
  const { hostname, pathname } = window.location;
  if (hostname.includes('github.io')) {
    const repoMatch = pathname.match(/^\/([^/]+)/);
    return repoMatch ? `/${repoMatch[1]}` : '';
  }
  return '';
};

interface AccessPanelModalProps {
  type: 'FAST' | 'PRO' | null;
  onClose: () => void;
  onTypeChange: (type: 'FAST' | 'PRO') => void;
}

const AccessPanelModal: React.FC<AccessPanelModalProps> = ({ type, onClose, onTypeChange }) => {
  if (!type) return null;

  const data = {
    FAST: {
      name: "ERYX 1.0 FAST",
      badge: "Gratuito & Ilimitado",
      desc: "Modelo totalmente gratuito e sem limites, ideal para tarefas gerais de alta velocidade e análise visual ágil.",
      safetensors: "https://huggingface.co/spaces/LSGHOST/Eryx-1.0-Fast",
      gguf: "https://huggingface.co/spaces/LSGHOST/Eryx-1.0-Fast-GGUF"
    },
    PRO: {
      name: "ERYX 1.0 PRO",
      badge: "Pago & Ilimitado (R$ 15 - R$ 25/mês)",
      desc: "O poder neural absoluto para tarefas de altíssima complexidade, raciocínio avançado e inferência de ponta via assinatura de R$ 15 a R$ 25 p/ mês.",
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
        {/* Subtle background glow */}
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
        <div className="mb-8">
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

        {/* Model Switcher tabs */}
        <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-2xl mb-8 border border-white/5">
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

        {/* Format Options */}
        <div className="space-y-4">
          {/* Option 1: GGUF */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={current.gguf}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative p-6 rounded-3xl border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all group overflow-hidden"
          >
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-accent text-black px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest animate-pulse">
              <Zap size={8} /> Mais Rápido & Leve
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/25 flex items-center justify-center text-accent shrink-0 mt-0.5 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <Cpu size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-accent flex items-center gap-2">
                  Versão GGUF <Sparkles size={14} className="text-accent" />
                </h4>
                <p className="text-xs text-text-dim leading-relaxed mt-1 group-hover:text-white transition-colors">
                  Altamente recomendada localmente. O formato <strong>GGUF é mais rápido e leve</strong>, garantindo máxima otimização com menor consumo de memória RAM/VRAM.
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
            className="block p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 shrink-0 mt-0.5">
                <Shield size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white group-hover:text-accent transition-colors">
                  Versão SAFETENSORS
                </h4>
                <p className="text-xs text-text-dim leading-relaxed mt-1 group-hover:text-white/80 transition-colors">
                  Modelo completo sem quantização (.safetensors). Ideal para inferência em FP16 ou fine-tuning em placas dedicadas de alta performance.
                </p>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Helper note */}
        <p className="text-center text-[10px] uppercase tracking-widest text-text-dim/40 mt-8">
          Hugging Face Hub • Conexão Segura Ativa
        </p>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const [accessModalType, setAccessModalType] = useState<'FAST' | 'PRO' | null>(null);

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <Navbar onOpenAccess={(type) => setAccessModalType(type)} />
      
      <main>
        <Hero onOpenAccess={(type) => setAccessModalType(type)} />
        <BentoGrid />
        <ModelsSection onOpenAccess={(type) => setAccessModalType(type)} />
        <ComparisonSection />
        <RoadmapSection />
        <FutureFeatures />
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 -z-10" />
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                A ERA ERYX <br />
                <span className="text-accent italic">COMEÇA AGORA.</span>
              </h2>
              <p className="text-xl md:text-2xl text-text-dim mb-12 max-w-2xl mx-auto">
                Não fique para trás na maior revolução tecnológica da história. Ative seu protocolo neural hoje.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAccessModalType('PRO')}
                className="inline-flex bg-accent text-black px-16 py-6 rounded-2xl font-black text-xl uppercase tracking-wider shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:bg-white transition-all cursor-pointer"
              >
                Ativar ERYX PRO Agora
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {accessModalType && (
          <AccessPanelModal 
            type={accessModalType} 
            onClose={() => setAccessModalType(null)} 
            onTypeChange={(type) => setAccessModalType(type)} 
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
