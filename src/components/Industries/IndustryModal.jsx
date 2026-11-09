import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  FileText,
  PhoneCall,
  Layers,
  ArrowRight,
  Sparkles,
  Factory,
  ExternalLink
} from 'lucide-react';
import styles from './IndustryModal.styles.css';

const IndustryModal = ({
  isOpen,
  industry,
  allIndustries,
  onClose,
  onSelectIndustry,
  onOpenQuote,
  onNavigateProducts
}) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !industry) return null;

  // Find prev and next industries for smooth switching
  const currentIndex = allIndustries.findIndex((item) => item.id === industry.id);
  const prevIndustry = currentIndex > 0 ? allIndustries[currentIndex - 1] : allIndustries[allIndustries.length - 1];
  const nextIndustry = currentIndex < allIndustries.length - 1 ? allIndustries[currentIndex + 1] : allIndustries[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveTab('overview');
    onSelectIndustry(prevIndustry);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveTab('overview');
    onSelectIndustry(nextIndustry);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    if (onOpenQuote) {
      onOpenQuote();
    }
  };

  const handleProductsClick = (e) => {
    e.preventDefault();
    onClose();
    if (onNavigateProducts) {
      onNavigateProducts(`#${industry.id}`);
    }
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="industry-modal-title"
    >
      {/* 90% Fullscreen Modal Dialog with Frosted Glass Styling */}
      <div className={styles.modalContainer}>
        {/* Ambient Expansive Blurred Glass Background using the same industry's image */}
        <div className={styles.ambientGlassBackdrop} aria-hidden="true">
          {industry.image && (
            <img
              src={industry.image}
              alt=""
              className={styles.ambientImage}
            />
          )}
          <div className={styles.ambientBlurLayer} />
        </div>

        {/* Top Control Bar (Always accessible) */}
        <header className={styles.modalHeaderBar}>
          <div className={styles.headerLeft}>
            <span className={styles.industryNumberBadge}>SECTOR {industry.number}</span>
            <span className={styles.headerSeparator}>/</span>
            <span className={styles.headerSectorName}>{industry.title}</span>
          </div>

          {/* Quick industry switcher navigation */}
          <div className={styles.headerNavSwitcher}>
            <button
              type="button"
              className={styles.switcherBtn}
              onClick={handlePrev}
              title={`Previous: ${prevIndustry.title}`}
              aria-label="Previous industry"
            >
              <ChevronLeft size={16} />
              <span className={styles.switcherLabel}>Prev</span>
            </button>
            <span className={styles.switcherCounter}>
              {currentIndex + 1} of {allIndustries.length}
            </span>
            <button
              type="button"
              className={styles.switcherBtn}
              onClick={handleNext}
              title={`Next: ${nextIndustry.title}`}
              aria-label="Next industry"
            >
              <span className={styles.switcherLabel}>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className={styles.headerRight}>
            <button
              type="button"
              className={styles.headerCtaBtn}
              onClick={handleQuoteClick}
            >
              <PhoneCall size={14} />
              <span>Request Quote</span>
            </button>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Scrollable Standalone Page Body */}
        <div className={styles.modalScrollBody}>
          {/* Expanded Hero Banner with full background image */}
          <section className={styles.expandedHero}>
            {industry.image && (
              <img
                src={industry.image}
                alt={industry.alt || industry.title}
                className={styles.expandedHeroImage}
              />
            )}
            <div className={styles.expandedHeroOverlay} />

            <div className={styles.heroContentContainer}>
              <div className={styles.heroMetaRow}>
                <span className={styles.heroBadge}>
                  <Sparkles size={12} className={styles.heroBadgeIcon} />
                  {industry.badge}
                </span>
                <span className={styles.heroUkFlag}>
                  🇬🇧 Engineered in Oldham, UK
                </span>
              </div>

              <h1 id="industry-modal-title" className={styles.heroTitle}>
                {industry.title}
              </h1>
              <p className={styles.heroSubtitle}>{industry.subtitle}</p>
              <p className={styles.heroDescription}>{industry.shortDescription}</p>

              <div className={styles.heroActionRow}>
                <button
                  type="button"
                  className={styles.primaryActionBtn}
                  onClick={handleQuoteClick}
                >
                  <span>Start Sector Inquiry</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="#specifications"
                  className={styles.secondaryActionBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('specs');
                    const el = document.getElementById('specs-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <FileText size={16} />
                  <span>View Technical Specs</span>
                </a>
              </div>
            </div>
          </section>

          {/* Quick Metrics Bar (Glassmorphic Cards) */}
          <section className={styles.metricsSection}>
            <div className={styles.metricsGrid}>
              {industry.stats.map((stat, idx) => (
                <div key={idx} className={styles.metricCard}>
                  <div className={styles.metricValue}>{stat.value}</div>
                  <div className={styles.metricLabel}>{stat.label}</div>
                  <div className={styles.metricDetail}>{stat.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Tab Bar for Navigation */}
          <nav className={styles.tabNavContainer}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview & Solutions
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'specs' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Technical Specifications
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'case-study' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('case-study')}
            >
              Case Study & Results
            </button>
          </nav>

          {/* Tab 1: Overview & Solutions */}
          {activeTab === 'overview' && (
            <div className={styles.tabContentArea}>
              {/* Detailed Sector Overview */}
              <div className={styles.glassContentCard}>
                <div className={styles.cardHeaderWithIcon}>
                  <Factory size={22} className={styles.sectionIcon} />
                  <div>
                    <h2 className={styles.sectionHeading}>Manufacturing & Sector Overview</h2>
                    <p className={styles.sectionSubtext}>Oldham facility production standards for {industry.title}</p>
                  </div>
                </div>
                <p className={styles.narrativeParagraph}>{industry.overview}</p>
              </div>

              {/* Manufacturing Capabilities Grid */}
              <div className={styles.sectionBlock}>
                <h3 className={styles.subHeading}>Specialized Sector Capabilities</h3>
                <div className={styles.capabilitiesGrid}>
                  {industry.capabilities.map((cap, i) => (
                    <div key={i} className={styles.capabilityCard}>
                      <div className={styles.capabilityTop}>
                        <div className={styles.capabilityCheckCircle}>
                          <CheckCircle2 size={16} />
                        </div>
                        <h4 className={styles.capabilityTitle}>{cap.title}</h4>
                      </div>
                      <p className={styles.capabilityDescription}>{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Sector Products & Solutions */}
              <div className={styles.sectionBlock}>
                <h3 className={styles.subHeading}>Key Products & Applications</h3>
                <div className={styles.productsGrid}>
                  {industry.products.map((prod, i) => (
                    <div key={i} className={styles.productCard}>
                      <div className={styles.productTag}>{prod.tag}</div>
                      <h4 className={styles.productTitle}>{prod.name}</h4>
                      <p className={styles.productDescription}>{prod.description}</p>
                      <div className={styles.productFeaturesList}>
                        {prod.features.map((feat, fIdx) => (
                          <div key={fIdx} className={styles.productFeatureItem}>
                            <span className={styles.featureDot} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        className={styles.productInquireBtn}
                        onClick={handleQuoteClick}
                      >
                        <span>Inquire About This Product</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Technical Specifications & Fire Safety */}
          {activeTab === 'specs' && (
            <div className={styles.tabContentArea} id="specs-section">
              <div className={styles.glassContentCard}>
                <div className={styles.cardHeaderWithIcon}>
                  <ShieldCheck size={22} className={styles.sectionIcon} />
                  <div>
                    <h2 className={styles.sectionHeading}>Technical Standards & Compliance</h2>
                    <p className={styles.sectionSubtext}>Rigorous testing, British standards, and material specifications</p>
                  </div>
                </div>

                <div className={styles.specsTableContainer}>
                  <table className={styles.specsTable}>
                    <tbody>
                      {industry.specifications.map((spec, sIdx) => (
                        <tr key={sIdx} className={styles.specRow}>
                          <th className={styles.specLabelCell}>{spec.label}</th>
                          <td className={styles.specValueCell}>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quality & Assurance Strip */}
              <div className={styles.qaStrip}>
                <div className={styles.qaCard}>
                  <Award size={24} className={styles.qaIcon} />
                  <div>
                    <h4 className={styles.qaTitle}>ISO 9001:2015 Certified</h4>
                    <p className={styles.qaText}>Full traceability from raw polymer block to finished fabricated product.</p>
                  </div>
                </div>
                <div className={styles.qaCard}>
                  <ShieldCheck size={24} className={styles.qaIcon} />
                  <div>
                    <h4 className={styles.qaTitle}>Flame Retardancy</h4>
                    <p className={styles.qaText}>Tested to BS 7177 Crib 5/7, BS 5852, IMO FTP, and FMVSS 302 burn rates.</p>
                  </div>
                </div>
                <div className={styles.qaCard}>
                  <Layers size={24} className={styles.qaIcon} />
                  <div>
                    <h4 className={styles.qaTitle}>Environmental Care</h4>
                    <p className={styles.qaText}>Zero ozone-depleting CFCs, water-based adhesives, and scrap foam re-bonding.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Case Study & Proven Results */}
          {activeTab === 'case-study' && (
            <div className={styles.tabContentArea}>
              <div className={styles.caseStudyCard}>
                <div className={styles.caseStudyHeader}>
                  <span className={styles.caseStudyTag}>FEATURED SECTOR PROJECT</span>
                  <h2 className={styles.caseStudyHeadline}>{industry.caseStudy.headline}</h2>
                  <div className={styles.caseStudyClient}>
                    <strong>Client Partner:</strong> {industry.caseStudy.client}
                  </div>
                </div>

                <div className={styles.caseStudyGrid}>
                  <div className={styles.caseStudyBlock}>
                    <h4 className={styles.caseBlockTitle}>The Challenge</h4>
                    <p className={styles.caseBlockText}>{industry.caseStudy.challenge}</p>
                  </div>

                  <div className={styles.caseStudyBlock}>
                    <h4 className={styles.caseBlockTitle}>Comfortex Solution</h4>
                    <p className={styles.caseBlockText}>{industry.caseStudy.solution}</p>
                  </div>
                </div>

                <div className={styles.caseStudyOutcomeBlock}>
                  <div className={styles.outcomeIconWrap}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className={styles.outcomeTitle}>The Measured Result</h4>
                    <p className={styles.outcomeText}>{industry.caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Procurement CTA Bar */}
          <section className={styles.modalFooterCta}>
            <div className={styles.footerCtaGlass}>
              <div className={styles.footerCtaContent}>
                <h3 className={styles.footerCtaTitle}>
                  Ready to manufacture for the {industry.title} sector?
                </h3>
                <p className={styles.footerCtaText}>
                  Speak directly with our technical foam engineers at our Oldham facility. We provide custom CAD prototyping, volume batch estimates, and compliance documentation.
                </p>
              </div>
              <div className={styles.footerCtaActions}>
                <button
                  type="button"
                  className={styles.footerCtaPrimary}
                  onClick={handleQuoteClick}
                >
                  <PhoneCall size={16} />
                  <span>Request Custom Quote</span>
                </button>
                {onNavigateProducts && (
                  <button
                    type="button"
                    className={styles.footerCtaSecondary}
                    onClick={handleProductsClick}
                  >
                    <ExternalLink size={15} style={{ marginRight: 6 }} />
                    <span>View Product Catalogue</span>
                  </button>
                )}
                <button
                  type="button"
                  className={styles.footerCtaSecondary}
                  onClick={onClose}
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export { IndustryModal };
export default IndustryModal;
