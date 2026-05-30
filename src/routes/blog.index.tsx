import { createFileRoute, Link } from "@tanstack/react-router";
import { useOveredge } from "@/hooks/useOveredge";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Hector Aureliano" },
      {
        name: "description",
        content:
          "Ensaios, estudos de caso e notas técnicas sobre design de conversão.",
      },
      { property: "og:title", content: "Blog — Hector Aureliano" },
      {
        property: "og:description",
        content: "Ensaios sobre design de conversão e landing pages.",
      },
    ],
  }),
  component: BlogIndex,
});

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").trim();
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function Skeleton() {
  return (
    <div className="glass relative p-7">
      <div className="h-3 w-24 animate-pulse bg-border" />
      <div className="mt-6 h-5 w-3/4 animate-pulse bg-border" />
      <div className="mt-3 h-5 w-1/2 animate-pulse bg-border" />
      <div className="mt-6 h-3 w-full animate-pulse bg-border" />
      <div className="mt-2 h-3 w-5/6 animate-pulse bg-border" />
    </div>
  );
}

function BlogIndex() {
  const { data, loading } = useOveredge("posts", { per_page: 12 });
  const posts = data as WPPost[];

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-30" aria-hidden />
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-[11px] uppercase tracking-wider-3"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-neon shadow-[0_0_12px_var(--cyan-neon)]" />
          <span>HA / Studio</span>
        </Link>
        <Link
          to="/"
          className="text-[10px] uppercase tracking-wider-3 text-muted-foreground transition hover:text-foreground"
        >
          ← Voltar
        </Link>
      </header>

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-12 md:px-12">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider-3 text-muted-foreground">
          <span className="text-gold">[ BLOG ]</span>
          <span className="h-px w-10 bg-border" />
          <span>Publicações</span>
        </div>
        <h1 className="mt-6 font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] text-balance">
          Notas de <span className="text-gold">campo</span>.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Estudos, métodos e bastidores de projetos de conversão.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-32 md:px-12">
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="glass p-10 text-center text-sm text-muted-foreground">
            Nenhuma publicação por aqui ainda. Volte em breve.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.id}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group glass relative flex flex-col p-7 transition hover:-translate-y-1 hover:border-cyan-neon"
              >
                <div className="text-[9px] uppercase tracking-wider-3 text-gold">
                  {formatDate(p.date)}
                </div>
                <h2
                  className="mt-4 font-display text-base leading-snug text-foreground"
                  dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                />
                <p className="mt-4 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {stripHtml(p.excerpt.rendered)}
                </p>
                <span className="mt-6 text-[10px] uppercase tracking-wider-3 text-cyan-neon">
                  Ler →
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
