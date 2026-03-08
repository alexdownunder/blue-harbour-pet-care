import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-6 w-10 opacity-80">
            <Image
              src="/brand/bridge-arc.png"
              alt="Blue Harbour Pet Care"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-900">
            BLUE HARBOUR <span className="font-medium text-slate-600">Pet Care</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          <a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#services">
            Services
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#how">
            How it Works
          </a>
          <a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#availability">
            Availability
          </a>
          <a
            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            href="#booking"
          >
            Book a Visit
          </a>
        </nav>

        <a
          className="md:hidden inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          href="#booking"
        >
          Book a Visit
        </a>
      </div>
    </header>
  );
}