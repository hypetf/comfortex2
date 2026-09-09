import React, { Component } from 'react';
import styles from './VideoModal.styles.css';

export class VideoModal extends Component {
  render() {
    const { isOpen, onClose } = this.props;

    if (!isOpen) return null;

    return (
      <div className={styles.modalBackdrop} onClick={onClose}>
        <div className={`${styles.modalDialog} ${styles.modalVideoDialog}`} onClick={(e) => e.stopPropagation()}>
          <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close dialog">
            ✕
          </button>
          <div className={styles.modalVideoWrapper}>
            {/* High resolution manufacturing factory reel video */}
            <iframe 
              className={styles.modalVideoIframe}
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
              title="Comfortex Factory Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoModal;
