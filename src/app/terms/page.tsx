// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14 text-slate-900 md:px-6">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-slate-500">
          BLUE HARBOUR PET CARE
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Terms &amp; Conditions
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          These Terms &amp; Conditions set out how Blue Harbour Pet Care provides in-home pet care services.
          By booking a service, you agree to the terms below.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 md:text-base">
          <Section title="1. Services">
            Blue Harbour Pet Care provides in-home pet visits, medication visits, and local vet or groomer
            transport as agreed at the time of booking. Services are provided with reasonable care and in line
            with the instructions given by the owner.
          </Section>

          <Section title="2. Bookings">
            Bookings must generally be made by 8pm the evening before the requested visit. Same-day bookings
            are not guaranteed. Visit times are scheduled within available service windows and may vary depending
            on route, traffic, and existing bookings.
          </Section>

          <Section title="3. Meet & Greet">
            A meet &amp; greet may be required before services begin, especially for new clients, medication visits,
            or pets with specific routines or health needs. Blue Harbour Pet Care reserves the right to decline
            services if a safe or suitable care arrangement cannot be established.
          </Section>

          <Section title="4. Owner Responsibilities">
            The owner agrees to provide accurate and complete information about their pet, including feeding
            routines, medical conditions, medications, behaviour, temperament, and any known risks. The owner
            must also provide safe property access and clear instructions for entry, alarms, locks, and pet
            containment where relevant.
          </Section>

          <Section title="5. Pet Behaviour and Safety">
            The owner confirms that pets booked for care are safe to handle unless specific behavioural concerns
            have been disclosed in advance. Blue Harbour Pet Care may refuse or discontinue a visit if a pet
            presents an unexpected safety risk, aggressive behaviour, or a situation that is unsafe for the pet,
            the property, or the caregiver.
          </Section>

          <Section title="6. Medication">
            Medication will only be administered where this has been clearly agreed in advance and suitable written
            instructions have been provided. Medication visits, including insulin support, may require owner
            handover at the meet &amp; greet. Blue Harbour Pet Care may decline medication services where a task is
            considered unsafe or beyond reasonable handling limits.
          </Section>

          <Section title="7. Veterinary Emergencies">
            If Blue Harbour Pet Care believes a pet requires urgent veterinary attention, reasonable efforts will
            be made to contact the owner or emergency contact first. If the owner cannot be reached and urgent
            treatment appears necessary, Blue Harbour Pet Care may arrange veterinary care. All veterinary,
            transport, and related costs remain the responsibility of the owner.
          </Section>

          <Section title="8. Access to Property">
            The owner is responsible for ensuring safe and workable access to the property for all booked visits.
            Keys, access instructions, alarm details, and gate codes must be accurate and current. If access is
            not possible at the agreed time due to missing, incorrect, or changed information, the booked visit
            may still be charged.
          </Section>

          <Section title="9. Cancellations and Rescheduling">
            Clients are asked to cancel or reschedule by 6pm the day before the booking where possible. Blue
            Harbour Pet Care reserves the right to charge the full visit fee for late cancellations, missed
            visits, or access issues outside its control.
          </Section>

          <Section title="10. Fees and Payment">
            Service fees are charged according to the pricing published at the time of booking, unless otherwise
            agreed in writing. Weekend and public holiday surcharges apply where stated. Invoices are generally
            issued weekly after visits have taken place and are payable within the timeframe shown on the invoice.
          </Section>

          <Section title="11. Liability">
            Blue Harbour Pet Care will provide services with reasonable care and attention. However, Blue Harbour
            Pet Care is not liable for loss, injury, illness, death, escape, or damage arising from undisclosed
            behavioural issues, pre-existing health conditions, third-party actions, acts of other animals, or
            events outside reasonable control. Nothing in these terms excludes rights that cannot be excluded
            under Australian Consumer Law.
          </Section>

          <Section title="12. Property and Household Conditions">
            Blue Harbour Pet Care is not responsible for household issues outside the scope of the booked service,
            including existing property damage, pet-related mess, infestations, or mechanical failures such as
            faulty locks, alarms, plumbing, or appliances.
          </Section>

          <Section title="13. Key and Access Information">
            Keys and access details will be handled with reasonable care and stored securely. Blue Harbour Pet Care
            will not label keys with identifying client information.
          </Section>

          <Section title="14. Changes to These Terms">
            These Terms &amp; Conditions may be updated from time to time. The latest version published on the website
            will apply to new bookings from the date of publication.
          </Section>

          <Section title="15. Contact">
            For questions about these terms, please contact Blue Harbour Pet Care at 0485 671 662.
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 md:text-xl">{title}</h2>
      <p className="mt-2 text-slate-700">{children}</p>
    </section>
  );
}