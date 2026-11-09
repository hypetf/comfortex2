import beddingImg from '../../assets/bedding_mattress.webp';
import medicalImg from '../../assets/medical_mattress.png';
import furnitureImg from '../../assets/furniture_mattress.webp';
import marineImg from '../../assets/marine_mattress.webp';
import carImg from '../../assets/car_seat.jpg';

export const industriesData = [
  {
    id: 'healthcare',
    number: '01',
    title: 'Healthcare & Medical',
    subtitle: 'Pressure Care & Infection-Control Solutions',
    badge: 'NHS & Healthcare Specialist',
    shortDescription: 'Medical mattresses, dynamic hybrid systems, and pressure care solutions engineered for hospital trusts, care homes, and clinical environments.',
    image: medicalImg,
    alt: 'Hospital bed with medical mattress in healthcare setting',
    stats: [
      { value: 'Grade 1–4', label: 'Ulcer Prevention', detail: 'High-risk clinical efficacy' },
      { value: 'Crib 7', label: 'Fire Rating', detail: 'High hazard BS 7177 standard' },
      { value: '99.9%', label: 'Antimicrobial', detail: 'Silver-ion & MRSA defense' },
      { value: '50k+', label: 'Beds Supplied', detail: 'Across UK NHS & private trusts' }
    ],
    overview: 'Comfortex is an approved tier-1 manufacturing partner to the UK healthcare sector. For over two decades, our Oldham cleanroom and medical fabrication lines have engineered advanced pressure-relieving mattress systems, alternating cell hybrids, and patient positioning solutions. Every mattress is crafted with castellated CMHR cores and high-frequency welded seams that eliminate fluid ingress, protecting both patients and medical staff.',
    capabilities: [
      {
        title: 'Castellated Zoned Profiling',
        description: 'Multi-density CNC engineered channels distribute patient weight evenly across sacral, heel, and spinal pressure zones.'
      },
      {
        title: 'RF Welded Zero-Stitch Covers',
        description: 'High-frequency radio welded polyurethane seams prevent viral and fluid ingress, meeting rigorous IPC infection control guidelines.'
      },
      {
        title: 'Bariatric Load Engineering',
        description: 'Reinforced multi-tier CMHR constructions designed to support patients up to 45 stone (285kg) without bottoming out.'
      },
      {
        title: 'Chlorine-Resistant Fabrics',
        description: 'Multi-stretch, vapour-permeable cover materials tested to endure repeated cleaning with 10,000 ppm active chlorine.'
      }
    ],
    products: [
      {
        name: 'Castellated High-Risk Pressure Mattress',
        tag: 'Static Care',
        description: 'Multi-zoned high resilience foam with independent cells that contour to patient anatomy, actively preventing tissue ischaemia.',
        features: ['BS 7177 Crib 5 & 7', 'Two-way stretch PU cover', 'Concealed zip with waterfall flap']
      },
      {
        name: 'Dynamic Air-Foam Hybrid Mattress',
        tag: 'High Dependency',
        description: 'Blends quiet dynamic cell technology with an integrated CMHR perimeter and foam base for step-up step-down clinical care.',
        features: ['Step-up/step-down care', 'Rapid CPR deflate valve', 'Intuitive pump interface']
      },
      {
        name: 'Operating Theatre & Trolley Pads',
        tag: 'Surgical & Emergency',
        description: 'Viscoelastic slow-recovery memory foam cushions designed for long surgical procedures, ambulance gurneys, and imaging suites.',
        features: ['Anti-static conductivity', 'X-ray translucent', 'Ultra-low shear profile']
      },
      {
        name: 'Bariatric Support Mattress',
        tag: 'Heavy Duty',
        description: 'Heavy-duty layered support core engineered to distribute extreme loads while keeping side-transfer wall stability firm.',
        features: ['Up to 45st (285kg) capacity', 'Reinforced side-walls', 'Heavy-duty transfer handles']
      }
    ],
    specifications: [
      { label: 'Core Material', value: 'Combustion Modified High Resilience (CMHR) Polyurethane' },
      { label: 'Density Range', value: '38 kg/m³ to 55 kg/m³ with viscoelastic memory top layers' },
      { label: 'Cover Specification', value: 'Multi-stretch, vapour-permeable, wipe-clean polyurethane' },
      { label: 'Fire Safety Standard', value: 'BS 7177:2008+A1:2011 (Medium & High Hazard / Crib 5 & Crib 7)' },
      { label: 'Infection Defense', value: 'Antimicrobial, antifungal, resistant to 10,000 ppm active chlorine' },
      { label: 'Quality Certification', value: 'Manufactured under ISO 9001:2015 & ISO 13485 aligned standards' }
    ],
    caseStudy: {
      headline: '2,400-Bed Regional Hospital Trust Modernization',
      client: 'Major NHS Foundation Trust, North West',
      challenge: 'The trust required a full ward mattress upgrade with zero lead-time disruption, requiring Crib 7 fire safety and welded covers that could withstand aggressive hospital sanitizers.',
      solution: 'Comfortex deployed dedicated production runs from our Oldham facility, delivering 2,400 precision-cut castellated pressure mattresses with RF-welded waterproof covers in staged phases.',
      result: 'Hospital reported a 42% decrease in avoidable tissue damage incidents across 18 months, with zero cover delamination or seam failures.'
    }
  },
  {
    id: 'bedding',
    number: '02',
    title: 'Bedding & Sleep Systems',
    subtitle: 'Contract & Premium Domestic Mattress Manufacturing',
    badge: 'British Sleep Engineering',
    shortDescription: 'High-volume contract bedding, luxury foam mattresses, cooling gel hybrids, and automated roll-pack packaging for retail brands and hospitality.',
    image: beddingImg,
    alt: 'Bedding mattress in modern bedroom setting',
    stats: [
      { value: '100k+', label: 'Mattresses / Year', detail: 'Manufactured in Oldham, UK' },
      { value: '7-Zone', label: 'Ergonomic Support', detail: 'Computerized contour wire-cut' },
      { value: 'BS 7177', label: 'Source 5 Certified', detail: 'Hospitality & student housing' },
      { value: '70%', label: 'Freight Reduction', detail: 'Automated roll-pack compression' }
    ],
    overview: 'Comfortex is the trusted white-label and contract mattress manufacturing partner for leading British consumer sleep brands, university accommodation portfolios, and boutique hotel groups. Our facility houses multi-axis CNC contour cutting systems, automated water-based adhesive laminators, and high-speed compression roll-packing lines that deliver high-capacity volumes with swift turnaround times.',
    capabilities: [
      {
        title: '7-Zone Anatomical Contouring',
        description: 'Targeted support profiling provides gentle shoulder sinkage, rigid lumbar alignment, and progressive pelvic support.'
      },
      {
        title: 'Automated Vacuum Roll-Packing',
        description: 'High-compression box-packing technology compresses mattresses up to 70% in volume for efficient direct-to-consumer dispatch.'
      },
      {
        title: 'Thermal Cooling Infusions',
        description: 'Gel-infused and open-cell viscoelastic formulations channel excess body heat away, maintaining an optimal sleep climate.'
      },
      {
        title: 'Custom Fabric & Quilting',
        description: 'In-house border quilting, bespoke tape edging, and branded jacquard or knitted covers cut and sewn to custom brand specifications.'
      }
    ],
    products: [
      {
        name: 'CoolGel Hybrid Mattress',
        tag: 'Premium Retail',
        description: 'Multi-layer construction pairing open-cell cooling memory foam with high-resilience transition bases for pressureless sleep.',
        features: ['Cooling gel infusion', 'Zero motion transfer', 'Hypoallergenic knit cover']
      },
      {
        name: 'Contract Source 5 Hotel Mattress',
        tag: 'Hospitality & Student',
        description: 'Heavy-duty CMHR core built for intensive hospitality wear, certified to BS 7177 Source 5 flame retardancy.',
        features: ['Crib 5 fire standard', 'Reinforced edge support', '10-year durability lifecycle']
      },
      {
        name: 'Roll-Packed Bed-in-a-Box',
        tag: 'Direct-to-Consumer',
        description: 'Turnkey private-label vacuum-sealed mattresses packed into branded retail cartons ready for carrier parcel distribution.',
        features: ['High-speed compression', 'Eco-friendly water adhesives', 'Custom branded boxes']
      },
      {
        name: 'Eco-Bonded Core Mattress',
        tag: 'Sustainable Living',
        description: 'Circular economy mattress featuring recycled bonded foam cores and OEKO-TEX certified organic fabric finishes.',
        features: ['100% recyclable components', 'Zero chemical propellant foam', 'Removable washable cover']
      }
    ],
    specifications: [
      { label: 'Foam Technologies', value: 'CoolGel™ memory foam, Reflex 30H-40H, and High-Resilience CMHR' },
      { label: 'Available Sizes', value: 'UK Single, Double, King, Super King, EU standards & bespoke dimensions' },
      { label: 'Mattress Depths', value: '150mm to 320mm multi-tier construction' },
      { label: 'Flame Retardancy', value: 'BS 7177 Low Hazard (Domestic) and Medium Hazard (Crib 5 / Contract)' },
      { label: 'Environmental Standards', value: 'CertiPUR® certified foam, OEKO-TEX Standard 100 fabric covers' },
      { label: 'Packaging Format', value: 'Flat-packed poly-wrapped or high-compression vacuum roll-pack' }
    ],
    caseStudy: {
      headline: 'Supply Chain Reshoring for Premium DTC Mattress Brand',
      client: 'Leading UK Direct-to-Consumer Sleep Brand',
      challenge: 'Client faced 14-week overseas shipping delays, inventory holding overheads, and inconsistent batch densities from their Far-East supplier.',
      solution: 'Comfortex engineered an exact equivalent 3-layer hybrid specification in Oldham, backed by automated roll-packing and 5-day on-demand production batches.',
      result: 'Lead times slashed from 14 weeks to 5 business days, carbon footprint reduced by 68%, and return rates dropped by 22%.'
    }
  },
  {
    id: 'furniture',
    number: '03',
    title: 'Furniture & Upholstery',
    subtitle: 'Precision Cushion Cores, Seating & Modular Foam Profiles',
    badge: 'Upholstery & Contract Seating',
    shortDescription: 'High-resilience seat cushions, feather-wrap cores, 3D CNC profiled back arms, and acoustic banquette foam for luxury and contract furniture.',
    image: furnitureImg,
    alt: 'Foam furniture armchair and interior seating',
    stats: [
      { value: '500+', label: 'Custom Tooling Profiles', detail: 'CNC shapes and frame geometries' },
      { value: '10 Year', label: 'Shape Retention', detail: 'Guaranteed resilient bounce-back' },
      { value: 'Crib 5', label: 'Commercial Standard', detail: 'BS 5852 Schedule 1 Part 1' },
      { value: '48h', label: 'Rapid Prototyping', detail: 'From CAD drawing to foam sample' }
    ],
    overview: 'Comfortex is an integral manufacturing backbone to the British furniture and commercial upholstery sector. We collaborate with master furniture makers, contract booth fabricators, and national sofa manufacturers to supply CNC wire-cut seat cushions, contoured backs, fiber-wrapped cores, and bespoke acoustic architectural seating blocks.',
    capabilities: [
      {
        title: '5-Axis CNC Wire & Blade Cutting',
        description: 'Digitally cuts intricate compound radiuses, waterfall bullnoses, and complex wedge profiles straight from customer CAD files.'
      },
      {
        title: 'Dacron & Feather-Wrap Lamination',
        description: 'Bonds premium thermal-bonded polyester Dacron wraps and channel-quilted feather casings to foam cores for luxurious crown contours.'
      },
      {
        title: 'Bespoke Density Pairing',
        description: 'Laminates firm load-bearing base foams with soft reflex toppers to prevent bottoming out while providing luxurious initial sink.'
      },
      {
        title: 'Automated Stockinette & Lined Enclosure',
        description: 'Applies protective stretch stockinette jackets to simplify upholstery insertion and prevent outer fabric friction wear.'
      }
    ],
    products: [
      {
        name: 'Feather-Wrap Reflex Seat Cushions',
        tag: 'Luxury Domestic',
        description: 'High-resilience reflex polyurethane core enveloped in chambered pocketed feather jackets for sumptuous casual elegance.',
        features: ['Zero sagging reflex core', 'Channel-stitched down casing', '10-year core resilience warranty']
      },
      {
        name: 'Contract Banquette & Booth Foam',
        tag: 'Hospitality & Commercial',
        description: 'Ultra-durable CMHR high-density foam slabs cut to bespoke lengths and angles for restaurant dining booths and hotel lounges.',
        features: ['BS 5852 Crib 5 compliant', 'Firm edge retention', 'Custom bevelled angles']
      },
      {
        name: 'CNC Contoured Arm & Back Profiles',
        tag: 'Architectural Seating',
        description: 'Complex 3D profiled curved components that hug wooden and tubular steel frame skeletons with millimeter accuracy.',
        features: ['CAD/CAM precision cut', 'Reduced assembly labor', 'Consistent seam alignment']
      },
      {
        name: 'Acoustic Modular Workspace Pods',
        tag: 'Modern Office',
        description: 'Sound-dampening acoustic foam blocks engineered for collaborative office booths, quiet phone hubs, and break-out benches.',
        features: ['Acoustic absorption rating', 'Heavy cyclic resilience', 'Lightweight modular handling']
      }
    ],
    specifications: [
      { label: 'Available Grades', value: 'CMHR 28 to CMHR 60, High Resilience Reflex, and Reconstituted Chipfoam (6lb to 9lb)' },
      { label: 'Finishing Options', value: 'Bare foam, Dacron fiber wrap (4oz to 14oz), stockinette fitted, feather casing' },
      { label: 'Fire Regulations', value: 'Furniture and Furnishings (Fire) (Safety) Regulations 1988 & BS 5852 Part 2 Crib 5' },
      { label: 'Tolerances', value: 'Tight industrial tolerances within ±2mm across contour dimensions' },
      { label: 'Adhesive Chemistry', value: 'Solvent-free water-based eco adhesives with zero VOC emissions' },
      { label: 'Tooling Compatibility', value: 'DXF, STEP, DWG files imported directly into CNC cutting carousels' }
    ],
    caseStudy: {
      headline: 'National Hospitality Rollout for 180 Premium Restaurants',
      client: 'Bespoke Contract Seating Contractor',
      challenge: 'Contractor required 1,200 meters of precision-profiled banquette seating foam across 180 site refits with strict Crib 5 fire compliance and identical batch firmness.',
      solution: 'Comfortex created custom CNC templates with calibrated CMHR 50 firm cores and soft bullnose tops, packed and barcoded per venue.',
      result: 'Accelerated upholstery installation times by 35% on site and achieved zero cushion bottoming-out claims after 4 years of continuous heavy service.'
    }
  },
  {
    id: 'marine',
    number: '04',
    title: 'Marine & Boating',
    subtitle: 'Reticulated Dry-Feel Foam & Nautical Berth Cushioning',
    badge: 'Marine & Superyacht Certified',
    shortDescription: 'Open-cell reticulated quick-dry foam, hull-contoured cabin berth mattresses, helm shock-absorption seats, and mildew-resistant marine upholstery.',
    image: marineImg,
    alt: 'Luxury boat cockpit and seating on open water',
    stats: [
      { value: '100%', label: 'Reticulated Open-Cell', detail: 'Rapid drainage technology' },
      { value: 'IMO FTP', label: 'Part 8 Compliant', detail: 'International maritime code' },
      { value: '5x Faster', label: 'Drying Time', detail: 'Compared to standard foam' },
      { value: 'UV & Salt', label: 'Resistant Chemistry', detail: 'Formulated for nautical use' }
    ],
    overview: 'The maritime environment places intense demands on foam materials. Comfortex manufactures specialized quick-dry reticulated foam and custom-sculpted cabin berths for yacht builders, canal cruiser refits, and superyacht tenders. Our open-pore reticulated skeletal foam allows rainwater and ocean spray to drain straight through, preventing mould, mildew, and foul odors.',
    capabilities: [
      {
        title: 'Pore-Controlled Reticulation',
        description: 'Engineered open-cell skeleton matrix (30 to 45 PPI) guarantees virtually instantaneous water runoff and continuous airflow.'
      },
      {
        title: 'Hull-Angle & V-Berth Contouring',
        description: 'Bevelled, raked, and custom-cambered cutting to fit non-linear boat hulls, forward V-berths, and under-deck storage lockers.'
      },
      {
        title: 'Anti-Microbial Biocide Additives',
        description: 'Inherent antimicrobial treatment permanently prevents fungal colonization and foul marine humidity odors.'
      },
      {
        title: 'Dual-Hardness Helm Seating',
        description: 'High-impact shock mitigation cores that absorb rough sea wave pounding, reducing skipper spinal compression during high-speed chop.'
      }
    ],
    products: [
      {
        name: 'Dry-Feel Reticulated Cockpit Cushions',
        tag: 'Exterior Decking',
        description: 'Ultra-breathable open-pore foam that allows seawater to flush through instantly, ready for dry seating within minutes under sunlight.',
        features: ['100% open pore structure', 'Mildew & rot proof', 'UV radiation stable']
      },
      {
        name: 'Custom V-Berth Cabin Mattresses',
        tag: 'Interior Sleeping',
        description: 'Multi-layer memory and reflex foam mattresses angled with compound bevels to fit yacht hull profiles perfectly.',
        features: ['Hull-contoured bevelled edges', 'Moisture-wicking backing', 'Hinged folding splits for storage']
      },
      {
        name: 'Offshore Helm Impact Seating',
        tag: 'Shock Mitigation',
        description: 'Multi-stage progressive resistance foam that absorbs heavy cyclic wave shocks at high cruise velocities.',
        features: ['Dual-hardness composite', 'Non-bottoming rebound', 'Marine vinyl adhesion']
      },
      {
        name: 'Flybridge Sunbed & Lounge Pads',
        tag: 'Superyacht Sun Decks',
        description: 'Lightweight, water-impermeable luxury lounging pads that resist harsh solar UV breakdown and salty sea air.',
        features: ['Heat-reflective foam cores', 'Lightweight handling', 'Crib 5 marine certified']
      }
    ],
    specifications: [
      { label: 'Reticulation Grades', value: 'Caligen & Dry-Feel Reticulated Polyurethane (30 PPI coarse to 45 PPI fine)' },
      { label: 'Biocidal Protection', value: 'Sanitized® antimicrobial biocide impregnated throughout molecular foam matrix' },
      { label: 'Maritime Approvals', value: 'IMO FTP Code 2010 Part 8 and ISO 12217 marine safety standards' },
      { label: 'Water Drainage Rate', value: 'Over 95% gravity water drainage within 90 seconds' },
      { label: 'Liner Compatibility', value: 'Breathable mesh underliners, marine PVC vinyls, and Sunbrella® fabrics' },
      { label: 'Custom Fit Service', value: 'Direct digital template digitization or physical template scanning' }
    ],
    caseStudy: {
      headline: 'Exterior Seating Refit for British Luxury Powerboat Fleet',
      client: 'Bespoke Marine Upholsterer & Boatbuilder',
      challenge: 'Conventional foam cushions in high-end powerboat cockpits retained saltwater, causing mildew spots, soggy cushions, and foul cabins within 6 months.',
      solution: 'Comfortex converted all cockpit and foredeck seating patterns to custom-cut 35 PPI reticulated dry-feel foam paired with porous flow-through bottom scrims.',
      result: 'Zero moisture retention, cushion drying times reduced from 24 hours to 30 minutes, and customer satisfaction rated 100% across two boating seasons.'
    }
  },
  {
    id: 'automotive',
    number: '05',
    title: 'Automotive & Transport',
    subtitle: 'Ergonomic Driver Seats, Fleet Conversions & NVH Insulation',
    badge: 'Automotive & Fleet Standards',
    shortDescription: 'High-durability vehicle seating, campervan rock-and-roll bed cushions, ambulance patient transport pads, and acoustic NVH firewall dampening.',
    image: carImg,
    alt: 'Automotive leather interior, dashboard and contoured seating',
    stats: [
      { value: 'FMVSS 302', label: 'Burn Rate Compliance', detail: 'Automotive flame certification' },
      { value: '1M+ Cycles', label: 'Fatigue Tested', detail: 'Heavy-duty transport durability' },
      { value: '-40° to +110°C', label: 'Thermal Resistance', detail: 'Extreme cabin temperature stability' },
      { value: 'Custom CAD', label: 'Laser & Waterjet', detail: 'Contoured vehicle bulkheads' }
    ],
    overview: 'From commercial fleet cabin seating to luxury campervan conversions, public transit coaches, and blue-light emergency vehicle fit-outs, Comfortex manufactures certified automotive foam solutions. We engineer ergonomic seating foam that dampens vibration and reduces driver fatigue, alongside specialized NVH (Noise, Vibration, and Harshness) acoustic dampening panels.',
    capabilities: [
      {
        title: 'Ergonomic Driver Bolster Profiling',
        description: 'Anatomically molded lateral bolsters and lumbar contours support fleet drivers during high-mileage road transit.'
      },
      {
        title: 'Campervan Foldable Bed Engineering',
        description: 'Multi-density dual-sided cushions that deliver supportive daytime posture and uncompromised nighttime spinal comfort.'
      },
      {
        title: 'Emergency Vehicle Sanitizable Pads',
        description: 'Contoured patient transit cushions encased in impervious, wipe-clean polyurethane with sealed welded perimeter seams.'
      },
      {
        title: 'NVH Sound & Vibration Absorption',
        description: 'Engineered open-cell polyurethane foam laminated with aluminum foil and heat-shield scrims for bulkhead noise suppression.'
      }
    ],
    products: [
      {
        name: 'Campervan "Rock & Roll" Bed Cushions',
        tag: 'Van Life & Leisure',
        description: 'Multi-piece CNC contoured folding cushion kits engineered to fit popular VW Transporter, Transit Custom, and Sprinter bed frames.',
        features: ['Dual-firmness design', 'Bevelled clearance cuts', 'Durable high-resilience core']
      },
      {
        name: 'Commercial Fleet Seating Cores',
        tag: 'HGV & Logistics',
        description: 'Long-life ergonomic seat bases and lumbar inserts engineered to withstand over 1,000,000 cyclic compression impacts.',
        features: ['FMVSS 302 burn tested', 'Ergonomic lumbar boost', 'Anti-fatigue contouring']
      },
      {
        name: 'Blue-Light Ambulance Interior Foam',
        tag: 'Emergency Vehicles',
        description: 'Medical-grade wipe-clean crash-tested cushions for paramedics and patient stretchers in emergency response fleets.',
        features: ['Fluid-proof welded covers', 'Infection control compliant', 'Anti-shear surface']
      },
      {
        name: 'Acoustic Bulkhead & Engine Insulation',
        tag: 'NVH Acoustics',
        description: 'Class 0 fire-rated acoustic foam panels cut to bulkhead templates, absorbing road rumble and engine decibel transfer.',
        features: ['Self-adhesive backing', 'High acoustic NRC rating', 'Thermal insulation barrier']
      }
    ],
    specifications: [
      { label: 'Automotive Standards', value: 'FMVSS 302, ISO 3795, and Regulation ECE R118 (burning behavior)' },
      { label: 'Foam Chemistries', value: 'High-Resilience CMHR, EPDM, Cross-linked Polyethylene, and Class 0 Acoustic Foam' },
      { label: 'Fatigue Resistance', value: 'Tested under BS EN ISO 3385 continuous fatigue pounding (80,000 cycles)' },
      { label: 'Adhesive Options', value: 'High-temperature acrylic pressure-sensitive adhesive (PSA) transfer tapes' },
      { label: 'Operating Range', value: 'Retains elasticity and structural integrity from -40°C to +110°C' },
      { label: 'File Integration', value: 'Direct conversion from OEM 3D CAD chassis models' }
    ],
    caseStudy: {
      headline: 'Ergonomic Fleet Seating Redesign for National Utility Van Fleet',
      client: 'Commercial Vehicle Bodybuilder & Fleet Converter',
      challenge: 'Utility fleet experienced high driver downtime due to back strain and premature seat bolster foam breakdown in high-entry vans.',
      solution: 'Comfortex engineered a dual-hardness CMHR seat cushion with high-density reinforced outer bolsters and a soft contour center.',
      result: 'Driver comfort complaints decreased by 74% and seat cushion service life doubled across 3,500 active fleet vans.'
    }
  },
  {
    id: 'specialist',
    number: '06',
    title: 'Specialist Applications',
    subtitle: 'Bespoke Technical CAD/CAM Foam, Packaging & Industrial Gasketing',
    badge: 'Custom Engineering & Defense',
    shortDescription: 'Custom shadow-board packaging, military flight-case inserts, sports impact deceleration pads, and high-tolerance industrial die-cut gasketing.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Specialist custom cut technical foam parts and engineering components',
    stats: [
      { value: '±0.5mm', label: 'Precision Tolerance', detail: 'High-precision CNC router & waterjet' },
      { value: '50+', label: 'Specialist Polymers', detail: 'Plastazotes, Evazote & XLPE' },
      { value: 'Mil-Spec', label: 'Packaging Compliant', detail: 'Def Stan 81-41 defense standards' },
      { value: 'Zero MOQ', label: 'Prototyping Agility', detail: 'Single units to 50,000+ batch runs' }
    ],
    overview: 'When off-the-shelf foam cannot meet demanding thermal, shock, or chemical tolerances, Comfortex delivers bespoke technical engineering. Our Oldham facility houses automated waterjet cutters, high-speed 3D routers, carousel horizontal splitters, and die-cutting presses to transform cross-linked polyethylenes, plastazotes, and composite foams into intricate components.',
    capabilities: [
      {
        title: 'High-Precision 3D Routing & Waterjet',
        description: 'Micro-tolerance waterjet cutting with zero heat-affected zones, perfect for intricate shadow-board flight case pockets.'
      },
      {
        title: 'Plastazote® & Cross-Linked Polyethylene (XLPE)',
        description: 'Closed-cell, chemically inert foams that offer extreme chemical resistance, waterproofing, and structural rigidity.'
      },
      {
        title: 'Multi-Layer Color Shadow-Boarding',
        description: 'Dual-contrast laminated foam sheets providing instant tool-missing visual alerts for aviation and cleanroom environments.'
      },
      {
        title: 'Adhesive Tape Kiss-Cutting & Lamination',
        description: 'Precision kiss-cut industrial gaskets supplied on continuous rolls with peel-and-stick backing for rapid production-line assembly.'
      }
    ],
    products: [
      {
        name: 'Aerospace & Defense Flight-Case Inserts',
        tag: 'Shock & Transit Protection',
        description: 'Custom CNC routed closed-cell foam cavities tailored to securely cradle delicate electronic instrumentation, optics, and drone payloads.',
        features: ['Def Stan 81-41 compliance', 'Drop-test certified', 'Custom tool shadow pockets']
      },
      {
        name: 'Sports Impact & Collision Padding',
        tag: 'Athletic Protection',
        description: 'High-energy shock absorbing foam blocks for gymnastic landing pits, rugby tackle shields, and martial arts wall protection.',
        features: ['High-impact dissipation', 'Heavy cyclic rebound', 'Tough vinyl encapsulation']
      },
      {
        name: 'Die-Cut Industrial Gaskets & Seals',
        tag: 'Thermal & Dust Sealing',
        description: 'Precision kiss-cut open and closed cell gaskets engineered to seal HVAC enclosures, lighting housings, and automotive bezels.',
        features: ['Pressure-sensitive adhesive', 'Continuous reel supply', '±0.5mm edge accuracy']
      },
      {
        name: 'Class 0 Anechoic Acoustic Baffles',
        tag: 'Architectural Acoustics',
        description: 'Pyramidal, wedge, and linear profiled acoustic absorption foam tuned for broadcast studios, testing chambers, and commercial venues.',
        features: ['Class 0 fire propagation', 'NRC 0.90+ acoustic absorption', 'Zero particulate shedding']
      }
    ],
    specifications: [
      { label: 'Technical Materials', value: 'Plastazote® (LD24 to LD70), Evazote®, EPDM, Neoprene, and Reconstituted Chipfoam (up to 200kg/m³)' },
      { label: 'Cutting Methods', value: 'Abrasive CNC wire cutting, 3-axis CNC router milling, pure waterjet, hydraulic die press' },
      { label: 'Defense & Aerospace', value: 'Def Stan 81-41 Part 1/2, Mil-Std-2073, Class 0 BS 476 Part 6 & 7 fire ratings' },
      { label: 'Tolerance Standards', value: 'Strict engineering tolerances down to ±0.5mm' },
      { label: 'Lamination Chemistries', value: 'Thermal heat fusion lamination and high-shear acrylic PSA tapes' },
      { label: 'CAD File Input', value: 'Direct STEP, DXF, IGES, and SolidWorks parametric imports' }
    ],
    caseStudy: {
      headline: 'Zero-Tolerance Transit Cushioning for Aerospace Optical Sensors',
      client: 'UK Defense & Avionics Subcontractor',
      challenge: 'Sensitive laser sensor assemblies suffered optical calibration drift during inter-facility transit inside standard packaging.',
      solution: 'Comfortex engineered high-density dual-color Plastazote® LD45 inserts with laser-measured deceleration cavities and antistatic liners.',
      result: 'Assemblies passed 2.5-meter military drop tests with zero calibration drift, eliminating £180,000 in annual recalibration expenses.'
    }
  }
];

