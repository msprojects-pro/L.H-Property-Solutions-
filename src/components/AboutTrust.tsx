import { useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
  Star,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  PROJECTS,
  TRUST_PILLARS,
  type ProjectCategory,
  type TrustPillar,
} from '../data/siteData';
import { ResilientImage } from './ResilientImage';

interface AboutTrustProps {
  onSelectService: (serviceTitle: string) => void;
}

const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Renovations',
  'Fit-Outs',
  'Kitchen & Bath',
];

function TrustIcon({ name }: { name: TrustPillar['iconName'] }) {
  const iconClass = 'w-5 h-5 text-white';
  switch (name) {
    case 'award':
      return <Award className={iconClass} aria-hidden="true" />;
    case 'receipt':
      return <ReceiptText className={iconClass} aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case 'message':
      return <MessageSquareText className={iconClass} aria-hidden="true" />;
  }
}

export function AboutTrust({ onSelectService }: AboutTrustProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#0B0B0B] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About & Trust Proof Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#F5F5F5]/65 mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance mb-6">
              Craftsmanship Built on Reliability &amp; Pride
            </h2>
            <p className="text-base text-[#F5F5F5]/80 leading-relaxed mb-5">
              {BUSINESS_INFO.name} delivers residential renovations, bespoke interior fit-outs, and ongoing property maintenance with a straightforward, accountable approach. From initial site assessment through to final snagging, your property is treated with respect.
            </p>
            <p className="text-base text-[#F5F5F5]/75 leading-relaxed mb-8">
              Whether upgrading a single room or managing a complete property refurbishment, we combine clean workmanship with honest schedules and transparent pricing.
            </p>

            {/* Verified Social Proof Highlight */}
            <div className="p-6 bg-[#1C1C1C] border border-white/10 rounded-lg">
              <div className="flex items-center gap-1.5 mb-3" aria-label="5 out of 5 star client rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 fill-white text-white"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {BUSINESS_INFO.recommendationRate}
                </span>
                <span className="text-sm font-medium text-[#F5F5F5]/65">
                  Client Rating
                </span>
              </div>
              <p className="text-sm text-[#F5F5F5]/75 leading-relaxed">
                Every reviewed client recommends {BUSINESS_INFO.name} for tidiness, punctual delivery, and finish quality.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10">
              <h3 className="font-display text-xl font-semibold text-white">
                Why Choose Us
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5F5F5]/65">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                <span>Residential &amp; Commercial</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TRUST_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 bg-[#1C1C1C] border border-white/10 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-md bg-[#0B0B0B] border border-white/15 flex items-center justify-center mb-4">
                    <TrustIcon name={pillar.iconName} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#F5F5F5]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Projects Showcase Anchor */}
        <div id="projects" className="mt-20 lg:mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-medium text-[#F5F5F5]/65 mb-2">
                Recent Work
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Selected Renovations &amp; Fit-Outs
              </h3>
            </div>

            <div
              role="tablist"
              aria-label="Filter completed projects by category"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#1C1C1C] border border-white/10 rounded-md self-start md:self-auto"
            >
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isActive
                        ? 'bg-white text-[#0B0B0B] font-semibold'
                        : 'text-[#F5F5F5]/75 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between bg-[#1C1C1C] border border-white/10 rounded-lg overflow-hidden hover:border-white/40 transition-colors duration-200"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#141414]">
                    <ResilientImage
                      src={project.image}
                      alt={project.alt}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#F5F5F5]/60 mb-2">
                      <span className="text-white font-medium">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.duration}</span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-[#F5F5F5]/75 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#F5F5F5]/55 truncate">
                    {project.scope}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService(project.serviceMatch)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#F5F5F5]/75 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    <span>Quote Similar</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
