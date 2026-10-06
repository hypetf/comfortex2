import React, { Component } from 'react';
import heroBgImg from '../../assets/hero_bg.png';
import {
  Award,
  MapPin,
  BadgeCheck,
  Factory,
  Handshake,
  ArrowRight
} from 'lucide-react';
import styles from './Hero.styles.css';

export class Hero extends Component {
  render() {
    const { onOpenQuote } = this.props;

    return (
      <section className={styles.heroSection} id="hero">
        {/* Background Image with precise dark gradient overlay */}
        <div
          className={styles.heroBgContainer}
          style={{ backgroundImage: `url(${heroBgImg})` }}
        >
          {/* <div className={styles.heroOverlay}></div> */}
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              <span className={styles.heroTextWhite}>Quality comfort products.</span>
              <br />
              <span className={styles.heroTextGold}>Made in Oldham.</span>
            </h1>

            <p className={styles.heroDescription}>
              For over 25 years, Comfortex has designed and manufactured high-performance foam and mattress solutions for healthcare, furniture, bedding and specialist industries across the UK.
            </p>

            <div className={styles.heroCtaGroup}>
              <a
                href="/configurator"
                className={styles.heroBtnPrimary}
                onClick={(e) => {
                  if (this.props.onNavigateConfigurator) {
                    e.preventDefault();
                    this.props.onNavigateConfigurator();
                  }
                }}
              >
                <span>Build your foam now</span>
              </a>

              <a
                href="https://comfortexio.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroBtnSecondary}
              >
                Shop Mattresses Direct
                <ArrowRight className={styles.iconArrow} size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Stats / Trust Ribbon */}
        <div className={styles.heroStatsWrapper}>
          <div className={styles.heroStatsContainer}>
            {/* Stat 1 */}
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatIconWrapper}>
                <Award className={styles.heroStatIcon} size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.heroStatInfo}>
                <h3 className={styles.heroStatNumber}>25+</h3>
                <p className={styles.heroStatLabel}>Years of manufacturing</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatIconWrapper}>
                <MapPin className={styles.heroStatIcon} size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.heroStatInfo}>
                <h3 className={styles.heroStatNumber}>UK</h3>
                <p className={styles.heroStatLabel}>Manufactured in Oldham, England</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatIconWrapper}>
                <BadgeCheck className={styles.heroStatIcon} size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.heroStatInfo}>
                <h3 className={styles.heroStatNumber}>ISO 9001</h3>
                <p className={styles.heroStatLabel}>Quality management certified</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatIconWrapper}>
                <Factory className={styles.heroStatIcon} size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.heroStatInfo}>
                <h3 className={styles.heroStatNumber}>100k+</h3>
                <p className={styles.heroStatLabel}>Products manufactured every year</p>
              </div>
            </div>

            {/* Stat 5 */}
            <div className={styles.heroStatItem}>
              <div className={styles.heroStatIconWrapper}>
                <Handshake className={styles.heroStatIcon} size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.heroStatInfo}>
                <h3 className={styles.heroStatNumber}>Trusted</h3>
                <p className={styles.heroStatLabel}>By healthcare, businesses & organisations UK wide</p>
              </div>
            </div>
          </div>

          {/* Mobile CTA Buttons (positioned at the bottom of 100svh on mobile) */}
          <div className={styles.heroCtaGroupMobile}>
            <a
              href="/configurator"
              className={styles.heroBtnPrimary}
              onClick={(e) => {
                if (this.props.onNavigateConfigurator) {
                  e.preventDefault();
                  this.props.onNavigateConfigurator();
                }
              }}
            >
              <span>Build your foam now</span>
            </a>

            <a
              href="https://comfortexio.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroBtnSecondary}
            >
              Shop Mattresses Direct
              <ArrowRight className={styles.iconArrow} size={15} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
