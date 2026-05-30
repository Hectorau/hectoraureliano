import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { useOveredge } from "@/hooks/useOveredge";

export const Route = createFileRoute("/$slug")({
  component: WordPressPage,
});

type WPPage = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
};

function Skeleton() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-0">
      <div className="h-10 w-3/4 animate-pulse bg-border" />
      <div className="mt-3 h-10 w-1/2 animate-pulse bg-border" />
      <div className="mt-10 space-y-3">
        <div className="h-3 w-full animate-pulse bg-border" />
        <div className="h-3 w-5/6 animate-pulse bg-border" />
        <div className="h-3 w-4/6 animate-pulse bg-border" />
        <div className="h-3 w-3/6 animate-pulse bg-border" />
      </div>
    </div>
  );
}

function WordPressPage() {
  const { slug } = Route.useParams();
  const { data, loading } = useOveredge("pages");
  const pages = data as WPPage[];
  const page = pages.find((p) => p.slug === slug);

  if (loading) {
    return (
      <main className="relative min-h-screen bg-background text-foreground">
        <header className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <Link
            to="/"
            className="flex items-center gap-3 text-[11px] uppercase tracking-wider-3"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-neon shadow-[0_0_12px_var(--cyan-neon)]" />
            <span>HA / Studio</span>
          </Link>
        </header>
        <Skeleton />
      </main>
    );
  }

  if (!page) {
    return <Navigate to="/" replace />;
  }

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
          to="/"
          className="text-[10px] uppercase tracking-wider-3 text-muted-foreground transition hover:text-foreground"
        >
          ← Voltar
        </Link>
      </header>

      <article className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:px-0 md:py-24">
        <h1
          className="font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-balance"
          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
        />
        <div
          className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-a:text-cyan-neon prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </article>
    </main>
  );
}
