import { Link } from "@tanstack/react-router";
import { useOveredge } from "@/hooks/useOveredge";

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
  };
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

function PostSkeleton() {
  return (
    <div className="glass relative h-full overflow-hidden p-7">
      <div className="h-3 w-20 animate-pulse bg-border" />
      <div className="mt-6 h-5 w-3/4 animate-pulse bg-border" />
      <div className="mt-3 h-5 w-1/2 animate-pulse bg-border" />
      <div className="mt-6 h-3 w-full animate-pulse bg-border" />
      <div className="mt-2 h-3 w-5/6 animate-pulse bg-border" />
    </div>
  );
}

export function LatestPostsSection() {
  const { data, loading } = useOveredge("posts", { per_page: 3, _embed: true });
  const posts = data as WPPost[];

  return (
    <section
      id="blog"
      className="relative z-10 mx-auto max-w-[1400px] border-t border-border px-6 py-28 md:px-12 md:py-32"
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider-3 text-muted-foreground">
            <span className="text-gold">[ 007 ]</span>
            <span className="h-px w-10 bg-border" />
            <span>Sinais recentes</span>
          </div>
          <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.05] text-balance">
            Últimas <span className="text-gold">publicações</span>.
          </h2>
        </div>
        <Link
          to="/blog"
          className="text-[11px] uppercase tracking-wider-3 text-muted-foreground transition hover:text-foreground"
        >
          Ver todas as publicações →
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="glass p-10 text-center text-sm text-muted-foreground">
          Nenhuma publicação por aqui ainda. Volte em breve.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group glass relative flex flex-col overflow-hidden p-7 transition hover:-translate-y-1 hover:border-cyan-neon"
            >
              <div className="text-[9px] uppercase tracking-wider-3 text-gold">
                {formatDate(p.date)}
              </div>
              <h3
                className="mt-4 font-display text-base leading-snug text-foreground"
                dangerouslySetInnerHTML={{ __html: p.title.rendered }}
              />
              <p className="mt-4 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                {stripHtml(p.excerpt.rendered)}
              </p>
              <span className="mt-6 text-[10px] uppercase tracking-wider-3 text-cyan-neon transition group-hover:translate-x-1">
                Ler →
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
