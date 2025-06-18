import React from "react";
import "../../styles/components/Joker.css";

interface JokerConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const JokerConfirmDialog: React.FC<JokerConfirmDialogProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="joker-dialog-overlay">
      <div className="joker-dialog-card">
        <h2 className="joker-dialog-title">Jokeri kullanmak istediğine emin misin?</h2>
        <img
          src="/assets/images/KartBlack.png"
          alt="Selected Joker"
          className="joker-dialog-image"
        />
        <div className="joker-dialog-buttons">
          <button className="yes-button" onClick={onConfirm}>
            Evet
          </button>
          <button className="no-button" onClick={onCancel}>
            Hayır
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokerConfirmDialog;
