import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Sparkles, Flower2, Gem, Zap, Instagram, MessageCircle, MapPin, Phone, Clock, BadgeCheck, Star } from "lucide-react";
import portraitAsset from "@/assets/joelma-portrait.asset.json";
import logoAsset from "@/assets/joelma-logo.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Joelma Amaral · Dermatologia Clínica e Estética" },
      { name: "description", content: "Dermatologista em Nova Serrana – MG. Embelezamento respeitoso, rejuvenescimento facial e saúde íntima feminina." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5537991731000";
const INSTAGRAM = "https://instagram.com/drajoelmaamaral";

type Card = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  cta: string;
  href: string;
};

const CARDS: Card[] = [
  { icon: Calendar, title: "Agendar Minha Consulta", desc: "Avaliação personalizada com a Dra. Joelma. Tecnologia de ponta com cuidado humanizado.", cta: "Agendar pelo WhatsApp", href: WHATSAPP },
  { icon: Sparkles, title: "Rejuvenescimento Facial", desc: "Botox, preenchimento, Ultraformer MPT e fios de PDO. Resultados naturais e elegantes.", cta: "Ver Tratamentos", href: WHATSAPP },
  { icon: Flower2, title: "Saúde Íntima Feminina", desc: "Cuidado integrativo, sigiloso e acolhedor para o seu bem-estar em todas as fases da vida.", cta: "Conversar com Sigilo", href: WHATSAPP },
  { icon: Gem, title: "Day Care Laviaan Day", desc: "Um dia inteiro dedicado a você. Protocolo completo facial, corporal e íntimo. Vagas limitadas.", cta: "Reservar Minha Experiência", href: WHATSAPP },
  { icon: Zap, title: "Laser & Dermatologia Clínica", desc: "Tratamento de manchas, melasma, acne e renovação celular com lasers de última geração.", cta: "Saiba Mais", href: WHATSAPP },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-first container */}
      <div className="mx-auto w-full max-w-[480px] px-5 pb-32">
        {/* HERO */}
        <header className="relative pt-8 pb-10 text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-x-0 top-0 -z-10 h-full" style={{ background: "var(--gradient-hero)" }} />
          <img src={logoAsset.url} alt="Dra. Joelma Amaral – Dermatologia" className="mx-auto h-16 w-auto object-contain" />

          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full opacity-60 blur-xl" style={{ background: "var(--gradient-gold)" }} />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4" style={{ borderColor: "var(--color-gold-soft)", boxShadow: "var(--shadow-gold)" }}>
                <img src={portraitAsset.url} alt="Dra. Joelma Amaral" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[color:var(--color-earth)]/70">
            Muito prazer, sou
          </p>
          <h1 className="font-serif mt-2 text-4xl leading-tight text-[color:var(--color-earth)]">
            Dra. Joelma Amaral
          </h1>
          <span className="gold-divider mt-3 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
            Dermatologia
          </span>

          <p className="mt-5 text-sm leading-relaxed text-[color:var(--color-earth)]/85">
            Sou <strong className="font-semibold">dermatologista clínica e estética</strong> especialista em embelezamento respeitoso, rejuvenescimento facial e saúde íntima feminina — cuidando de você por dentro e por fora.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-gold)]/30 bg-white/60 px-4 py-1.5 text-xs text-[color:var(--color-earth)] backdrop-blur">
            <BadgeCheck className="h-3.5 w-3.5 text-[color:var(--color-gold)]" />
            CRM 57409 MG · Nova Serrana – MG
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-gold)]/40 bg-white/70 text-[color:var(--color-earth)] transition hover:bg-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-gold)]/40 bg-white/70 text-[color:var(--color-earth)] transition hover:bg-white">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </header>

        {/* CARDS */}
        <section className="mt-10 space-y-4">
          {CARDS.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="card-luxe group block rounded-2xl p-5 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${i * 80}ms`, animationDuration: "600ms", animationFillMode: "both" }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h2 className="font-serif text-xl text-[color:var(--color-earth)]">{c.title}</h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--color-earth)]/75">{c.desc}</p>
                  <span className="btn-gold mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider">
                    {c.cta}
                  </span>
                </div>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <c.icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* STATS */}
        <section className="mt-12 rounded-2xl border border-[color:var(--color-gold)]/30 bg-white/60 p-6 backdrop-blur">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { v: "13,5k+", l: "Comunidade" },
              { v: "5,0", l: "Google", icon: true },
              { v: "+8", l: "Anos de Prática" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-2xl text-[color:var(--color-gold)] flex items-center justify-center gap-1">
                  {s.v}
                  {s.icon && <Star className="h-4 w-4 fill-current" />}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-[color:var(--color-earth)]/70">{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[color:var(--color-matte)] text-white/80">
        <div className="mx-auto w-full max-w-[480px] px-6 py-10 text-center">
          <div className="font-serif text-2xl text-[color:var(--color-gold-soft)]">Dra. Joelma Amaral</div>
          <div className="gold-divider mt-2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">Dermatologia</div>

          <div className="mt-6 space-y-3 text-xs leading-relaxed">
            <p className="flex items-start justify-center gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--color-gold)]" /> Edifício Royal Office, R. Prudente de Morais — Jardim do Lago, Nova Serrana – MG</p>
            <p className="flex items-center justify-center gap-2"><Phone className="h-3.5 w-3.5 text-[color:var(--color-gold)]" /> (37) 99173-1000</p>
            <p className="flex items-center justify-center gap-2"><Instagram className="h-3.5 w-3.5 text-[color:var(--color-gold)]" /> @drajoelmaamaral</p>
            <p className="flex items-center justify-center gap-2"><Clock className="h-3.5 w-3.5 text-[color:var(--color-gold)]" /> Seg–Sex · 09h–19h | Sáb · sob agenda</p>
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-widest text-white/40">© {new Date().getFullYear()} Dra. Joelma Amaral · Todos os direitos reservados</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105"
        style={{ boxShadow: "0 8px 24px -6px rgba(37,211,102,0.55)" }}
      >
        <MessageCircle className="h-5 w-5" />
        Falar Agora
      </a>
    </div>
  );
}
