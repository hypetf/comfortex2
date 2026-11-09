import React from 'react';
// import { useState } from 'react';
import styles from './Industries.styles.css';
// import { IndustryModal } from './IndustryModal';
import { industriesData } from './industryData';

const Industries = ({ _onNavigateProducts, _onOpenQuote }) => {
  // Modal state kept for future use:
  // const [selectedIndustry, setSelectedIndustry] = useState(null);

  const handleCardClick = (e, _item) => {
    e.preventDefault();
    /* Modal opening on click kept here for future re-activation:
    setSelectedIndustry(_item);
    */
  };

  const handleKeyDown = (e, _item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      /* Modal opening on click kept here for future re-activation:
      setSelectedIndustry(_item);
      */
    }
  };

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
              From medical and healthcare to specialist applications, we manufacture high-quality foam and mattress solutions built for comfort and reliability.
            </p>
          </div>
        </div>

        {/* Connected Industry Poster Cards Grid matching reference */}
        <div className={styles.industriesGrid}>
          {industriesData.map((item, index) => {
            const itemNumber = item.number || String(index + 1).padStart(2, '0');

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={styles.industryCard}
                onClick={(e) => handleCardClick(e, item)}
                onKeyDown={(e) => handleKeyDown(e, item)}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                title={item.title}
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
                  <p className={styles.cardDescription}>{item.shortDescription || item.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* 90% Fullscreen Standalone Sector Modal with Blurred Glass Effect (Kept in code, commented out for now):
      <IndustryModal
        key={selectedIndustry?.id || 'industry-modal'}
        isOpen={Boolean(selectedIndustry)}
        industry={selectedIndustry}
        allIndustries={industriesData}
        onClose={() => setSelectedIndustry(null)}
        onSelectIndustry={(ind) => setSelectedIndustry(ind)}
        onOpenQuote={_onOpenQuote}
        onNavigateProducts={_onNavigateProducts}
      />
      */}
    </section>
  );
};

export { Industries };
export default Industries;
