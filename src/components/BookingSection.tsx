"use client";

import { useMemo, useState } from "react";
import CalendlyInline from "./CalendlyInline";

type BookingOption = {
  id: string;
  label: string;
  subtitle: string;
  url: string;
  note?: string;
  summary: string;
  includes: string[];
  extraNote?: string;
};

export default function BookingSection() {
  const options: BookingOption[] = useMemo(
    () => [
      {
        id: "meet",
        label: "Meet & Greet",
        subtitle: "Free · 30 min",
        url: "https://calendly.com/kopp-alexander/meet-greet-visit-30-minutes",
        note: "Recommended for all new clients.",
        summary:
          "A short introductory visit to meet you and your pet, confirm routines, discuss access, and go over any special instructions before the first booked service.",
        includes: [
          "Meet in person and discuss your pet’s routine",
          "Confirm feeding, access, and household instructions",
          "Review any special care needs or preferences",
        ],
        extraNote:
          "Best starting point for new clients before booking regular visits.",
      },
      {
        id: "standard",
        label: "Standard Visit",
        subtitle: "20–30 min · $45",
        url: "https://calendly.com/kopp-alexander/standard-visit-30min",
        note: "Feeding, litter cleaning, water refresh, interaction, photo update.",
        summary:
          "A reliable everyday visit for pets who need essential care, a quick wellbeing check, and a calm check-in while you’re away.",
        includes: [
          "Feeding and fresh water refresh",
          "Litter cleaning or basic tidy-up",
          "Short interaction and wellbeing check",
          "Photo update after the visit",
        ],
        extraNote:
          "Ideal for routine weekday care and simple check-ins.",
      },
      {
        id: "extended",
        label: "Extended Visit",
        subtitle: "45 min · $65",
        url: "https://calendly.com/kopp-alexander/extended-visit-45-minutes",
        note: "Extra enrichment, brushing, companionship.",
        summary:
          "A longer visit for pets who benefit from more attention, extra companionship, or a slower-paced routine with additional enrichment.",
        includes: [
          "Everything in a standard visit",
          "More one-on-one time and companionship",
          "Extra enrichment or play",
          "Brushing or additional routine support where suitable",
        ],
        extraNote:
          "Great for pets who need more time, stimulation, or comfort.",
      },
      {
        id: "transport",
        label: "Vet / Groomer Transport",
        subtitle: "$80",
        url: "https://calendly.com/kopp-alexander/vet-groomer-visit",
        note: "Pickup and drop-off within suburb.",
        summary:
          "A practical transport service for vet or groomer appointments when you need help with local pickup and drop-off.",
        includes: [
          "Pickup from your home",
          "Transport to vet or groomer within suburb",
          "Return drop-off after the appointment where arranged",
        ],
        extraNote:
          "Best suited to local appointments within your suburb.",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState(options[0].id);
  const selected = options.find((o) => o.id === selectedId)!;

  return (
    <section className="pb-12 md:pb-16">
      <div className="rounded-[32px] border border-slate-900/10 bg-white/70 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.07)] backdrop-blur md:p-8">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            Online Booking
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">
            Book Online
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Choose a service type and select a time.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
          {options.map((option) => {
            const active = option.id === selectedId;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedId(option.id)}
                className={[
                  "group flex min-h-[118px] flex-col justify-between rounded-[24px] border px-4 py-4 text-left transition-all duration-200",
                  active
                    ? "scale-[1.01] border-slate-900 bg-slate-900 text-white shadow-[0_12px_30px_rgba(15,23,42,0.20)]"
                    : "border-slate-900/10 bg-white/80 text-slate-900 shadow-[0_6px_18px_rgba(15,23,42,0.04)] hover:border-slate-900/15 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.07)]",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="pr-2 text-base font-semibold leading-tight">
                    {option.label}
                  </div>

                  <div
                    className={[
                      "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold",
                      active
                        ? "bg-white/15 text-white"
                        : "bg-slate-900/5 text-slate-700",
                    ].join(" ")}
                  >
                    {option.subtitle}
                  </div>
                </div>

                {option.note ? (
                  <div
                    className={[
                      "mt-3 text-sm leading-snug",
                      active ? "text-white/80" : "text-slate-500",
                    ].join(" ")}
                  >
                    {option.note}
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-[24px] border border-slate-900/10 bg-white/75 px-4 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:px-5 md:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected Service
              </div>

              <div className="mt-2 text-2xl font-semibold text-slate-900">
                {selected.label}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {selected.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {selected.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {selected.extraNote ? (
                <p className="mt-4 text-sm text-slate-500">{selected.extraNote}</p>
              ) : null}
            </div>

            <div className="flex items-start lg:justify-end">
              <div className="inline-flex rounded-full bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white">
                {selected.subtitle}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-slate-900/10 bg-white/55 p-2 shadow-[0_12px_30px_rgba(15,23,42,0.06)] md:p-3">
          <CalendlyInline key={selected.id} url={selected.url} height={760} />
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs text-slate-500">
            No same-day bookings. Please book by 8pm the evening prior where possible.
          </p>
          <p className="text-xs text-slate-500">
            Weekend surcharge +10% · Public holiday surcharge +20%
          </p>
          <p className="max-w-2xl text-xs text-slate-500">
            Medication support can be included during visits if discussed in advance and safe to carry out.
          </p>
        </div>
      </div>
    </section>
  );
}