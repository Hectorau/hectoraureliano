import { createFileRoute, Link } from "@tanstack/react-router";
import { useOveredge } from "@/hooks/useOveredge";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
  };
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function Skeleton() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-0">
      <div className="h-3 w-32 animate-pulse bg-border" />
      <div className="mt-6 h-10 w-3/4 animate-pulse bg-border" />
      <div className="mt-3 h-10 w-1/2 animate-pulse bg-border" />
      <div className="mt-10 h-64 w-full animate-pulse bg-border" />
      <div className="mt-10 space-y-3">
        <div className="h-3 w-full animate-pulse bg-border" />
        <div className="h-3 w-5/6 animate-pulse bg-border" />
        <div className="h-3 w-4/6 animate-pulse bg-border" />
      </div>
    </div>
  );
}

function BlogPost() {
  const { slug } = Route.useParams();
  const { data, loading } = useOveredge("posts", { slug, _embed: true });
  const posts = data as WPPost[];
  const post = posts.find((p) => p.slug === slug) ?? posts[0];

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-20" aria-hidden />
      <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-[11px] uppercase tracking-wider-3"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-neon shadow-[0_0_12px_var(--cyan-neon)]" />
          <span>HA / Studio</span>
        </Link>
        <Link
          to="/blog"
          className="text-[10px] uppercase tracking-wider-3 text-muted-foreground transition hover:text-foreground"
        >
          ← Voltar ao blog
        </Link>
      </header>

      {loading ? (
        <Skeleton />
      ) : !post ? (
        <div className="mx-auto max-w-3xl px-6 py-32 text-center md:px-0">
          <div className="text-[10px] uppercase tracking-wider-3 text-gold">404</div>
          <h1 className="mt-4 font-display text-3xl">Publicação não encontrada</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Esse conteúdo não existe ou foi movido.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-block text-[11px] uppercase tracking-wider-3 text-cyan-neon"
          >
            Ver todas as publicações →
          </Link>
        </div>
      ) : (
        <article className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:px-0 md:py-24">
          <div className="text-[10px] uppercase tracking-wider-3 text-gold">
            {formatDate(post.date)}
          </div>
          <h1
            className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-balance"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post._embedded["wp:featuredmedia"][0].alt_text ?? ""}
              className="mt-10 w-full border border-border"
              loading="lazy"
            />
          ) : null}
          <div
            className="prose prose-invert mt-12 max-w-none prose-headings:font-display prose-a:text-cyan-neon prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      )}
    </main>
  );
}
