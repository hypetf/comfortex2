import React, { Component } from 'react';
import { caseStudies } from '../../data/landingData';
import { ArrowRightIcon } from '../Icons';
import styles from './CaseStudies.styles.css';

export class CaseStudies extends Component {
  render() {
    return (
      <section className={styles.caseStudiesSection} id="case-studies">
        <div className={styles.contentContainer}>
          {/* Header with Title & View All button */}
          <div className={styles.caseStudiesHeader}>
            <div className={styles.caseStudiesHeaderLeft}>
              <span className={styles.sectionBadge}>CASE STUDIES</span>
              <h2 className={styles.caseStudiesTitle}>Real challenges. Real solutions.</h2>
              <p className={styles.caseStudiesDescription}>
                See how we help our customers overcome challenges with engineered comfort solutions.
              </p>
            </div>
            <div className={styles.caseStudiesHeaderRight}>
              <a href="#case-studies" className={styles.btnOutlineCaseStudies}>
                View all case studies
              </a>
            </div>
          </div>

          {/* 3 Case Study Cards */}
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((item) => (
              <div key={item.id} className={styles.caseStudyCard}>
                <div className={styles.caseStudyImageWrapper}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      className={styles.caseStudyImage}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.parentNode) {
                          e.target.parentNode.classList.add(styles.imagePlaceholder);
                        }
                      }}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>{item.title}</span>
                    </div>
                  )}
                </div>

                <div className={styles.caseStudyBody}>
                  <span className={styles.caseStudySector}>{item.sector}</span>
                  <h3 className={styles.caseStudyCardTitle}>{item.title}</h3>
                  <p className={styles.caseStudyCardDesc}>{item.description}</p>
                  <a href={item.link || '#'} className={styles.caseStudyLink}>
                    <span>Read case study</span>
                    <ArrowRightIcon className={styles.cardLinkIcon} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudies;
