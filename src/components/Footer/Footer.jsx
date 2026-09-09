import React, { Component } from 'react';
import logoImg from '../../assets/logo.png';
import { footerColumns } from '../../data/landingData';
import styles from './Footer.styles.css';

// Social media SVG icons as class components
class LinkedInIcon extends Component {
  render() {
    return (
      <svg className={styles.socialSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
}

class XTwitterIcon extends Component {
  render() {
    return (
      <svg className={styles.socialSvg} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
}

class YoutubeIcon extends Component {
  render() {
    return (
      <svg className={styles.socialSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <polygon points="10 15 15 12 10 9 10 15" />
      </svg>
    );
  }
}

class InstagramIcon extends Component {
  render() {
    return (
      <svg className={styles.socialSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
}

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerSection} id="footer">
        <div className={styles.contentContainer}>
          {/* Main Footer Grid */}
          <div className={styles.footerMainGrid}>
            {/* Brand Info Column */}
            <div className={styles.footerBrandCol}>
              <a href="#" className={styles.footerLogoLink}>
                <img src={logoImg} alt="Comfortex Engineered Comfort" className={styles.footerLogoImg} />
              </a>
              <p className={styles.footerBrandDesc}>
                Engineered comfort solutions, manufactured in Oldham, UK. We combine innovation, quality and expertise to deliver products that make a difference.
              </p>
              
              <div className={styles.footerSocialRow}>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="#" className={styles.socialLink} aria-label="X (Twitter)">
                  <XTwitterIcon />
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <YoutubeIcon />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* 5 Navigation Columns */}
            {footerColumns.map((col) => (
              <div key={col.title} className={styles.footerNavCol}>
                <h4 className={styles.footerColTitle}>{col.title}</h4>
                <ul className={styles.footerLinkList}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.footerLink}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Divider Line */}
          <div className={styles.footerDivider}></div>

          {/* Sub-footer Bottom Bar */}
          <div className={styles.footerBottomBar}>
            <div className={styles.footerCopyright}>
              © {new Date().getFullYear()} Comfortex Ltd. All rights reserved.
            </div>
            <div className={styles.footerCompanyReg}>
              Company No. 03212345
            </div>
            <div className={styles.footerLegalLinks}>
              <a href="#privacy" className={styles.footerLegalLink}>Privacy Policy</a>
              <span className={styles.footerLegalSep}></span>
              <a href="#terms" className={styles.footerLegalLink}>Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
