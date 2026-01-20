import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-slate-100">
            Transforme Seus Dados em Inteligência de Negócio
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Soluções sob medida para empreendedores que desejam extrair vantagem competitiva de seus dados
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-cyan-500 text-slate-900 px-8 py-4 rounded-lg hover:bg-cyan-400 transition-colors text-lg"
          >
            Solicite uma Consultoria
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}