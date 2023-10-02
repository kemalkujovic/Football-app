import React from "react";

function Modal() {
  const openPopup = () => {
    const url = "http://localhost:3000/favorite"; // Zamijenite sa željenim URL-om
    const windowName = "Popup"; // Naziv novog prozora
    const windowFeatures = "width=600,height=800"; // Opcionalne karakteristike prozora

    window.open(url, windowName, windowFeatures);
  };

  return (
    <div>
      <button>Otvori Pop-updsadsa</button>
    </div>
  );
}

export default Modal;
