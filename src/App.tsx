import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Download, 
  History, 
  Package, 
  Film, 
  Zap, 
  CheckCircle2, 
  ShieldCheck,
  Smartphone,
  MoreVertical,
  Languages,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- CONFIGURATION & TYPES ---

type Language = 'FR' | 'EN' | 'SW' | 'AR' | 'ZH';

interface LangContent {
  title: string;
  send: string;
  receive: string;
  history: string;
  status: string;
  speed: string;
  completed: string;
  ready: string;
  languages: string;
}

const LANG_DATA: Record<Language, LangContent> = {
  FR: { 
    title: 'MAX TRANSFERT', 
    send: 'ENVOYER', 
    receive: 'RECEVOIR', 
    history: 'HISTORIQUE',
    status: 'Statut',
    speed: 'Vitesse',
    completed: 'Transfert Terminé',
    ready: 'Prêt à lancer',
    languages: 'Langues'
  },
  EN: { 
    title: 'MAX TRANSFERT', 
    send: 'SEND', 
    receive: 'RECEIVE', 
    history: 'HISTORY',
    status: 'Status',
    speed: 'Speed',
    completed: 'Transfer Completed',
    ready: 'Ready to Launch',
    languages: 'Languages'
  },
  SW: { 
    title: 'MAX TRANSFERT', 
    send: 'TUMA', 
    receive: 'POKEA', 
    history: 'HISTORIA',
    status: 'Hali',
    speed: 'Kasi',
    completed: 'Uhamisho Umekamilika',
    ready: 'Tayari kuanza',
    languages: 'Lugha'
  },
  AR: { 
    title: 'ماكس ترانسفير', 
    send: 'إرسال', 
    receive: 'استلام', 
    history: 'سجل',
    status: 'الحالة',
    speed: 'السرعة',
    completed: 'اكتمل النقل',
    ready: 'جاهز للإطلاق',
    languages: 'اللغات'
  },
  ZH: { 
    title: 'MAX 传输', 
    send: '发送', 
    receive: '接收', 
    history: '历史',
    status: '状态',
    speed: '速度',
    completed: '传输完成',
    ready: '准备启动',
    languages: '语言'
  }
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState<Language>('FR');
  const [progression, setProgression] = useState(0);
  const [isTransferring, setIsTransferring] = useState(false);
  const [transferSpeed, setTransferSpeed] = useState("");
  const [pin, setPin] = useState("----");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'main' | 'history' | 'languages'>('main');
  
  const [historyItems] = useState([
    { name: 'Film_HD.mp4', status: 'Done', icon: <Film size={14} /> },
    { name: 'App_v2.apk', status: 'Done', icon: <Package size={14} /> },
    { name: 'Music_Collection.zip', status: 'Done', icon: <Package size={14} /> }
  ]);

  const t = LANG_DATA[lang];

  useEffect(() => {
    // Splash Screen Timer
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const startTransfer = () => {
    if (isTransferring) return;
    setIsTransferring(true);
    setProgression(0);
    setPin(Math.floor(1000 + Math.random() * 9000).toString());
    setTransferSpeed("42.8 Mo/s 🔥");
  };

  useEffect(() => {
    let interval: any;
    if (isTransferring && progression < 100) {
      interval = setInterval(() => {
        setProgression(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsTransferring(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isTransferring, progression]);

  if (showSplash) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <Zap size={120} className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          className="text-4xl md:text-5xl font-black italic tracking-tighter text-cyan-400 mb-2"
        >
          MAX TRANSFERT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase"
        >
          L'HOMMAGE mon cher pote À L'HISTOIRE
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-hidden flex flex-col">
      
      {/* MDTopAppBar - Toolbar */}
      <header className="h-16 bg-[#111] border-b border-white/5 flex items-center justify-between px-6 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Zap size={18} className="text-white" />
          </div>
          <h1 className="text-xl font-black italic tracking-tighter text-cyan-400 uppercase">
            {t.title}
          </h1>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <MoreVertical size={24} />
          </button>

          {/* MDDropdownMenu - Overflow Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="fixed inset-0 z-40"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-56 bg-[#181818] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                >
                  <button 
                    onClick={() => { setActiveTab('history'); setIsMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-4 hover:bg-white/5 text-left transition-colors border-b border-white/5"
                  >
                    <History size={18} className="text-cyan-400" />
                    <span className="text-sm font-bold uppercase tracking-wide">{t.history}</span>
                  </button>
                  <button 
                    onClick={() => { setActiveTab('languages'); setIsMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-4 hover:bg-white/5 text-left transition-colors"
                  >
                    <Languages size={18} className="text-cyan-400" />
                    <span className="text-sm font-bold uppercase tracking-wide">{t.languages}</span>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 relative">
        
        <AnimatePresence mode="wait">
          {activeTab === 'main' && (
            <motion.div 
              key="main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl space-y-8"
            >
              {/* Transfer Buttons - Side by Side */}
              <div className="grid grid-cols-2 gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={startTransfer}
                  disabled={isTransferring}
                  className={`group relative overflow-hidden py-12 rounded-[2.5rem] flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
                    isTransferring ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-600 hover:bg-blue-500'
                  } border shadow-2xl shadow-blue-500/10`}
                >
                  <Send size={40} className="mb-2" />
                  <span className="text-2xl font-black italic tracking-tight">{t.send}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden py-12 rounded-[2.5rem] flex flex-col items-center justify-center gap-3 bg-[#151a25] border border-blue-900/50 hover:border-blue-400/50 transition-all duration-500 shadow-xl"
                >
                  <Download size={40} className="text-blue-400 mb-2" />
                  <span className="text-2xl font-black italic tracking-tight text-blue-100">{t.receive}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.button>
              </div>

              {/* Progress Engine */}
              <div className="bg-[#111] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center gap-6 shadow-2xl">
                <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm uppercase tracking-widest">
                  <Zap size={20} className={isTransferring ? "animate-pulse" : ""} />
                  <span>
                    {isTransferring ? `${t.speed}: ${transferSpeed}` : progression === 100 ? t.completed : t.ready}
                  </span>
                </div>
                
                <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progression}%` }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  />
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="text-6xl font-black italic text-white/10 select-none">
                    {progression}%
                  </div>
                  <div className="flex items-center gap-3 text-amber-500 font-mono text-lg font-bold bg-amber-500/5 px-6 py-2 rounded-2xl border border-amber-500/20">
                    <ShieldCheck size={20} />
                    <span>PIN: {pin}</span>
                  </div>
                </div>
              </div>

              {/* Quick Library Access */}
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-400">
                  <Package size={16} />
                  <span>APK</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-purple-400">
                  <Film size={16} />
                  <span>Video</span>
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'history' && (
            <motion.div 
              key="history"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#111] rounded-[2.5rem] border border-white/5 p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-cyan-400">
                  <History size={24} />
                  <h2 className="text-xl font-black italic uppercase tracking-tight">{t.history}</h2>
                </div>
                <button onClick={() => setActiveTab('main')} className="p-2 hover:bg-white/5 rounded-full text-gray-500">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {historyItems.map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-sm truncate max-w-[180px]">{item.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">{t.status}: {item.status}</p>
                      </div>
                    </div>
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'languages' && (
            <motion.div 
              key="languages"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-[#111] rounded-[2.5rem] border border-white/5 p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Languages size={24} />
                  <h2 className="text-xl font-black italic uppercase tracking-tight">{t.languages}</h2>
                </div>
                <button onClick={() => setActiveTab('main')} className="p-2 hover:bg-white/5 rounded-full text-gray-500">
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {(['FR', 'EN', 'SW', 'AR', 'ZH'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setActiveTab('main'); }}
                    className={`flex items-center justify-between px-6 py-5 rounded-2xl font-bold transition-all ${
                      lang === l 
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <span>{l === 'FR' ? 'Français' : l === 'EN' ? 'English' : l === 'SW' ? 'Swahili' : l === 'AR' ? 'العربية' : '中文'}</span>
                    <span className="text-xs opacity-50">{l}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
}
