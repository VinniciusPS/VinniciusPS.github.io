import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Smartphone, TrendingUp, Database, Activity } from "lucide-react";

export function Services() {
  const services = [
    {
      id: 1,
      icon: Smartphone,
      title: "Aplicativos de Dados",
      description:
        "Aplicativos analíticos customizados para otimizar suas decisões estratégicas.",
      image:
        "https://images.pexels.com/photos/17781649/pexels-photo-17781649.jpeg",
      features: [
        "Simulador de demanda em tempo real",
        "Alerta de variação de preços",
        "Sistemas de cadastro e consulta",
        "Integração com seus sistemas atuais",
      ],
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Análises de Dados",
      description:
        "Dashboards estratégicos que revelam insights valiosos do seu negócio.",
      image:
        "https://img.freepik.com/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg?t=st=1768616761~exp=1768620361~hmac=18a79e08cac38c3f36d301f6da0d4a9e9ddb223e7a083679f05b9f9fe2110fda&w=1060",
      features: [
        "Análise de top clientes e produtos",
        "Identificação de padrões de vendas",
        "Métricas de desempenho em tempo real",
        
      ],
    },
    {
      id: 3,
      icon: Database,
      title: "Integrações de Dados",
      description:
        "Pipeline de dados robusto que integram múltiplos registros em uma única fonte de verdade.",
      image: "https://images.pexels.com/photos/17781649/pexels-photo-17781649.jpeg",
      features: [
        "Automação de coleta e limpeza de dados",
        "Combinação de múltiplas fontes de dados, como Whatsapp, GoogleSheets, Hubspot e outros.",
      ],
    },
    {
      id: 4,
      icon: Activity,
      title: "Consultoria Estratégica de Dados",
      description:
        "Diagnóstico completo sobre os desafios e soluções, trazendo clareza e segurança na tomada de decisão com dados.",
      image:
        "https://img.freepik.com/free-photo/cropped-colleagues-generating-business-ideas_1098-19137.jpg?t=st=1768621171~exp=1768624771~hmac=81003407afe9a3a897e0744084159e89005153bb7694c42b05d0a68b21a5dd1b&w=1060",
      features: [
        "Análise de qualidade dos dados",
        "Otimização de performance e custos",
        "Governança de dados"
      ],
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-cyan-400">
            Serviços
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Soluções completas de dados para impulsionar o
            crescimento do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-500/10 hover:shadow-2xl transition-shadow border border-slate-700"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {service.id === 3 && (
                  <div className="absolute top-0 left-0 right-0 h-12 bg-[#f5f5f5]" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <service.icon
                      className="text-cyan-400"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl text-slate-100">{service.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-cyan-400 mt-1">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
