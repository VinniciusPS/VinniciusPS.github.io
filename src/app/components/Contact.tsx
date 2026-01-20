import { Mail, Phone, Linkedin, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em produção, aqui você implementaria o envio do formulário
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-cyan-400">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar seu negócio a crescer com dados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-6 text-slate-100">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Linkedin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-slate-200">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/vinniciuspereira/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400">
                    linkedin.com/in/vinniciuspereira
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MessageSquare className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-slate-200">WhatsApp</h4>
                  <a href="https://wa.me/5521969210958" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400">
                    (21) 96921-0958
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-slate-200">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-slate-200">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-slate-200">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-slate-200">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none text-slate-100"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-slate-900 py-4 rounded-lg hover:bg-cyan-400 transition-colors text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}