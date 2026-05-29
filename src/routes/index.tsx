import { createFileRoute } from "@tanstack/react-router";
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

function HudCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
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

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient grid */}
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" aria-hidden />
      {/* Vignette */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.05 0.01 280 / 0.7) 100%)",
        }}
        aria-hidden
      />
      {/* Scan line */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-px animate-scan"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.82 0.15 200 / 0.55), transparent)",
          boxShadow: "0 0 12px oklch(0.82 0.15 200 / 0.6)",
        }}
        aria-hidden
      />

      {/* NAV */}
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider-3">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-neon shadow-[0_0_12px_var(--cyan-neon)] animate-pulse-glow" />
          <span>HA / Studio</span>
        </div>
        <nav className="hidden items-center gap-10 text-[10px] uppercase tracking-wider-3 text-muted-foreground md:flex">
          <a href="#mecanismo" className="transition hover:text-foreground">Mecanismo</a>
          <a href="#beneficios" className="transition hover:text-foreground">Resultado</a>
          <a href="#oferta" className="transition hover:text-foreground">Oferta</a>
        </nav>
        <a
          href="#oferta"
          className="group relative inline-flex items-center gap-2 border border-border bg-card/40 px-4 py-2 text-[10px] uppercase tracking-wider-3 backdrop-blur transition hover:border-purple-neon hover:text-foreground"
        >
          <span className="h-1.5 w-1.5 bg-gold" />
          Iniciar projeto
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 pt-10 md:px-12 md:pb-48">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-wider-3 text-muted-foreground">
              <span className="text-cyan-neon">[ 001 ]</span>
              <span className="h-px w-12 bg-border" />
              <span>Hector Aureliano — Design de Conversão</span>
            </div>

            <h1 className="font-display text-[clamp(2.4rem,6.4vw,5.4rem)] font-normal leading-[1.02] tracking-tight text-balance">
              Páginas que <span className="text-gold">vendem</span>
              <br />
              enquanto outras
              <br />
              só <span className="italic text-muted-foreground">existem</span>.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Construo landing pages projetadas como ativos comerciais.
              Cada pixel responde por uma decisão de compra. Cada bloco
              empurra o visitante para uma única conclusão inevitável.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#oferta"
                className="group relative inline-flex items-center gap-3 bg-gold px-7 py-4 text-[11px] uppercase tracking-wider-3 text-background transition hover:scale-[1.02]"
                style={{ boxShadow: "0 0 0 1px oklch(0.82 0.13 85 / 0.4), 0 20px 50px -10px oklch(0.62 0.18 80 / 0.5)" }}
              >
                Solicitar diagnóstico
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#mecanismo"
                className="text-[11px] uppercase tracking-wider-3 text-muted-foreground transition hover:text-foreground"
              >
                Ver mecanismo
              </a>
            </div>

            <div className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { k: "+3.4x", v: "Conversão média" },
                { k: "07d", v: "Entrega típica" },
                { k: "100%", v: "Foco em receita" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-xl text-foreground">{s.k}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-wider-3 text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[520px]">
              {/* HUD frame */}
              <HudCorner className="absolute -left-3 -top-3 h-10 w-10 text-gold" />
              <HudCorner className="absolute -right-3 -top-3 h-10 w-10 rotate-90 text-gold" />
              <HudCorner className="absolute -bottom-3 -left-3 h-10 w-10 -rotate-90 text-gold" />
              <HudCorner className="absolute -bottom-3 -right-3 h-10 w-10 rotate-180 text-gold" />

              <div
                className="absolute inset-0 animate-floaty"
                style={{ boxShadow: "var(--shadow-glow-purple), var(--shadow-elev)" }}
              >
                <img
                  src={heroEntity}
                  alt="Entidade humanoide futurista representando precisão e tecnologia"
                  width={1080}
                  height={1440}
                  className="h-full w-full object-cover"
                />
                {/* gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, oklch(0.06 0.01 280 / 0.85) 100%)",
                  }}
                />
                {/* HUD readouts */}
                <div className="absolute left-4 top-4 text-[9px] uppercase tracking-wider-3 text-cyan-neon">
                  <div>UNIT // HA.07</div>
                  <div className="mt-1 text-muted-foreground">CALIBRADO P/ CONVERSÃO</div>
                </div>
                <div className="absolute bottom-4 right-4 text-right text-[9px] uppercase tracking-wider-3 text-gold">
                  <div>LAT 00.00</div>
                  <div className="mt-1 text-muted-foreground">SIGNAL +∞</div>
                </div>
              </div>

              {/* Floating chip */}
              <div className="glass absolute -bottom-8 -left-6 hidden w-56 p-4 md:block">
                <div className="text-[9px] uppercase tracking-wider-3 text-muted-foreground">
                  Output esperado
                </div>
                <div className="mt-2 font-display text-base text-foreground">
                  Receita previsível
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden bg-border">
                  <div className="h-full w-[82%] bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / SIGNAL BAR */}
      <div className="relative z-10 border-y border-border bg-card/30 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6 py-5 text-[10px] uppercase tracking-wider-3 text-muted-foreground md:px-12">
          <span className="text-cyan-neon">// SIGNAL ATIVO</span>
          <span>Copy estratégica</span>
          <span>Arquitetura de conversão</span>
          <span>Performance &lt; 1s</span>
          <span>Tracking ponta a ponta</span>
          <span className="text-gold">v.2026</span>
        </div>
      </div>

      {/* WHY COMMON PAGES FAIL */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="[ 002 ]" label="Diagnóstico" />
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.1] text-balance">
              Por que a maioria
              <br />
              das páginas
              <br />
              <span className="text-purple-neon">não converte</span>.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7">
            {[
              {
                t: "São bonitas. Não são estratégicas.",
                d: "Foram desenhadas para impressionar o cliente, não para mover o visitante. Estética sem arquitetura é decoração cara.",
              },
              {
                t: "Falam sobre a empresa. Não sobre o desejo.",
                d: "O visitante chega quente, sai morno. Cada bloco precisa amplificar um desejo específico, não recitar serviços.",
              },
              {
                t: "Tratam o copy como acessório.",
                d: "Sem hierarquia de promessa, sem mecanismo único, sem oferta clara. O design segura uma página que o texto já perdeu.",
              },
            ].map((item, i) => (
              <div
                key={item.t}
                className="group glass relative flex gap-6 p-6 transition hover:border-purple-neon md:p-8"
              >
                <div className="font-display text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
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
            <img
              src={visual1}
              alt="Composição abstrata representando o mecanismo de conversão"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 30%, oklch(0.08 0.01 280) 100%)",
              }}
            />
            <div className="absolute left-6 top-6 text-[9px] uppercase tracking-wider-3 text-gold">
              MECH // 003
            </div>
          </div>
          <div className="px-6 py-20 md:px-12 lg:col-span-7 lg:py-32">
            <SectionLabel index="[ 003 ]" label="Mecanismo Único" />
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.1] text-balance">
              O Método <span className="text-gold">Aureliano</span>.
              <br />
              Conversão como engenharia.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Não vendo páginas. Construo sistemas visuais de persuasão.
              Cada projeto passa por três camadas que praticamente nenhum
              designer aplica em conjunto.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border md:grid-cols-3">
              {[
                {
                  k: "01 / Decifrar",
                  t: "Desejo central",
                  d: "Mapeamento do nível de consciência e sofisticação do mercado do cliente. A página fala com quem decide, não com quem rola.",
                },
                {
                  k: "02 / Arquitetar",
                  t: "Fluxo de tensão",
                  d: "Cada seção é uma alavanca: promessa, prova, mecanismo, oferta. Nada decorativo. Nada redundante.",
                },
                {
                  k: "03 / Esculpir",
                  t: "Estética como prova",
                  d: "Acabamento premium que comunica autoridade antes da primeira palavra. O design já vende o preço.",
                },
              ].map((c) => (
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
            <SectionLabel index="[ 004 ]" label="Resultado Percebido" />
            <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] text-balance">
              O que você recebe
              <br />
              quando contrata.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Não é um arquivo. É uma máquina de aquisição que continua
            performando depois da entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Visitante que decide na rolagem",
              d: "Headline que captura, subheadline que aprofunda, CTA que parece a única saída lógica.",
            },
            {
              t: "Autoridade antes do orçamento",
              d: "Estética premium que reposiciona seu ticket. Cliente chega convencido de que você cobra caro porque vale.",
            },
            {
              t: "Performance abaixo de 1 segundo",
              d: "Código limpo, peso controlado, métricas de Core Web Vitals que o Google e o usuário aprovam.",
            },
            {
              t: "Copy que vende sem ruído",
              d: "Texto construído sob princípios de Schwartz e Hormozi. Cada linha tem função de conversão.",
            },
            {
              t: "Tracking de receita real",
              d: "Eventos, funis e instrumentação para você saber exatamente o que está vendendo, não só o que está clicando.",
            },
            {
              t: "Projeto entregue em 7 dias",
              d: "Processo enxuto, decisões rápidas, escopo travado. Você lança antes do próximo ciclo de tráfego.",
            },
          ].map((b) => (
            <article
              key={b.t}
              className="group glass relative overflow-hidden p-7 transition hover:-translate-y-1 hover:border-cyan-neon"
            >
              <div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition group-hover:opacity-100"
                style={{ background: "var(--purple-neon)" }}
              />
              <div className="relative">
                <div className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-wider-3 text-gold">
                  <span className="h-1 w-1 bg-gold" />
                  Output
                </div>
                <h3 className="font-display text-base leading-snug text-foreground">{b.t}</h3>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
              <HudCorner className="absolute bottom-3 right-3 h-4 w-4 rotate-180 text-border transition group-hover:text-cyan-neon" />
            </article>
          ))}
        </div>
      </section>

      {/* EDITORIAL VISUAL BREAK */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="relative overflow-hidden border border-border">
          <img
            src={visual2}
            alt="Interface HUD futurista representando o sistema de design"
            width={1280}
            height={1600}
            loading="lazy"
            className="h-[60vh] w-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-end p-8 md:p-16"
            style={{
              background:
                "linear-gradient(180deg, transparent 30%, oklch(0.05 0.01 280 / 0.95) 100%)",
            }}
          >
            <div className="max-w-2xl">
              <div className="text-[9px] uppercase tracking-wider-3 text-cyan-neon">// CASE PROFILE</div>
              <p className="mt-4 font-display text-[clamp(1.4rem,2.6vw,2.2rem)] leading-tight text-balance">
                "A nova página pagou o investimento na primeira semana.
                <span className="text-gold"> Triplicou as reuniões qualificadas.</span>"
              </p>
              <div className="mt-6 text-[10px] uppercase tracking-wider-3 text-muted-foreground">
                Cliente confidencial / SaaS B2B
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <div className="relative overflow-hidden border border-border bg-card/30 p-8 backdrop-blur md:p-16">
          <div
            className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--purple-neon)" }}
          />
          <div
            className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--cyan-neon)" }}
          />

          <HudCorner className="absolute left-3 top-3 h-6 w-6 text-gold" />
          <HudCorner className="absolute right-3 top-3 h-6 w-6 rotate-90 text-gold" />
          <HudCorner className="absolute bottom-3 left-3 h-6 w-6 -rotate-90 text-gold" />
          <HudCorner className="absolute bottom-3 right-3 h-6 w-6 rotate-180 text-gold" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel index="[ 005 ]" label="Oferta" />
              <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] text-balance">
                Uma landing page que
                <br />
                <span className="text-gold">paga a si mesma</span>.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Diagnóstico estratégico, copy de conversão, design premium,
                desenvolvimento performático e tracking completo. Um único
                ativo, entregue pronto para escalar tráfego pago.
              </p>

              <ul className="mt-10 space-y-3">
                {[
                  "Diagnóstico de mercado e nível de consciência",
                  "Copy persuasiva sob princípios de Schwartz e Hormozi",
                  "Design autoral premium, sem templates",
                  "Desenvolvimento performático abaixo de 1s",
                  "Tracking, eventos e integração com seu CRM",
                  "Garantia de revisão até a aprovação total",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-4 text-sm text-foreground/90">
                    <span className="mt-2 inline-block h-1.5 w-1.5 bg-gold shadow-[0_0_8px_var(--gold)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="glass relative h-full p-8">
                <div className="text-[9px] uppercase tracking-wider-3 text-muted-foreground">
                  Vagas do mês
                </div>
                <div className="mt-3 flex items-baseline gap-3">
                  <div className="font-display text-5xl text-foreground">03</div>
                  <div className="text-[10px] uppercase tracking-wider-3 text-purple-neon">
                    de 04 abertas
                  </div>
                </div>

                <div className="my-8 h-px hairline" />

                <div className="text-[9px] uppercase tracking-wider-3 text-muted-foreground">
                  Investimento
                </div>
                <div className="mt-2 font-display text-2xl">
                  Sob diagnóstico
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Definido após análise. Você só recebe a proposta quando
                  faz sentido para o seu retorno.
                </p>

                <a
                  href="mailto:hector@aureliano.studio?subject=Solicitar%20diagn%C3%B3stico"
                  className="group mt-8 inline-flex w-full items-center justify-between bg-gold px-6 py-4 text-[11px] uppercase tracking-wider-3 text-background transition hover:scale-[1.01]"
                  style={{ boxShadow: "0 20px 50px -10px oklch(0.62 0.18 80 / 0.55)" }}
                >
                  Solicitar diagnóstico
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>

                <div className="mt-4 text-center text-[9px] uppercase tracking-wider-3 text-muted-foreground">
                  resposta em até 24h
                </div>
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
            <span>Último sinal</span>
            <span className="h-px w-10 bg-border" />
          </div>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2rem,5vw,4.4rem)] leading-[1.02] text-balance">
            Sua próxima página pode
            <br />
            ser apenas <span className="italic text-muted-foreground">mais uma</span>.
            <br />
            Ou pode ser <span className="text-gold">a que muda o jogo</span>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Aceito poucos projetos por mês para garantir o padrão.
            Quando o calendário fecha, abre novamente em 30 dias.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href="mailto:hector@aureliano.studio?subject=Solicitar%20diagn%C3%B3stico"
              className="group relative inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-wider-3 text-background transition hover:scale-[1.02]"
              style={{ boxShadow: "0 20px 60px -10px oklch(0.62 0.18 80 / 0.55)" }}
            >
              Reservar minha vaga
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <span className="text-[10px] uppercase tracking-wider-3 text-muted-foreground">
              03 vagas restantes este mês
            </span>
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
          <div className="flex items-center gap-8">
            <span>São Paulo / Remoto</span>
            <a href="mailto:hector@aureliano.studio" className="transition hover:text-foreground">
              hector@aureliano.studio
            </a>
          </div>
          <div className="text-gold">© 2026 — Todos os pixels reservados</div>
        </div>
      </footer>
    </main>
  );
}
