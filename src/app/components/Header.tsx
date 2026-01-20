import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl text-cyan-400">
            VS Data Consulting   
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-left"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-left"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}