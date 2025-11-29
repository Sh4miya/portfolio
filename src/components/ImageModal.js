import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import '../style.scss';

function ImageModal({ src, alt, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = (e) => {
    if (e.target === e.currentTarget || e.target.classList.contains('modal-close')) {
      setIsOpen(false);
    }
  };

  const modalContent = isOpen ? (
    <div 
      className="image-modal-overlay" 
      onClick={closeModal}
    >
      <div className="image-modal-content">
        <button 
          className="modal-close" 
          onClick={closeModal}
          aria-label="Close modal"
        >
          ×
        </button>
        <img src={src} alt={alt} className="image-modal-image" />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div onClick={openModal} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      {isOpen && createPortal(modalContent, document.body)}
    </>
  );
}

export default ImageModal;

