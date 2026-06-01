import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroEntity from "@/assets/hero-entity.jpg";
import visual1 from "@/assets/section-visual-1.jpg";
import visual2 from "@/assets/section-visual-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hector Aureliano — Landing Pages que Convertem" },
      {
        name: "description",
        content:
          "Landing pages construídas como ativos comerciais. Performance, persuasão e conversão para marcas que não aceitam média.",
      },
      { property: "og:title", content: "Hector Aureliano — Landing Pages que Convertem" },
      {
        property: "og:description",
        content:
          "Landing pages construídas como ativos comerciais. Performance, persuasão e conversão.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511998226500?text=" +
  encodeURIComponent("Olá Hector, vim pela landing page e quero falar com você.");
const EMAIL_HREF =
  "mailto:hectoooooor47@gmail.com?subject=" +
  encodeURIComponent("Solicitar diagnóstico — Landing Page");

type Lang = "pt" | "en";

const COPY = {
  pt: {
    nav: { mechanism: "Mecanismo", result: "Resultado", offer: "Oferta", start: "Iniciar projeto", contact: "Contato" },
    hero: {
      tag: "Hector Aureliano — Design de Conversão",
      h1a: "Páginas que ",
      h1b: "vendem",
      h1c: "enquanto outras",
      h1d: "só ",
      h1e: "existem",
      sub: "Construo landing pages projetadas como ativos comerciais. Cada pixel responde por uma decisão de compra. Cada bloco empurra o visitante para uma única conclusão inevitável.",
      cta: "Solicitar diagnóstico",
      see: "Ver mecanismo",
      stats: [
        { k: "+3.4x", v: "Conversão média" },
        { k: "07d", v: "Entrega típica" },
        { k: "100%", v: "Foco em receita" },
      ],
      output: "Output esperado",
      revenue: "Receita previsível",
      calibrated: "CALIBRADO P/ CONVERSÃO",
    },
    marquee: ["// SINAL ATIVO", "Copy estratégica", "Arquitetura de conversão", "Performance < 1s", "Tracking ponta a ponta"],
    fail: {
      label: "Diagnóstico",
      h2a: "Por que a maioria",
      h2b: "das páginas",
      h2c: "não converte",
      items: [
        { t: "São bonitas. Não são estratégicas.", d: "Foram desenhadas para impressionar o cliente, não para mover o visitante. Estética sem arquitetura é decoração cara." },
        { t: "Falam sobre a empresa. Não sobre o desejo.", d: "O visitante chega quente, sai morno. Cada bloco precisa amplificar um desejo específico, não recitar serviços." },
        { t: "Tratam o copy como acessório.", d: "Sem hierarquia de promessa, sem mecanismo único, sem oferta clara. O design segura uma página que o texto já perdeu." },
      ],
    },
    mech: {
      label: "Mecanismo Único",
      h2a: "O Método ",
      h2b: "Aureliano",
      h2c: "Conversão como engenharia.",
      p: "Não vendo páginas. Construo sistemas visuais de persuasão. Cada projeto passa por três camadas que praticamente nenhum designer aplica em conjunto.",
      cards: [
        { k: "01 / Decifrar", t: "Desejo central", d: "Mapeamento do nível de consciência e sofisticação do mercado do cliente. A página fala com quem decide, não com quem rola." },
        { k: "02 / Arquitetar", t: "Fluxo de tensão", d: "Cada seção é uma alavanca: promessa, prova, mecanismo, oferta. Nada decorativo. Nada redundante." },
        { k: "03 / Esculpir", t: "Estética como prova", d: "Acabamento premium que comunica autoridade antes da primeira palavra. O design já vende o preço." },
      ],
    },
    benefits: {
      label: "Resultado Percebido",
      h2a: "O que você recebe",
      h2b: "quando contrata.",
      p: "Não é um arquivo. É uma máquina de aquisição que continua performando depois da entrega.",
      items: [
        { t: "Visitante que decide na rolagem", d: "Headline que captura, subheadline que aprofunda, CTA que parece a única saída lógica." },
        { t: "Autoridade antes do orçamento", d: "Estética premium que reposiciona seu ticket. Cliente chega convencido de que você cobra caro porque vale." },
        { t: "Performance abaixo de 1 segundo", d: "Código limpo, peso controlado, métricas de Core Web Vitals que o Google e o usuário aprovam." },
        { t: "Copy que vende sem ruído", d: "Texto construído sob princípios de Schwartz e Hormozi. Cada linha tem função de conversão." },
        { t: "Tracking de receita real", d: "Eventos, funis e instrumentação para você saber exatamente o que está vendendo, não só o que está clicando." },
        { t: "Projeto entregue em 7 dias", d: "Processo enxuto, decisões rápidas, escopo travado. Você lança antes do próximo ciclo de tráfego." },
      ],
      output: "Output",
    },
    quote: {
      label: "// CASE PROFILE",
      text: "\"A nova página pagou o investimento na primeira semana.",
      highlight: " Triplicou as reuniões qualificadas.\"",
      client: "Cliente confidencial / SaaS B2B",
    },
    offer: {
      label: "Oferta",
      h2a: "Uma landing page que",
      h2b: "paga a si mesma",
      p: "Diagnóstico estratégico, copy de conversão, design premium, desenvolvimento performático e tracking completo. Um único ativo, entregue pronto para escalar tráfego pago.",
      bullets: [
        "Diagnóstico de mercado e nível de consciência",
        "Copy persuasiva sob princípios de Schwartz e Hormozi",
        "Design autoral premium, sem templates",
        "Desenvolvimento performático abaixo de 1s",
        "Tracking, eventos e integração com seu CRM",
        "Garantia de revisão até a aprovação total",
      ],
      slots: "Vagas do mês",
      slotsOf: "de 04 abertas",
      investment: "Investimento",
      under: "Sob diagnóstico",
      pdetail: "Definido após análise. Você só recebe a proposta quando faz sentido para o seu retorno.",
      cta: "Solicitar diagnóstico",
      reply: "resposta em até 24h",
    },
    final: {
      label: "Último sinal",
      h2a: "Sua próxima página pode",
      h2b: "ser apenas ",
      h2c: "mais uma",
      h2d: "Ou pode ser ",
      h2e: "a que muda o jogo",
      p: "Aceito poucos projetos por mês para garantir o padrão. Quando o calendário fecha, abre novamente em 30 dias.",
      cta: "Reservar minha vaga",
      slots: "03 vagas restantes este mês",
    },
    footer: { loc: "São Paulo / Remoto", rights: "© 2026 — Todos os pixels reservados" },
    wa: "WhatsApp",
  },
  en: {
    nav: { mechanism: "Mechanism", result: "Result", offer: "Offer", start: "Start project", contact: "Contact" },
    hero: {
      tag: "Hector Aureliano — Conversion Design",
      h1a: "Pages that ",
      h1b: "sell",
      h1c: "while others",
      h1d: "merely ",
      h1e: "exist",
      sub: "I build landing pages engineered as commercial assets. Every pixel answers for a buying decision. Every block pushes the visitor toward a single inevitable conclusion.",
      cta: "Request diagnosis",
      see: "See the mechanism",
      stats: [
        { k: "+3.4x", v: "Avg. conversion" },
        { k: "07d", v: "Typical delivery" },
        { k: "100%", v: "Revenue focused" },
      ],
      output: "Expected output",
      revenue: "Predictable revenue",
      calibrated: "CALIBRATED FOR CONVERSION",
    },
    marquee: ["// SIGNAL ACTIVE", "Strategic copy", "Conversion architecture", "Performance < 1s", "End-to-end tracking"],
    fail: {
      label: "Diagnosis",
      h2a: "Why most",
      h2b: "pages",
      h2c: "don't convert",
      items: [
        { t: "Pretty. Not strategic.", d: "Designed to impress the client, not to move the visitor. Aesthetics without architecture is expensive decoration." },
        { t: "About the company. Not the desire.", d: "Visitors arrive hot and leave lukewarm. Every block must amplify a specific desire, not list services." },
        { t: "Copy treated as an accessory.", d: "No promise hierarchy, no unique mechanism, no clear offer. The design carries a page the copy has already lost." },
      ],
    },
    mech: {
      label: "Unique Mechanism",
      h2a: "The ",
      h2b: "Aureliano Method",
      h2c: "Conversion as engineering.",
      p: "I don't sell pages. I build visual systems of persuasion. Each project goes through three layers almost no designer combines.",
      cards: [
        { k: "01 / Decode", t: "Core desire", d: "Mapping awareness level and market sophistication. The page speaks to the buyer, not the scroller." },
        { k: "02 / Architect", t: "Tension flow", d: "Each section is a lever: promise, proof, mechanism, offer. Nothing decorative. Nothing redundant." },
        { k: "03 / Sculpt", t: "Aesthetics as proof", d: "Premium finish that communicates authority before the first word. The design already sells the price." },
      ],
    },
    benefits: {
      label: "Perceived Result",
      h2a: "What you get",
      h2b: "when you hire.",
      p: "It's not a file. It's an acquisition machine that keeps performing after delivery.",
      items: [
        { t: "Visitors who decide while scrolling", d: "Headline that captures, subheadline that deepens, CTA that feels like the only logical exit." },
        { t: "Authority before the quote", d: "Premium aesthetic that repositions your ticket. The client arrives convinced you charge a lot because you're worth it." },
        { t: "Sub-1-second performance", d: "Clean code, controlled weight, Core Web Vitals metrics Google and users approve." },
        { t: "Copy that sells without noise", d: "Text built on Schwartz and Hormozi principles. Every line has a conversion function." },
        { t: "Real revenue tracking", d: "Events, funnels and instrumentation so you know exactly what is selling — not just clicking." },
        { t: "Delivered in 7 days", d: "Lean process, fast decisions, locked scope. Launch before your next traffic cycle." },
      ],
      output: "Output",
    },
    quote: {
      label: "// CASE PROFILE",
      text: "\"The new page paid for itself in the first week.",
      highlight: " Tripled qualified meetings.\"",
      client: "Confidential client / B2B SaaS",
    },
    offer: {
      label: "Offer",
      h2a: "A landing page that",
      h2b: "pays for itself",
      p: "Strategic diagnosis, conversion copy, premium design, performant development and full tracking. A single asset, delivered ready to scale paid traffic.",
      bullets: [
        "Market diagnosis and awareness mapping",
        "Persuasive copy under Schwartz and Hormozi principles",
        "Premium custom design, no templates",
        "Sub-1s performant development",
        "Tracking, events and CRM integration",
        "Revisions until full approval",
      ],
      slots: "Slots this month",
      slotsOf: "of 04 open",
      investment: "Investment",
      under: "Upon diagnosis",
      pdetail: "Defined after analysis. You only receive the proposal when it makes sense for your return.",
      cta: "Request diagnosis",
      reply: "reply within 24h",
    },
    final: {
      label: "Final signal",
      h2a: "Your next page can",
      h2b: "be just ",
      h2c: "another one",
      h2d: "Or it can be ",
      h2e: "the one that changes the game",
      p: "I take few projects per month to keep the standard. When the calendar closes, it reopens in 30 days.",
      cta: "Book my slot",
      slots: "03 slots left this month",
    },
    footer: { loc: "São Paulo / Remote", rights: "© 2026 — All pixels reserved" },
    wa: "WhatsApp",
  },
} as const;

function HudCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <path d="M0 14 V2 H14" />
      <path d="M26 0 H38 V14" />
      <path d="M40 26 V38 H26" />
      <path d="M14 40 H2 V26" />
    </svg>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider-3 text-muted-foreground">
      <span className="text-gold">{index}</span>
      <span className="h-px w-10 bg-border" />
      <span>{label}</span>
    </div>
  );
}

