import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onQuoteClick: () => void;
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center overflow-hidden bg-[#0B0B0B] border-b border-white/10"
    >
      <div className="absolute inset-0">
        <ResilientImage
          src={BUSINESS_INFO.heroImage}
          alt="Luxury modern residential interior renovation and bespoke walnut fit-out by L.H. Property Solutions"
          fallbackTitle="L.H. Property Solutions — Architectural Interiors"
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/95 via-[#0B0B0B]/80 to-[#0B0B0B]/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-[#F5F5F5]/85 mb-6">
            <span className="text-white font-semibold">
              {BUSINESS_INFO.recommendationRate}
            </span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="tabular-nums hover:text-white transition-colors"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,5vw,4.25rem)] font-bold tracking-tight leading-[1.08] text-white text-balance mb-6">
            Premium Property Solutions
          </h1>

          <p className="text-lg sm:text-xl text-[#F5F5F5]/90 leading-relaxed max-w-xl mb-10">
            Expert renovations, interior fit-outs &amp; maintenance you can trust.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold bg-white text-[#0B0B0B] rounded-md hover:bg-[#E5E5E5] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-medium bg-[#1C1C1C]/85 text-white border border-white/25 rounded-md hover:border-white hover:bg-[#1C1C1C] transition-colors duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Call Us · {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-[#F5F5F5]/70">
            {BUSINESS_INFO.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
