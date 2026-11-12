export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  image: string;
}

export type ProjectCategory =
  | 'Living Rooms'
  | 'Bedrooms'
  | 'Kitchens'
  | 'Residential Interiors'
  | 'Commercial Interiors'
  | 'Contemporary Minimalist Spaces';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  style: string;
  typology: string;
  focus: string;
  location: string;
  area: string;
  timeline: string;
  image: string;
  gallery: string[];
  summary: string;
  narrative: string;
  designHighlights: string[];
  materials: string[];
  isFeatured?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  context: string;
  rating: number;
  quote: string;
  link: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export interface ValuePillar {
  title: string;
  subtitle: string;
  description: string;
}

export const STUDIO_INFO = {
  brandName: 'Gautam Interiors',
  altName: 'Gowtam Interiors',
  category: 'Interior Decorator & Design Studio',
  rating: 4.9,
  reviewCount: 38,
  locality: 'Vijaya Bank Layout, Bengaluru',
  address:
    '46, Chiye Davi Nilya, 3rd Cross, Kodichikkanahalli Main Road, Near Sana Super Mart, Vijaya Bank Layout, Bengaluru, Karnataka 560076, India',
  hours: 'Open · Closes 7:30 am Fri (By Studio & Site Appointment)',
  positioning:
    'A professional interior design and decoration studio delivering thoughtfully designed spaces, quality materials, precise finishing and customer-focused interior solutions.',
  tagline: 'Spaces That Reflect the Way You Live.',
  supportingHeroText:
    'Thoughtfully designed interiors. Timeless aesthetics. Exceptional attention to detail.',
  googleReviewsUrl:
    'https://www.google.com/search?q=gowtam+interiors&oq=gowtam+interiors',
  directionsUrl:
    'https://www.google.com/search?sca_esv=5d94e750a62d2e9d&q=gautam+interiors+address&ludocid=15302510630738338291',
  streetViewUrl:
    'https://www.google.com/local/place/fid/0x3bae150d1e07e1ad:0xd45d7057accc21f3/photosphere',
  phone: '+919880000000',
  phoneDisplay: '+91 98800 00000',
  whatsappNumber: '+919880000000',
  email: 'enquiries@gautaminteriors.com',
  whatsappHref:
    'https://wa.me/?text=Hello%20Gautam%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project%20in%20Bengaluru.',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'residential-interiors',
    number: '01',
    title: 'Residential Interior Design',
    shortDesc:
      'Complete home interior solutions designed around individual lifestyles and functional requirements.',
    fullDesc:
      'From standalone residences to contemporary family apartments across Bengaluru, our residential design practice balances architectural proportions with everyday intimate comfort. We plan every spatial flow, custom joinery line, and layered lighting point to craft homes that age gracefully.',
    benefits: [
      'Comprehensive spatial layouts tailored to everyday family movement',
      'Harmonious palette of natural woods, stone slabs, and warm textiles',
      'Turnkey execution with dedicated on-site engineering supervision',
      'Durable joinery crafted for long-term Bangalore climate resilience',
    ],
    deliverables: [
      'Detailed 2D space planning & circulation layouts',
      '3D photo-realistic visual concepts & walkthroughs',
      'Bespoke living & dining carpentry specifications',
      'Electrical, HVAC & architectural cove lighting plans',
    ],
    image: '/images/service-residential.jpg',
  },
  {
    id: 'bedroom-interiors',
    number: '02',
    title: 'Bedroom Interiors',
    shortDesc:
      'Comfortable, elegant and personalized bedroom spaces designed for restorative calm.',
    fullDesc:
      'A primary bedroom must be a private sanctuary from city noise. We craft restful sanctuaries with floor-to-ceiling wardrobe joinery, acoustic upholstered bed walls, concealed ambient lighting, and whisper-quiet drapery fittings that transition seamlessly from morning light to evening rest.',
    benefits: [
      'Acoustic consideration for restful, peaceful sleep environments',
      'Ergonomic wardrobe interior layouts tailored to wardrobe needs',
      'Warm glare-free lighting hierarchy with bedside dimming controls',
      'Custom vanity, reading nook, and concealed dressing integration',
    ],
    deliverables: [
      'Floor-to-ceiling hinged or sliding wardrobe design',
      'Upholstered headboards and fluted wood feature walls',
      'Integrated bedside tables & dressing console millwork',
      'Layered blackout & sheer drapery track planning',
    ],
    image: '/images/project-bedroom.jpg',
  },
  {
    id: 'kitchen-interiors',
    number: '03',
    title: 'Kitchen Interiors',
    shortDesc:
      'Functional kitchen layouts with thoughtful storage, materials and enduring finishes.',
    fullDesc:
      'Designed around the golden work triangle, our modular kitchens unite high-performance European hardware with resilient quartz counters, anti-scratch cabinetry, and dedicated Indian spice pantry storage. We ensure transparent pricing and disciplined timeline handovers.',
    benefits: [
      'Moisture-resistant, boiling water-proof (BWP) cabinet cores',
      'Heavy-duty soft-close drawer channels and pull-out organizers',
      'Heat & stain-resistant quartz or granite preparation surfaces',
      'High-efficiency task lighting over cooktop and sink preparation zones',
    ],
    deliverables: [
      'Ergonomic L-shaped, parallel, or island modular layout plans',
      'Hardware, tandem box & corner carousel specifications',
      'Concealed chimney, hob, microwave & dishwasher housing',
      'Backsplash stone, quartz, or ceramic tile curation',
    ],
    image: '/images/project-kitchen.jpg',
  },
  {
    id: 'commercial-interiors',
    number: '04',
    title: 'Commercial Interiors',
    shortDesc:
      'Professional and visually engaging interiors for commercial offices, studios and boutiques.',
    fullDesc:
      'Commercial environments require a dual focus: projecting brand authority while enhancing everyday productivity and client reception. We create reception lounges, meeting suites, and retail studios that balance acoustic clarity, wear-resistant materials, and punctual handover.',
    benefits: [
      'Strong visual identity reflecting your enterprise values',
      'Acoustic management for clear calls and focused work pods',
      'Heavy-commercial durability in flooring and wall cladding',
      'Strict adherence to commercial lease delivery schedules',
    ],
    deliverables: [
      'Reception counters & sculptural welcome focal points',
      'Executive cabins & collaborative meeting room joinery',
      'Acoustic ceiling baffles & commercial lighting tracks',
      'Compliance-ready civil, fire, and power layout drawings',
    ],
    image: '/images/project-commercial.jpg',
  },
  {
    id: 'flat-apartment-interiors',
    number: '05',
    title: 'Flat & Apartment Interiors',
    shortDesc:
      'Smart space planning and interior solutions designed specifically for apartments and flats.',
    fullDesc:
      'Apartment living demands intelligent spatial economy. We eliminate visual clutter by designing multifunctional cabinetry, floating consoles, and translucent architectural dividers that maximize usable square footage and natural ventilation.',
    benefits: [
      'Maximization of every vertical foot without visual crowding',
      'Light-enhancing neutral palettes that expand interior volume',
      'Multifunctional storage beds, shoe units, and study consoles',
      'Smooth coordination with gated society association guidelines',
    ],
    deliverables: [
      'Compact dining & breakfast bar solutions',
      'Foyer shoe consoles with concealed utility storage',
      'False ceiling designs optimized for standard ceiling heights',
      'Space-saving pocket doors and fluted glass partitions',
    ],
    image: '/images/service-apartment.jpg',
  },
  {
    id: 'furniture-sourcing',
    number: '06',
    title: 'Furniture Sourcing',
    shortDesc:
      'Carefully selected furniture and bespoke pieces to complement the overall interior design.',
    fullDesc:
      'The right chair or dining table anchors a room. Rather than settling for off-the-shelf catalog compromises, we source handpicked furniture from trusted artisanal makers across solid teak, honed travertine monoliths, brass accents, and performance linen upholstery.',
    benefits: [
      'Direct maker sourcing ensuring quality grade and fair pricing',
      'Custom dimensioning suited to your specific floor dimensions',
      'Textile curation with high-abrasion Martindale rub counts',
      'Stylistic alignment between architectural woodwork and loose pieces',
    ],
    deliverables: [
      'Curated furniture moodboards & material sample swatches',
      'Dimensional specification sheets for custom fabrication',
      'Direct workshop quality audits prior to dispatch',
      'White-glove delivery, placement, and final styling',
    ],
    image: '/images/service-furniture.jpg',
  },
  {
    id: 'painting-finishing',
    number: '07',
    title: 'Painting & Finishing',
    shortDesc:
      'Quality finishing solutions and artisan textures that bring the entire design together.',
    fullDesc:
      'A room is only as refined as its wall finishing. We specialize in velvety matte emulsions, textured beige limewashes, subtle micro-cement plasters, and protective wood PU coatings that give surfaces an understated, tactile luxury.',
    benefits: [
      'Meticulous surface sanding, plaster repair, and primer prep',
      'Eco-conscious low-VOC paints for healthy indoor air quality',
      'Specialized textured limewash and Venetian plaster options',
      'Even, streak-free illumination reflectivity on all ceilings',
    ],
    deliverables: [
      'Full wall color sampling in morning and evening ambient light',
      'Multi-coat wall, ceiling, and wood polish applications',
      'Protective clear PU sealants for high-touch timber trims',
      'Post-completion touch-up kit and maintenance guide',
    ],
    image: '/images/service-painting.jpg',
  },
  {
    id: 'party-decoration',
    number: '08',
    title: 'Party & Celebration Decoration',
    shortDesc:
      'Decorative arrangements and refined styling for special occasions and home celebrations.',
    fullDesc:
      'Transforming your home for milestone birthdays, housewarmings (Griha Pravesh), or festive dinners. We curate elegant floral installations, brass candlelight scapes, draped linen tables, and ambient illumination that turn residential spaces into warm, celebratory havens.',
    benefits: [
      'Sophisticated styling that harmonizes with your home architecture',
      'Fresh floral curation, natural brass accents, and warm candlelight',
      'Rapid, respectful setup and discreet post-event takedown',
      'Customized themes tailored to your intimate guest count',
    ],
    deliverables: [
      'Entrance welcome consoles & flower garland installations',
      'Tablescape styling with linen runners, glassware & florals',
      'Ambient string, fairy, and accent warm spotlighting',
      'Photo-backdrop corners with textured fabrics and botanicals',
    ],
    image: '/images/service-party.jpg',
  },
];

