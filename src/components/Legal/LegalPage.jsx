import React, { useState, useEffect } from 'react';
import styles from './LegalPage.styles.css';
import {
  ShieldCheck,
  FileText,
  Lock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertTriangle,
  ArrowLeft
} from 'lucide-react';

export function LegalPage({ initialTab = 'privacy', onNavigateHome }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    const url = tab === 'terms' ? '/terms' : '/privacy';
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.legalPageWrapper}>
      {/* 1. Header & Breadcrumb Banner */}
      <header className={styles.legalHeaderBanner}>
        <div className={styles.legalHeaderContainer}>
          <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
            <a
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateHome) onNavigateHome();
              }}
              className={styles.breadcrumbLink}
            >
              Home
            </a>
            <span className={styles.breadcrumbSep}>/</span>
            <span>Legal Documentation</span>
            <span className={styles.breadcrumbSep}>/</span>
            <span>{activeTab === 'privacy' ? 'Privacy Policy' : 'Website Terms of Use'}</span>
          </nav>

          <div className={styles.legalTitleRow}>
            <div>
              <h1 className={styles.legalMainHeading}>
                {activeTab === 'privacy' ? 'Privacy Policy' : 'Website Terms of Use'}
              </h1>
              <p style={{ margin: '8px 0 0', color: '#64748b', fontSize: '0.9375rem' }}>
                Comfortex Limited &bull; Informational Website &bull; Oldham, England
              </p>
            </div>
            <div className={styles.lastUpdatedTag}>
              Last Revised: October 2026
            </div>
          </div>

          {/* Tab Switcher */}
          <div className={styles.legalTabsBar}>
            <button
              type="button"
              className={`${styles.legalTabBtn} ${activeTab === 'privacy' ? styles.legalTabBtnActive : ''}`}
              onClick={() => switchTab('privacy')}
            >
              Privacy Policy (UK GDPR)
            </button>
            <button
              type="button"
              className={`${styles.legalTabBtn} ${activeTab === 'terms' ? styles.legalTabBtnActive : ''}`}
              onClick={() => switchTab('terms')}
            >
              Terms &amp; Conditions of Use
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Content Layout */}
      <div className={styles.legalContentContainer}>
        {/* Sticky Table of Contents Sidebar */}
        <aside className={styles.legalSidebar}>
          <h3 className={styles.sidebarTocTitle}>Contents Navigation</h3>
          {activeTab === 'privacy' ? (
            <ul className={styles.sidebarTocList}>
              <li className={styles.sidebarTocItem}><a href="#priv-intro">1. Informational Scope</a></li>
              <li className={styles.sidebarTocItem}><a href="#priv-collect">2. Information We Collect</a></li>
              <li className={styles.sidebarTocItem}><a href="#priv-use">3. How We Use Enquiries</a></li>
              <li className={styles.sidebarTocItem}><a href="#priv-sharing">4. No Third-Party Sharing</a></li>
              <li className={styles.sidebarTocItem}><a href="#priv-security">5. Data Storage &amp; Security</a></li>
              <li className={styles.sidebarTocItem}><a href="#priv-cookies">6. No Tracking Cookies</a></li>
              <li className={styles.sidebarTocItem}><a href="#priv-rights">7. Your Rights (UK GDPR)</a></li>
              <li className={styles.sidebarTocItem}><a href="#priv-contact">8. Contact &amp; Enquiries</a></li>
            </ul>
          ) : (
            <ul className={styles.sidebarTocList}>
              <li className={styles.sidebarTocItem}><a href="#terms-intro">1. Acceptance of Terms</a></li>
              <li className={styles.sidebarTocItem}><a href="#terms-informational">2. Informational Purpose (No E-Commerce)</a></li>
              <li className={styles.sidebarTocItem}><a href="#terms-quotes">3. Quotation Requests &amp; Estimator</a></li>
              <li className={styles.sidebarTocItem}><a href="#terms-technical">4. Technical Guidance &amp; Foam Specs</a></li>
              <li className={styles.sidebarTocItem}><a href="#terms-ip">5. Intellectual Property Rights</a></li>
              <li className={styles.sidebarTocItem}><a href="#terms-liability">6. Accuracy &amp; Liability Disclaimer</a></li>
              <li className={styles.sidebarTocItem}><a href="#terms-links">7. External Links &amp; Site Access</a></li>
              <li className={styles.sidebarTocItem}><a href="#terms-jurisdiction">8. Governing Law &amp; Jurisdiction</a></li>
            </ul>
          )}

          <div className={styles.sidebarContactCard}>
            <strong>Need Assistance?</strong>
            <p style={{ margin: '4px 0 2px' }}>Comfortex Sales &amp; Enquiries Team:</p>
            <a href="tel:01616652420" className={styles.sidebarPhoneLink}>
              0161 665 2420
            </a>
            <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>Mon&ndash;Fri 8:00am &ndash; 5:00pm</span>
          </div>
        </aside>

        {/* Main Document Body */}
        <main className={styles.legalDocumentCard}>
          {activeTab === 'privacy' ? (
            /* ========================================================= */
            /* PRIVACY POLICY (INFORMATIONAL WEBSITE)                    */
            /* ========================================================= */
            <article>
              <div className={styles.legalIntroCallout}>
                <strong>Informational Website Privacy Notice:</strong> This website is an informational presentation of Comfortex Limited&apos;s foam manufacturing and conversion services. We do not engage in automated data harvesting, user tracking, or online e-commerce transactions. The only personal information we collect is what you voluntarily submit via our direct contact and quote request forms.
              </div>

              {/* 1. Introduction */}
              <section className={styles.legalSection} id="priv-intro">
                <h2 className={styles.legalSectionTitle}>1. Who We Are &amp; Scope of This Notice</h2>
                <p className={styles.legalParagraph}>
                  This Privacy Notice applies to the website operated by <strong>Comfortex Limited</strong> (&quot;Comfortex&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), having its manufacturing headquarters and registered address in Oldham, Greater Manchester, United Kingdom.
                </p>
                <p className={styles.legalParagraph}>
                  For the purposes of the United Kingdom General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 (DPA 2018), Comfortex Limited acts as the <strong>Data Controller</strong> for any personal information you provide when using our website to contact us or submit an inquiry.
                </p>
              </section>

              {/* 2. Information We Collect */}
              <section className={styles.legalSection} id="priv-collect">
                <h2 className={styles.legalSectionTitle}>2. Personal Information We Collect (Contact Forms Only)</h2>
                <p className={styles.legalParagraph}>
                  Because this is an informational website and not an online retail store, we do not require account registration, do not take online payments, and do not collect credit or debit card details.
                </p>
                <p className={styles.legalParagraph}>
                  The <strong>only</strong> personal information we collect is that which you choose to provide voluntarily when submitting an enquiry, such as through our contact form or custom foam quote request tool:
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>
                    <strong>Contact Details:</strong> Your full name, email address, telephone number, and job title.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Company Information:</strong> Company or trading name (for trade or commercial inquiries).
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Project &amp; Technical Requirements:</strong> Foam dimensions, shape specifications, density grades, application notes, delivery location/postcode, or any custom details you provide to help us calculate a manufacturing estimate.
                  </li>
                </ul>
              </section>

              {/* 3. How We Use Your Enquiries */}
              <section className={styles.legalSection} id="priv-use">
                <h2 className={styles.legalSectionTitle}>3. How We Use Your Enquiry Information</h2>
                <p className={styles.legalParagraph}>
                  Any information you submit through our contact forms is used exclusively for legitimate business communication purposes:
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>
                    <strong>Responding to Inquiries:</strong> Answering your questions, discussing material suitability, and providing technical support regarding our foam conversion and mattress manufacturing services.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Providing Quotations:</strong> Generating an indicative production quote or project estimate based on the specifications you entered.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Telephone &amp; Email Contact:</strong> Following up directly with you via phone or email to discuss your requirements, provide sample guidance, or arrange commercial orders.
                  </li>
                </ul>
                <p className={styles.legalParagraph}>
                  <strong>Lawful Basis:</strong> We process your contact form details on the basis of taking pre-contractual steps at your direct request, and our legitimate commercial interest in responding promptly to prospective client inquiries.
                </p>
              </section>

              {/* 4. Sharing & Third Parties */}
              <section className={styles.legalSection} id="priv-sharing">
                <h2 className={styles.legalSectionTitle}>4. No Third-Party Marketing or Data Selling</h2>
                <p className={styles.legalParagraph}>
                  <strong>We do not sell, rent, lease, or trade your personal information to third parties under any circumstances.</strong>
                </p>
                <p className={styles.legalParagraph}>
                  Your contact form details remain strictly with Comfortex&apos;s internal sales and manufacturing team. We do not share your details with external marketing agencies, advertising networks, or data aggregators. Information would only ever be disclosed if required by applicable UK law or statutory regulatory authority.
                </p>
              </section>

              {/* 5. Data Storage & Security */}
              <section className={styles.legalSection} id="priv-security">
                <h2 className={styles.legalSectionTitle}>5. Data Storage, Security &amp; Retention</h2>
                <p className={styles.legalParagraph}>
                  All submissions through our online forms are transmitted securely using encrypted SSL/TLS protocols and received directly onto our protected internal company systems in the United Kingdom.
                </p>
                <p className={styles.legalParagraph}>
                  We retain contact form records only for as long as necessary to complete our correspondence with you, assist with your project quotation, or maintain an active business relationship. Inquiries that do not lead to commercial business are routinely and securely deleted.
                </p>
              </section>

              {/* 6. Cookies */}
              <section className={styles.legalSection} id="priv-cookies">
                <h2 className={styles.legalSectionTitle}>6. No Tracking Cookies or Behavioural Profiling</h2>
                <p className={styles.legalParagraph}>
                  This website does <strong>not</strong> deploy third-party advertising cookies, behavioural tracking pixels, or cross-site monitoring scripts.
                </p>
                <p className={styles.legalParagraph}>
                  Any temporary local browser storage used on the site is strictly functional—for example, retaining your selected foam dimensions or step position within the foam configurator while you navigate between steps. This functional storage is maintained solely in your local browser and does not record or transmit personal identity data.
                </p>
              </section>

              {/* 7. Your Rights */}
              <section className={styles.legalSection} id="priv-rights">
                <h2 className={styles.legalSectionTitle}>7. Your Rights Under UK GDPR</h2>
                <p className={styles.legalParagraph}>
                  In accordance with UK data protection legislation, you have the right to:
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>
                    <strong>Right of Access:</strong> Request confirmation and a copy of any personal data we hold about you resulting from your contact form submission.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Right to Rectification:</strong> Request correction of any incomplete, inaccurate, or outdated contact details.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Right to Erasure:</strong> Request that we delete your contact information and quote history from our inquiry records.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Right to Object:</strong> Object at any time to us contacting you regarding an inquiry.
                  </li>
                </ul>
              </section>

              {/* 8. Contact & ICO */}
              <section className={styles.legalSection} id="priv-contact">
                <h2 className={styles.legalSectionTitle}>8. Contact Us &amp; Complaints</h2>
                <p className={styles.legalParagraph}>
                  To exercise your data protection rights or discuss any privacy-related questions, please contact our team:
                </p>
                <div className={styles.companyContactBlock}>
                  <p className={styles.contactLine}><strong>Comfortex Limited</strong></p>
                  <p className={styles.contactLine}>Daisy Street, Oldham, Greater Manchester, OL1 2HP, United Kingdom</p>
                  <p className={styles.contactLine}>Telephone: <strong>0161 665 2420</strong></p>
                  <p className={styles.contactLine}>Email: <strong>info@comfortex.co.uk</strong></p>
                </div>
                <p className={styles.legalParagraph} style={{ marginTop: '14px' }}>
                  If you have concerns about our handling of your information, you also have the right to contact the UK supervisory body, the <strong>Information Commissioner&apos;s Office (ICO)</strong>, at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#0284c7' }}>ico.org.uk</a> or telephone 0303 123 1113.
                </p>
              </section>
            </article>
          ) : (
            /* ========================================================= */
            /* TERMS & CONDITIONS OF USE (INFORMATIONAL WEBSITE)         */
            /* ========================================================= */
            <article>
              <div className={styles.legalIntroCallout}>
                <strong>Website Terms of Use:</strong> This website is an informational presentation of Comfortex Limited&apos;s foam manufacturing and conversion services. This is not an e-commerce platform and no contracts of sale or financial transactions are conducted on this website.
              </div>

              {/* 1. Acceptance of Terms */}
              <section className={styles.legalSection} id="terms-intro">
                <h2 className={styles.legalSectionTitle}>1. Acceptance of Website Terms</h2>
                <p className={styles.legalParagraph}>
                  These Terms of Use govern your access to and browsing of the website operated by <strong>Comfortex Limited</strong> (&quot;Comfortex&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), headquartered in Oldham, Greater Manchester, England.
                </p>
                <p className={styles.legalParagraph}>
                  By accessing, viewing, or submitting an enquiry through this website, you confirm your acceptance of these Terms of Use. If you do not agree to these terms, please refrain from using the site.
                </p>
              </section>

              {/* 2. Informational Purpose (No E-Commerce) */}
              <section className={styles.legalSection} id="terms-informational">
                <h2 className={styles.legalSectionTitle}>2. Informational Purpose (No E-Commerce)</h2>
                <div className={styles.highlightBox}>
                  <h4 className={styles.highlightBoxTitle}>Non-Transactional Platform:</h4>
                  This website is strictly an <strong>informational showcase and technical enquiry portal</strong>. It is not an e-commerce platform. We do not sell goods directly via the website, do not take online payments, and do not enter into binding contracts of supply through this website.
                </div>
                <p className={styles.legalParagraph}>
                  All manufacturing orders, commercial contracts, bespoke production runs, trade pricing agreements, and supply terms are negotiated, quoted, and finalized offline directly through Comfortex sales representatives and official company documentation.
                </p>
              </section>

              {/* 3. Quotations & Custom Estimator */}
              <section className={styles.legalSection} id="terms-quotes">
                <h2 className={styles.legalSectionTitle}>3. Quotation Requests &amp; Foam Estimator Tool</h2>
                <p className={styles.legalParagraph}>
                  Our interactive foam configurator and quote request forms are provided as convenient estimation and specification tools to help customers formulate technical enquiries.
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>
                    <strong>Indicative Estimates Only:</strong> Any dimensional summaries, foam density guides, or estimated pricing figures displayed in the configurator are for illustrative and quotation guidance purposes only and do not constitute a binding commercial offer.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Formal Quotations:</strong> Official manufacturing quotations, confirmed unit pricing, volume discounts, and delivery schedules will be confirmed directly in writing or by telephone by a Comfortex sales representative following review of your enquiry.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Direct Contact:</strong> Submitting a quote request prompts our team to review your specifications and contact you directly via phone (<strong>0161 665 2420</strong>) or email to assist with your order.
                  </li>
                </ul>
              </section>

              {/* 4. Technical Guidance & Foam Specs */}
              <section className={styles.legalSection} id="terms-technical">
                <h2 className={styles.legalSectionTitle}>4. Technical Guidance &amp; Foam Specifications</h2>
                <p className={styles.legalParagraph}>
                  Comfortex manufactures and converts flexible polyurethane and reflex foams in accordance with relevant British Standards and fire safety regulations:
                </p>
                <ul className={styles.legalList}>
                  <li className={styles.legalListItem}>
                    <strong>Fire Safety Compliance:</strong> All foam grades supplied comply with the Furniture and Furnishings (Fire) (Safety) Regulations 1988, including CMHR Crib 5 and healthcare specification standards where specified.
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Manufacturing Tolerances (BS 3379):</strong> Flexible polyurethane foam is a resilient cellular material. All bespoke CNC cut foam pieces are subject to standard industry fabrication tolerances of approximately &plusmn;2mm or &plusmn;1% (whichever is greater).
                  </li>
                  <li className={styles.legalListItem}>
                    <strong>Technical Verification:</strong> Technical specifications, foam densities, and application advice provided on this website are for general guidance. Customers with specialized engineering or medical requirements should consult our technical team directly at <strong>0161 665 2420</strong> to confirm material suitability.
                  </li>
                </ul>
              </section>

              {/* 5. Intellectual Property */}
              <section className={styles.legalSection} id="terms-ip">
                <h2 className={styles.legalSectionTitle}>5. Intellectual Property Rights</h2>
                <p className={styles.legalParagraph}>
                  All intellectual property rights in and to this website, including but not limited to text, photographs, illustrations, videos, logos, trade names, technical graphics, and software scripts, are owned by or licensed to Comfortex Limited.
                </p>
                <p className={styles.legalParagraph}>
                  You may print or download extracts from this website solely for your own personal or internal business reference. You may not copy, reproduce, modify, distribute, or publicly display any content from this website without prior written permission from Comfortex Limited.
                </p>
              </section>

              {/* 6. Liability Disclaimer */}
              <section className={styles.legalSection} id="terms-liability">
                <h2 className={styles.legalSectionTitle}>6. Accuracy &amp; Limitation of Liability</h2>
                <p className={styles.legalParagraph}>
                  While we take reasonable care to ensure the information on this website is accurate and up to date, it is provided on an &quot;as is&quot; and &quot;as available&quot; basis for general information only.
                </p>
                <p className={styles.legalParagraph}>
                  To the maximum extent permitted by English law, Comfortex Limited excludes all liability for any direct, indirect, or consequential loss or damage arising out of or in connection with the access to, use of, or reliance placed on any information published on this website, or any temporary unavailability of the website.
                </p>
                <p className={styles.legalParagraph}>
                  Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under applicable law.
                </p>
              </section>

              {/* 7. External Links & Site Access */}
              <section className={styles.legalSection} id="terms-links">
                <h2 className={styles.legalSectionTitle}>7. External Links &amp; Website Availability</h2>
                <p className={styles.legalParagraph}>
                  This website may contain links to external third-party websites or regulatory bodies (such as the ICO or British Standards). Comfortex has no control over the content of third-party websites and accepts no responsibility for their content or reliability.
                </p>
                <p className={styles.legalParagraph}>
                  We reserve the right to modify, suspend, or withdraw any part of this website without notice, and we do not guarantee that the site will always be available or free from bugs or technical interruptions.
                </p>
              </section>

              {/* 8. Law & Jurisdiction */}
              <section className={styles.legalSection} id="terms-jurisdiction">
                <h2 className={styles.legalSectionTitle}>8. Governing Law and Jurisdiction</h2>
                <p className={styles.legalParagraph}>
                  These Terms of Use and any dispute or claim arising out of or in connection with your use of this website shall be governed by and construed in accordance with the <strong>laws of England and Wales</strong>.
                </p>
                <p className={styles.legalParagraph}>
                  The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms of Use or the use of this website.
                </p>
              </section>
            </article>
          )}
        </main>
      </div>
    </div>
  );
}

export default LegalPage;
