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
          <a
            href="/"
            className={styles.navbarBrand}
            onClick={(e) => {
              if (this.props.onNavigateHome) {
                e.preventDefault();
                this.props.onNavigateHome();
              }
            }}
          >
            <img src={logoImg} alt="Comfortex Engineered Comfort" className={styles.navbarLogo} />
          </a>

          {/* Desktop Nav Links */}
          <nav className={styles.navbarLinks}>
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => {
                  /* Link to /products commented out for now:
                  if (link.name === 'Products' || link.href === '/products') {
                    e.preventDefault();
                    if (this.props.onNavigateProducts) {
                      this.props.onNavigateProducts();
                    }
                  } else */ if (this.props.currentPage !== 'home' && this.props.onNavigateHome) {
                    e.preventDefault();
                    this.props.onNavigateHome(link.href);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className={styles.navbarActions}>
            <a
              href="tel:01616652420"
              className={styles.navbarQuoteBtn}
              title="Call us direct: 0161 665 2420"
            >
              Request a Quote
            </a>
            <a
              href="https://comfortexio.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navbarShopBtn}
            >
              Shop Mattresses
            </a>

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
                  onClick={(e) => {
                    this.closeMobileMenu();
                    /* Link to /products commented out for now:
                    if (link.name === 'Products' || link.href === '/products') {
                      e.preventDefault();
                      if (this.props.onNavigateProducts) {
                        this.props.onNavigateProducts();
                      }
                    } else */ if (this.props.currentPage !== 'home' && this.props.onNavigateHome) {
                      e.preventDefault();
                      this.props.onNavigateHome(link.href);
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:01616652420"
                className={styles.mobileQuoteBtn}
                onClick={this.closeMobileMenu}
              >
                Request a Quote (0161 665 2420)
              </a>
              <a
                href="https://comfortexio.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileShopBtn}
                onClick={this.closeMobileMenu}
              >
                Shop Mattresses
              </a>
            </div>
          </div>
        )}
      </header>
    );
  }
}

export default Navbar;
