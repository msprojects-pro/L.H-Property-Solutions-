import heroLuxuryInterior from '../assets/images/hero_luxury_interior_1794601478763.jpg';
import projectKitchenRenovation from '../assets/images/project_kitchen_renovation_1794601479254.jpg';
import projectLivingFitout from '../assets/images/project_living_fitout_1794601479584.jpg';
import projectBathroomUpgrade from '../assets/images/project_bathroom_upgrade_1794601480367.jpg';

export const BUSINESS_INFO = {
  name: 'L.H. Property Solutions',
  phoneDisplay: '+44 7377 729497',
  phoneHref: 'tel:+447377729497',
  email: 'l.h.propertysolutions@gmail.com',
  emailHref: 'mailto:l.h.propertysolutions@gmail.com',
  tagline: 'Please get in touch for a free quote!',
  recommendationRate: '100% Recommend',
  heroImage: heroLuxuryInterior,
} as const;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string;
  iconName: 'hammer' | 'layers' | 'wrench' | 'bath' | 'building' | 'clipboard';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'renovations',
    number: '01',
    title: 'Full Renovations',
    description:
      'Complete property refurbishments managed from initial strip-out to final decoration with meticulous attention to structural and aesthetic detail.',
    deliverables: 'Structural alterations · Plastering · Turnkey delivery',
    iconName: 'hammer',
  },
  {
    id: 'interior-fit-outs',
    number: '02',
    title: 'Interior Fit-Outs',
    description:
      'Bespoke internal carpentry, custom alcove joinery, media walls, architectural lighting integration, and premium timber flooring installations.',
    deliverables: 'Bespoke joinery · Herringbone flooring · Recessed lighting',
    iconName: 'layers',
  },
  {
    id: 'property-maintenance',
    number: '03',
    title: 'Property Maintenance',
    description:
      'Dependable reactive repairs and scheduled preventative upkeep for residential homeowners, landlords, and managed commercial premises.',
    deliverables: 'Preventative upkeep · Rapid repairs · Ongoing care',
    iconName: 'wrench',
  },
  {
    id: 'kitchen-bathroom',
    number: '04',
    title: 'Kitchen & Bathroom Upgrades',
    description:
      'Precision installation of modern handleless kitchens, stone worktops, luxury wetrooms, large-format tiling, and brushed bronze brassware.',
    deliverables: 'Cabinetry fitting · Stone tiling · Wetroom builds',
    iconName: 'bath',
  },
  {
    id: 'general-building',
    number: '05',
    title: 'General Building Works',
    description:
      'Soundly executed brickwork, internal partitioning, doorway openings, lintel installations, and exterior property improvements built to last.',
    deliverables: 'Partitioning · Masonry · Structural improvements',
    iconName: 'building',
  },
  {
    id: 'free-consultations',
    number: '06',
    title: 'Free Consultations',
    description:
      'On-site walkthroughs to assess your space, discuss materials and realistic timelines, and provide a clear, itemised no-obligation quotation.',
    deliverables: 'Site visit · Scope planning · Itemised free quote',
    iconName: 'clipboard',
  },
];

export interface TrustPillar {
  title: string;
  description: string;
  iconName: 'award' | 'receipt' | 'shield' | 'message';
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: 'Quality Workmanship',
    description:
      'Clean site discipline, laser-true lines, and durable finishes executed by experienced tradespeople who take pride in every millimetre.',
    iconName: 'award',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Detailed, written quotations with clear breakdowns of labour and materials so you stay informed at every stage with zero hidden extras.',
    iconName: 'receipt',
  },
  {
    title: 'Fully Insured',
    description:
      'Comprehensive public liability cover and strict adherence to UK building regulations for complete peace of mind on your property.',
    iconName: 'shield',
  },
  {
    title: 'Free Quotes',
    description:
      'Direct communication with no pushy sales call centres. Request an on-site visit and receive a straightforward, obligation-free estimate.',
    iconName: 'message',
  },
];

export type ProjectCategory = 'All' | 'Renovations' | 'Fit-Outs' | 'Kitchen & Bath';

export interface ProjectShowcase {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  serviceMatch: string;
  scope: string;
  duration: string;
  summary: string;
  image: string;
  alt: string;
}

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 'kitchen-suite',
    title: 'Bespoke Charcoal & Stone Kitchen',
    category: 'Kitchen & Bath',
    serviceMatch: 'Kitchen & Bathroom Upgrades',
    scope: 'Full strip-out · Island joinery · Flooring',
    duration: '5 Weeks',
    summary:
      'Complete kitchen remodel featuring matte charcoal handleless units, honed stone waterfall island, concealed LED task lighting, and engineered oak herringbone flooring.',
    image: projectKitchenRenovation,
    alt: 'Modern bespoke charcoal and dark marble kitchen renovation with brass pendant lights',
  },
  {
    id: 'living-fitout',
    title: 'Fitted Living Space & Media Wall',
    category: 'Fit-Outs',
    serviceMatch: 'Interior Fit-Outs',
    scope: 'Custom cabinetry · Plastering · Lighting',
    duration: '3 Weeks',
    summary:
      'Architectural living room transformation incorporating floor-to-ceiling walnut alcove shelving, integrated fireplace surround, smooth lime-wash plasterwork, and recessed lighting.',
    image: projectLivingFitout,
    alt: 'Contemporary fitted living room with dark walnut alcove shelving and fireplace',
  },
  {
    id: 'bathroom-wetroom',
    title: 'Architectural Slate Bathroom Suite',
    category: 'Renovations',
    serviceMatch: 'Full Renovations',
    scope: 'Wetroom tanking · Large-format tiling · Brassware',
    duration: '3 Weeks',
    summary:
      'Full bathroom refurbishment with waterproof tanking, dark slate porcelain slabs, frameless glass enclosure, floating walnut vanity, and brushed bronze rainfall fixtures.',
    image: projectBathroomUpgrade,
    alt: 'Luxury modern dark slate bathroom upgrade with brushed bronze shower and floating vanity',
  },
];
