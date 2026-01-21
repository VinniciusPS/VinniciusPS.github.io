export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-cyan-400 font-semibold">VS Data Consulting</h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Transformando dados em inteligência de negócio para pequenos e médios empreendedores.
            </p>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg mb-3 sm:mb-4 text-slate-200 font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm sm:text-base text-slate-400">
              <li>
                <a href="#sobre" className="hover:text-cyan-400 transition-colors inline-block">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#qualificacoes" className="hover:text-cyan-400 transition-colors inline-block">
                  Qualificações
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors inline-block">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-cyan-400 transition-colors inline-block">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg mb-3 sm:mb-4 text-slate-200 font-semibold">Especialidades</h4>
            <ul className="space-y-2 text-sm sm:text-base text-slate-400">
              <li>Aplicativos de Dados</li>
              <li>Análise de Dados</li>
              <li>Integrações de Dados</li>
              <li>Consultoria Estratégica</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center text-sm sm:text-base text-slate-400">
          <p>&copy; {new Date().getFullYear()} VS Data Consulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}