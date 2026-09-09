import React, { Component } from 'react';
import { products } from '../../data/landingData';
import { ArrowRightIcon } from '../Icons';
import styles from './Products.styles.css';

export class Products extends Component {
  render() {
    return (
      <section className={styles.productsSection} id="products">
        <div className={styles.contentContainer}>
          {/* Section Header */}
          <div className={styles.sectionHeaderSplit}>
            <div className={styles.sectionHeaderLeft}>
              <span className={styles.sectionBadge}>OUR PRODUCTS</span>
              <h2 className={styles.sectionTitle}>Our products. Built to perform.</h2>
            </div>
            <div className={styles.sectionHeaderRight}>
              <p className={styles.sectionDescription}>
                Explore our range of mattresses, foam and custom solutions. Each product is designed with quality, durability and comfort in mind.
              </p>
            </div>
          </div>

          {/* 5 Product Cards Grid */}
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productCardImageWrapper}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.alt || product.title}
                      className={styles.productCardImage}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.parentNode) {
                          e.target.parentNode.classList.add(styles.imagePlaceholder);
                        }
                      }}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>{product.title}</span>
                    </div>
                  )}
                </div>

                <div className={styles.productCardBody}>
                  <h3 className={styles.productCardTitle}>{product.title}</h3>
                  <p className={styles.productCardText}>{product.description}</p>
                  <a href={product.link || '#'} className={styles.cardLink}>
                    <span>{product.ctaText || 'View range'}</span>
                    <ArrowRightIcon className={styles.cardLinkIcon} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
