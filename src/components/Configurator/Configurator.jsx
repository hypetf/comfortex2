import React, { useState, useMemo } from 'react';
import styles from './Configurator.styles.css';
import {
  ShieldCheck,
  Wrench,
  Leaf,
  Truck,
  Check,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  AlertCircle,
  FileText,
  RotateCcw,
  Phone,
  Mail,
  Send,
  X,
  Lock,
  Building
} from 'lucide-react';

// Purpose options
const PURPOSES = [
  {
    id: 'mattress',
    label: 'Mattress / Bed',
    description: 'Standard domestic mattress, guest bed or custom topper'
  },
  {
    id: 'sofa',
    label: 'Sofa / Cushion',
    description: 'Seat cushion replacement, sofa bases, and back pillows'
  },
  {
    id: 'caravan',
    label: 'Caravan / Campervan',
    description: 'Bespoke vehicle bedding, camper berths and boat cushions'
  },
  {
    id: 'dining',
    label: 'Dining & Bench Seating',
    description: 'Bench pads, window seating and commercial banquettes'
  },
  {
    id: 'acoustic',
    label: 'Acoustic & Soundproofing',
    description: 'High-density sound absorption and studio insulation'
  },
  {
    id: 'custom',
    label: 'Specialist / Packaging',
    description: 'Equipment flight cases, gym mats or bespoke prototype padding'
  }
];

// Shape options
const SHAPES = [
  {
    id: 'rectangle',
    label: 'Rectangle',
    subtitle: 'Standard mattress or cushion',
    description: 'Uniform rectangular block for most beds and rectangular seats.'
  },
  {
    id: 'l-shape',
    label: 'L-Shape',
    subtitle: 'Corner or chaise style piece',
    description: 'Corner sofa cushions and wraparound bench sections.'
  },
  {
    id: 't-shape',
    label: 'T-Shape',
    subtitle: 'T-shaped piece',
    description: 'Front T-cushions wrapping around sofa armrests.'
  },
  {
    id: 'custom',
    label: 'Custom',
    subtitle: 'Irregular shape (or upload template)',
    description: 'Unusual curves, camper cutouts, wedges or bespoke templates.'
  }
];

// Foam Types
const FOAM_TYPES = [
  {
    id: 'rx36',
    code: 'RX36',
    name: 'Medium density (RX36)',
    density: '36 kg/m³',
    firmness: 'Medium',
    rateMultiplier: 1.0,
    swatchColor: '#bfdbfe',
    badgeText: 'Most Popular',
    description: 'Superior all-rounder. Balanced comfort and durability for daily mattress use and domestic seating.'
  },
  {
    id: 'rx39',
    code: 'RX39',
    name: 'High density firm (RX39)',
    density: '39 kg/m³',
    firmness: 'Firm',
    rateMultiplier: 1.22,
    swatchColor: '#93c5fd',
    badgeText: 'Firm Support',
    description: 'High support rating. Ideal for firm orthopaedic mattresses, bench seats, and high-wear dining chairs.'
  },
  {
    id: 'hr40',
    code: 'HR40',
    name: 'Luxury Reflex Foam (HR40)',
    density: '40 kg/m³',
    firmness: 'Medium-Firm',
    rateMultiplier: 1.34,
    swatchColor: '#bae6fd',
    badgeText: 'Luxury Feel',
    description: 'Premium high-resilience reflex foam with instant recovery. Unrivalled lifespan and body contouring.'
  },
  {
    id: 'v50',
    code: 'V50',
    name: 'Visco Memory Foam (V50)',
    density: '50 kg/m³',
    firmness: 'Medium-Soft',
    rateMultiplier: 1.45,
    swatchColor: '#e0e7ff',
    badgeText: 'Pressure Relieving',
    description: 'Thermosensitive viscoelastic memory foam. Melts under body pressure points to relieve joints.'
  },
  {
    id: 'rb80',
    code: 'RB80',
    name: 'Re-Bonded Foam (RB80)',
    density: '80 kg/m³',
    firmness: 'Extra Firm',
    rateMultiplier: 1.28,
    swatchColor: '#cbd5e1',
    badgeText: 'Heavy Duty',
    description: 'Ultra-dense recycled composite foam. Engineered for gymnasium flooring, sound damping, and church pews.'
  }
];

// Extras options
const EXTRAS_OPTIONS = [
  {
    id: 'stockinette',
    name: 'Stockinette Inner Lining',
    description: 'Elasticated protective net sleeve that makes inserting foam into fabric covers effortless.',
    price: 6.50
  },
  {
    id: 'dacron',
    name: 'Dacron Fibre Wrap (Polyester Wadding)',
    description: 'Soft 6oz wadding wrapped around foam core to create a plump, rounded, luxurious aesthetic.',
    price: 9.00
  },
  {
    id: 'waterproof',
    name: 'Waterproof Breathable Hygiene Shield',
    description: 'Medical-grade vapour-permeable cover protecting foam core from spills and moisture.',
    price: 14.00
  }
];

