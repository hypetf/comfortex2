import React, { useEffect, useState } from 'react';
import styles from './ProductsPage.styles.css';
import medicalImg from '../../assets/medical_mattress.png';
import beddingImg from '../../assets/bedding_mattress.webp';
import furnitureImg from '../../assets/furniture_mattress.webp';
import marineImg from '../../assets/marine_mattress.webp';
import carImg from '../../assets/car_seat.jpg';
import {
  Layers,
  Wrench,
  Truck,
  Phone,
  ArrowRight,
  ShieldCheck,
  Check,
  Sliders,
  Scissors,
  Package,
  Award
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Ranges', targetId: 'top' },
  { id: 'healthcare', label: 'Medical & Healthcare', targetId: 'medical-mattresses' },
  { id: 'bedding', label: 'Domestic Bedding', targetId: 'domestic-mattresses' },
  { id: 'furniture', label: 'Furniture & Seating', targetId: 'furniture' },
  { id: 'marine', label: 'Marine & Specialist', targetId: 'marine' },
  { id: 'automotive', label: 'Automotive & Fleet', targetId: 'automotive' },
  { id: 'custom', label: 'Custom & Technical', targetId: 'custom-solutions' },
  { id: 'grades', label: 'Foam Grades Chart', targetId: 'foam-grades' }
];

const MASTER_FOAM_GRADES = [
  {
    code: 'RX36',
    name: 'Medium Density',
    density: '36 kg/m³',
    firmness: 'Medium',
    color: '#bfdbfe',
    standards: 'BS 5852 Crib 5',
    applications: 'Domestic mattresses, sofa backs, toppers, padded upholstery',
    delivery: 'Bulk blocks, CNC sheets, finished cushions, vacuum-rolled cores'
  },
  {
    code: 'RX39',
    name: 'High Density Firm',
    density: '39 kg/m³',
    firmness: 'Firm',
    color: '#93c5fd',
    standards: 'BS 5852 Crib 5 / BS 7177',
    applications: 'Contract seating, commercial banquettes, firm orthopedic mattresses',
    delivery: 'Precision cut cushions, castellated slabs, laminated sets'
  },
  {
    code: 'HR40',
    name: 'Luxury Reflex Foam',
    density: '40 kg/m³',
    firmness: 'Medium-Firm',
    color: '#bae6fd',
    standards: 'BS 5852 Crib 5 (High Resilience)',
    applications: 'High-end domestic mattresses, luxury sofa seats, hotel bedding',
    delivery: 'Multi-layer laminated cores, boxed mattresses, kitted cushions'
  },
  {
    code: 'V50',
    name: 'Visco Memory Foam',
    density: '50 kg/m³',
    firmness: 'Medium-Soft',
    color: '#e0e7ff',
    standards: 'BS 5852 Crib 5, Oeko-Tex Standard 100',
    applications: 'Clinical pressure-care toppers, ergonomic sleep systems, contours',
    delivery: 'Sheets (2.5cm–10cm), zoned profiled overlays, finished toppers'
  },
  {
    code: 'RB80',
    name: 'Re-Bonded Foam',
    density: '80 kg/m³',
    firmness: 'Extra Firm',
    color: '#cbd5e1',
    standards: 'BS 5852 Schedule 1 Part 1',
    applications: 'Acoustic soundproofing, gym flooring, heavy contract seating bases',
    delivery: 'Full conversion blocks, cut-to-size acoustic tiles, floor underlays'
  },
  {
    code: 'DRY30',
    name: 'Reticulated Dry-Feel',
    density: '30 kg/m³',
    firmness: 'Firm Outdoor',
    color: '#a7f3d0',
    standards: 'Water-draining, Anti-Microbial',
    applications: 'Marine yacht cockpit cushions, outdoor patio furniture, spa loungers',
    delivery: 'Custom bevelled boat sets, mesh-vented cushions, raw sheets'
  }
];

