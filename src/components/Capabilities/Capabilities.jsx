import React, { Component } from 'react';
import {
  DesignDraftIcon,
  CncCuttingIcon,
  FoamLayersIcon,
  MattressIcon,
  QualityAssuranceIcon,
  DeliveryTruckIcon,
  ArrowRightIcon
} from '../Icons/Icons';
import styles from './Capabilities.styles.css';

export class Capabilities extends Component {
  render() {
    const { onOpenVideo } = this.props;

    return (
      <section className={styles.capabilitiesSection} id="capabilities">
        <div className={styles.capabilitiesSplitContainer}>
          {/* Left Side: Video Preview of Factory */}
          <div className={styles.capabilitiesVideoSide}>
            <div className={styles.capabilitiesVideoBg}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Comfortex factory workshop machinery"
                className={styles.capabilitiesVideoImg}
                loading="lazy"
              />
              <div className={styles.capabilitiesVideoOverlay}></div>
            </div>

            <div className={styles.capabilitiesPlayBtnWrapper} onClick={onOpenVideo}>
              <button
                type="button"
                className={styles.playButtonCircle}
                aria-label="Play factory video"
              >
                <svg className={styles.playTriangleIcon} viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </button>
              <div className={styles.playBtnCaption}>
                <span className={styles.playBtnTitle}>See our factory in action</span>
                <span className={styles.playBtnSubtitle}>Watch video</span>
              </div>
            </div>
          </div>

          {/* Right Side: Capabilities Content */}
          <div className={styles.capabilitiesContentSide}>
            <div className={styles.capabilitiesInner}>
              <span className={styles.sectionBadge}>OUR CAPABILITIES</span>
              <h2 className={styles.capabilitiesTitle}>Complete mattress manufacturing under one roof.</h2>
              <p className={styles.capabilitiesDescription}>
                From cutting foam blocks to size and sewing custom covers, to assembling, packing, and delivering finished mattresses. We handle every step in our Oldham factory for healthcare, trade, and retail partners across the UK.
              </p>

              {/* 6 Capabilities — single horizontal row */}
              <div className={styles.capabilitiesItemsRow}>
                <div className={styles.capabilityItem}>
                  <div className={styles.capabilityIconWrap}>
                    <DesignDraftIcon className={styles.capabilityIcon} />
                  </div>
                  <span className={styles.capabilityLabel}>Design &amp;<br />Engineering</span>
                </div>

                <div className={styles.capabilityItem}>
                  <div className={styles.capabilityIconWrap}>
                    <CncCuttingIcon className={styles.capabilityIcon} />
                  </div>
                  <span className={styles.capabilityLabel}>Precision Cutting<br />&amp; Shaping</span>
                </div>

                <div className={styles.capabilityItem}>
                  <div className={styles.capabilityIconWrap}>
                    <FoamLayersIcon className={styles.capabilityIcon} />
                  </div>
                  <span className={styles.capabilityLabel}>Foam<br />Manufacturing</span>
                </div>

                <div className={styles.capabilityItem}>
                  <div className={styles.capabilityIconWrap}>
                    <MattressIcon className={styles.capabilityIcon} />
                  </div>
                  <span className={styles.capabilityLabel}>Mattress<br />Production</span>
                </div>

                <div className={styles.capabilityItem}>
                  <div className={styles.capabilityIconWrap}>
                    <QualityAssuranceIcon className={styles.capabilityIcon} />
                  </div>
                  <span className={styles.capabilityLabel}>Quality<br />Assurance</span>
                </div>

                <div className={styles.capabilityItem}>
                  <div className={styles.capabilityIconWrap}>
                    <DeliveryTruckIcon className={styles.capabilityIcon} />
                  </div>
                  <span className={styles.capabilityLabel}>Delivery &amp;<br />Support</span>
                </div>
              </div>

              <a href="#capabilities" className={styles.capabilitiesCtaBtn}>
                <span>Explore our capabilities</span>
                <ArrowRightIcon className={styles.iconArrow} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Capabilities;
