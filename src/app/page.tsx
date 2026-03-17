import Image from "next/image";
import Link from "next/link";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F2EF] text-slate-900">
      {/* Warm pastel background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_18%_10%,rgba(255,255,255,0.72),transparent_60%),radial-gradient(860px_520px_at_82%_20%,rgba(221,238,245,0.34),transparent_60%),linear-gradient(180deg,#F8F2EF_0%,#F6EFEB_46%,#F8F2EF_100%)]" />
        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light [background-image:radial-gradient(rgba(15,23,42,0.8)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#F8F2EF]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <a href="#top" className="flex min-w-0 items-center">
            <span className="whitespace-nowrap text-[13px] font-semibold tracking-tight text-[#16213A] sm:text-sm">
              BLUE HARBOUR <span className="font-medium text-slate-600">Pet Care</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a className="text-sm font-medium text-slate-600 hover:text-[#16213A]" href="#about">
              About
            </a>
            <a className="text-sm font-medium text-slate-600 hover:text-[#16213A]" href="#services">
              Services
            </a>
            <a className="text-sm font-medium text-slate-600 hover:text-[#16213A]" href="#home-team">
              Home Team
            </a>
            <a className="text-sm font-medium text-slate-600 hover:text-[#16213A]" href="#pricing">
              Pricing
            </a>
            <a className="text-sm font-medium text-slate-600 hover:text-[#16213A]" href="#faq">
              FAQ
            </a>
            <a
              className="rounded-full bg-[#16213A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d2b4a]"
              href="#booking"
            >
              Book Online
            </a>
          </nav>

          <a
            className="shrink-0 rounded-full bg-[#16213A] px-4 py-2 text-sm font-semibold text-white shadow-sm md:hidden"
            href="#booking"
          >
            Book Online
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Hero */}
        <section className="relative pt-14 pb-12 text-center md:pt-20 md:pb-16">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#5F6673]">
            SYDNEY EASTERN SUBURBS
          </p>

          <div className="pointer-events-none mx-auto mt-8 flex justify-center">
            <div className="relative h-20 w-[520px] md:h-24 md:w-[620px]">
              <Image
                src="/brand/bridge-arc-v2.png"
                alt="Sydney Harbour Bridge"
                fill
                className="object-contain opacity-95"
                priority
              />
            </div>
          </div>

          <h1 className="mt-6 font-serif text-[clamp(2.2rem,8vw,4.6rem)] font-semibold leading-[0.95] tracking-tight text-[#16213A]">
            <span className="whitespace-nowrap">
              BLUE HARBOUR <span className="font-semibold">Pet Care</span>
            </span>
          </h1>

          <h2 className="mt-4 text-sm font-semibold tracking-[0.18em] text-[#4F5C70] md:text-base">
            Calm, reliable in-home visits
          </h2>

          <p className="mt-7 whitespace-nowrap text-[12px] font-semibold text-[#16213A] sm:text-sm md:text-base">
            Maroubra · Pagewood · Matraville · Hillsdale · Malabar · Coogee
          </p>

          <p className="mt-2 text-sm italic text-[#667085] md:text-base">
            Calm · Reliable · Local
          </p>

          <div className="mx-auto mt-9 grid max-w-5xl gap-8 md:grid-cols-[1.02fr_0.98fr] md:items-center md:text-left">
            <div className="order-2 md:order-1">
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#5F6673] md:mx-0 md:text-[1.05rem]">
                Friendly in-home visits that keep your pets comfortable in their own space while you&apos;re away. No
                fuss, no big upheaval — just thoughtful care, regular updates, and peace of mind.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full bg-[#16213A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d2b4a]"
                >
                  Book Online
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full border border-[#16213A]/10 bg-white/70 px-7 py-3 text-sm font-semibold text-[#16213A] shadow-sm transition hover:bg-white"
                >
                  Free Meet &amp; Greet
                </a>
              </div>

              <p className="mt-5 text-xs text-[#667085]">
                Every new client gets a free meet &amp; greet so you can make sure it feels like the right fit.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <HeroImage />
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="pb-12">
          <div className="rounded-3xl border border-[#16213A]/10 bg-white/75 px-5 py-4 text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              <span>Owner-operated</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span>Public Liability Insured</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span>Police Checked</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span>Photo update after every visit</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="pb-12 md:pb-16">
          <Card className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-[#667085]">ABOUT</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#16213A] md:text-3xl">
                  Meet the person caring for your pets
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#5F6673] md:text-base">
                  <p>Hi, I&apos;m Alex.</p>

                  <p>
                    Blue Harbour Pet Care started as a small local service in Sydney&apos;s Eastern Suburbs with a simple
                    goal: providing calm, reliable home visits so pets can stay comfortable in their own environment
                    while their owners are away.
                  </p>

                  <p>
                    Before starting Blue Harbour Pet Care I worked as an engineer, but over time I realised I wanted
                    to spend my time doing something more hands-on and meaningful — something that genuinely helps
                    people and their animals.
                  </p>

                  <p>
                    At home we have an Italian Greyhound and two Siamese cats, and over the years we&apos;ve relied on many
                    pet sitters ourselves while travelling. From that experience I know how important trust and a good
                    gut feeling are when inviting someone into your home and caring for your pets.
                  </p>

                  <p>
                    I understand that trusting someone with your home and your animals is a big step, so every visit
                    is handled with care, clear communication, and respect for both your home and your pets.
                  </p>

                  <p>
                    Most clients start with a free meet &amp; greet so everyone — pets and humans — feels comfortable
                    before the first visit.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <StandardImage
                  src="/brand/about-alex-placeholder.jpg"
                  alt="Alex with Sansa"
                  height="h-[340px] md:h-[400px]"
                  priority={false}
                  objectClassName="object-[center_22%]"
                />

                <div className="grid gap-3">
                  <TrustPill text="Local Eastern Suburbs owner-operator" />
                  <TrustPill text="Public Liability Insured" />
                  <TrustPill text="Police Checked" />
                  <TrustPill text="Free meet & greet available" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Services */}
        <section id="services" className="pb-12 md:pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="mb-6">
                <StandardImage
                  src="/brand/service-cat-placeholder.jpg"
                  alt="Pets relaxing together at home"
                  height="h-[260px]"
                  objectClassName="object-[center_50%]"
                />
              </div>

              <h3 className="text-sm font-semibold tracking-wide text-[#16213A]">What I can help with</h3>
              <div className="mt-4 h-px w-16 bg-[#16213A]/15" />

              <ul className="mt-6 space-y-3 text-sm text-slate-700 md:text-base">
                <Li>Cat and small pet visits</Li>
                <Li>Senior pet care and gentle check-ins</Li>
                <Li>Feeding, water refresh and home routines</Li>
                <Li>Medication support during visits if discussed in advance</Li>
                <Li>Vet and groomer transport</Li>
                <Li>Photo updates after every visit</Li>
              </ul>

              <p className="mt-6 text-xs text-[#667085]">
                Calm, low-fuss care designed to keep routines familiar and pets comfortable at home.
              </p>
            </Card>

            <Card>
              <div className="mb-6">
                <StandardImage
                  src="/brand/service-home-placeholder.jpg"
                  alt="Pets resting comfortably at home"
                  height="h-[260px]"
                  objectClassName="object-[center_45%]"
                />
              </div>

              <h3 className="text-sm font-semibold tracking-wide text-[#16213A]">Start with a free meet &amp; greet</h3>
              <p className="mt-2 text-sm text-[#5F6673]">
                A relaxed first hello so you, your pets, and your home routine all feel comfortable.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#667085]">Website</div>
                  <div className="font-semibold text-[#16213A]">blueharbourpetcare.com.au</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#667085]">Phone</div>
                  <a href="tel:0485671662" className="font-semibold text-[#16213A]">
                    0485 671 662
                  </a>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#667085]">Good to know</div>
                  <div className="text-sm text-slate-700">
                    If you later want a regular weekly slot, this can usually be arranged after the first booking.
                  </div>
                </div>
              </div>

              <a
                href="#booking"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#16213A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d2b4a]"
              >
                Book Online
              </a>
            </Card>
          </div>
        </section>

        {/* Home Team */}
        <section id="home-team" className="pb-12 md:pb-16">
          <div className="text-center">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#667085]">MEET THE HOME TEAM</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-[#16213A] md:text-3xl">
              The real supervisors behind Blue Harbour Pet Care
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5F6673] md:text-base">
              Strong opinions, excellent taste, and very little respect for personal space.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <PetCard
              name="Sansa"
              subtitle="The happy one"
              imageSrc="/brand/sansa-placeholder.jpg"
              imageAlt="Sansa"
              imageObjectClassName="object-[center_48%]"
              description="Sansa is wildly excited about basically everyone she meets. Her usual routine is a dramatic little shiver, a cautious approach, and then full emotional commitment in the form of jumping, cuddling, or both. She is affectionate, hilarious, and completely convinced every new person is her new best friend."
              traits="Happy, excitable, lovable, pet-friendly, people-friendly, confident, slightly nervous"
              note="Theme song: I’m So Excited"
            />

            <PetCard
              name="Mephisto"
              subtitle="The sweet one"
              imageSrc="/brand/mephisto-placeholder.jpg"
              imageAlt="Mephisto"
              imageObjectClassName="object-[center_42%]"
              description="Mephisto is the kind, clingy little gentleman of the house. Once he likes you, he would quite happily stay by your side all day — supervising meals, helping at the computer, and strongly suggesting that beds are best shared. He is affectionate, chatty, slightly clumsy, and always ready to request food food food."
              traits="Happy, excited, demanding, people-friendly, confident, lovable, totally chilled"
              note="Theme song: I’d Do Anything for Love"
            />

            <PetCard
              name="Aria"
              subtitle="The mischievous one"
              imageSrc="/brand/aria-placeholder.jpg"
              imageAlt="Aria"
              imageObjectClassName="object-[center_35%]"
              description="Aria is the comedian and chaos coordinator. She loves inventing games, climbing things she absolutely should not climb, and casually helping herself to everyone else’s food. Luckily, she is also extremely affectionate, deeply charming, and fully aware that being cute solves most problems."
              traits="Excited, lovable, demanding, independent, confident, happy, people-friendly"
              note="Theme song: Feel It Still"
            />

            <PetCard
              name="Jon Snow"
              subtitle="Always part of the team"
              imageSrc="/brand/jon-snow-placeholder.jpg"
              imageAlt="Jon Snow"
              imageObjectClassName="object-[center_28%]"
              description="Jon Snow was the gentle, careful soul of the house and is still very much part of the story behind Blue Harbour Pet Care. He liked life quiet, predictable, and safely monitored from a sensible distance — unless belly rubs were on offer. Sweet, talkative, and endlessly lovable, he is remembered with a lot of affection."
              traits="Nervous, people-friendly, lovable, excited, happy, demanding, worried"
              note="In loving memory."
              memorial
            />
          </div>
        </section>

        {/* How it works */}
        <section className="pb-12 md:pb-16">
          <h3 className="text-center font-serif text-2xl font-semibold text-[#16213A] md:text-3xl">
            How it works
          </h3>
          <p className="mt-2 text-center text-sm text-[#667085]">
            Easy to book, easy to follow, and nice and simple from start to finish.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <MiniCard title="Book online" body="Choose the service that suits best and select a time that works for you." />
            <MiniCard title="We plan the visit" body="Visit timing is confirmed around the day&apos;s route and availability." />
            <MiniCard title="Photo updates" body="You&apos;ll get a little update after each visit, because of course you&apos;ll miss them." />
            <MiniCard title="Weekly invoice" body="Visits are invoiced once a week after care has been provided." />
          </div>
        </section>

        {/* Availability */}
        <section className="pb-12 md:pb-16">
          <Card>
            <h3 className="font-serif text-xl font-semibold text-[#16213A]">Availability &amp; scheduling</h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Pill text="No same-day bookings" />
              <Pill text="Please book by 8pm the evening before" />
              <Pill text="Recurring clients get priority slots" />
              <Pill text="Visit times are confirmed after booking" />
            </div>

            <p className="mt-4 text-xs text-[#667085]">
              Need to reshuffle things? Where possible, please reschedule by 6pm the day before.
            </p>
          </Card>
        </section>

        {/* Pricing */}
        <section id="pricing" className="pb-12 md:pb-16">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-[#16213A] md:text-3xl">Pricing</h3>
            <p className="mt-2 text-sm text-[#667085]">
              Straightforward rates, with invoices sent weekly after visits.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <h4 className="text-sm font-semibold tracking-wide text-[#16213A]">Service menu</h4>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <PriceRow
                  title="Standard Visit (20–30 minutes)"
                  price="$45"
                  desc="Feeding, water refresh, litter cleaning, company, and a photo update"
                />
                <PriceRow
                  title="Extended Visit (45 minutes)"
                  price="$65"
                  desc="More time for enrichment, brushing, company, and a slower paced visit"
                />
                <PriceRow
                  title="Meet & Greet"
                  price="Free"
                  desc="A relaxed first visit to get comfortable with routines, access, and care needs"
                />
                <PriceRow
                  title="Vet/Groomer Transport (within suburb)"
                  price="$80"
                  desc="Pickup and drop-off within your local area"
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#5F6673]">
                Medication support can be included during visits where discussed in advance, clear owner instructions
                have been provided, and the task is safe and appropriate to carry out.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <SurchargeRow label="Weekend surcharge" value="+10%" />
                <SurchargeRow label="Public holiday surcharge" value="+20%" />
              </div>

              <div className="mt-7">
                <a
                  href="#booking"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#16213A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d2b4a] md:w-auto"
                >
                  Book Online
                </a>
              </div>
            </Card>

            <Card>
              <div className="mb-6">
                <StandardImage
                  src="/brand/trust-photo-placeholder.jpg"
                  alt="Sansa at the beach"
                  height="h-[260px]"
                  objectClassName="object-[center_50%]"
                />
              </div>

              <h4 className="text-sm font-semibold tracking-wide text-[#16213A]">A few handy notes</h4>
              <p className="mt-2 text-sm text-[#5F6673]">
                Everything is designed to stay clear, calm, and easy to follow.
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <NoteItem title="Invoicing">Invoices are sent once per week after visits.</NoteItem>
                <NoteItem title="Medication support">
                  Available during visits where agreed in advance and safe to carry out.
                </NoteItem>
                <NoteItem title="Regular bookings">
                  Ongoing weekly visits can usually be arranged after your first booking or meet &amp; greet.
                </NoteItem>
              </div>

              <a
                href="#booking"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-[#16213A]/10 bg-white/70 px-7 py-3 text-sm font-semibold text-[#16213A] shadow-sm transition hover:bg-white"
              >
                Book a Meet &amp; Greet
              </a>
            </Card>
          </div>
        </section>

        {/* Reassurance */}
        <section className="pb-12 md:pb-16">
          <Card className="mx-auto max-w-4xl">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-semibold text-[#16213A] md:text-3xl">
                Thoughtful care, without the fuss
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5F6673] md:text-base">
                For many pets, staying at home is the calmest option. The focus here is on familiar routines, gentle
                handling, clear communication, and making things feel easy for both you and your pets.
              </p>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <section id="faq" className="pb-12 md:pb-16">
          <h3 className="text-center font-serif text-2xl font-semibold text-[#16213A] md:text-3xl">FAQ</h3>

          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            <Faq
              q="Which suburbs do you cover?"
              a="We focus on Sydney’s Eastern Suburbs, especially around Maroubra, Pagewood, Matraville, Hillsdale, Malabar, and Coogee. If you’re nearby, feel free to ask."
            />
            <Faq
              q="Do you offer recurring weekly visits?"
              a="Yes. Regular weekly visits can usually be arranged after your first booking or meet & greet, and recurring clients get priority access to preferred time slots."
            />
            <Faq q="How does payment work?" a="Invoices are sent weekly after visits have taken place." />
            <Faq
              q="Do you offer medication support?"
              a="Yes — medication support can be included during visits where it has been discussed in advance and is safe and appropriate to carry out."
            />
            <Faq q="Are you insured and police checked?" a="Yes — public liability insured and police checked." />
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="pb-16 md:pb-24">
          <BookingSection />
        </section>

        {/* Footer */}
        <footer className="pb-10 text-center text-xs text-[#667085]">
          <div className="mx-auto max-w-3xl border-t border-[#16213A]/10 pt-8">
            <p>Public Liability Insured · Police Checked · Owner-operated</p>
            <p className="mt-2">
              <span className="font-semibold text-[#16213A]">BLUE HARBOUR Pet Care</span> — Peace of Mind for Your Pets
            </p>
            <p className="mt-2">blueharbourpetcare.com.au · 0485 671 662</p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
              <Link href="/terms" className="hover:text-[#16213A]">
                Terms &amp; Conditions
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/privacy" className="hover:text-[#16213A]">
                Privacy Policy
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/service-policy" className="hover:text-[#16213A]">
                Service Policy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#16213A]/10 bg-[#EFE3DC] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="relative h-[300px] md:h-[410px]">
        <Image
          src="/brand/hero-pet-placeholder.jpg"
          alt="Alex with dog"
          fill
          priority
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16213A]/10 via-transparent to-white/10" />
      </div>
    </div>
  );
}

function StandardImage({
  src,
  alt,
  height = "h-64",
  priority = false,
  objectClassName = "object-center",
}: {
  src: string;
  alt: string;
  height?: string;
  priority?: boolean;
  objectClassName?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px] border border-[#16213A]/10 bg-[#EFE3DC] shadow-[0_12px_30px_rgba(15,23,42,0.06)]",
        height,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${objectClassName}`}
      />
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-[#16213A]/10 bg-white/78 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function MiniCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-[#16213A]/10 bg-white/72 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:bg-white/88">
      <div className="text-sm font-semibold text-[#16213A]">{title}</div>
      <div className="mt-2 text-sm text-[#5F6673]">{body}</div>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#16213A]/10 bg-white/72 px-4 py-3">
      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#B8998A]" />
      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
}

function TrustPill({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#16213A]/10 bg-[#DDEEF5]/45 px-4 py-3 text-sm text-slate-700">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#16213A] text-[11px] font-semibold text-white">
        ✓
      </span>
      <span>{text}</span>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-[#B8998A]">—</span>
      <span>{children}</span>
    </li>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-[#16213A]/10 bg-white/75 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition hover:bg-white/90">
      <summary className="cursor-pointer list-none text-sm font-semibold text-[#16213A]">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span className="text-slate-400 transition group-open:rotate-45">+</span>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-[#5F6673]">{a}</p>
    </details>
  );
}

function PriceRow({ title, price, desc }: { title: string; price: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-[#16213A]/10 bg-white/72 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm font-semibold text-[#16213A]">{title}</div>
        <div className="shrink-0 rounded-full bg-[#E7D6CE] px-3 py-1 text-xs font-semibold text-slate-700">
          {price}
        </div>
      </div>
      <p className="mt-2 text-sm text-[#5F6673]">{desc}</p>
    </div>
  );
}

function SurchargeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#16213A]/10 bg-white/72 px-4 py-3">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <span className="text-sm font-semibold text-[#16213A]">{value}</span>
    </div>
  );
}

function NoteItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#16213A]/10 bg-white/72 p-4">
      <div className="text-[11px] uppercase tracking-widest text-[#667085]">{title}</div>
      <div className="mt-1 text-sm text-slate-700">{children}</div>
    </div>
  );
}

function PetCard({
  name,
  subtitle,
  imageSrc,
  imageAlt,
  imageObjectClassName = "object-center",
  description,
  traits,
  note,
  memorial = false,
}: {
  name: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  imageObjectClassName?: string;
  description: string;
  traits: string;
  note?: string;
  memorial?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-[#16213A]/10 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]",
        memorial ? "bg-[#F3ECE8]" : "bg-white/78",
      ].join(" ")}
    >
      <StandardImage
        src={imageSrc}
        alt={imageAlt}
        height="h-[260px]"
        objectClassName={imageObjectClassName}
      />

      <div className="mt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="font-serif text-xl font-semibold text-[#16213A]">{name}</h4>
            <p className="mt-1 text-sm font-medium text-[#667085]">{subtitle}</p>
          </div>

          {memorial ? (
            <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#5F6673]">
              In memory
            </span>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#5F6673]">{description}</p>

        <div className="mt-4 rounded-2xl border border-[#16213A]/10 bg-white/75 px-4 py-3">
          <div className="text-[11px] uppercase tracking-widest text-[#667085]">Personality</div>
          <p className="mt-2 text-sm text-slate-700">{traits}</p>
        </div>

        {note ? <p className="mt-4 text-sm italic text-[#667085]">{note}</p> : null}
      </div>
    </div>
  );
}