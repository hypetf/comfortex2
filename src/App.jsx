import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Industries } from './components/Industries/Industries';
import { Capabilities } from './components/Capabilities/Capabilities';
import { CustomerLogos } from './components/CustomerLogos/CustomerLogos';
import { ProductionScale } from './components/ProductionScale/ProductionScale';
import { Products } from './components/Products/Products';
import { TrustBar } from './components/TrustBar/TrustBar';
import { CaseStudies } from './components/CaseStudies/CaseStudies';
import { EnvironmentalResponsibility } from './components/EnvironmentalResponsibility/EnvironmentalResponsibility';
import { ProcurementContact } from './components/ProcurementContact/ProcurementContact';
import { DualCtaBanner } from './components/DualCtaBanner/DualCtaBanner';
import { Footer } from './components/Footer/Footer';
import { Configurator } from './components/Configurator/Configurator';
import { ProductsPage } from './components/ProductsPage/ProductsPage';
import { LegalPage } from './components/Legal/LegalPage';
import { QuoteModal, VideoModal } from './components/Modals';

class App extends Component {
  constructor(props) {
    super(props);
    const path = typeof window !== 'undefined' ? window.location.pathname : '/';
    let initialPage = 'home';
    let initialLegalTab = 'privacy';

    if (path === '/configurator' || (typeof window !== 'undefined' && window.location.hash === '#configurator')) {
      initialPage = 'configurator';
    } else if (path === '/products' || (typeof window !== 'undefined' && window.location.hash === '#products-page')) {
      initialPage = 'products';
    } else if (path === '/privacy' || path === '/privacy-policy') {
      initialPage = 'legal';
      initialLegalTab = 'privacy';
    } else if (path === '/terms' || path === '/terms-and-conditions') {
      initialPage = 'legal';
      initialLegalTab = 'terms';
    }

    this.state = {
      currentPage: initialPage,
      legalTab: initialLegalTab,
      quoteModalOpen: false,
      quoteModalType: 'quote',
      videoModalOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState = () => {
    const path = window.location.pathname;
    if (path === '/configurator') {
      this.setState({ currentPage: 'configurator' });
    } else if (path === '/products') {
      this.setState({ currentPage: 'products' });
    } else if (path === '/privacy' || path === '/privacy-policy') {
      this.setState({ currentPage: 'legal', legalTab: 'privacy' });
    } else if (path === '/terms' || path === '/terms-and-conditions') {
      this.setState({ currentPage: 'legal', legalTab: 'terms' });
    } else {
      this.setState({ currentPage: 'home' });
    }
  };

  handleNavigateConfigurator = () => {
    window.history.pushState({}, '', '/configurator');
    this.setState({ currentPage: 'configurator' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handleNavigateProducts = (targetHash) => {
    const url = targetHash ? `/products${targetHash}` : '/products';
    window.history.pushState({}, '', url);
    this.setState({ currentPage: 'products' }, () => {
      if (targetHash && targetHash.startsWith('#')) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  handleNavigateLegal = (tab) => {
    const url = tab === 'terms' ? '/terms' : '/privacy';
    window.history.pushState({}, '', url);
    this.setState({ currentPage: 'legal', legalTab: tab });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handleNavigateHome = (targetHash) => {
    window.history.pushState({}, '', '/');
    this.setState({ currentPage: 'home' }, () => {
      if (targetHash && targetHash.startsWith('#')) {
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  handleOpenQuote = () => {
    this.setState({
      quoteModalType: 'quote',
      quoteModalOpen: true,
    });
  };

  handleDownloadCatalogue = () => {
    this.setState({
      quoteModalType: 'catalogue',
      quoteModalOpen: true,
    });
  };

  handleOpenVideo = () => {
    this.setState({
      videoModalOpen: true,
    });
  };

  handleCloseQuote = () => {
    this.setState({
      quoteModalOpen: false,
    });
  };

  handleCloseVideo = () => {
    this.setState({
      videoModalOpen: false,
    });
  };

  render() {
    const { currentPage, legalTab, quoteModalOpen, quoteModalType, videoModalOpen } = this.state;

    return (
      <div className="comfortex-app">
        {/* 1. Header / Navbar */}
        <Navbar
          onOpenQuote={this.handleOpenQuote}
          currentPage={currentPage}
          onNavigateHome={this.handleNavigateHome}
          onNavigateConfigurator={this.handleNavigateConfigurator}
          onNavigateProducts={() => this.handleNavigateProducts()}
        />

        {currentPage === 'configurator' ? (
          <Configurator
            onNavigateHome={() => this.handleNavigateHome()}
            onOpenQuote={this.handleOpenQuote}
          />
        ) : currentPage === 'products' ? (
          <ProductsPage
            onNavigateConfigurator={this.handleNavigateConfigurator}
            onOpenQuote={this.handleOpenQuote}
          />
        ) : currentPage === 'legal' ? (
          <LegalPage
            initialTab={legalTab}
            onNavigateHome={() => this.handleNavigateHome()}
          />
        ) : (
          <main>
            {/* 2. Hero Section with Trust Stats Strip */}
            <Hero
              onOpenQuote={this.handleOpenQuote}
              onNavigateConfigurator={this.handleNavigateConfigurator}
            />

            {/* 3. Six Industries Section */}
            <Industries onNavigateProducts={this.handleNavigateProducts} />
            {/* Production Scale & Manufacturing Output */}
            <ProductionScale />

            {/* 4. Capabilities Video & Features Section */}
            <Capabilities onOpenVideo={this.handleOpenVideo} />

            {/* Customer Logos Marquee */}
            <CustomerLogos />

            {/* 6. Products Section */}
            <Products
              onNavigateConfigurator={this.handleNavigateConfigurator}
              onNavigateProducts={this.handleNavigateProducts}
            />

            {/* 6. Quality & Trust Bar */}
            <TrustBar />

            {/* Environmental Responsibility ("Think Differently") */}
            <EnvironmentalResponsibility />

            {/* 7. Case Studies Section */}
            <CaseStudies />

            {/* Start a Procurement Project (Contact Section) */}
            <ProcurementContact />

            {/* 8. Dual CTA Banner (Healthcare Catalogue & Custom Solution) */}
            <DualCtaBanner
              onOpenQuote={this.handleOpenQuote}
              onDownloadCatalogue={this.handleDownloadCatalogue}
            />
          </main>
        )}

        {/* 9. Footer */}
        <Footer onNavigateLegal={this.handleNavigateLegal} />

        {/* Interactive Modals */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={this.handleCloseQuote}
          defaultType={quoteModalType}
        />

        <VideoModal
          isOpen={videoModalOpen}
          onClose={this.handleCloseVideo}
        />
      </div>
    );
  }
}

export default App;
