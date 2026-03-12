import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Soft modern background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_10%,rgba(226,252,255,0.75),transparent_60%),radial-gradient(900px_520px_at_80%_30%,rgba(226,232,240,0.55),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.92)_45%,rgba(255,255,255,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light [background-image:radial-gradient(rgba(15,23,42,0.8)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <main className="mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12 md:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-[32px] border border-slate-900/10 bg-white/75 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.07)] backdrop-blur md:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-2xl font-semibold text-white shadow-sm">
              ✓
            </div>

            <div className="mt-6 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Booking Confirmed
              </p>

              <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Thanks for your booking
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                If this is your first booking, please complete the client intake form before your
                visit so routines, care details, and access information are clear in advance.
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                The form also includes confirmation of our{" "}
                <Link href="/terms" className="font-medium text-slate-900 underline underline-offset-4">
                  Terms &amp; Conditions
                </Link>
                ,{" "}
                <Link
                  href="/service-policy"
                  className="font-medium text-slate-900 underline underline-offset-4"
                >
                  Service Policy
                </Link>
                , and{" "}
                <Link href="/privacy" className="font-medium text-slate-900 underline underline-offset-4">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="https://forms.gle/bVPQHuTBzAE94Y5d7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[260px] items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Complete Client Intake Form
              </a>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-900/10 bg-slate-50/80 p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Returning client?</p>
              <p className="mt-2 leading-relaxed">
                If you have booked with Blue Harbour Pet Care before, you usually do not need to
                complete the full form again. If anything has changed since your last booking,
                please just get in touch with the updated details.
              </p>
            </div>

            <div className="mt-6 rounded-[24px] border border-slate-900/10 bg-white/70 p-5">
              <p className="text-sm font-semibold text-slate-900">Questions or changes?</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Feel free to call or text{" "}
                <a href="tel:0485671662" className="font-semibold text-slate-900">
                  0485 671 662
                </a>
                .
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-sm font-medium text-slate-600 underline-offset-4 transition hover:text-slate-900 hover:underline"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}