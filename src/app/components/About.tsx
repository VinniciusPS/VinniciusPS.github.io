import image_e5f7ebbed953fb76250f27597b0dd2ac78327481 from 'figma:asset/e5f7ebbed953fb76250f27597b0dd2ac78327481.png';
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-cyan-400">
              Sobre Mim
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed text-justify">
              <p>
                Profissional de dados com 6 anos de experiência em gerar inteligência de negócios de alto impacto. Atuei em grandes projetos para clientes como o Sistema S, Secretarias de Saúde (SES) e Controladorias Gerais (CGE), trabalhando com times de excelência e lidando com dados críticos de diversos setores, como vendas, marketing, educação, RH, jurídico e saúde.
              </p>
              <p>
                Além disso, atuei por cerca de dois anos como gerente de produto, liderando o lançamento de serviços voltados ao mercado brasileiro. Essa experiência me permitiu compreender de perto os desafios reais dos empreendedores — desde limitações de orçamento até a necessidade de gerar resultados concretos em pouco tempo. Hoje, levo esse olhar para cada projeto, buscando entender profundamente o contexto do cliente antes de propor qualquer solução tecnológica, garantindo que a tecnologia esteja a serviço do negócio, e não o contrário.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-64 sm:w-80 lg:w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <ImageWithFallback
                src={image_e5f7ebbed953fb76250f27597b0dd2ac78327481}
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}