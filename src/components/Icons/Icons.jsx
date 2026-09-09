import React, { Component } from 'react';

// Specialized Icons matching the design's gold/amber outline strokes
export class StarBadgeIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 16.1 7.2 18.6l.9-5.3-3.8-3.7 5.3-.8L12 2z" />
        <circle cx="12" cy="12" r="9" strokeOpacity="0.4" strokeDasharray="2 2" />
      </svg>
    );
  }
}

export class UkCrestIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 12h18M12 4v16" strokeWidth="2" />
        <path d="M3 4l18 16M21 4L3 20" strokeWidth="1.2" strokeOpacity="0.6" />
      </svg>
    );
  }
}

export class IsoBadgeIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="M8 12h.01M16 12h.01" strokeWidth="2" />
      </svg>
    );
  }
}

export class FactoryIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V9l5 4V9l5 4V4h6v16" />
        <path d="M16 8h2M16 12h2M16 16h2" />
      </svg>
    );
  }
}

export class ShieldTrustIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
}

export class QualityAssuranceIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-3 4-1-5-5-1 4-3-1-5 5 2 4-3 1 5 5 1-4 3 1 5-4-3z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }
}

export class CncCuttingIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    );
  }
}

export class FoamLayersIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }
}

export class MattressIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 10h12M6 14h12" strokeDasharray="1 2" />
        <path d="M2 12h20" />
      </svg>
    );
  }
}

export class DeliveryTruckIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );
  }
}

export class DesignDraftIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    );
  }
}

export class LeafEcoIcon extends Component {
  render() {
    const { className = "w-6 h-6", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    );
  }
}

export class CatalogueDocumentIcon extends Component {
  render() {
    const { className = "w-16 h-16", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 64 64" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8h24l12 12v36H16z" />
        <path d="M40 8v12h12" />
        <line x1="24" y1="28" x2="44" y2="28" />
        <line x1="24" y1="36" x2="44" y2="36" />
        <line x1="24" y1="44" x2="36" y2="44" />
      </svg>
    );
  }
}

export class ArrowRightIcon extends Component {
  render() {
    const { className = "w-4 h-4", stroke = "currentColor" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    );
  }
}
