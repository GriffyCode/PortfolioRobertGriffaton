import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary/30 selection:text-primary">
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-gradient">R.GRIFFATON</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-primary transition-colors">Accueil</a>
          <a href="#bio" className="hover:text-primary transition-colors">Bio</a>
          <a href="#skills" className="hover:text-primary transition-colors">Compétences</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projets</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
          CV PDF
        </button>
      </nav>
      <main className="pt-16">
        {children}
      </main>
      <footer className="py-12 px-6 text-center border-t border-white/5 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Robert Griffaton - BUT3 Informatique & Apprenti ESIEE Paris</p>
      </footer>
    </div>
  );
};

export default MainLayout;
