// app/service-policy/page.tsx
export default function ServicePolicyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14 text-slate-900 md:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-slate-500">
          BLUE HARBOUR PET CARE
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Service Policy
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          A simple guide to how bookings, visits, updates, property access, pet care responsibilities,
          and cancellations work at Blue Harbour Pet Care.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card
            title="Booking window"
            body="Please book by 8pm the evening before. Same-day bookings are not available."
          />
          <Card
            title="Visit timing"
            body="Visit times are confirmed after booking and may vary slightly depending on route, existing bookings, and availability."
          />
          <Card
            title="Meet & greet"
            body="All new clients are welcome to book a free meet & greet so everyone feels comfortable before care begins."
          />
          <Card
            title="Photo updates"
            body="You’ll receive a photo update after each visit, along with a short note on how things went."
          />
          <Card
            title="Recurring clients"
            body="Regular weekly clients receive priority access to preferred time slots where possible."
          />
          <Card
            title="Cancellations"
            body="Where possible, please cancel or reschedule by 6pm the day before. Late cancellations may still be charged."
          />
          <Card
            title="Medication visits"
            body="Medication support is only offered where it has been discussed in advance, clear owner instructions have been provided, and the task is safe and appropriate to carry out."
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
            body="Clients must provide accurate keys, codes, alarm details, and access instructions. Missed visits caused by lockouts, incorrect access details, or faulty entry systems may still be charged."
          />
          <Card
            title="Pet health & behaviour"
            body="Clients must disclose any medical conditions, behavioural concerns, special care requirements, or known risks before the first visit. This includes anxiety, escape tendencies, aggression, or recent illness."
          />
          <Card
            title="Veterinary emergencies"
            body="If a pet becomes ill or injured during a visit, Blue Harbour Pet Care may seek veterinary attention where reasonably necessary. All veterinary costs remain the responsibility of the pet owner. Reasonable efforts will be made to contact the owner first."
          />
          <Card
            title="Pet safety & escape"
            body="Blue Harbour Pet Care takes reasonable care when entering, leaving, and caring for pets in the home. Clients remain responsible for ensuring doors, windows, gates, balconies, and enclosures are secure and suitable for their pet."
          />
          <Card
            title="Animals can be unpredictable"
            body="While every visit is carried out with care and attention, animals may behave unpredictably. Blue Harbour Pet Care is not liable for illness, injury, escape, loss, or death of a pet except to the extent caused by a failure to exercise reasonable care."
          />
          <Card
            title="Home environment"
            body="Blue Harbour Pet Care is not responsible for issues arising from hazards within the home or property, including unsafe balconies, unsecured windows, toxic plants, accessible food, or other environmental risks outside our control."
          />
          <Card
            title="Pet-caused damage"
            body="Blue Harbour Pet Care is not responsible for damage caused by a client’s pet to household items, furniture, flooring, or other property during the booking period."
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-900/10 bg-slate-50 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-8">
          <h2 className="text-lg font-semibold text-slate-900">By booking a service</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            By proceeding with a booking, clients confirm that the information they provide about their
            pet, home, and care needs is accurate and complete, and agree to this Service Policy together
            with the Blue Harbour Pet Care Terms & Conditions and Privacy Policy.
          </p>
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