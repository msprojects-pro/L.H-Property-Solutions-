import { BUSINESS_INFO } from '../data/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-base font-bold text-white">
              {BUSINESS_INFO.name}
            </p>
            <p className="text-sm text-[#F5F5F5]/60 mt-1">
              Renovations · Interior Fit-Outs · Property Maintenance
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-[#F5F5F5]/75">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="hover:text-white transition-colors tabular-nums"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <span aria-hidden="true" className="hidden sm:inline text-white/25">
              ·
            </span>
            <a
              href={BUSINESS_INFO.emailHref}
              className="hover:text-white transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#F5F5F5]/50">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p>{BUSINESS_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
