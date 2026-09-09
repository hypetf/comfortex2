import React, { Component } from 'react';
import styles from './ProcurementContact.styles.css';

export class ProcurementContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      company: '',
      email: '',
      sector: 'Medical & Healthcare',
      requirements: '',
      submitted: false,
    };
    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    this.timer = setTimeout(() => {
      this.setState({
        submitted: false,
        fullName: '',
        company: '',
        email: '',
        sector: 'Medical & Healthcare',
        requirements: '',
      });
    }, 4000);
  };

  render() {
    const { fullName, company, email, sector, requirements, submitted } = this.state;

    return (
      <section className={styles.procurementSection} id="contact">
        <div className={styles.contentContainer}>
          <div className={styles.gridContainer}>
            {/* Left Column: Information & Trust Points */}
            <div className={styles.infoColumn}>
              <span className={styles.sectionBadge}>START A PROCUREMENT PROJECT</span>

              <h2 className={styles.mainHeading}>
                Have a comfort challenge?<br />
                Let&rsquo;s find the right solution.
              </h2>

              <p className={styles.subtext}>
                Discuss your specifications with our technical team. We support contract orders, bespoke product development, and supply agreements.
              </p>

              <ul className={styles.checklist}>
                <li className={styles.checklistItem}>
                  <span className={styles.checkIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dfab5f" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className={styles.checkText}>UK Manufacturer based in Oldham, Greater Manchester</span>
                </li>

                <li className={styles.checklistItem}>
                  <span className={styles.checkIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dfab5f" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className={styles.checkText}>ISO 9001 Quality Management Accredited</span>
                </li>

                <li className={styles.checklistItem}>
                  <span className={styles.checkIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dfab5f" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className={styles.checkText}>Custom volume manufacturing &amp; reliable lead times</span>
                </li>

                <li className={styles.checklistItem}>
                  <span className={styles.checkIcon}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dfab5f" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className={styles.checkText}>Direct technical consultation &amp; spec review</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Contact & Enquiry Card */}
            <div className={styles.formColumn}>
              <div className={styles.formCard}>
                {submitted ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dfab5f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className={styles.successTitle}>Enquiry Received</h3>
                    <p className={styles.successText}>
                      Thank you! Our technical team will review your specifications and be in touch promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={this.handleSubmit} className={styles.form}>
                    {/* Row 1: Full Name & Company */}
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="fullName" className={styles.formLabel}>
                          FULL NAME
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          placeholder="Jane Smith"
                          value={fullName}
                          onChange={this.handleChange}
                          className={styles.formInput}
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="company" className={styles.formLabel}>
                          COMPANY / ORGANIZATION
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          placeholder="Acme Healthcare Ltd"
                          value={company}
                          onChange={this.handleChange}
                          className={styles.formInput}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Work Email & Sector */}
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                          WORK EMAIL
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="jane@company.com"
                          value={email}
                          onChange={this.handleChange}
                          className={styles.formInput}
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="sector" className={styles.formLabel}>
                          SECTOR / APPLICATION
                        </label>
                        <div className={styles.selectWrapper}>
                          <select
                            id="sector"
                            name="sector"
                            value={sector}
                            onChange={this.handleChange}
                            className={styles.formSelect}
                          >
                            <option value="Medical & Healthcare">Medical &amp; Healthcare</option>
                            <option value="Bedding & Sleep">Bedding &amp; Sleep</option>
                            <option value="Furniture & Seating">Furniture &amp; Seating</option>
                            <option value="Marine & Boating">Marine &amp; Boating</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Specialist Applications">Specialist Applications</option>
                          </select>
                          <span className={styles.selectChevron}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Project Details */}
                    <div className={styles.formGroupFull}>
                      <label htmlFor="requirements" className={styles.formLabel}>
                        PROJECT DETAILS / REQUIREMENTS
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        rows={3}
                        placeholder="Dimensions, material specifications, volume requirements..."
                        value={requirements}
                        onChange={this.handleChange}
                        className={styles.formTextarea}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className={styles.submitBtn}>
                      Send Enquiry &rarr;
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProcurementContact;
