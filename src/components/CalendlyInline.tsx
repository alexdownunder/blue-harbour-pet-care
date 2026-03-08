"use client";

import { useEffect, useMemo, useRef } from "react";

type Props = {
  url: string;
  height?: number;
};

declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function CalendlyInline({ url, height = 720 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const finalUrl = useMemo(() => {
    // Add a cache-buster so Calendly reliably re-inits when switching event type
    const u = new URL(url);
    u.searchParams.set("hide_event_type_details", "1");
    u.searchParams.set("hide_landing_page_details", "1");
    u.searchParams.set("primary_color", "0f172a"); // slate-900
    u.searchParams.set("_", String(Date.now()));
    return u.toString();
  }, [url]);

  useEffect(() => {
    // If Calendly script already loaded, init directly; otherwise it will auto-init via script.
    // We still re-render the container key from parent so Calendly rebuilds cleanly.
    if (!containerRef.current) return;

    // Defensive: clear any previous content (helps when switching)
    containerRef.current.innerHTML = "";

    const div = document.createElement("div");
    div.className = "calendly-inline-widget";
    div.setAttribute("data-url", finalUrl);
    div.style.minWidth = "320px";
    div.style.height = `${height}px`;

    containerRef.current.appendChild(div);

    // If the script is loaded and Calendly is available, trigger init
    if (typeof window !== "undefined" && window.Calendly && window.Calendly.initInlineWidget) {
      // Calendly scans the inserted widget
      window.Calendly.initInlineWidget({
        url: finalUrl,
        parentElement: div,
      });
    }
  }, [finalUrl, height]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
    />
  );
}