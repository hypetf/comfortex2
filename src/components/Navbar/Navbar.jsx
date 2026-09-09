import React, { Component } from 'react';
import logoImg from '../../assets/logo.png';
import { navigationLinks } from '../../data/landingData';
import styles from './Navbar.styles.css';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      mobileMenuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrolled: window.scrollY > 20 });
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    this.setState({ mobileMenuOpen: false });
  };

  handleQuoteClick = () => {
    this.closeMobileMenu();
    if (this.props.onOpenQuote) {
      this.props.onOpenQuote();
    }
  };

  render() {
    const { scrolled, mobileMenuOpen } = this.state;
    const { onOpenQuote } = this.props;

    return (
      <header className={`${styles.navbarHeader} ${scrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navbarContainer}>
          {/* Logo */}
          <a href="#" className={styles.navbarBrand}>
            <img src={logoImg} alt="Comfortex Engineered Comfort" className={styles.navbarLogo} />
          </a>

          {/* Desktop Nav Links */}
          <nav className={styles.navbarLinks}>
            {navigationLinks.map((link) => (
              <a key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className={styles.navbarActions}>
            <button
              type="button"
              className={styles.navbarQuoteBtn}
              onClick={onOpenQuote}
            >
              Request a Quote
            </button>
            <button
              type="button"
              className={styles.navbarShopBtn}
            >
              Shop Mattresses
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={styles.mobileMenuToggle}
              onClick={this.toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.open : ''}`}></span>
              <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.open : ''}`}></span>
              <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.open : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenuDrawer}>
            <div className={styles.mobileMenuLinks}>
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={this.closeMobileMenu}
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                className={styles.mobileQuoteBtn}
                onClick={this.handleQuoteClick}
              >
                Request a Quote
              </button>
              <button
                type="button"
                className={styles.mobileShopBtn}
                onClick={this.closeMobileMenu}
              >
                Shop Mattresses
              </button>
            </div>
          </div>
        )}
      </header>
    );
  }
}

export default Navbar;
