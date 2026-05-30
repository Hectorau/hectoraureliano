import { useState, useEffect } from 'react';

declare global {
  interface Window {
    Overedge?: {
      isReady: () => boolean;
      onReady: (cb: () => void) => void;
      getContent: (type: string, params?: Record<string, any>) => Promise<any[]>;
    };
  }
}

export function useOveredge(contentType: string, params?: Record<string, any>) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const paramsKey = JSON.stringify(params ?? {});

  useEffect(() => {
    let cancelled = false;
    let interval: ReturnType<typeof setInterval> | null = null;

    function fetchData() {
      if (!window.Overedge) return;
      setLoading(true);
      window.Overedge
        .getContent(contentType, params)
        .then((result) => {
          if (cancelled) return;
          setData(Array.isArray(result) ? result : []);
          setLoading(false);
        })
        .catch((err: Error) => {
          if (cancelled) return;
          setError(err.message);
          setLoading(false);
        });
    }

    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    if (window.Overedge?.isReady()) {
      fetchData();
    } else {
      interval = setInterval(() => {
        if (window.Overedge?.isReady()) {
          if (interval) clearInterval(interval);
          fetchData();
        }
      }, 100);
    }

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentType, paramsKey]);

  return { data, loading, error };
}