export function ProductsPage({ onNavigateConfigurator, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Scroll to hash on mount if present
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollToSection = (targetId) => {
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveTab('all');
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(targetId);
    }
  };

  return (
    <div className={styles.productsPage}>
      {/* 1. HERO BANNER */}
      <section className={styles.pageHero} id="top">
        <div className={styles.heroContainer}>
          <div className={styles.heroHeaderGroup}>
            <span className={styles.heroEyebrowBadge}>ENGINEERED FOAM CONVERSION &amp; MANUFACTURING</span>
            <h1 className={styles.heroHeading}>Our Foam Ranges &amp; Industry Solutions</h1>
            <p className={styles.heroDescription}>
              Over 25 years of British manufacturing excellence in Oldham. We engineer, profile, and supply precision-cut polyurethane, high-resilience reflex, viscoelastic memory foam, and reticulated outdoor grades for healthcare, furniture, bedding, and specialist industries UK-wide.
            </p>

            <div className={styles.heroCtaGroup}>
              <button
                type="button"
                className={styles.heroBtnPrimary}
                onClick={onNavigateConfigurator}
              >
                <Sliders size={18} />
                Build Custom Foam Cut to Size
              </button>

              <a href="tel:01616652420" className={styles.heroBtnPhone}>
                <Phone size={18} />
                Speak with Oldham Engineers: 0161 665 2420
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY CATEGORY ANCHOR FILTER BAR */}
      <nav className={styles.categoryFilterSection} aria-label="Product categories navigation">
        <div className={styles.categoryFilterContainer}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.categoryFilterPill} ${activeTab === cat.targetId ? styles.categoryFilterPillActive : ''}`}
              onClick={() => scrollToSection(cat.targetId)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. SHOWCASE SECTIONS */}
      <main className={styles.rangesMainContainer}>

        {/* SECTION 1: MEDICAL & HEALTHCARE */}
        <section
          className={styles.foamShowcaseCard}
          id="medical-mattresses"
          aria-labelledby="title-medical"
        >
          <div id="healthcare" style={{ position: 'relative', top: '-140px' }} />
          <div className={styles.cardTopGrid}>
            <div className={styles.imageContainer}>
              <img
                src={medicalImg}
                alt="Medical pressure-relieving hospital mattress cutaway"
                className={styles.showcaseImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageFloatingBadges}>
                <span className={styles.floatingTag}>NHS &amp; Care Home Tested</span>
                <span className={styles.floatingTag}>BS 6807 Crib 7 / Crib 5</span>
                <span className={styles.floatingTag}>Castellated Multi-Zone</span>
              </div>
            </div>

            <div className={styles.cardContentArea}>
              <div className={styles.cardHeaderGroup}>
                <span className={styles.cardCategoryBadge}>CLINICAL &amp; HEALTHCARE SPECIFICATION</span>
                <h2 id="title-medical" className={styles.cardMainTitle}>
                  Medical Mattresses &amp; Pressure Care Foams
                </h2>
                <p className={styles.cardLeadText}>
                  Engineered specifically for NHS trusts, private hospitals, nursing homes, and hospice facilities. Our clinical mattresses prevent tissue breakdown by redistributing patient body weight across targeted pressure zones.
                </p>

                <div className={styles.cardSpecsPillRow}>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Risk Category</span>
                    <span className={styles.specPillValue}>Very High Risk / Grade 4</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Core Weight Capacity</span>
                    <span className={styles.specPillValue}>Up to 254 kg (40 Stone)</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Compliance</span>
                    <span className={styles.specPillValue}>ISO 9001 / BS 7177</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Technical Deep Dive */}
          <div className={styles.cardTechnicalGrid}>
            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Layers size={18} />
                </div>
                <h3 className={styles.columnTitle}>Foams Used for this Use Case</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Castellated Polyurethane (RX39 / CMHR):</strong> High-density base foam cut with dual-directional channels for air circulation and profiling hospital beds.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Visco Memory Foam (V50):</strong> Pressure-relieving top tier contouring around the sacrum and heels to eliminate pressure spikes.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Reinforced Side Walls:</strong> Ultra-firm perimeter walls assisting patient ingress, egress, and preventing roll-out.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Anti-Microbial &amp; Anti-Fungal:</strong> Treated to inhibit MRSA and bacterial ingress.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Wrench size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Work With It</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>CNC Contour Profiling:</strong> Precision computer-guided blades carve ergonomic zones for head, torso, sacrum, and lower leg.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Water-Based Eco Bonding:</strong> Environmentally clean adhesive lamination ensuring zero off-gassing in clinical wards.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Ultrasonic Cover Welding:</strong> Radio-frequency welded PU covers preventing fluid ingress through stitched seams.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Truck size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Deliver It &amp; Forms</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Finished Complete Mattresses:</strong> Encased in two-way stretch, vapour-permeable, wipe-clean waterproof PU covers with waterfall flaps.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Bare Core Replacements:</strong> Precision replacement foam cores for existing hospital fleet covers.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Bespoke Sizing:</strong> Custom dimensions for bariatric beds, ambulance stretchers, and dynamic alternating air cell cushions.
                </li>
              </ul>
            </div>
          </div>

          {/* Action Bar */}
          <div className={styles.cardActionBar}>
            <span className={styles.actionNote}>
              Direct delivery to NHS supply chain, care groups, and medical distributors UK-wide.
            </span>
            <div className={styles.cardActionButtonsGroup}>
              <button
                type="button"
                className={styles.btnCardConfigure}
                onClick={onNavigateConfigurator}
              >
                Configure Medical Foam Cut to Size <ArrowRight size={15} />
              </button>
              <a href="tel:01616652420" className={styles.btnCardCall}>
                <Phone size={15} /> 0161 665 2420
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: DOMESTIC BEDDING & SLEEP SYSTEMS */}
        <section
          className={styles.foamShowcaseCard}
          id="domestic-mattresses"
          aria-labelledby="title-bedding"
        >
          <div id="bedding" style={{ position: 'relative', top: '-140px' }} />
          <div className={styles.cardTopGrid}>
            <div className={styles.imageContainer}>
              <img
                src={beddingImg}
                alt="Domestic luxury mattress quilted comfort layers"
                className={styles.showcaseImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageFloatingBadges}>
                <span className={styles.floatingTag}>Rolled &amp; Boxed Drop-Ship</span>
                <span className={styles.floatingTag}>High Resilience Reflex</span>
                <span className={styles.floatingTag}>Zero Motion Transfer</span>
              </div>
            </div>

            <div className={styles.cardContentArea}>
              <div className={styles.cardHeaderGroup}>
                <span className={styles.cardCategoryBadge}>BEDDING &amp; SLEEP SYSTEMS</span>
                <h2 id="title-bedding" className={styles.cardMainTitle}>
                  Domestic Mattresses, Hybrid Cores &amp; Toppers
                </h2>
                <p className={styles.cardLeadText}>
                  Partnering with leading UK retail bed brands, boutique hotels, and student housing developers. We manufacture high-performance foam mattress cores and hybrid sleep systems designed for long-lasting spine alignment and cloud-like pressure relief.
                </p>

                <div className={styles.cardSpecsPillRow}>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Feel Options</span>
                    <span className={styles.specPillValue}>Soft, Medium, Ortho-Firm</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Drop-Ship Ready</span>
                    <span className={styles.specPillValue}>Vacuum Compression Packaging</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Fire Safety</span>
                    <span className={styles.specPillValue}>BS 7177 Low &amp; Medium Hazard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardTechnicalGrid}>
            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Layers size={18} />
                </div>
                <h3 className={styles.columnTitle}>Foams Used for this Use Case</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Luxury Reflex Foam (HR40):</strong> High-resilience polyurethane delivering instant buoyant recovery with zero sag over years of daily sleep.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Cool-Gel &amp; Visco Memory (V50):</strong> Body-moulding contouring layer that dissipates excess sleep heat and isolates motion transfer.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Eco-Foam Sustainable Base:</strong> 100% recycled re-bonded base layers engineered for zero environmental landfill waste.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Wrench size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Work With It</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Multi-Tier Sandwich Lamination:</strong> Seamlessly bonding memory foam, transition layers, and base foam into unified core systems.
                </li>
                <li className={styles.columnListItem}>
                  <strong>CNC Slicing &amp; Convoluting:</strong> Precise egg-crate zoning for natural airflow channels beneath the sleep surface.
                </li>
                <li className={styles.columnListItem}>
                  <strong>In-House Tape-Edging &amp; Quilting:</strong> Full cut-and-sew textile team manufacturing quilted covers, border handles, and breathable 3D mesh spacers.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Truck size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Deliver It &amp; Forms</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Bed-In-A-Box Direct Drop-Ship:</strong> Roll-packed into branded retail cartons, ready for doorstep courier distribution.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Full Flat Pack B2B Pallets:</strong> Flat, uncompressed poly-wrapped mattresses for hotel fit-outs and student residential developments.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Foam Cores Only:</strong> Bulk mattress inserts supplied directly to mattress assemblers and spring manufacturers.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.cardActionBar}>
            <span className={styles.actionNote}>
              White-label OEM contract manufacturing available with custom brand labels and cartons.
            </span>
            <div className={styles.cardActionButtonsGroup}>
              <button
                type="button"
                className={styles.btnCardConfigure}
                onClick={onNavigateConfigurator}
              >
                Configure Mattress Foam <ArrowRight size={15} />
              </button>
              <a href="tel:01616652420" className={styles.btnCardCall}>
                <Phone size={15} /> 0161 665 2420
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3: FURNITURE & CONTRACT UPHOLSTERY */}
        <section
          className={styles.foamShowcaseCard}
          id="furniture"
          aria-labelledby="title-furniture"
        >
          <div id="furniture-upholstery" style={{ position: 'relative', top: '-140px' }} />
          <div className={styles.cardTopGrid}>
            <div className={styles.imageContainer}>
              <img
                src={furnitureImg}
                alt="Furniture sofa armchair cushions and foam seat interiors"
                className={styles.showcaseImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageFloatingBadges}>
                <span className={styles.floatingTag}>British Furniture Makers</span>
                <span className={styles.floatingTag}>Dacron Wrapped &amp; Stockinette</span>
                <span className={styles.floatingTag}>BS 5852 Crib 5 Certified</span>
              </div>
            </div>

            <div className={styles.cardContentArea}>
              <div className={styles.cardHeaderGroup}>
                <span className={styles.cardCategoryBadge}>FURNITURE &amp; CONTRACT UPHOLSTERY</span>
                <h2 id="title-furniture" className={styles.cardMainTitle}>
                  Furniture Foams, Sofa Seats &amp; Cushion Cores
                </h2>
                <p className={styles.cardLeadText}>
                  Trusted partner to major British sofa brands, contract banquette fitters, and commercial interior specialists. We produce seat cushions that retain shape, resist fatigue, and maintain a plush, tailored showroom appearance.
                </p>

                <div className={styles.cardSpecsPillRow}>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Cushion Profiles</span>
                    <span className={styles.specPillValue}>T-Shape, L-Shape, Bullnose, D-Cushion</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Dacron Wrap</span>
                    <span className={styles.specPillValue}>4oz to 14oz Bonded Wadding</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Tolerance</span>
                    <span className={styles.specPillValue}>Precision CNC ±1mm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardTechnicalGrid}>
            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Layers size={18} />
                </div>
                <h3 className={styles.columnTitle}>Foams Used for this Use Case</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>RX36 (Medium):</strong> Balanced softness for deep sofa lounge cushions and armchair back supports.
                </li>
                <li className={styles.columnListItem}>
                  <strong>RX39 (High Density Firm):</strong> High-resilience core preventing sagging in heavy-use contract seating, dining chairs, and booth banquettes.
                </li>
                <li className={styles.columnListItem}>
                  <strong>HR40 Luxury Reflex:</strong> Supreme elasticity and recovery, eliminating hollow pockets and wrinkled upholstery fabrics.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Bonded Dacron Wadding:</strong> Thermal-bonded polyester fibre creating an inviting domed crown.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Wrench size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Work With It</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>3D CNC Contour Cutting:</strong> Precision oscillating wire systems cut complex bevels, front roll crowns, and curved corner cushions.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Dacron &amp; Stockinette Fitting:</strong> Every cushion is wrapped in polyester wadding and encased in knitted elastic stockinette for easy insertion into fabric covers.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Dual-Core Density Pairing:</strong> Firm base core laminated with a softer topper for luxurious initial sit with firm posture support.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Truck size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Deliver It &amp; Forms</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Ready-to-Stuff Finished Cushions:</strong> Stockinette-wrapped foam cushions delivered directly to upholstery assembly lines.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Kitted Model Sets:</strong> Seat cushions, back pads, arm wraps, and bolster sets bundled together per furniture SKU.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Raw Billet &amp; Slabs:</strong> Full conversion blocks and sheets for independent master upholsterers.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.cardActionBar}>
            <span className={styles.actionNote}>
              Bring your CAD patterns or cardboard templates for same-week prototyping.
            </span>
            <div className={styles.cardActionButtonsGroup}>
              <button
                type="button"
                className={styles.btnCardConfigure}
                onClick={onNavigateConfigurator}
              >
                Configure Sofa Cushion Foam <ArrowRight size={15} />
              </button>
              <a href="tel:01616652420" className={styles.btnCardCall}>
                <Phone size={15} /> 0161 665 2420
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: MARINE & OUTDOOR SPECIALIST */}
        <section
          className={styles.foamShowcaseCard}
          id="marine"
          aria-labelledby="title-marine"
        >
          <div id="marine-specialist" style={{ position: 'relative', top: '-140px' }} />
          <div className={styles.cardTopGrid}>
            <div className={styles.imageContainer}>
              <img
                src={marineImg}
                alt="Luxury marine boat cockpit cushions and water-resistant foam"
                className={styles.showcaseImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageFloatingBadges}>
                <span className={styles.floatingTag}>Reticulated Dry-Feel</span>
                <span className={styles.floatingTag}>Anti-Mildew &amp; UV Stable</span>
                <span className={styles.floatingTag}>Custom Boat V-Berth Cuts</span>
              </div>
            </div>

            <div className={styles.cardContentArea}>
              <div className={styles.cardHeaderGroup}>
                <span className={styles.cardCategoryBadge}>MARINE &amp; OUTDOOR SPECIALIST</span>
                <h2 id="title-marine" className={styles.cardMainTitle}>
                  Marine Cockpit, V-Berth &amp; Outdoor Cushions
                </h2>
                <p className={styles.cardLeadText}>
                  Engineered to endure salt spray, heavy rain, and harsh marine environments. From narrowboats and luxury motor yachts to commercial coastal craft, our reticulated dry-feel foams drain water instantly without holding moisture or mildew.
                </p>

                <div className={styles.cardSpecsPillRow}>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Water Drainage</span>
                    <span className={styles.specPillValue}>100% Free Draining Open-Cell</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Mold Resistance</span>
                    <span className={styles.specPillValue}>Anti-Microbial Biocide Treated</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Fitment</span>
                    <span className={styles.specPillValue}>Tapered Hulls &amp; Folding Berths</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardTechnicalGrid}>
            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Layers size={18} />
                </div>
                <h3 className={styles.columnTitle}>Foams Used for this Use Case</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Reticulated Dry-Feel Foam:</strong> Completely open, honeycomb mesh cell structure allowing water to flow straight through within minutes.
                </li>
                <li className={styles.columnListItem}>
                  <strong>High-Density Marine Cabin Core:</strong> Resilient foam cores engineered for cabin bunks resistant to humid dampness.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Closed-Cell PE (Plastazote):</strong> Zero water absorption foam used for buoyant cockpit bases and marine life-saving applications.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Wrench size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Work With It</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Hull-Angle Chamfering:</strong> Tapering foam edges to conform to curved fibreglass hulls and angular boat bows.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Hinged Split Cushioning:</strong> Segmented folding berths designed for easy access to under-seat boat storage lockers.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Mesh Underside Construction:</strong> Integrated open textilene mesh underbellies allowing quick air drying after rain.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Truck size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Deliver It &amp; Forms</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Fully Upholstered Marine Sets:</strong> Covered in UV-stable Sunbrella fabric or marine-grade wipe-clean vinyl.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Template-Cut Foam Profiles:</strong> Precision bare foam cut exactly to customer card templates.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Outdoor Patio Sets:</strong> Quick-dry replacement cushion sets for commercial hospitality terraces and beer gardens.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.cardActionBar}>
            <span className={styles.actionNote}>
              Send us your deck drawings or cardboard templates for precise digitized CAD conversion.
            </span>
            <div className={styles.cardActionButtonsGroup}>
              <button
                type="button"
                className={styles.btnCardConfigure}
                onClick={onNavigateConfigurator}
              >
                Configure Marine Foam <ArrowRight size={15} />
              </button>
              <a href="tel:01616652420" className={styles.btnCardCall}>
                <Phone size={15} /> 0161 665 2420
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 5: AUTOMOTIVE & TRANSPORT */}
        <section
          className={styles.foamShowcaseCard}
          id="automotive"
          aria-labelledby="title-automotive"
        >
          <div id="automotive-transport" style={{ position: 'relative', top: '-140px' }} />
          <div className={styles.cardTopGrid}>
            <div className={styles.imageContainer}>
              <img
                src={carImg}
                alt="Automotive seating and custom campervan rock and roll bed foam"
                className={styles.showcaseImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageFloatingBadges}>
                <span className={styles.floatingTag}>Camper Rock &amp; Roll Beds</span>
                <span className={styles.floatingTag}>FMVSS 302 Compliant</span>
                <span className={styles.floatingTag}>Anti-Vibration High Density</span>
              </div>
            </div>

            <div className={styles.cardContentArea}>
              <div className={styles.cardHeaderGroup}>
                <span className={styles.cardCategoryBadge}>AUTOMOTIVE &amp; FLEET TRANSPORT</span>
                <h2 id="title-automotive" className={styles.cardMainTitle}>
                  Automotive Seating &amp; Campervan Foam Kits
                </h2>
                <p className={styles.cardLeadText}>
                  Specialist conversion partner for campervan builders, minibus manufacturers, and commercial fleet vehicle converters. We provide certified high-density foam that absorbs road vibration, meets automotive flammability standards, and provides sleeping comfort.
                </p>

                <div className={styles.cardSpecsPillRow}>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Automotive Fire Standard</span>
                    <span className={styles.specPillValue}>FMVSS 302 / ECE R118</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Camper Kits</span>
                    <span className={styles.specPillValue}>VW Transporter, Transit, Crafter</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Construction</span>
                    <span className={styles.specPillValue}>High-Density Re-Bond Core + Topper</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardTechnicalGrid}>
            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Layers size={18} />
                </div>
                <h3 className={styles.columnTitle}>Foams Used for this Use Case</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>High-Density Heavy Duty Base (RB80):</strong> Re-bonded core that prevents passengers from feeling the steel frame of folding beds.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Medium-Firm Comfort Layer (RX39):</strong> Absorbs micro-vibrations and provides ergonomic posture during long highway driving.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Scrim-Backed Polyurethane:</strong> Foam backed with knit scrim fabric allowing easy pneumatic stapling and automotive trimming.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Wrench size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Work With It</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Segmented Fold Profiling:</strong> Precision multi-piece kits cut with angled hinge reliefs so cushions fold seamlessly between seat and bed mode.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Knee-Roll &amp; Bolster Shaping:</strong> CNC router shaping for pronounced bucket seat side supports and lumbar zones.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Acoustic Floor Insulation:</strong> Sound-damping under-carpet mats cutting engine and road noise transmission.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Truck size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Deliver It &amp; Forms</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Pre-Cut Rock &amp; Roll Kits:</strong> 3-piece and 4-piece kits cut to popular frame dimensions (3/4 width and full width).
                </li>
                <li className={styles.columnListItem}>
                  <strong>Elevating Roof Bunk Mattresses:</strong> Pop-top slimline high-density mattress pads (25mm–50mm thickness).
                </li>
                <li className={styles.columnListItem}>
                  <strong>Bulk Transport Seating:</strong> Commercial van and bus passenger seat foam batches shipped directly to coachbuilders.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.cardActionBar}>
            <span className={styles.actionNote}>
              Repeat batch supply for independent camper converters and commercial fleet refitters.
            </span>
            <div className={styles.cardActionButtonsGroup}>
              <button
                type="button"
                className={styles.btnCardConfigure}
                onClick={onNavigateConfigurator}
              >
                Configure Camper Foam <ArrowRight size={15} />
              </button>
              <a href="tel:01616652420" className={styles.btnCardCall}>
                <Phone size={15} /> 0161 665 2420
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 6: CUSTOM SOLUTIONS & TECHNICAL CONVERSION */}
        <section
          className={styles.foamShowcaseCard}
          id="custom-solutions"
          aria-labelledby="title-custom"
        >
          <div id="specialist" style={{ position: 'relative', top: '-140px' }} />
          <div className={styles.cardTopGrid}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Technical custom CNC converted foam parts and protective packaging"
                className={styles.showcaseImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageFloatingBadges}>
                <span className={styles.floatingTag}>CAD / DXF Converted</span>
                <span className={styles.floatingTag}>Acoustic Damping Panels</span>
                <span className={styles.floatingTag}>High-Density Re-Bond</span>
              </div>
            </div>

            <div className={styles.cardContentArea}>
              <div className={styles.cardHeaderGroup}>
                <span className={styles.cardCategoryBadge}>BESPOKE ENGINEERING &amp; TECHNICAL CONVERSION</span>
                <h2 id="title-custom" className={styles.cardMainTitle}>
                  Technical Packaging, Acoustic Panels &amp; Custom Foams
                </h2>
                <p className={styles.cardLeadText}>
                  From recording studio sound isolation and gym crash mats to delicate instrument flight cases and bespoke prototypes. Our CNC conversion facility handles non-standard shapes, multi-cavity routing, and composite material bonding.
                </p>

                <div className={styles.cardSpecsPillRow}>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Density Range</span>
                    <span className={styles.specPillValue}>18 kg/m³ to 120 kg/m³</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Cutting Technology</span>
                    <span className={styles.specPillValue}>Oscillating Knife, Waterjet, Wire</span>
                  </div>
                  <div className={styles.specPill}>
                    <span className={styles.specPillLabel}>Batch Size</span>
                    <span className={styles.specPillValue}>One-Off Prototypes to 100k Units</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardTechnicalGrid}>
            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Layers size={18} />
                </div>
                <h3 className={styles.columnTitle}>Foams Used for this Use Case</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Re-Bonded Foam (RB60 to RB120):</strong> Recycled, ultra-dense composite foam engineered for acoustic floor soundproofing and gym impact absorption.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Convoluted Acoustic Foam:</strong> Open-cell polyurethane profiled into sound-trapping egg-crate profiles for recording studios.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Closed-Cell Polyethylene (Plastazote):</strong> Non-dusting, chemically inert foam ideal for flight cases and medical equipment trays.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Wrench size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Work With It</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>CAD File Direct Conversion:</strong> Import DXF, DWG, and 3D files directly into nesting software for optimal yield and zero waste.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Multi-Cavity Deep Routing:</strong> Custom recesses tailored to delicate cameras, electronic tools, and bespoke parts.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Adhesive Backing Application:</strong> Peel-and-stick pressure sensitive adhesive (PSA) applied directly to foam sheets.
                </li>
              </ul>
            </div>

            <div className={styles.technicalColumn}>
              <div className={styles.columnHeaderRow}>
                <div className={styles.columnIconWrap}>
                  <Truck size={18} />
                </div>
                <h3 className={styles.columnTitle}>How We Deliver It &amp; Forms</h3>
              </div>
              <ul className={styles.columnList}>
                <li className={styles.columnListItem}>
                  <strong>Custom Case Inserts:</strong> Multi-layer dual-color shadow foam inserts for tool tracking and presentation boxes.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Acoustic Baffles &amp; Bass Traps:</strong> Boxed sound absorption kits ready for architectural mounting.
                </li>
                <li className={styles.columnListItem}>
                  <strong>Gym Matting &amp; Crash Cores:</strong> Heavy-duty landing pit foam blocks and exercise mat cores.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.cardActionBar}>
            <span className={styles.actionNote}>
              Send your technical sketches or CAD files to our engineering team for immediate quoting.
            </span>
            <div className={styles.cardActionButtonsGroup}>
              <button
                type="button"
                className={styles.btnCardConfigure}
                onClick={onNavigateConfigurator}
              >
                Configure Custom Foam <ArrowRight size={15} />
              </button>
              <a href="tel:01616652420" className={styles.btnCardCall}>
                <Phone size={15} /> 0161 665 2420
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: MASTER FOAM GRADES & SPECIFICATION LIBRARY */}
        <section
          className={styles.gradesTableSection}
          id="foam-grades"
          aria-labelledby="title-grades"
        >
          <div id="foam-products" style={{ position: 'relative', top: '-140px' }} />
          <div className={styles.tableHeaderGroup}>
            <span className={styles.cardCategoryBadge}>MATERIAL SPECIFICATION GUIDE</span>
            <h2 id="title-grades" className={styles.tableSectionTitle}>
              Master Foam Grades &amp; Technical Density Chart
            </h2>
            <p className={styles.tableSectionSubtitle}>
              Compare our standard production foam grades converted daily at our Oldham facility. All foams conform to UK fire safety regulations and ISO 9001 certified quality control.
            </p>
          </div>

          <div className={styles.tableResponsiveWrap}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>Grade Code</th>
                  <th>Density</th>
                  <th>Firmness Feel</th>
                  <th>Fire Safety Standard</th>
                  <th>Primary Applications</th>
                  <th>Supply Formats</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {MASTER_FOAM_GRADES.map((grade) => (
                  <tr key={grade.code}>
                    <td>
                      <div className={styles.gradeBadgeCell}>
                        <div className={styles.gradeSwatch} style={{ backgroundColor: grade.color }}>
                          {grade.code}
                        </div>
                        <div>
                          <span className={styles.gradeCodeName}>{grade.name}</span>
                        </div>
                      </div>
                    </td>
                    <td><strong>{grade.density}</strong></td>
                    <td>
                      <span className={styles.firmnessTag}>{grade.firmness}</span>
                    </td>
                    <td>{grade.standards}</td>
                    <td>{grade.applications}</td>
                    <td>{grade.delivery}</td>
                    <td>
                      <button
                        type="button"
                        className={styles.btnTableConfigure}
                        onClick={onNavigateConfigurator}
                      >
                        Configure &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* BOTTOM TRADE CONSULTATION BANNER */}
        <section className={styles.tradeConsultBanner}>
          <span className={styles.tradeBannerEyebrow}>BESPOKE PROJECT OR CONTRACT INQUIRY?</span>
          <h2 className={styles.tradeBannerTitle}>
            Speak Directly with our Oldham Production Team
          </h2>
          <p className={styles.tradeBannerText}>
            Whether you require a one-off prototype, custom CAD template conversion, or recurring wholesale batch deliveries, our Oldham engineers are ready to support your specification.
          </p>

          <div className={styles.tradeActionsGroup}>
            <a href="tel:01616652420" className={styles.btnTradeCall}>
              <Phone size={20} />
              Call Our Team: 0161 665 2420
            </a>
            <button
              type="button"
              className={styles.btnTradeConfig}
              onClick={onNavigateConfigurator}
            >
              <Sliders size={18} />
              Use Online Foam Configurator
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default ProductsPage;
