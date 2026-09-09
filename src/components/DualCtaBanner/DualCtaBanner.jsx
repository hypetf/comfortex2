import React, { Component } from 'react';
import { CatalogueDocumentIcon } from '../Icons';
import styles from './DualCtaBanner.styles.css';

export class DualCtaBanner extends Component {
  render() {
    const { onOpenQuote, onDownloadCatalogue } = this.props;

    return (
      <section className={styles.dualCtaSection}>
        <div className={styles.contentContainer}>
          <div className={styles.dualCtaContainer}>
            {/* Left CTA: Healthcare Catalogue */}
            <div className={`${styles.dualCtaHalf} ${styles.dualCtaLeft}`}>
              <div className={styles.dualCtaIconWrap}>
                <CatalogueDocumentIcon className={styles.dualCtaDocumentIcon} />
              </div>
              <div className={styles.dualCtaContent}>
                <h3 className={styles.dualCtaHeading}>Download our healthcare catalogue</h3>
                <p className={styles.dualCtaSubtext}>Comprehensive range of medical mattresses and healthcare solutions.</p>
                <button
                  type="button"
                  className={styles.btnDarkCta}
                  onClick={onDownloadCatalogue}
                >
                  Download catalogue
                </button>
              </div>
            </div>

            {/* Center Divider Line */}
            {/* <div className={styles.dualCtaDivider}></div> */}

            {/* Right CTA: Need a custom solution? */}
            {/* <div className={`${styles.dualCtaHalf} ${styles.dualCtaRight}`}>
              <div className={`${styles.dualCtaContent} ${styles.noIcon}`}>
                <h3 className={styles.dualCtaHeading}>Need a custom solution?</h3>
                <p className={styles.dualCtaSubtext}>Talk to our team about your requirements.</p>
                <button 
                  type="button" 
                  className={styles.btnDarkCta}
                  onClick={onOpenQuote}
                >
                  Request a quote
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default DualCtaBanner;
