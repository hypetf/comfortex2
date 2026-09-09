import React, { Component } from 'react';
import { 
  IsoBadgeIcon, 
  UkCrestIcon, 
  LeafEcoIcon, 
  ShieldTrustIcon 
} from '../Icons';
import styles from './TrustBar.styles.css';

export class TrustBar extends Component {
  render() {
    return (
      <section className={styles.trustBarSection}>
        <div className={styles.contentContainer}>
          <div className={styles.trustBarCard}>
            {/* Item 1 */}
            <div className={styles.trustBarItem}>
              <div className={styles.trustBarIconWrap}>
                <IsoBadgeIcon className={styles.trustBarIcon} />
              </div>
              <div className={styles.trustBarContent}>
                <h4 className={styles.trustBarTitle}>Quality Assured</h4>
                <p className={styles.trustBarDesc}>ISO 9001 certified with rigorous quality control at every stage.</p>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.trustBarDivider}></div>

            {/* Item 2 */}
            <div className={styles.trustBarItem}>
              <div className={styles.trustBarIconWrap}>
                <UkCrestIcon className={styles.trustBarIcon} />
              </div>
              <div className={styles.trustBarContent}>
                <h4 className={styles.trustBarTitle}>UK Manufacturer</h4>
                <p className={styles.trustBarDesc}>Proudly manufactured in Oldham, supporting UK jobs.</p>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.trustBarDivider}></div>

            {/* Item 3 */}
            <div className={styles.trustBarItem}>
              <div className={styles.trustBarIconWrap}>
                <LeafEcoIcon className={styles.trustBarIcon} />
              </div>
              <div className={styles.trustBarContent}>
                <h4 className={styles.trustBarTitle}>Sustainable</h4>
                <p className={styles.trustBarDesc}>Committed to reducing our environmental impact.</p>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.trustBarDivider}></div>

            {/* Item 4 */}
            <div className={styles.trustBarItem}>
              <div className={styles.trustBarIconWrap}>
                <ShieldTrustIcon className={styles.trustBarIcon} />
              </div>
              <div className={styles.trustBarContent}>
                <h4 className={styles.trustBarTitle}>Reliable Partner</h4>
                <p className={styles.trustBarDesc}>Trusted by organisations across the UK for 25+ years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrustBar;