// Curated Inspiration Gallery & Concepts (Authentic, labeled as Design Inspiration & Concepts)
export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'linen-fluted-oak-living',
    title: 'Linen & Fluted Oak Living Room',
    category: 'Living Rooms',
    style: 'Warm European Minimalist',
    typology: 'Open-Plan Living & Conversation Space',
    focus: 'Fluted timber joinery, floor-to-ceiling sheer linen drapery, and low-profile conversational seating',
    location: 'Design Inspiration · Curated Space',
    area: 'Curated 1,200 sq. ft. Spatial Layout',
    timeline: 'Design Concept & Custom Execution',
    image: '/images/hero-living.jpg',
    gallery: [
      '/images/hero-living.jpg',
      '/images/service-residential.jpg',
      '/images/project-drapery.jpg',
    ],
    summary:
      'A sunlit living room concept defined by warm fluted oak millwork, honed Roman travertine, and floor-to-ceiling sheer linen drapery.',
    narrative:
      'Conceived for modern urban homes seeking quiet luxury, this living room concept explores the interplay between warm natural daylight and tactile textures. Fluted timber walls conceal entertainment cabling, while floating low-profile cabinetry maintains open floor area. Soft cove lighting provides shadow-free evening warmth.',
    designHighlights: [
      'Custom fluted oak wall paneling with concealed media conduits',
      'Floor-to-ceiling Belgian linen drapes on silent-glide brass tracks',
      'Recessed 2700K perimeter cove illumination for evening tranquility',
      'Curated balance between soft upholstery and honed stone surfaces',
    ],
    materials: [
      'Natural Fluted Oak Veneer',
      'Honed Roman Travertine Stone',
      'Brushed Champagne Brass Hardware',
      'Oatmeal Belgian Slub Linen',
      'Matte Warm Ivory Low-VOC Emulsion',
    ],
    isFeatured: true,
  },
  {
    id: 'obsidian-quartz-kitchen',
    title: 'Obsidian & Statuario Modular Kitchen',
    category: 'Kitchens',
    style: 'Monolithic Architectural Contemporary',
    typology: 'Culinary Island & Concealed Dry Pantry',
    focus: 'Ergonomic work triangle, anti-fingerprint cabinetry, and vein-matched quartz waterfall surfaces',
    location: 'Design Inspiration · Kitchen Concept',
    area: 'Curated 480 sq. ft. Culinary Suite',
    timeline: 'Design Concept & Modular Execution',
    image: '/images/project-kitchen.jpg',
    gallery: [
      '/images/project-kitchen.jpg',
      '/images/hero-living.jpg',
      '/images/service-furniture.jpg',
    ],
    summary:
      'An architectural kitchen concept pairing matte charcoal millwork with a dramatic statuario quartz waterfall island and concealed pantry storage.',
    narrative:
      'Designed around culinary flow and social entertaining, this kitchen concept pairs durable boiling-water-proof (BWP) cabinet structures with European soft-close systems. A monolithic waterfall island integrates an induction cooktop and informal breakfast counter, accented by recessed under-cabinet task lighting.',
    designHighlights: [
      'Vein-matched statuario quartz waterfall preparation island',
      'Concealed walk-in pantry with motorized spice drawers',
      'Recessed high-CRI 3000K under-cabinet task illumination',
      'Integrated Blum soft-close tandem channels and corner carousels',
    ],
    materials: [
      'Anti-Fingerprint Matte Charcoal Laminate',
      'Statuario Engineered Quartz Slab',
      'Brushed Champagne Brass Edge Pulls',
      'Blum Heavy-Duty Soft-Close Hardware',
    ],
    isFeatured: true,
  },
  {
    id: 'acoustic-primary-bedroom',
    title: 'Acoustic Primary Bedroom Concept',
    category: 'Bedrooms',
    style: 'Serene Minimal European Sanctuary',
    typology: 'Primary Suite with Concealed Wardrobes',
    focus: 'Acoustic fabric panelling, integrated bedside floating consoles, and 100% blackout drapery',
    location: 'Design Inspiration · Bedroom Concept',
    area: 'Curated 620 sq. ft. Suite',
    timeline: 'Design Concept & Bespoke Carpentry',
    image: '/images/project-bedroom.jpg',
    gallery: [
      '/images/project-bedroom.jpg',
      '/images/hero-living.jpg',
      '/images/project-drapery.jpg',
    ],
    summary:
      'A restful bedroom sanctuary featuring an acoustic upholstered bed wall, smoked oak joinery, and concealed wardrobe alcoves.',
    narrative:
      'Prioritizing restorative sleep in an urban setting, this concept balances sound absorption with warm, glare-free lighting. A full-height upholstered headboard with indirect cove lighting frames the bed, while floating cantilever nightstands and fluted glass closet partitions maintain clean visual harmony.',
    designHighlights: [
      'Full-height acoustic upholstered wall panels with warm indirect illumination',
      'Concealed floor-to-ceiling wardrobes with integrated LED sensor illumination',
      'Dual-bracket silent ceiling tracks for sheer daylight and total blackout',
      'Cantilevered floating bedside consoles with flush cable passes',
    ],
    materials: [
      'Smoked Oak Architectural Veneer',
      'Textured Wool-Linen Acoustic Fabric',
      'Honed Silver Travertine Vanity Slab',
      'Fluted Tempered Privacy Glass',
    ],
    isFeatured: true,
  },
  {
    id: 'executive-lounge-commercial',
    title: 'Architectural Executive Lounge & Studio',
    category: 'Commercial Interiors',
    style: 'Refined Modern Hospitality & Studio',
    typology: 'Client Reception, Lounge & Meeting Suite',
    focus: 'Laser-cut vertical brass dividers, acoustic ceiling baffles, and directional art track lighting',
    location: 'Design Inspiration · Commercial Concept',
    area: 'Curated 2,100 sq. ft. Commercial Studio',
    timeline: 'Design Concept & Fitment',
    image: '/images/project-commercial.jpg',
    gallery: [
      '/images/project-commercial.jpg',
      '/images/service-furniture.jpg',
      '/images/about-studio.jpg',
    ],
    summary:
      'A sophisticated commercial interior concept featuring brushed brass divider screens, graphite terrazzo flooring, and acoustic meeting suites.',
    narrative:
      'Balancing enterprise credibility with intimate client comfort, this commercial concept uses sculptural brass screens to separate meeting lounges from active work areas. Acoustics are controlled through custom upholstered wall panels and dark acoustic baffles.',
    designHighlights: [
      'Custom laser-cut vertical brass spatial divider screens',
      'Monolithic graphite terrazzo flooring with brass expansion joints',
      'Museum-grade 95+ CRI adjustable track spotlights for gallery walls',
      'Sound-dampening ceiling baffles designed for conversation privacy',
    ],
    materials: [
      'Cast Graphite Terrazzo Tile',
      'Solid Brushed Brass Divider Framework',
      'Acoustic Mineral Felt Ceiling Baffles',
      'Hand-Selected Solid Teak Conference Tabletop',
    ],
    isFeatured: true,
  },
  {
    id: 'contemporary-penthouse-residence',
    title: 'Contemporary Penthouse Interior Concept',
    category: 'Residential Interiors',
    style: 'Editorial Contemporary Architecture',
    typology: 'Full Residential Interior Architecture',
    focus: 'Seamless transitions between living, dining, and private zones with bespoke millwork',
    location: 'Design Inspiration · Residential Concept',
    area: 'Curated 3,200 sq. ft. Penthouse Plan',
    timeline: 'Design Concept & Turnkey Execution',
    image: '/images/service-residential.jpg',
    gallery: [
      '/images/service-residential.jpg',
      '/images/hero-living.jpg',
      '/images/service-furniture.jpg',
    ],
    summary:
      'A complete residential interior concept demonstrating cohesive spatial planning, natural light distribution, and custom storage architecture.',
    narrative:
      'An expansive home concept conceived to unite private family spaces with generous entertaining zones. High-ceiling proportions are grounded by warm wood paneling, floating credenzas, and tailored furniture arrangements that maximize cross-ventilation.',
    designHighlights: [
      'Open-plan living and dining with subtle architectural zone demarcations',
      'Full-height architectural storage walls disguised as textured paneling',
      'Climate-resilient joinery built from calibrated marine-grade BWR plywood',
      'Integrated multi-scene lighting controls for morning, dusk, and dinner',
    ],
    materials: [
      'Natural White American Oak Veneer',
      'Textured Sandstone Architectural Cladding',
      'Bespoke Martindale-Rated Linen Bouclé',
      'Satin Brass Architectural Hardware',
    ],
    isFeatured: true,
  },
  {
    id: 'serene-travertine-minimalist',
    title: 'Serene Travertine & Oak Minimalist Concept',
    category: 'Contemporary Minimalist Spaces',
    style: 'Minimal European Luxury',
    typology: 'Reflective Minimalist Living & Dining',
    focus: 'Monolithic stone tables, flush shadow gaps, and restrained neutral palettes',
    location: 'Design Inspiration · Minimalist Concept',
    area: 'Curated 1,850 sq. ft. Living Concept',
    timeline: 'Design Concept & Custom Craft',
    image: '/images/service-apartment.jpg',
    gallery: [
      '/images/service-apartment.jpg',
      '/images/hero-living.jpg',
      '/images/project-kitchen.jpg',
    ],
    summary:
      'A pure minimalist interior concept celebrating negative space, natural travertine monoliths, and seamless wall surfaces.',
    narrative:
      'Stripping away unnecessary visual ornamentation, this minimalist concept focuses on materiality and proportions. Custom furniture pieces with softened corners float within calm ivory rooms, complemented by flush baseboards and concealed shadow gap ceiling details.',
    designHighlights: [
      'Recessed architectural shadow gaps replacing traditional baseboards and trims',
      'Monolithic hand-honed travertine coffee table and dining credenza',
      'Concealed frameless pocket doors creating seamless room transitions',
      'Soft matte limewash plaster that catches changing daylight angles',
    ],
    materials: [
      'Honed Navona Travertine Monoliths',
      'Bleached White Oak Millwork',
      'Hand-Applied Mineral Limewash Plaster',
      'Unlacquered Living Brass Accents',
    ],
    isFeatured: true,
  },
  {
    id: 'atelier-drapery-hardware',
    title: 'Atelier Drapery & Window Architecture',
    category: 'Living Rooms',
    style: 'Classical European Tailored Detail',
    typology: 'Architectural Window Treatments',
    focus: 'Laser-aligned solid brass rods, custom finials, and sheer-blackout dual tracks',
    location: 'Design Inspiration · Window Architecture',
    area: 'Curated 8-Room Window Suite',
    timeline: 'Design Concept & Precision Fitment',
    image: '/images/project-drapery.jpg',
    gallery: [
      '/images/project-drapery.jpg',
      '/images/hero-living.jpg',
      '/images/project-bedroom.jpg',
    ],
    summary:
      'A specialized design showcase of hand-finished brass curtain rods, turned finials, and silent-glide ceiling tracks holding Belgian linen.',
    narrative:
      'Window architecture frames how daylight enters an interior. This study focuses on laser-straight brass drapery hardware engineered to support heavy fabrics without center sag, paired with whisper-quiet nylon carriers for effortless movement.',
    designHighlights: [
      'Laser-aligned heavy-gauge solid brass rods with concealed wall anchors',
      'Hand-turned cylindrical finials with brushed protective lacquer',
      'Dual-bracket system accommodating independent sheer and blackout fabrics',
      'Silent nylon gliders tested for decades of smooth daily use',
    ],
    materials: [
      'Solid Brushed Brass Rods & Brackets',
      'Silent-Glide Nylon Track Carriers',
      'Heavyweight Belgian Slub Linen',
      'Thermal Blackout Lining Fabric',
    ],
    isFeatured: false,
  },
];