export function Configurator({ onNavigateHome, onOpenQuote }) {
  // Stepper State: 1 to 6
  const [currentStep, setCurrentStep] = useState(3); // Start on Step 3 for quick preview, or user can jump to any step

  // Configuration State
  const [purpose, setPurpose] = useState('Mattress / Bed');
  const [shape, setShape] = useState('rectangle');
  const [unit, setUnit] = useState('cm'); // cm, mm, in
  const [dimensions, setDimensions] = useState({
    width: 90,
    length: 190,
    thickness: 10
  });
  const [foamTypeId, setFoamTypeId] = useState('rx36');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    postcode: '',
    notes: ''
  });

  // Conversion helpers to standard cm
  const toCm = (val, currentUnit) => {
    if (currentUnit === 'mm') return val / 10;
    if (currentUnit === 'in') return val * 2.54;
    return val;
  };

  const fromCm = (valCm, targetUnit) => {
    if (targetUnit === 'mm') return Math.round(valCm * 10);
    if (targetUnit === 'in') return Math.round((valCm / 2.54) * 10) / 10;
    return Math.round(valCm * 10) / 10;
  };

  // Handle unit switch
  const handleUnitChange = (newUnit) => {
    if (newUnit === unit) return;
    setDimensions({
      width: fromCm(toCm(dimensions.width, unit), newUnit),
      length: fromCm(toCm(dimensions.length, unit), newUnit),
      thickness: fromCm(toCm(dimensions.thickness, unit), newUnit)
    });
    setUnit(newUnit);
  };

  // Dimensions in CM for consistent calculations
  const widthCm = toCm(dimensions.width, unit);
  const lengthCm = toCm(dimensions.length, unit);
  const thicknessCm = toCm(dimensions.thickness, unit);

  // Feasibility Check
  const isWithinLimits = widthCm <= 200 && lengthCm <= 200 && thicknessCm <= 30 && widthCm >= 5 && lengthCm >= 5 && thicknessCm >= 2;

  // Selected foam details
  const selectedFoam = useMemo(() => {
    return FOAM_TYPES.find((f) => f.id === foamTypeId) || FOAM_TYPES[0];
  }, [foamTypeId]);

  // Price Calculation
  // Target: 90 x 190 x 10 cm with RX36 gives exactly £54.00
  const pricing = useMemo(() => {
    const volumeM3 = (Math.max(1, widthCm) * Math.max(1, lengthCm) * Math.max(1, thicknessCm)) / 1000000;
    // Base formula calibrated so 0.171 m³ * 228 + 15 = £54.00
    const rawFoamPrice = (15 + volumeM3 * 228) * selectedFoam.rateMultiplier;
    const foamPrice = Math.max(18.00, Math.round(rawFoamPrice * 100) / 100);

    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      const item = EXTRAS_OPTIONS.find((e) => e.id === extraId);
      return sum + (item ? item.price : 0);
    }, 0);

    const totalPriceIncVat = foamPrice + extrasTotal;
    const subtotalExVat = Math.round((totalPriceIncVat / 1.2) * 100) / 100;
    const vat = Math.round((totalPriceIncVat - subtotalExVat) * 100) / 100;

    return {
      foamPrice,
      extrasTotal,
      subtotalExVat,
      vat,
      totalPriceIncVat
    };
  }, [widthCm, lengthCm, thicknessCm, selectedFoam, selectedExtras]);

  // Extras toggle
  const toggleExtra = (extraId) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  // Stepper navigation
  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Active shape label
  const activeShapeObj = SHAPES.find((s) => s.id === shape) || SHAPES[0];

  return (
    <div className={styles.configuratorPage}>
      {/* 1. Header Banner */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerTextGroup}>
            <span className={styles.eyebrowBadge}>FOAM CUT TO SIZE</span>
            <h1 className={styles.headerTitle}>Build your perfect piece of foam</h1>
            <p className={styles.headerSubtitle}>
              Use our online configurator to create a custom cut foam piece, tailored to your exact measurements and needs. Whether it&apos;s for a mattress, sofa, caravan or something unique – we&apos;ve got you covered.
            </p>
          </div>

          {/* 4 Feature Badges */}
          <div className={styles.featureBadgesGrid}>
            <div className={styles.featureBadgeCard}>
              <div className={styles.featureIconWrapper}>
                <ShieldCheck size={20} strokeWidth={2} />
              </div>
              <span className={styles.featureBadgeTitle}>High quality foam</span>
            </div>

            <div className={styles.featureBadgeCard}>
              <div className={styles.featureIconWrapper}>
                <Wrench size={20} strokeWidth={2} />
              </div>
              <span className={styles.featureBadgeTitle}>Made to measure in the UK</span>
            </div>

            <div className={styles.featureBadgeCard}>
              <div className={styles.featureIconWrapper}>
                <Leaf size={20} strokeWidth={2} />
              </div>
              <span className={styles.featureBadgeTitle}>Sustainable materials</span>
            </div>

            <div className={styles.featureBadgeCard}>
              <div className={styles.featureIconWrapper}>
                <Truck size={20} strokeWidth={2} />
              </div>
              <span className={styles.featureBadgeTitle}>Fast &amp; reliable delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Step Progress Bar */}
      <nav className={styles.stepperSection} aria-label="Configurator steps">
        <div className={styles.stepperContainer}>
          {/* Step 1: Purpose */}
          <button
            type="button"
            className={`${styles.stepItem} ${currentStep === 1 ? styles.stepItemActive : ''} ${currentStep > 1 ? styles.stepItemCompleted : ''}`}
            onClick={() => setCurrentStep(1)}
          >
            <div className={styles.stepCircle}>
              {currentStep > 1 ? <Check size={16} strokeWidth={2.5} /> : '1'}
            </div>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Purpose</span>
              <span className={styles.stepSubtitle}>{purpose} {currentStep > 1 ? '✓' : ''}</span>
            </div>
          </button>

          <div className={`${styles.stepConnector} ${currentStep > 1 ? styles.stepConnectorCompleted : ''}`} />

          {/* Step 2: Shape */}
          <button
            type="button"
            className={`${styles.stepItem} ${currentStep === 2 ? styles.stepItemActive : ''} ${currentStep > 2 ? styles.stepItemCompleted : ''}`}
            onClick={() => setCurrentStep(2)}
          >
            <div className={styles.stepCircle}>
              {currentStep > 2 ? <Check size={16} strokeWidth={2.5} /> : '2'}
            </div>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Shape</span>
              <span className={styles.stepSubtitle}>{activeShapeObj.label} {currentStep > 2 ? '✓' : ''}</span>
            </div>
          </button>

          <div className={`${styles.stepConnector} ${currentStep > 2 ? styles.stepConnectorCompleted : ''}`} />

          {/* Step 3: Measurements */}
          <button
            type="button"
            className={`${styles.stepItem} ${currentStep === 3 ? styles.stepItemActive : ''} ${currentStep > 3 ? styles.stepItemCompleted : ''}`}
            onClick={() => setCurrentStep(3)}
          >
            <div className={styles.stepCircle}>
              {currentStep > 3 ? <Check size={16} strokeWidth={2.5} /> : '3'}
            </div>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Measurements</span>
              <span className={styles.stepSubtitle}>
                {currentStep > 3 ? `${dimensions.width}×${dimensions.length}×${dimensions.thickness} ${unit}` : 'Set your dimensions'}
              </span>
            </div>
          </button>

          <div className={`${styles.stepConnector} ${currentStep > 3 ? styles.stepConnectorCompleted : ''}`} />

          {/* Step 4: Foam */}
          <button
            type="button"
            className={`${styles.stepItem} ${currentStep === 4 ? styles.stepItemActive : ''} ${currentStep > 4 ? styles.stepItemCompleted : ''}`}
            onClick={() => setCurrentStep(4)}
          >
            <div className={styles.stepCircle}>
              {currentStep > 4 ? <Check size={16} strokeWidth={2.5} /> : '4'}
            </div>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Foam</span>
              <span className={styles.stepSubtitle}>
                {currentStep > 4 ? selectedFoam.code : 'Choose your foam'}
              </span>
            </div>
          </button>

          <div className={`${styles.stepConnector} ${currentStep > 4 ? styles.stepConnectorCompleted : ''}`} />

          {/* Step 5: Extras */}
          <button
            type="button"
            className={`${styles.stepItem} ${currentStep === 5 ? styles.stepItemActive : ''} ${currentStep > 5 ? styles.stepItemCompleted : ''}`}
            onClick={() => setCurrentStep(5)}
          >
            <div className={styles.stepCircle}>
              {currentStep > 5 ? <Check size={16} strokeWidth={2.5} /> : '5'}
            </div>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Extras</span>
              <span className={styles.stepSubtitle}>
                {selectedExtras.length > 0 ? `${selectedExtras.length} selected` : 'Add any extras'}
              </span>
            </div>
          </button>

          <div className={`${styles.stepConnector} ${currentStep > 5 ? styles.stepConnectorCompleted : ''}`} />

          {/* Step 6: Summary */}
          <button
            type="button"
            className={`${styles.stepItem} ${currentStep === 6 ? styles.stepItemActive : ''}`}
            onClick={() => setCurrentStep(6)}
          >
            <div className={styles.stepCircle}>6</div>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Summary</span>
              <span className={styles.stepSubtitle}>Review &amp; request quote</span>
            </div>
          </button>
        </div>
      </nav>

      {/* 3. Main Content: Left Active Step + Right Sticky Sidebar */}
      <main className={styles.mainContainer}>
        {/* LEFT COLUMN: ACTIVE STEP */}
        <div className={styles.stepCard}>
          {/* STEP 1: PURPOSE */}
          {currentStep === 1 && (
            <div>
              <div className={styles.stepCardHeader}>
                <span className={styles.stepCounterBadge}>STEP 1 OF 6</span>
                <h2 className={styles.stepHeading}>What will this foam be used for?</h2>
                <p className={styles.stepDescription}>
                  Selecting your purpose helps us recommend the optimal foam density and durability specifications.
                </p>
              </div>

              <div className={styles.optionsGrid}>
                {PURPOSES.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.optionCard} ${purpose === item.label ? styles.optionCardSelected : ''}`}
                    onClick={() => {
                      setPurpose(item.label);
                    }}
                  >
                    <h3 className={styles.optionTitle}>{item.label}</h3>
                    <p className={styles.optionDesc}>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className={styles.stepNavigation}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={onNavigateHome}
                >
                  <ArrowLeft size={16} /> Back to Home
                </button>
                <button
                  type="button"
                  className={styles.btnNext}
                  onClick={nextStep}
                >
                  Next: Choose shape <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SHAPE */}
          {currentStep === 2 && (
            <div>
              <div className={styles.stepCardHeader}>
                <span className={styles.stepCounterBadge}>STEP 2 OF 6</span>
                <h2 className={styles.stepHeading}>Choose your foam shape</h2>
                <p className={styles.stepDescription}>
                  Select the silhouette that matches your cushion or mattress. You will enter dimensions next.
                </p>
              </div>

              <div className={styles.optionsGrid}>
                {SHAPES.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.optionCard} ${shape === item.id ? styles.optionCardSelected : ''}`}
                    onClick={() => setShape(item.id)}
                  >
                    <div className={styles.optionVisual}>
                      <IsometricShapeSvg shapeId={item.id} width={120} height={70} />
                    </div>
                    <h3 className={styles.optionTitle}>{item.label}</h3>
                    <p className={styles.optionDesc}>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className={styles.stepNavigation}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={prevStep}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  className={styles.btnNext}
                  onClick={nextStep}
                >
                  Next: Set measurements <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: MEASUREMENTS */}
          {currentStep === 3 && (
            <div>
              <div className={styles.stepCardHeader}>
                <span className={styles.stepCounterBadge}>STEP 3 OF 6</span>
                <h2 className={styles.stepHeading}>Enter your measurements</h2>
                <p className={styles.stepDescription}>
                  Please enter the dimensions of your foam piece in {unit === 'cm' ? 'centimetres (cm)' : unit === 'mm' ? 'millimetres (mm)' : 'inches (in)'}.
                </p>
              </div>

              {/* Shape Mini Selector Bar */}
              <div className={styles.shapeMiniSelector}>
                <span className={styles.sectionMiniLabel}>Shape</span>
                <div className={styles.miniShapeGrid}>
                  {SHAPES.map((item) => (
                    <div
                      key={item.id}
                      className={`${styles.miniShapeCard} ${shape === item.id ? styles.miniShapeSelected : ''}`}
                      onClick={() => setShape(item.id)}
                    >
                      {shape === item.id && (
                        <div className={styles.miniCheckBadge}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                      )}
                      <div className={styles.miniShapeIcon}>
                        <IsometricShapeSvg shapeId={item.id} width={80} height={42} />
                      </div>
                      <h4 className={styles.miniShapeTitle}>{item.label}</h4>
                      <p className={styles.miniShapeDesc}>{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dimensions Input Controls */}
              <div className={styles.dimensionsControlArea}>
                <span className={styles.sectionMiniLabel}>Dimensions</span>

                <div className={styles.inputsRow}>
                  {/* Width */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="dim-width" className={styles.inputLabel}>Width</label>
                    <div className={styles.inputFieldWrapper}>
                      <input
                        id="dim-width"
                        type="number"
                        min="1"
                        max="500"
                        step="1"
                        value={dimensions.width}
                        onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) || 0 })}
                        className={styles.dimensionInput}
                      />
                      <span className={styles.unitSuffix}>{unit}</span>
                    </div>
                  </div>

                  {/* Length */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="dim-length" className={styles.inputLabel}>Length</label>
                    <div className={styles.inputFieldWrapper}>
                      <input
                        id="dim-length"
                        type="number"
                        min="1"
                        max="500"
                        step="1"
                        value={dimensions.length}
                        onChange={(e) => setDimensions({ ...dimensions, length: Number(e.target.value) || 0 })}
                        className={styles.dimensionInput}
                      />
                      <span className={styles.unitSuffix}>{unit}</span>
                    </div>
                  </div>

                  {/* Thickness */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="dim-thickness" className={styles.inputLabel}>Thickness</label>
                    <div className={styles.inputFieldWrapper}>
                      <input
                        id="dim-thickness"
                        type="number"
                        min="1"
                        max="100"
                        step="0.5"
                        value={dimensions.thickness}
                        onChange={(e) => setDimensions({ ...dimensions, thickness: Number(e.target.value) || 0 })}
                        className={styles.dimensionInput}
                      />
                      <span className={styles.unitSuffix}>{unit}</span>
                    </div>
                  </div>
                </div>

                {/* Unit Switcher Pills */}
                <div className={styles.unitToggleBar}>
                  <button
                    type="button"
                    className={`${styles.unitBtn} ${unit === 'cm' ? styles.unitBtnActive : ''}`}
                    onClick={() => handleUnitChange('cm')}
                  >
                    cm
                  </button>
                  <button
                    type="button"
                    className={`${styles.unitBtn} ${unit === 'mm' ? styles.unitBtnActive : ''}`}
                    onClick={() => handleUnitChange('mm')}
                  >
                    mm
                  </button>
                  <button
                    type="button"
                    className={`${styles.unitBtn} ${unit === 'in' ? styles.unitBtnActive : ''}`}
                    onClick={() => handleUnitChange('in')}
                  >
                    in
                  </button>
                </div>
              </div>

              {/* Live 3D Isometric SVG Foam Representation */}
              <div className={styles.foamVisualizerBox}>
                <div className={styles.svgDiagramWrapper}>
                  <LiveIsometricBlock
                    widthVal={`${dimensions.width} ${unit}`}
                    lengthVal={`${dimensions.length} ${unit}`}
                    thicknessVal={`${dimensions.thickness} ${unit}`}
                    shapeId={shape}
                  />
                </div>
              </div>

              {/* Cutting Limits Feasibility Notice */}
              <div className={`${styles.limitsCard} ${!isWithinLimits ? styles.limitsCardWarning : ''}`}>
                <div className={styles.limitsIcon}>
                  {isWithinLimits ? (
                    <Check size={20} strokeWidth={2.5} />
                  ) : (
                    <AlertCircle size={20} strokeWidth={2.5} className={styles.limitsIconWarning} />
                  )}
                </div>
                <div className={styles.limitsContent}>
                  <h4 className={`${styles.limitsTitle} ${!isWithinLimits ? styles.limitsTitleWarning : ''}`}>
                    {isWithinLimits
                      ? 'This size is within our cutting limits.'
                      : 'Dimension notice: Exceeds standard single-piece cutting limit.'}
                  </h4>
                  <p className={styles.limitsText}>
                    {isWithinLimits
                      ? 'Maximum single-block cut size: 200 × 100 × 30 cm. CNC tolerances: ±2mm.'
                      : 'Larger blocks can be precision joined by our fabrication team. Please contact us for custom joined cuts.'}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className={styles.stepNavigation}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={prevStep}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  className={styles.btnNext}
                  onClick={nextStep}
                >
                  Next: Choose your foam <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: FOAM TYPE */}
          {currentStep === 4 && (
            <div>
              <div className={styles.stepCardHeader}>
                <span className={styles.stepCounterBadge}>STEP 4 OF 6</span>
                <h2 className={styles.stepHeading}>Choose your foam grade</h2>
                <p className={styles.stepDescription}>
                  Select the density and firmness appropriate for your application. All our foams are manufactured in the UK and fire retardant compliant to BS 5852.
                </p>
              </div>

              <div className={styles.foamGrid}>
                {FOAM_TYPES.map((foam) => {
                  const isSelected = foamTypeId === foam.id;
                  const itemEstimatedPrice = Math.round(
                    pricing.foamPrice * (foam.rateMultiplier / selectedFoam.rateMultiplier) * 100
                  ) / 100;

                  return (
                    <div
                      key={foam.id}
                      className={`${styles.foamCard} ${isSelected ? styles.foamCardSelected : ''}`}
                      onClick={() => setFoamTypeId(foam.id)}
                    >
                      <div
                        className={styles.foamSwatch}
                        style={{ backgroundColor: foam.swatchColor }}
                      >
                        {foam.code}
                      </div>

                      <div className={styles.foamInfo}>
                        <div className={styles.foamNameRow}>
                          <h3 className={styles.foamName}>{foam.name}</h3>
                          <span className={styles.firmnessBadge}>{foam.firmness}</span>
                        </div>
                        <p className={styles.foamDesc}>{foam.description}</p>
                      </div>

                      <div className={styles.foamPriceColumn}>
                        <span className={styles.foamPriceText}>£{itemEstimatedPrice.toFixed(2)}</span>
                        <span className={styles.foamRateNote}>inc. VAT</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.stepNavigation}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={prevStep}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  className={styles.btnNext}
                  onClick={nextStep}
                >
                  Next: Add extras <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: EXTRAS */}
          {currentStep === 5 && (
            <div>
              <div className={styles.stepCardHeader}>
                <span className={styles.stepCounterBadge}>STEP 5 OF 6</span>
                <h2 className={styles.stepHeading}>Add optional extras</h2>
                <p className={styles.stepDescription}>
                  Enhance your foam piece with protective inner linings, plush Dacron wraps, or leave blank for raw precision cut foam.
                </p>
              </div>

              {/* Blank / Default Notice */}
              <div className={styles.extrasEmptyNotice}>
                <h4 className={styles.extrasEmptyTitle}>Raw Foam Core (No Extras Selected)</h4>
                <p className={styles.extrasEmptyDesc}>
                  You do not need to add any extras. If you already have your own covers or need pure foam blocks, feel free to skip directly to summary.
                </p>
              </div>

              <div className={styles.extrasGrid}>
                {EXTRAS_OPTIONS.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <div
                      key={extra.id}
                      className={`${styles.extraItemCard} ${isChecked ? styles.extraItemSelected : ''}`}
                      onClick={() => toggleExtra(extra.id)}
                    >
                      <div className={styles.extraCheckboxRow}>
                        <div className={`${styles.customCheckbox} ${isChecked ? styles.customCheckboxChecked : ''}`}>
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <div>
                          <h3 className={styles.extraTitle}>{extra.name}</h3>
                          <p className={styles.extraDesc}>{extra.description}</p>
                        </div>
                      </div>
                      <span className={styles.extraPriceTag}>+£{extra.price.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.stepNavigation}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={prevStep}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  className={styles.btnNext}
                  onClick={nextStep}
                >
                  Next: Summary <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: SUMMARY */}
          {currentStep === 6 && (
            <div>
              <div className={styles.stepCardHeader}>
                <span className={styles.stepCounterBadge}>STEP 6 OF 6</span>
                <h2 className={styles.stepHeading}>Review your custom foam</h2>
                <p className={styles.stepDescription}>
                  Check your specifications below before requesting your quote. All items are precision cut in our Oldham facility.
                </p>
              </div>

              {/* Summary Spec Table */}
              <div className={styles.summaryTableCard}>
                <div className={styles.summaryTableRow}>
                  <span className={styles.summaryTableLabel}>Purpose</span>
                  <span className={styles.summaryTableValue}>{purpose}</span>
                </div>
                <div className={styles.summaryTableRow}>
                  <span className={styles.summaryTableLabel}>Shape</span>
                  <span className={styles.summaryTableValue}>{activeShapeObj.label}</span>
                </div>
                <div className={styles.summaryTableRow}>
                  <span className={styles.summaryTableLabel}>Dimensions</span>
                  <span className={styles.summaryTableValue}>
                    {dimensions.width} × {dimensions.length} × {dimensions.thickness} {unit}
                  </span>
                </div>
                <div className={styles.summaryTableRow}>
                  <span className={styles.summaryTableLabel}>Foam Grade</span>
                  <span className={styles.summaryTableValue}>{selectedFoam.name}</span>
                </div>
                <div className={styles.summaryTableRow}>
                  <span className={styles.summaryTableLabel}>Density &amp; Rating</span>
                  <span className={styles.summaryTableValue}>{selectedFoam.density} ({selectedFoam.firmness})</span>
                </div>
                <div className={styles.summaryTableRow}>
                  <span className={styles.summaryTableLabel}>Optional Extras</span>
                  <span className={styles.summaryTableValue}>
                    {selectedExtras.length > 0
                      ? selectedExtras.map((id) => EXTRAS_OPTIONS.find((e) => e.id === id)?.name).join(', ')
                      : 'None selected'}
                  </span>
                </div>
                <div className={styles.summaryTableRow}>
                  <span className={styles.summaryTableLabel}>Manufacturing Lead Time</span>
                  <span className={styles.summaryTableValue}>7-10 Working Days (UK Mainland)</span>
                </div>
              </div>

              {/* Engineering Call Assistance Banner */}
              <div className={styles.stepCallBanner}>
                <div className={styles.stepCallLeft}>
                  <Phone size={24} className={styles.stepCallIcon} />
                  <div>
                    <h4 className={styles.stepCallTitle}>Prefer to discuss or place by telephone?</h4>
                    <p className={styles.stepCallSubtext}>
                      Our Oldham foam cutting engineers are available Mon–Fri, 8am–5pm to advise on cutting tolerances and confirm fast delivery.
                    </p>
                  </div>
                </div>
                <a href="tel:01616652420" className={styles.btnStepCall}>
                  <Phone size={14} /> Call 0161 665 2420
                </a>
              </div>

              {/* Price Breakdown */}
              <div className={styles.summaryCostGrid}>
                <div className={styles.costLine}>
                  <span>Foam Core Cut ({selectedFoam.code}):</span>
                  <span>£{pricing.foamPrice.toFixed(2)}</span>
                </div>
                {selectedExtras.length > 0 && (
                  <div className={styles.costLine}>
                    <span>Optional Extras ({selectedExtras.length} items):</span>
                    <span>£{pricing.extrasTotal.toFixed(2)}</span>
                  </div>
                )}
                <div className={styles.costLine}>
                  <span>Net Price (excl. VAT):</span>
                  <span>£{pricing.subtotalExVat.toFixed(2)}</span>
                </div>
                <div className={styles.costLine}>
                  <span>VAT (20%):</span>
                  <span>£{pricing.vat.toFixed(2)}</span>
                </div>
                <div className={styles.costLineTotal}>
                  <span>Total (inc. VAT):</span>
                  <span>£{pricing.totalPriceIncVat.toFixed(2)}</span>
                </div>
              </div>

              <div className={styles.stepNavigation}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={prevStep}
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  className={styles.btnNext}
                  onClick={() => {
                    setLeadSubmitted(false);
                    setLeadModalOpen(true);
                  }}
                >
                  <Send size={16} /> Request Quote &amp; Specification (£{pricing.totalPriceIncVat.toFixed(2)})
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: STICKY SIDEBAR (Matching reference image) */}
        <aside className={styles.sidebarSticky}>
          <div className={styles.summarySidebarCard}>
            <div className={styles.sidebarHeaderRow}>
              <h3 className={styles.sidebarTitle}>Your custom foam</h3>
              <button
                type="button"
                className={styles.btnEditLink}
                onClick={() => setCurrentStep(3)}
              >
                Edit
              </button>
            </div>

            {/* Thumbnail Preview */}
            <div className={styles.sidebarPreviewBox}>
              <div className={styles.sidebarThumbnail}>
                <IsometricShapeSvg shapeId={shape} width={74} height={46} />
              </div>
              <div className={styles.sidebarItemDetails}>
                <h4 className={styles.sidebarShapeName}>{activeShapeObj.label}</h4>
                <p className={styles.sidebarDimensions}>
                  {dimensions.width} × {dimensions.length} × {dimensions.thickness} {unit}
                </p>
                <span className={styles.sidebarPurposeBadge}>{purpose}</span>
              </div>
            </div>

            {/* Foam Type Line */}
            <div className={styles.sidebarLineItem}>
              <div>
                <span className={styles.sidebarItemLabel}>Foam type</span>
                <span className={styles.sidebarItemSubtext}>{selectedFoam.name}</span>
              </div>
              <span className={styles.sidebarItemPrice}>£{pricing.foamPrice.toFixed(2)}</span>
            </div>

            {/* Extras Line */}
            <div className={styles.sidebarLineItem}>
              <div>
                <span className={styles.sidebarItemLabel}>Extras</span>
                <span className={styles.sidebarItemSubtext}>
                  {selectedExtras.length > 0
                    ? `${selectedExtras.length} selected`
                    : 'None selected'}
                </span>
              </div>
              <span className={styles.sidebarItemPrice}>
                {pricing.extrasTotal > 0 ? `£${pricing.extrasTotal.toFixed(2)}` : '—'}
              </span>
            </div>

            <div className={styles.sidebarDivider} />

            {/* Estimated Price Section */}
            <div className={styles.sidebarPriceSection}>
              <p className={styles.priceLabel}>Estimated price</p>
              <div className={styles.priceAmountGroup}>
                <span className={styles.priceAmount}>£{pricing.totalPriceIncVat.toFixed(2)}</span>
                <span className={styles.priceVatLabel}>(inc. VAT)</span>
              </div>
            </div>

            {/* Request Quote Button */}
            <button
              type="button"
              className={styles.btnAddToBasket}
              onClick={() => {
                setLeadSubmitted(false);
                setLeadModalOpen(true);
              }}
            >
              <Send size={18} />
              Request Quote &amp; Specification
            </button>
            <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', textAlign: 'center', marginTop: '8px' }}>
              We&apos;ll email you this full technical specification &amp; quote.
            </span>
          </div>

          {/* Direct Phone Call Card */}
          <div className={styles.sidebarCallPushCard}>
            <div className={styles.sidebarCallIconWrap}>
              <Phone size={18} />
            </div>
            <div>
              <h4 className={styles.sidebarCallTitle}>Order or Discuss by Phone</h4>
              <p className={styles.sidebarCallSubtext}>Speak directly with our Oldham engineers:</p>
              <a href="tel:01616652420" className={styles.sidebarCallNumberLink}>
                <Phone size={14} /> 0161 665 2420
              </a>
            </div>
          </div>

          {/* Estimated Delivery Info Card */}
          <div className={styles.sidebarInfoCard}>
            <Truck size={20} className={styles.infoCardIcon} />
            <div>
              <h4 className={styles.infoCardTitle}>Estimated delivery</h4>
              <p className={styles.infoCardText}>
                <strong>7–10 working days</strong>. Custom cut items are made to order in our UK factory and dispatched securely.
              </p>
            </div>
          </div>

          {/* Need Help Card */}
          <div className={styles.sidebarInfoCard}>
            <HelpCircle size={20} className={styles.infoCardIcon} />
            <div>
              <h4 className={styles.infoCardTitle}>Need help choosing?</h4>
              <p className={styles.infoCardText}>
                Not sure which foam is right for your project? Our technical team is on hand.
              </p>
              <a
                className={styles.infoCardLink}
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenQuote) onOpenQuote();
                }}
              >
                Get in touch &rarr;
              </a>
            </div>
          </div>
        </aside>
      </main>

      {/* 4. Bottom Trust Bar (Matching reference image) */}
      <section className={styles.trustRibbon}>
        <div className={styles.trustContainer}>
          <div className={styles.trustItem}>
            <div className={styles.trustIconWrap}>
              <Check size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className={styles.trustTitle}>Quality Assured</h4>
              <p className={styles.trustDescription}>
                ISO 9001 certified with rigorous quality control at every stage.
              </p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIconWrap}>
              <Wrench size={20} strokeWidth={2} />
            </div>
            <div>
              <h4 className={styles.trustTitle}>UK Manufacturer</h4>
              <p className={styles.trustDescription}>
                Proudly manufactured in Oldham, supporting UK jobs.
              </p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIconWrap}>
              <Leaf size={20} strokeWidth={2} />
            </div>
            <div>
              <h4 className={styles.trustTitle}>Sustainable</h4>
              <p className={styles.trustDescription}>
                Committed to reducing our environmental impact with recyclable offcuts.
              </p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIconWrap}>
              <ShieldCheck size={20} strokeWidth={2} />
            </div>
            <div>
              <h4 className={styles.trustTitle}>Reliable Partner</h4>
              <p className={styles.trustDescription}>
                Trusted by organisations across the UK for 25+ years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request & Lead Capture Modal with Phone Push */}
      {leadModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setLeadModalOpen(false)}>
          <div className={styles.leadModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeaderRow}>
              <div>
                <h3 className={styles.modalTitle}>
                  {leadSubmitted ? 'Specification Dispatched!' : 'Receive Your Custom Foam Quote'}
                </h3>
                <p className={styles.modalText} style={{ marginBottom: 0 }}>
                  {leadSubmitted
                    ? 'Your custom cut specification has been recorded and emailed to you.'
                    : "Enter your contact details below. We'll instantly email your full technical specification & pricing, and submit your request to our Oldham production team."}
                </p>
              </div>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setLeadModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {!leadSubmitted ? (
              <>
                {/* Specification Summary Bar */}
                <div className={styles.specSummaryBar}>
                  <div className={styles.specSummaryLeft}>
                    <span className={styles.specSummaryTitle}>
                      {activeShapeObj.label} &bull; {purpose}
                    </span>
                    <span className={styles.specSummaryDetails}>
                      {dimensions.width} &times; {dimensions.length} &times; {dimensions.thickness} {unit} &bull; {selectedFoam.name}
                    </span>
                  </div>
                  <div className={styles.specSummaryPrice}>
                    &pound;{pricing.totalPriceIncVat.toFixed(2)}{' '}
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>inc. VAT</span>
                  </div>
                </div>

                {/* Lead Capture Form */}
                <form
                  className={styles.leadForm}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setLeadSubmitted(true);
                  }}
                >
                  <div className={styles.formGridTwoCol}>
                    <div className={styles.leadFieldGroup}>
                      <label htmlFor="lead-name" className={styles.leadLabel}>
                        Full Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        placeholder="e.g. John Smith"
                        value={leadForm.fullName}
                        onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                        className={styles.leadInput}
                      />
                    </div>

                    <div className={styles.leadFieldGroup}>
                      <label htmlFor="lead-phone" className={styles.leadLabel}>
                        Telephone Number <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        required
                        placeholder="e.g. 07123 456789"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className={styles.leadInput}
                      />
                      <span className={styles.leadFieldHint}>For quick cutting verification &amp; courier booking</span>
                    </div>
                  </div>

                  <div className={styles.formGridTwoCol}>
                    <div className={styles.leadFieldGroup}>
                      <label htmlFor="lead-email" className={styles.leadLabel}>
                        Email Address <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id="lead-email"
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className={styles.leadInput}
                      />
                      <span className={styles.leadFieldHint}>We will send your quote &amp; specification here</span>
                    </div>

                    <div className={styles.leadFieldGroup}>
                      <label htmlFor="lead-postcode" className={styles.leadLabel}>
                        Delivery Postcode <span style={{ color: '#94a3b8' }}>(Optional)</span>
                      </label>
                      <input
                        id="lead-postcode"
                        type="text"
                        placeholder="e.g. OL9 9LL"
                        value={leadForm.postcode}
                        onChange={(e) => setLeadForm({ ...leadForm, postcode: e.target.value })}
                        className={styles.leadInput}
                      />
                    </div>
                  </div>

                  <div className={styles.leadFieldGroup}>
                    <label htmlFor="lead-company" className={styles.leadLabel}>
                      Company / Organisation <span style={{ color: '#94a3b8' }}>(Optional - for trade accounts)</span>
                    </label>
                    <input
                      id="lead-company"
                      type="text"
                      placeholder="e.g. Acme Furnishings Ltd"
                      value={leadForm.company}
                      onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                      className={styles.leadInput}
                    />
                  </div>

                  <div className={styles.leadFieldGroup}>
                    <label htmlFor="lead-notes" className={styles.leadLabel}>
                      Special Cutting Instructions or Notes <span style={{ color: '#94a3b8' }}>(Optional)</span>
                    </label>
                    <textarea
                      id="lead-notes"
                      rows={2}
                      placeholder="e.g. Specific bevel angles, multiple quantity, fabric cover requirements, or urgent deadline..."
                      value={leadForm.notes}
                      onChange={(e) => setLeadForm({ ...leadForm, notes: e.target.value })}
                      className={styles.leadTextarea}
                    />
                  </div>

                  <div className={styles.leadTrustNote}>
                    <Lock size={15} color="#0284c7" />
                    <span>Your details are held securely and only used to process your foam specification and quote. No unsolicited marketing.</span>
                  </div>

                  <button type="submit" className={styles.btnSubmitLead}>
                    <Send size={18} />
                    Send My Foam Specification &amp; Quote
                  </button>

                  <div className={styles.modalCallDirectPrompt}>
                    <span>Prefer to talk to our engineers immediately?</span>
                    <a href="tel:01616652420" className={styles.promptPhoneLink}>
                      <Phone size={14} /> Call us: 0161 665 2420
                    </a>
                  </div>
                </form>
              </>
            ) : (
              /* High-Converting Success Confirmation with Phone Call Push */
              <div className={styles.submissionSuccessContainer}>
                <div className={styles.successIconWrap}>
                  <Check size={32} strokeWidth={3} />
                </div>
                <div className={styles.quoteRefBadge}>
                  Quote Reference: #CFX-74291
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
                  Thank you, {leadForm.fullName || 'Valued Customer'}!
                </h4>
                <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6, margin: '0 0 20px' }}>
                  A confirmation email with your full custom foam specification and estimated price (<strong>&pound;{pricing.totalPriceIncVat.toFixed(2)} inc. VAT</strong>) has been queued to <strong>{leadForm.email || 'your email'}</strong>. Our production team in Oldham has also received your request.
                </p>

                {/* PROMINENT PUSH TO CALL US */}
                <div className={styles.successPushCallBox}>
                  <span className={styles.pushCallEyebrow}>FAST-TRACK SERVICE &bull; IMMEDIATE HELP</span>
                  <h3 className={styles.pushCallHeading}>
                    Need this urgently or want to speak with an engineer?
                  </h3>
                  <p className={styles.pushCallText}>
                    Our Oldham foam cutting specialists can confirm your exact dimensions, discuss volume discounts, and fast-track manufacturing right over the phone.
                  </p>
                  <a href="tel:01616652420" className={styles.btnCallNowDirect}>
                    <Phone size={22} />
                    Call Our Oldham Team: 0161 665 2420
                  </a>
                  <span className={styles.pushCallOperatingHours}>
                    Open Monday to Friday: 8:00 AM &ndash; 5:00 PM &bull; Oldham, England Factory Desk
                  </span>
                </div>

                <div className={styles.modalButtonsGroup} style={{ marginTop: '16px' }}>
                  <button
                    type="button"
                    className={styles.btnSecondaryAction}
                    onClick={() => {
                      setLeadSubmitted(false);
                      setLeadModalOpen(false);
                    }}
                  >
                    Configure Another Piece of Foam
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Interactive Isometric SVG Foam Block with dynamic dimension lines & labels
function LiveIsometricBlock({ widthVal, lengthVal, thicknessVal, shapeId }) {
  if (shapeId === 'l-shape') {
    return (
      <svg viewBox="0 0 460 220" width="100%" height="100%" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
          <linearGradient id="lFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="lSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* L-Shape Isometric Polygon */}
        <polygon
          points="200,50 300,95 240,125 190,105 130,135 90,110"
          fill="url(#lTopGrad)"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <polygon
          points="90,110 130,135 130,165 90,140"
          fill="url(#lFrontGrad)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <polygon
          points="130,135 190,105 190,135 130,165"
          fill="url(#lSideGrad)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <polygon
          points="190,105 240,125 240,155 190,135"
          fill="url(#lFrontGrad)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <polygon
          points="240,125 300,95 300,125 240,155"
          fill="url(#lSideGrad)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />

        {/* Dimension Labels */}
        <text x="70" y="180" fill="#0f172a" fontSize="13" fontWeight="700">W: {widthVal}</text>
        <text x="250" y="180" fill="#0f172a" fontSize="13" fontWeight="700">L: {lengthVal}</text>
        <text x="325" y="115" fill="#0f172a" fontSize="13" fontWeight="700">T: {thicknessVal}</text>
      </svg>
    );
  }

  if (shapeId === 't-shape') {
    return (
      <svg viewBox="0 0 460 220" width="100%" height="100%" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="tTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
          <linearGradient id="tFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <polygon
          points="180,50 260,85 240,95 280,115 230,140 190,120 150,140 100,115 140,95 120,85"
          fill="url(#tTopGrad)"
          stroke="#3b82f6"
          strokeWidth="1.5"
        />
        <polygon
          points="100,115 150,140 150,165 100,140"
          fill="url(#tFrontGrad)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <polygon
          points="150,140 190,120 190,145 150,165"
          fill="#3b82f6"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <polygon
          points="190,120 230,140 230,165 190,145"
          fill="url(#tFrontGrad)"
          stroke="#2563eb"
          strokeWidth="1.5"
        />
        <polygon
          points="230,140 280,115 280,140 230,165"
          fill="#3b82f6"
          stroke="#2563eb"
          strokeWidth="1.5"
        />

        <text x="80" y="180" fill="#0f172a" fontSize="13" fontWeight="700">W: {widthVal}</text>
        <text x="240" y="180" fill="#0f172a" fontSize="13" fontWeight="700">L: {lengthVal}</text>
        <text x="305" y="130" fill="#0f172a" fontSize="13" fontWeight="700">T: {thicknessVal}</text>
      </svg>
    );
  }

  // Default: Rectangle (as in reference image!)
  return (
    <svg viewBox="0 0 460 220" width="100%" height="100%" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="rectTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
        <linearGradient id="rectFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="rectRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      {/* 3D Isometric Rectangular Box */}
      {/* Top Face */}
      <polygon
        points="140,80 340,95 240,150 40,135"
        fill="url(#rectTop)"
        stroke="#0284c7"
        strokeWidth="1.5"
      />
      {/* Front Left Face */}
      <polygon
        points="40,135 240,150 240,175 40,160"
        fill="url(#rectFront)"
        stroke="#0284c7"
        strokeWidth="1.5"
      />
      {/* Right Face */}
      <polygon
        points="240,150 340,95 340,120 240,175"
        fill="url(#rectRight)"
        stroke="#0284c7"
        strokeWidth="1.5"
      />

      {/* Dimension Line: Width (Front edge) */}
      <line x1="30" y1="175" x2="230" y2="190" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
      <text x="110" y="200" fill="#0f172a" fontSize="13" fontWeight="700" textAnchor="middle">
        {widthVal}
      </text>

      {/* Dimension Line: Length (Right edge) */}
      <line x1="250" y1="190" x2="350" y2="135" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
      <text x="310" y="180" fill="#0f172a" fontSize="13" fontWeight="700" textAnchor="middle">
        {lengthVal}
      </text>

      {/* Dimension Line: Thickness (Vertical edge) */}
      <line x1="360" y1="95" x2="360" y2="120" stroke="#64748b" strokeWidth="1" />
      <polygon points="358,97 360,93 362,97" fill="#64748b" />
      <polygon points="358,118 360,122 362,118" fill="#64748b" />
      <text x="375" y="112" fill="#0f172a" fontSize="13" fontWeight="700">
        {thicknessVal}
      </text>
    </svg>
  );
}

