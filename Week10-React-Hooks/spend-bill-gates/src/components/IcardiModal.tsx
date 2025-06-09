import React from "react";
import "../styles/icardi-modal.css"; // CSS dosyanı buradan çağırabilirsin

interface IcardiModalProps {
  open: boolean;
  onClose: () => void;
}

const IcardiModal: React.FC<IcardiModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="icardi-modal-overlay" onClick={onClose}>
      <div className="icardi-modal" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="820"
          height="461"
          src="https://www.youtube.com/embed/9gTZPJsO29M?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            borderRadius: "12px",
            maxWidth: "100%",
            boxShadow: "0 4px 32px 0 rgba(34,34,44,0.08)",
          }}
        ></iframe>
        <button className="modal-close-btn" onClick={onClose}>
          Kapat
        </button>
      </div>
    </div>
  );
};

export default IcardiModal;
