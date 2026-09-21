import React, { useState, useEffect, useRef } from 'react';
import styles from './ProductionScale.styles.css';
import {
  MattressIcon,
  FoamLayersIcon,
  ShieldTrustIcon,
  FactoryIcon,
  CncCuttingIcon,
  QualityAssuranceIcon
} from '../Icons/Icons';

const PRODUCTION_DATA = [
  {
    id: 'medical',
    target: 1500000,
    label: 'Medical mattresses',
    category: 'Healthcare',
    description: 'Pressure care & hospital-grade specifications',
    icon: ShieldTrustIcon,
  },
  {
    id: 'domestic',
    target: 750000,
    label: 'Domestic mattresses',
    category: 'Bedding',
    description: 'High-comfort sleep systems for major UK brands',
    icon: MattressIcon,
  },
  {
    id: 'nursery',
    target: 2400000,
    label: 'Nursery mattresses',
    category: 'Nursery',
    description: 'Breathable, safety-certified infant comfort',
    icon: QualityAssuranceIcon,
  },
  {
    id: 'sofa',
    target: 4400000,
    label: 'Sofa seats interiors',
    category: 'Furniture',
    description: 'Precision-cut foam cores for leading sofa makers',
    icon: FoamLayersIcon,
  },
  {
    id: 'caravan',
    target: 100000,
    label: 'Caravan interiors',
    category: 'Leisure & Marine',
    description: 'Bespoke touring and recreational vehicle seating',
    icon: FactoryIcon,
  },
  {
    id: 'pads',
    target: 1600000,
    label: 'Upholstered pads',
    category: 'Specialist',
    description: 'Engineered foam components & industrial pads',
    icon: CncCuttingIcon,
  },
];

export const ProductionScale = () => {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(() => PRODUCTION_DATA.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Use IntersectionObserver to trigger animation when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1800; // 1.8s fast, energetic counter animation
    const startTime = performance.now();
    let frameId;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      setCounts(
        PRODUCTION_DATA.map((item) => Math.round(item.target * eased))
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [hasStarted]);

  const formatNumber = (val) => {
    return `+${val.toLocaleString('en-US')}`;
  };

  return (
    <section
      ref={sectionRef}
      className={styles.productionSection}
      id="production-scale"
      aria-label="Manufacturing Scale and Production Volume"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.contentContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrap}>
            <span className={styles.badgeDot} />
            <span className={styles.sectionBadge}>PROVEN PRODUCTION SCALE</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Over 10 Million Units Precision-Manufactured.
          </h2>
          <p className={styles.sectionSubtitle}>
            {/* Proven manufacturing capacity trusted by the UK's leading healthcare providers, national retailers, and OEM furniture brands. */}
            Founded in 1997 by Ray Beckwith we have invested, grown and diversified our
            business with our high-quality, hassle-free approach to every opportunities we create.
          </p>
        </div>

        {/* 6 Stats Grid */}
        <div className={styles.statsGrid}>
          {PRODUCTION_DATA.map((item, index) => {
            const IconComponent = item.icon;
            const displayValue = formatNumber(counts[index]);

            return (
              <div key={item.id} className={styles.statCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.categoryPill}>{item.category}</span>
                  <div className={styles.iconCircle}>
                    <IconComponent className={styles.cardIcon} />
                  </div>
                </div>

                <div className={styles.cardMain}>
                  <div className={styles.statNumber}>{displayValue}</div>
                  <h3 className={styles.statLabel}>{item.label}</h3>
                  <p className={styles.statDesc}>{item.description}</p>
                </div>

                <div className={styles.cardHighlightBar} />
              </div>
            );
          })}
        </div>

        {/* Bottom Cumulative Milestone Banner */}
        <div className={styles.milestoneBanner}>
          <div className={styles.milestoneIconWrap}>
            <span className={styles.milestoneStar}>★</span>
          </div>
          <p className={styles.milestoneText}>
            <strong>10,750,000+ Total Components Delivered</strong> — All manufactured in our Oldham facility with ISO 9001 certified quality control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductionScale;
