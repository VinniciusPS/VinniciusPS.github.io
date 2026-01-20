export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 text-cyan-400">VS Data Consulting</h3>
            <p className="text-slate-400">
              Transformando dados em inteligência de negócio para pequenos e médios empreendedores.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-slate-200">Navegação</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#sobre" className="hover:text-cyan-400 transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-cyan-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-slate-200">Especialidades</h4>
            <ul className="space-y-2 text-slate-400">
              <li>App de Dados</li>
              <li>Analytics</li>
              <li>ETL de Dados</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} VS Data Consulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}