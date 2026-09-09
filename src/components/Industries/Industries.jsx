import React from 'react';
import styles from './Industries.styles.css';
import beddingImg from '../../assets/bedding_mattress.webp';
import medicalImg from '../../assets/medical_mattress.png'
import furnitureImg from '../../assets/furniture_mattress.webp'
import marineImg from '../../assets/marine_mattress.webp'
import carImg from '../../assets/car_seat.jpg'

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Medical mattresses and pressure care solutions.',
    image: medicalImg,
    alt: 'Hospital bed with medical mattress',
    link: '#healthcare'
  },
  {
    id: 'bedding',
    title: 'Bedding',
    description: 'Mattresses and comfort solutions for better sleep.',
    image: beddingImg,
    alt: 'Bedding mattress in modern bedroom',
    link: '#bedding'
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description: 'Foam and components for furniture and seating.',
    image: furnitureImg,
    alt: 'Foam furniture armchair',
    link: '#furniture'
  },
  {
    id: 'marine',
    title: 'Marine',
    description: 'Engineered foam for marine & boating.',
    image: marineImg,
    alt: 'Luxury boat cockpit and seating',
    link: '#marine'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    description: 'High performance foam for automotive.',
    image: carImg,
    alt: 'Automotive leather interior and seating',
    link: '#automotive'
  },
  {
    id: 'specialist',
    title: 'Specialist Applications',
    description: 'Custom solutions for unique challenges.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    alt: 'Specialist custom cut technical foam parts',
    link: '#specialist'
  }
];

const Industries = () => {
  return (
    <section className={styles.industriesSection} id="industries">
      <div className={styles.contentContainer}>
        {/* Section Header matching clean split reference */}
        <div className={styles.sectionHeaderSplit}>
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionBadge}>OUR INDUSTRIES</span>
            <h2 className={styles.sectionTitle}>Six industries. One manufacturing partner.</h2>
          </div>
          <div className={styles.sectionHeaderRight}>
            <p className={styles.sectionDescription}>
              From medical and healthcare to specialist applications, we manufacture high-quality foam and mattress solutions built for performance and reliability.
            </p>
          </div>
        </div>

        {/* Connected Industry Poster Cards Grid matching reference */}
        <div className={styles.industriesGrid}>
          {industries.map((item, index) => {
            const itemNumber = String(index + 1).padStart(2, '0');

            return (
              <a
                key={item.id}
                href={item.link || '#'}
                className={styles.industryCard}
              >
                {/* Full-bleed background image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className={styles.cardBgImage}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.parentNode) {
                        const placeholder = document.createElement('div');
                        placeholder.className = styles.imagePlaceholder;
                        placeholder.innerText = item.title;
                        e.target.parentNode.appendChild(placeholder);
                      }
                    }}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>{item.title}</span>
                  </div>
                )}

                {/* Dark gradient overlay for text legibility */}
                <div className={styles.cardOverlay} />

                {/* Top-right round button with diagonal arrow */}
                <div className={styles.cardArrowCircle} aria-hidden="true">
                  <svg
                    className={styles.arrowDiagonalIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>

                {/* Bottom title & index number */}
                <div className={styles.cardContent}>
                  <span className={styles.cardNumber}>{itemNumber}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Industries };
export default Industries;
