import { Award, ExternalLink } from "lucide-react";

export function Qualifications() {
  const qualifications = [
    {
      title: "Certiprof Scrum Foundation",
      url: "https://www.credly.com/badges/7d17f7f7-dc8a-4f81-91d4-21e78748d692/linked_in_profile",
      issuer: "CertiProf",
    },
    {
      title: "Google Advanced Data Analytics",
      url: "https://www.credly.com/badges/74f02b41-d694-4d03-94d0-2a8c44a31ef6/public_url",
      issuer: "Google",
    },
  ];

  return (
    <section id="qualificacoes" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-cyan-400">
            Qualificações
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Certificações que validam minha expertise em dados e metodologias ágeis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {qualifications.map((qualification, index) => (
            <a
              key={index}
              href={qualification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group"
            >
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Award className="text-cyan-400" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                  {qualification.title}
                </h3>
                <p className="text-sm text-slate-400">{qualification.issuer}</p>
              </div>
              <ExternalLink className="text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
