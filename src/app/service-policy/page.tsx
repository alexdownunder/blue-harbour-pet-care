// app/service-policy/page.tsx
export default function ServicePolicyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14 text-slate-900 md:px-6">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-slate-500">
          BLUE HARBOUR PET CARE
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Service Policy
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          A simple guide to how bookings, visits, updates, and cancellations work at Blue Harbour Pet Care.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card
            title="Booking window"
            body="Please book by 8pm the evening before. Same-day bookings are not available."
          />
          <Card
            title="Visit timing"
            body="Visit times are confirmed after booking and may vary slightly depending on route and availability."
          />
          <Card
            title="Meet & greet"
            body="All new clients are welcome to book a free meet & greet so everyone feels comfortable before care begins."
          />
          <Card
            title="Photo updates"
            body="You’ll receive a photo update after each visit, along with a quick note on how things went."
          />
          <Card
            title="Recurring clients"
            body="Regular weekly clients receive priority access to preferred time slots."
          />
          <Card
            title="Cancellations"
            body="Where possible, please cancel or reschedule by 6pm the day before. Late cancellations may still be charged."
          />
          <Card
            title="Medication visits"
            body="Medication support is only offered where it has been agreed in advance and is safe to provide."
          />
          <Card
            title="Invoices"
            body="Invoices are generally issued weekly after visits have taken place."
          />
          <Card
            title="Weekends & public holidays"
            body="Weekend visits attract a +15% surcharge. Public holiday visits attract a +20% surcharge."
          />
          <Card
            title="Property access"
            body="Please ensure keys, codes, alarms, and access instructions are accurate so visits can run smoothly."
          />
        </div>
      </div>
    </main>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}