import React, { Component } from 'react';
import styles from './EnvironmentalResponsibility.styles.css';

export class EnvironmentalResponsibility extends Component {
  render() {
    return (
      <section className={styles.responsibilitySection} id="sustainability">
        <div className={styles.contentContainer}>
          <div className={styles.gridContainer}>
            {/* Left Column: Environmental Responsibility Quote */}
            <div className={styles.quoteColumn}>
              <span className={styles.sectionBadge}>ENVIRONMENTAL RESPONSIBILITY</span>
              <h2 className={styles.quoteHeading}>
                &quot;Think Differently &amp; Act Differently.&quot;
              </h2>
            </div>

            {/* Right Column: 360 Thinking Philosophy */}
            <div className={styles.philosophyColumn}>
              <h3 className={styles.philosophyTitle}>360&deg; Thinking Philosophy</h3>
              
              <div className={styles.philosophyList}>
                <div className={styles.philosophyItem}>
                  <p className={styles.philosophyText}>
                    <strong className={styles.highlightText}>Use everything less</strong>
                    <span className={styles.dashSeparator}> &mdash; </span>
                    <span className={styles.descText}>
                      Optimizing raw material yield through advanced nesting software.
                    </span>
                  </p>
                </div>

                <div className={styles.philosophyItem}>
                  <p className={styles.philosophyText}>
                    <strong className={styles.highlightText}>Use everything better</strong>
                    <span className={styles.dashSeparator}> &mdash; </span>
                    <span className={styles.descText}>
                      Engineering eco-foams and sustainable composite materials.
                    </span>
                  </p>
                </div>

                <div className={styles.philosophyItem}>
                  <p className={styles.philosophyText}>
                    <strong className={styles.highlightText}>Use everything forever</strong>
                    <span className={styles.dashSeparator}> &mdash; </span>
                    <span className={styles.descText}>
                      Recycling factory offcuts back into productive re-bonded foam applications.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EnvironmentalResponsibility;
