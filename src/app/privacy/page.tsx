// app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-14 text-slate-900 md:px-6">
      <div className="mx-auto max-w-4xl">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-slate-500">
          BLUE HARBOUR PET CARE
        </p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          Blue Harbour Pet Care respects your privacy and handles personal information with care. This policy
          explains what information may be collected and how it may be used.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-700 md:text-base">
          <Section title="1. What We May Collect">
            We may collect personal information such as your name, phone number, email address, suburb,
            booking details, pet care instructions, emergency contact details, veterinary information, and
            access information needed to provide services safely and reliably.
          </Section>

          <Section title="2. How We Collect It">
            Information may be collected when you contact us, submit a booking request, complete a meet &amp; greet,
            communicate by phone, text, or email, or use our website and booking tools.
          </Section>

          <Section title="3. Why We Collect It">
            We collect information to respond to enquiries, manage bookings, provide pet care services,
            communicate with clients, maintain service records, arrange emergency support where required,
            and improve the quality of our services.
          </Section>

          <Section title="4. Booking and Website Tools">
            Our website may use third-party tools such as booking platforms or analytics services. These tools
            may collect limited technical or usage information in line with their own privacy practices.
          </Section>

          <Section title="5. Storage and Security">
            We take reasonable steps to keep your information secure and to protect it from misuse, interference,
            loss, unauthorised access, modification, or disclosure.
          </Section>

          <Section title="6. Disclosure of Information">
            We do not sell your personal information. Information may only be shared where reasonably necessary
            to provide services, comply with legal obligations, or protect the safety of a pet, client, or third
            party. This may include sharing relevant information with a veterinary clinic in an emergency.
          </Section>

          <Section title="7. Access and Correction">
            You may request access to the personal information we hold about you, and you may ask us to correct
            inaccurate or outdated information.
          </Section>

          <Section title="8. Retention">
            We may keep service-related records for as long as reasonably needed for business, safety, insurance,
            legal, or administrative purposes.
          </Section>

          <Section title="9. Contact">
            If you have a privacy question or would like to request access or correction, please contact
            Blue Harbour Pet Care at 0485 671 662.
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