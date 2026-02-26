"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

interface EmotionRegistryProps {
  children: React.ReactNode;
}

export default function EmotionRegistry({ children }: EmotionRegistryProps) {
  const [registry] = useState(() => {
    const cache = createCache({ key: "emotion" });
    cache.compat = true;

    const prevInsert = cache.insert;
    let inserted: string[] = [];

    cache.insert = (...args) => {
      const serialized = args[1];

      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }

      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = registry.flush();

    if (names.length === 0) {
      return null;
    }

    let styles = "";

    for (const name of names) {
      const style = registry.cache.inserted[name];

      if (typeof style === "string") {
        styles += style;
      }
    }

    return (
      <style
        data-emotion={`${registry.cache.key} ${names.join(" ")}`}
        // Emotion이 서버에서 수집한 스타일을 직접 주입해 SSR/CSR 불일치를 방지합니다.
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}