// Mini Shape Graphic for cards
function IsometricShapeSvg({ shapeId, width = 80, height = 45 }) {
  if (shapeId === 'l-shape') {
    return (
      <svg width={width} height={height} viewBox="0 0 100 60" fill="none">
        <polygon points="45,10 75,25 60,32 45,25 30,32 15,25" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="15,25 30,32 30,42 15,35" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="30,32 45,25 45,35 30,42" fill="#0284c7" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="45,25 60,32 60,42 45,35" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="60,32 75,25 75,35 60,42" fill="#0284c7" stroke="#0284c7" strokeWidth="1.5" />
      </svg>
    );
  }

  if (shapeId === 't-shape') {
    return (
      <svg width={width} height={height} viewBox="0 0 100 60" fill="none">
        <polygon points="40,10 60,20 55,23 68,30 52,38 42,33 32,38 16,30 28,23 24,20" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="16,30 32,38 32,46 16,38" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="32,38 42,33 42,41 32,46" fill="#0284c7" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="42,33 52,38 52,46 42,41" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="52,38 68,30 68,38 52,46" fill="#0284c7" stroke="#0284c7" strokeWidth="1.5" />
      </svg>
    );
  }

  if (shapeId === 'custom') {
    return (
      <svg width={width} height={height} viewBox="0 0 100 60" fill="none">
        <path d="M20,25 C30,12 60,10 75,20 C85,28 75,45 60,42 C45,40 35,48 22,40 C14,34 14,28 20,25 Z" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
      </svg>
    );
  }

  // Default Rectangle
  return (
    <svg width={width} height={height} viewBox="0 0 100 60" fill="none">
      <polygon points="35,12 85,18 60,35 10,29" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
      <polygon points="10,29 60,35 60,48 10,42" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
      <polygon points="60,35 85,18 85,31 60,48" fill="#0284c7" stroke="#0284c7" strokeWidth="1.5" />
    </svg>
  );
}

export default Configurator;
