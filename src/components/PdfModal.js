import React from "react";

export default function PdfModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-iframe-container">
          <iframe
            src="./dani-vs-pritam.pdf"
            title="PDF"
            className="modal-iframe"
          />
        </div>
      </div>
    </div>
  );
}