function FlagBR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden>
      <rect width="28" height="20" fill="#009c3b" />
      <polygon points="14,3 25,10 14,17 3,10" fill="#ffdf00" />
      <circle cx="14" cy="10" r="3.6" fill="#002776" />
      <path d="M10.6 10.4 a4 4 0 0 1 6.8 0" stroke="#fff" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden>
      <rect width="28" height="20" fill="#b22234" />
      {[1, 3, 5, 7, 9, 11, 13].map((i) => (
        <rect key={i} y={i * (20 / 13)} width="28" height={20 / 13} fill="#fff" />
      ))}
      <rect width="12" height={20 / 13 * 7} fill="#3c3b6e" />
    </svg>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 border border-border bg-card/40 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-label="Português"
        className={`flex items-center gap-1.5 px-2 py-1 text-[9px] uppercase tracking-wider-3 transition ${
          lang === "pt" ? "bg-foreground/10 text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <FlagBR className="h-3 w-4" />
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="English"
        className={`flex items-center gap-1.5 px-2 py-1 text-[9px] uppercase tracking-wider-3 transition ${
          lang === "en" ? "bg-foreground/10 text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <FlagUS className="h-3 w-4" />
        EN
      </button>
    </div>
  );
}

function WhatsAppFab({ label }: { label: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 border border-border bg-card/80 px-4 py-3 text-[10px] uppercase tracking-wider-3 text-foreground backdrop-blur-md transition hover:scale-[1.03] hover:border-cyan-neon"
      style={{ boxShadow: "0 20px 50px -10px oklch(0.82 0.15 200 / 0.35)" }}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-neon" fill="currentColor" aria-hidden>
        <path d="M19.11 4.91A10 10 0 0 0 4.06 17.7L3 21l3.4-1.04A10 10 0 1 0 19.11 4.91Zm-7.1 15.21a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.02.62.62-1.97-.2-.31a8.3 8.3 0 1 1 6.13 3Zm4.55-6.22c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.83 2.83 0 0 0-.88 2.1c0 1.24.9 2.43 1.02 2.6.13.17 1.77 2.7 4.28 3.79.6.26 1.06.42 1.43.54.6.19 1.15.17 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
      </svg>
      WhatsApp
    </a>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = COPY[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.05 0.01 280 / 0.7) 100%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-px animate-scan"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(0.82 0.15 200 / 0.55), transparent)",
          boxShadow: "0 0 12px oklch(0.82 0.15 200 / 0.6)",
        }}
        aria-hidden
      />

      {/* NAV */}
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider-3">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-neon shadow-[0_0_12px_var(--cyan-neon)] animate-pulse-glow" />
          <span>HA / Studio</span>
        </div>
        <nav className="hidden items-center gap-10 text-[10px] uppercase tracking-wider-3 text-muted-foreground md:flex">
          <a href="#mecanismo" className="transition hover:text-foreground">{t.nav.mechanism}</a>
          <a href="#beneficios" className="transition hover:text-foreground">{t.nav.result}</a>
          <a href="#oferta" className="transition hover:text-foreground">{t.nav.offer}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a
            href={EMAIL_HREF}
            className="group relative hidden items-center gap-2 border border-border bg-card/40 px-4 py-2 text-[10px] uppercase tracking-wider-3 backdrop-blur transition hover:border-purple-neon hover:text-foreground sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 bg-gold" />
            {t.nav.start}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 pt-10 md:px-12 md:pb-48">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-wider-3 text-muted-foreground">
              <span className="text-cyan-neon">[ 001 ]</span>
              <span className="h-px w-12 bg-border" />
              <span>{t.hero.tag}</span>
            </div>

            <h1 className="font-display text-[clamp(2.4rem,6.4vw,5.4rem)] font-normal leading-[1.02] tracking-tight text-balance">
              {t.hero.h1a}<span className="text-gold">{t.hero.h1b}</span>
              <br />
              {t.hero.h1c}
              <br />
              {t.hero.h1d}<span className="italic text-muted-foreground">{t.hero.h1e}</span>.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{t.hero.sub}</p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={EMAIL_HREF}
                className="group relative inline-flex items-center gap-3 bg-gold px-7 py-4 text-[11px] uppercase tracking-wider-3 text-background transition hover:scale-[1.02]"
                style={{ boxShadow: "0 0 0 1px oklch(0.82 0.13 85 / 0.4), 0 20px 50px -10px oklch(0.62 0.18 80 / 0.5)" }}
              >
                {t.hero.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#mecanismo" className="text-[11px] uppercase tracking-wider-3 text-muted-foreground transition hover:text-foreground">
                {t.hero.see}
              </a>
            </div>

            <div className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {t.hero.stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-xl text-foreground">{s.k}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-wider-3 text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[520px]">
              <HudCorner className="absolute -left-3 -top-3 h-10 w-10 text-gold" />
              <HudCorner className="absolute -right-3 -top-3 h-10 w-10 rotate-90 text-gold" />
              <HudCorner className="absolute -bottom-3 -left-3 h-10 w-10 -rotate-90 text-gold" />
              <HudCorner className="absolute -bottom-3 -right-3 h-10 w-10 rotate-180 text-gold" />

              <div className="absolute inset-0 animate-floaty" style={{ boxShadow: "var(--shadow-glow-purple), var(--shadow-elev)" }}>
                <img src={heroEntity} alt="Hector Aureliano" width={1080} height={1440} className="h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.06 0.01 280 / 0.85) 100%)" }} />
                <div className="absolute left-4 top-4 text-[9px] uppercase tracking-wider-3 text-cyan-neon">
                  <div>UNIT // HA.07</div>
                  <div className="mt-1 text-muted-foreground">{t.hero.calibrated}</div>
                </div>
                <div className="absolute bottom-4 right-4 text-right text-[9px] uppercase tracking-wider-3 text-gold">
                  <div>LAT 00.00</div>
                  <div className="mt-1 text-muted-foreground">SIGNAL +∞</div>
                </div>
              </div>

              <div className="glass absolute -bottom-8 -left-6 hidden w-56 p-4 md:block">
                <div className="text-[9px] uppercase tracking-wider-3 text-muted-foreground">{t.hero.output}</div>
                <div className="mt-2 font-display text-base text-foreground">{t.hero.revenue}</div>
                <div className="mt-3 h-1 w-full overflow-hidden bg-border">
                  <div className="h-full w-[82%] bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative z-10 border-y border-border bg-card/30 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6 py-5 text-[10px] uppercase tracking-wider-3 text-muted-foreground md:px-12">
          {t.marquee.map((m, i) => (
            <span key={i} className={i === 0 ? "text-cyan-neon" : ""}>{m}</span>
          ))}
          <span className="text-gold">v.2026</span>
        </div>
      </div>

      {/* WHY FAIL */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="[ 002 ]" label={t.fail.label} />
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.1] text-balance">
              {t.fail.h2a}
              <br />
              {t.fail.h2b}
              <br />
              <span className="text-purple-neon">{t.fail.h2c}</span>.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7">
            {t.fail.items.map((item, i) => (
              <div key={item.t} className="group glass relative flex gap-6 p-6 transition hover:border-purple-neon md:p-8">
                <div className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="font-display text-base md:text-lg">{item.t}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </div>
                <HudCorner className="absolute right-3 top-3 h-4 w-4 rotate-90 text-border transition group-hover:text-purple-neon" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MECHANISM */}
      <section id="mecanismo" className="relative z-10 border-t border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 px-0 lg:grid-cols-12">
          <div className="relative overflow-hidden lg:col-span-5">
            <img src={visual1} alt="" width={1024} height={1024} loading="lazy" className="h-full min-h-[420px] w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 30%, oklch(0.08 0.01 280) 100%)" }} />
            <div className="absolute left-6 top-6 text-[9px] uppercase tracking-wider-3 text-gold">MECH // 003</div>
          </div>
          <div className="px-6 py-20 md:px-12 lg:col-span-7 lg:py-32">
            <SectionLabel index="[ 003 ]" label={t.mech.label} />
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.1] text-balance">
              {t.mech.h2a}<span className="text-gold">{t.mech.h2b}</span>.
              <br />
              {t.mech.h2c}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.mech.p}</p>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border md:grid-cols-3">
              {t.mech.cards.map((c) => (
                <div key={c.t} className="bg-card/40 p-7 backdrop-blur">
                  <div className="text-[9px] uppercase tracking-wider-3 text-cyan-neon">{c.k}</div>
                  <div className="mt-4 font-display text-base text-foreground">{c.t}</div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="[ 004 ]" label={t.benefits.label} />
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] text-balance">
              {t.benefits.h2a}
              <br />
              {t.benefits.h2b}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{t.benefits.p}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.benefits.items.map((b) => (
            <article key={b.t} className="group glass relative overflow-hidden p-7 transition hover:-translate-y-1 hover:border-cyan-neon">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition group-hover:opacity-100" style={{ background: "var(--purple-neon)" }} />
              <div className="relative">
                <div className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-wider-3 text-gold">
                  <span className="h-1 w-1 bg-gold" />
                  {t.benefits.output}
                </div>
                <h3 className="font-display text-base leading-snug text-foreground">{b.t}</h3>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
              <HudCorner className="absolute bottom-3 right-3 h-4 w-4 rotate-180 text-border transition group-hover:text-cyan-neon" />
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="relative overflow-hidden border border-border">
          <img src={visual2} alt="" width={1280} height={1600} loading="lazy" className="h-[60vh] w-full object-cover" />
          <div className="absolute inset-0 flex items-end p-8 md:p-16" style={{ background: "linear-gradient(180deg, transparent 30%, oklch(0.05 0.01 280 / 0.95) 100%)" }}>
            <div className="max-w-2xl">
              <div className="text-[9px] uppercase tracking-wider-3 text-cyan-neon">{t.quote.label}</div>
              <p className="mt-4 font-display text-[clamp(1.4rem,2.6vw,2.2rem)] leading-tight text-balance">
                {t.quote.text}<span className="text-gold">{t.quote.highlight}</span>
              </p>
              <div className="mt-6 text-[10px] uppercase tracking-wider-3 text-muted-foreground">{t.quote.client}</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <div className="relative overflow-hidden border border-border bg-card/30 p-8 backdrop-blur md:p-16">
          <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-40 blur-3xl" style={{ background: "var(--purple-neon)" }} />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--cyan-neon)" }} />

          <HudCorner className="absolute left-3 top-3 h-6 w-6 text-gold" />
          <HudCorner className="absolute right-3 top-3 h-6 w-6 rotate-90 text-gold" />
          <HudCorner className="absolute bottom-3 left-3 h-6 w-6 -rotate-90 text-gold" />
          <HudCorner className="absolute bottom-3 right-3 h-6 w-6 rotate-180 text-gold" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel index="[ 005 ]" label={t.offer.label} />
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] text-balance">
                {t.offer.h2a}
                <br />
                <span className="text-gold">{t.offer.h2b}</span>.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.offer.p}</p>

              <ul className="mt-10 space-y-3">
                {t.offer.bullets.map((f) => (
                  <li key={f} className="flex items-start gap-4 text-sm text-foreground/90">
                    <span className="mt-2 inline-block h-1.5 w-1.5 bg-gold shadow-[0_0_8px_var(--gold)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="glass relative h-full p-8">
                <div className="text-[9px] uppercase tracking-wider-3 text-muted-foreground">{t.offer.slots}</div>
                <div className="mt-3 flex items-baseline gap-3">
                  <div className="font-display text-5xl text-foreground">03</div>
                  <div className="text-[10px] uppercase tracking-wider-3 text-purple-neon">{t.offer.slotsOf}</div>
                </div>

                <div className="my-8 h-px hairline" />

                <div className="text-[9px] uppercase tracking-wider-3 text-muted-foreground">{t.offer.investment}</div>
                <div className="mt-2 font-display text-2xl">{t.offer.under}</div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t.offer.pdetail}</p>

                <a
                  href={EMAIL_HREF}
                  className="group mt-8 inline-flex w-full items-center justify-between bg-gold px-6 py-4 text-[11px] uppercase tracking-wider-3 text-background transition hover:scale-[1.01]"
                  style={{ boxShadow: "0 20px 50px -10px oklch(0.62 0.18 80 / 0.55)" }}
                >
                  {t.offer.cta}
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>

                <div className="mt-4 text-center text-[9px] uppercase tracking-wider-3 text-muted-foreground">{t.offer.reply}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 md:px-12 md:pb-48">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-3 text-[10px] uppercase tracking-wider-3 text-muted-foreground">
            <span className="h-px w-10 bg-border" />
            <span className="text-cyan-neon">[ 006 ]</span>
            <span>{t.final.label}</span>
            <span className="h-px w-10 bg-border" />
          </div>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] text-balance">
            {t.final.h2a}
            <br />
            {t.final.h2b}<span className="italic text-muted-foreground">{t.final.h2c}</span>.
            <br />
            {t.final.h2d}<span className="text-gold">{t.final.h2e}</span>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.final.p}</p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href={EMAIL_HREF}
              className="group relative inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-wider-3 text-background transition hover:scale-[1.02]"
              style={{ boxShadow: "0 20px 60px -10px oklch(0.62 0.18 80 / 0.55)" }}
            >
              {t.final.cta}
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 border border-border bg-card/40 px-8 py-4 text-[11px] uppercase tracking-wider-3 text-foreground backdrop-blur transition hover:border-cyan-neon"
            >
              {t.nav.contact} · WhatsApp
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <span className="text-[10px] uppercase tracking-wider-3 text-muted-foreground">{t.final.slots}</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 text-[10px] uppercase tracking-wider-3 text-muted-foreground md:flex-row md:items-center md:px-12">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-neon shadow-[0_0_12px_var(--cyan-neon)]" />
            <span>Hector Aureliano / Studio</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>{t.footer.loc}</span>
            <a href="mailto:hectoooooor47@gmail.com" className="transition hover:text-foreground">hectoooooor47@gmail.com</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground">+55 11 99822-6500</a>
          </div>
          <div className="text-gold">{t.footer.rights}</div>
        </div>
      </footer>

      <WhatsAppFab label={t.wa} />
    </main>
  );
}
