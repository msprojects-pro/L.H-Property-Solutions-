import {
  ArrowUpRight,
  Bath,
  Building2,
  ClipboardCheck,
  Hammer,
  Layers,
  Wrench,
} from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/siteData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

function ServiceIcon({ name }: { name: ServiceItem['iconName'] }) {
  const iconClass = 'w-5 h-5 text-white';
  switch (name) {
    case 'hammer':
      return <Hammer className={iconClass} aria-hidden="true" />;
    case 'layers':
      return <Layers className={iconClass} aria-hidden="true" />;
    case 'wrench':
      return <Wrench className={iconClass} aria-hidden="true" />;
    case 'bath':
      return <Bath className={iconClass} aria-hidden="true" />;
    case 'building':
      return <Building2 className={iconClass} aria-hidden="true" />;
    case 'clipboard':
      return <ClipboardCheck className={iconClass} aria-hidden="true" />;
  }
}

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#F5F5F5]/65 mb-3">
              Core Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              What We Offer
            </h2>
          </div>
          <p className="text-base text-[#F5F5F5]/75 max-w-md leading-relaxed">
            Every project is delivered by dedicated tradespeople with crisp site standards, clear communication, and durable finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between p-7 bg-[#1C1C1C] border border-white/10 rounded-lg hover:border-white/40 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-md bg-[#0B0B0B] border border-white/15 flex items-center justify-center group-hover:border-white/50 transition-colors duration-200">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <span className="text-sm font-medium text-[#F5F5F5]/45 tabular-nums">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors duration-150">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#F5F5F5]/75 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-[#F5F5F5]/55 truncate">
                  {service.deliverables}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  aria-label={`Request quote for ${service.title}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#F5F5F5]/75 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