// Real Google Reviews - Strictly preserved text, never fabricated, fully visible
export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Verified Bengaluru Client',
    context: 'Home Interior & Custom Finishing',
    rating: 5,
    quote:
      'Good work with finishing and rates are also reasonable with good quality items.',
    link: STUDIO_INFO.googleReviewsUrl,
  },
  {
    id: 'review-2',
    author: 'Verified Bengaluru Client',
    context: 'Turnkey Residential Execution',
    rating: 5,
    quote:
      'Their commitment to quality and customer satisfaction is truly commendable.',
    link: STUDIO_INFO.googleReviewsUrl,
  },
  {
    id: 'review-3',
    author: 'Verified Bengaluru Client',
    context: 'Modular Kitchen & Precision Fitment',
    rating: 5,
    quote:
      'Precise and quality work and product delivered on time every time.',
    link: STUDIO_INFO.googleReviewsUrl,
  },
];

// Section 6 Values: Craftsmanship and Quality ("Details Make the Difference.")
export const WHY_CHOOSE_US: ValuePillar[] = [
  {
    title: 'Quality Materials',
    subtitle: 'Boiling-water-proof plywood & authentic stone',
    description:
      'We use calibrated marine-grade BWR/BWP plywood cores, natural granite and quartz slabs, and certified European hardware designed for lasting structural durability.',
  },
  {
    title: 'Attention to Detail',
    subtitle: 'From joinery seams to lighting warmth',
    description:
      'We believe the luxury of an interior lies in millimeter precision—how a stone edge meets a timber panel, how lighting eliminates shadows, and how every hinge operates silently.',
  },
  {
    title: 'Finishing',
    subtitle: 'Artisanal limewash, PU coats & seamless joints',
    description:
      'A room is defined by the quality of its finish. We apply multi-coat PU polishes, velvety matte wall emulsions, and hand-rubbed timber finishes that bring warmth and tactile distinction.',
  },
  {
    title: 'Timely Delivery',
    subtitle: 'Disciplined milestones delivered on schedule',
    description:
      'Time is your most valuable asset. We structure realistic delivery schedules with weekly milestone updates and disciplined on-site supervision to deliver on time, every time.',
  },
  {
    title: 'Customer Satisfaction',
    subtitle: 'Rated 4.9/5 across 38 verified Google reviews',
    description:
      'Our reputation is built on transparent communication, polite craftsmanship, respectful site manners, and proactive post-handover support for long-term peace of mind.',
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    subtitle: 'Listening to your lifestyle, needs & budget',
    description:
      'We begin with an in-depth conversation at our Vijaya Bank Layout studio or on your property site to understand how you live, your functional pain points, spatial desires, and timeline goals.',
    keyOutputs: [
      'Site measurements & structural audit',
      'Client lifestyle questionnaire',
      'Preliminary scope & budget alignment',
    ],
  },
  {
    step: '02',
    title: 'Spatial Planning & 3D Concept',
    subtitle: 'Visualizing layout flow and proportions',
    description:
      'Our designers develop optimized 2D furniture circulation plans followed by realistic 3D concepts. You visualize materials, lighting, and joinery proportions before hammer touches nail.',
    keyOutputs: [
      '2D furniture layout & clearance plans',
      '3D photo-realistic visual concepts',
      'Color palette & material direction',
    ],
  },
  {
    step: '03',
    title: 'Material Curation & Costing',
    subtitle: 'Touching the stone, veneers & hardware',
    description:
      'We review real physical material samples together—wood veneers, quartz counters, linen drapery, and hardware finishes. We finalize a line-item Bill of Quantities (BOQ) with transparent rates.',
    keyOutputs: [
      'Physical material & finish approval boards',
      'Detailed itemized BOQ with fixed pricing',
      'Execution schedule & delivery milestones',
    ],
  },
  {
    step: '04',
    title: 'Precision Execution & Site Supervision',
    subtitle: 'Crafted with discipline and clean job sites',
    description:
      'Our skilled carpenters, electricians, and painters execute on site under direct studio supervision. We maintain clean, organized work areas, adhere to gated society rules, and share weekly photo progress.',
    keyOutputs: [
      'Full factory-grade modular joinery fitment',
      'Civil, electrical, plumbing & false ceiling works',
      'Artisanal painting, wood polishing & drapery mounting',
    ],
  },
  {
    step: '05',
    title: 'Quality Audit & White-Glove Handover',
    subtitle: 'Punctual delivery and ongoing care',
    description:
      'Before handing you the keys, we conduct a 50-point quality checklist covering every drawer channel, electrical switch, and surface finish. We hand over your clean, ready-to-live home on schedule.',
    keyOutputs: [
      '50-point quality inspection & defect sign-off',
      'Deep site cleaning & final styling',
      'Handover document kit & warranty certificates',
    ],
  },
];
