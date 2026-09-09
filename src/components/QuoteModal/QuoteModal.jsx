import React, { Component } from 'react';
import styles from './QuoteModal.styles.css';

export class QuoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      formData: {
        name: '',
        email: '',
        company: '',
        industry: 'Healthcare',
        details: ''
      }
    };
    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    this.timer = setTimeout(() => {
      this.setState({ 
        submitted: false,
        formData: {
          name: '',
          email: '',
          company: '',
          industry: 'Healthcare',
          details: ''
        }
      });
      if (this.props.onClose) {
        this.props.onClose();
      }
    }, 2200);
  };

  handleFieldChange = (field, value) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [field]: value
      }
    }));
  };

  render() {
    const { isOpen, onClose, defaultType = 'quote' } = this.props;
    const { submitted, formData } = this.state;

    if (!isOpen) return null;

    const isCatalogue = defaultType === 'catalogue';

    return (
      <div className={styles.modalBackdrop} onClick={onClose}>
        <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
          <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close dialog">
            ✕
          </button>

          {submitted ? (
            <div className={styles.modalSuccessMessage}>
              <div className={styles.modalSuccessIcon}>✓</div>
              <h3>{isCatalogue ? 'Catalogue Ready!' : 'Quote Request Received'}</h3>
              <p>
                {isCatalogue 
                  ? 'Your download has been initiated and a copy sent to your email.' 
                  : 'Thank you for contacting Comfortex. Our Oldham production team will review your specifications and contact you shortly.'}
              </p>
            </div>
          ) : (
            <form className={styles.modalForm} onSubmit={this.handleSubmit}>
              <div className={styles.modalHeader}>
                <span className={styles.sectionBadge}>
                  {isCatalogue ? 'HEALTHCARE CATALOGUE' : 'BESPOKE MANUFACTURING'}
                </span>
                <h2 className={styles.modalTitle}>
                  {isCatalogue ? 'Download Healthcare Catalogue' : 'Request a Manufacturing Quote'}
                </h2>
                <p className={styles.modalSubtitle}>
                  {isCatalogue
                    ? 'Access our complete 2026 medical mattress and pressure care catalogue.'
                    : 'Tell us about your project requirements and dimensions.'}
                </p>
              </div>

              <div className={styles.formGroupRow}>
                <div className={styles.formField}>
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. John Smith"
                    value={formData.name}
                    onChange={(e) => this.handleFieldChange('name', e.target.value)}
                  />
                </div>
                <div className={styles.formField}>
                  <label>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@organization.co.uk"
                    value={formData.email}
                    onChange={(e) => this.handleFieldChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.formGroupRow}>
                <div className={styles.formField}>
                  <label>Company / Trust *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. NHS Foundation Trust"
                    value={formData.company}
                    onChange={(e) => this.handleFieldChange('company', e.target.value)}
                  />
                </div>
                <div className={styles.formField}>
                  <label>Industry</label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => this.handleFieldChange('industry', e.target.value)}
                  >
                    <option value="Healthcare">Healthcare</option>
                    <option value="Bedding">Bedding</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Marine">Marine</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Specialist">Specialist Applications</option>
                  </select>
                </div>
              </div>

              <div className={styles.formField}>
                <label>Project Details / Requirements</label>
                <textarea 
                  rows="3" 
                  placeholder="Specify dimensions, foam densities, volume requirements..."
                  value={formData.details}
                  onChange={(e) => this.handleFieldChange('details', e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className={styles.modalSubmitBtn}>
                {isCatalogue ? 'Download Catalogue Now' : 'Submit Quote Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default QuoteModal;
