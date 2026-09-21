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
import { QuoteModal, VideoModal } from './components/Modals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteModalOpen: false,
      quoteModalType: 'quote',
      videoModalOpen: false,
    };
  }

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
    const { quoteModalOpen, quoteModalType, videoModalOpen } = this.state;

    return (
      <div className="comfortex-app">
        {/* 1. Header / Navbar */}
        <Navbar onOpenQuote={this.handleOpenQuote} />

        <main>
          {/* 2. Hero Section with Trust Stats Strip */}
          <Hero onOpenQuote={this.handleOpenQuote} />

          {/* 3. Six Industries Section */}
          <Industries />

          {/* 4. Capabilities Video & Features Section */}
          <Capabilities onOpenVideo={this.handleOpenVideo} />

          {/* Customer Logos Marquee */}
          <CustomerLogos />

          {/* 5. Production Scale & Manufacturing Output */}
          <ProductionScale />

          {/* 6. Products Section */}
          <Products />

          {/* 6. Quality & Trust Bar */}
          <TrustBar />

          {/* 7. Case Studies Section */}
          <CaseStudies />

          {/* Environmental Responsibility ("Think Differently") */}
          <EnvironmentalResponsibility />

          {/* Start a Procurement Project (Contact Section) */}
          <ProcurementContact />

          {/* 8. Dual CTA Banner (Healthcare Catalogue & Custom Solution) */}
          <DualCtaBanner
            onOpenQuote={this.handleOpenQuote}
            onDownloadCatalogue={this.handleDownloadCatalogue}
          />
        </main>

        {/* 9. Footer */}
        <Footer />

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
