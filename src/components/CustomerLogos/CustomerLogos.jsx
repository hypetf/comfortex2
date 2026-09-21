import React from 'react';
import styles from './CustomerLogos.styles.css';

import arjoLogo from '../../assets/customers/arjo.jpg';
import brookLogo from '../../assets/customers/brook.jpg';
import buoyantLogo from '../../assets/customers/buoyant.png';
import carpenterLogo from '../../assets/customers/carpenter.png';
import jayBeLogo from '../../assets/customers/jay-be.jpg';
import lebusLogo from '../../assets/customers/lebus.png';
import nhcLogo from '../../assets/customers/nhc.png';
import oakLogo from '../../assets/customers/oak.png';
import simbaLogo from '../../assets/customers/simba.png';
import spiLogo from '../../assets/customers/spi.png';
import urbanestLogo from '../../assets/customers/ubranest.png';

const CUSTOMER_LOGOS = [
  { id: 'arjo', name: 'Arjo', logo: arjoLogo },
  { id: 'brook', name: 'Brook + Wilde', logo: brookLogo },
  { id: 'buoyant', name: 'Buoyant Upholstery', logo: buoyantLogo },
  { id: 'carpenter', name: 'Carpenter', logo: carpenterLogo },
  { id: 'jay-be', name: 'Jay-Be', logo: jayBeLogo },
  { id: 'lebus', name: 'Lebus Upholstery', logo: lebusLogo },
  { id: 'nhc', name: 'NHC Group', logo: nhcLogo },
  { id: 'oak', name: 'Oak Furnitureland', logo: oakLogo },
  { id: 'simba', name: 'Simba Sleep', logo: simbaLogo },
  { id: 'spi', name: 'SPI', logo: spiLogo },
  { id: 'urbanest', name: 'Urbanest', logo: urbanestLogo },
];

// Duplicate list 4 times for seamless infinite loop across all viewport widths
const MARQUEE_ITEMS = [
  ...CUSTOMER_LOGOS,
  ...CUSTOMER_LOGOS,
  ...CUSTOMER_LOGOS,
  ...CUSTOMER_LOGOS,
];

export const CustomerLogos = () => {
  return (
    <section
      className={styles.customerLogosSection}
      aria-label="Trusted customer and partner brands"
    >
      <div className={styles.sectionHeader}>
        <span className={styles.subBadge}>TRUSTED BY INDUSTRY LEADERS</span>
      </div>

      <div className={styles.marqueeWrapper}>
        {/* Left & Right gradient fade masks */}
        <div className={styles.fadeMaskLeft} aria-hidden="true" />
        <div className={styles.fadeMaskRight} aria-hidden="true" />

        <div className={styles.marqueeTrack}>
          {MARQUEE_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={styles.logoCard}
              title={item.name}
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className={styles.logoImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
