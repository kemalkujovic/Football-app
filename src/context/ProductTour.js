import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [showTourModal, setShowTourModal] = useState(() => {
        return localStorage.getItem("dontShowTourModal") !== "true";
    });

    const handleDontShowAgain = () => {
        localStorage.setItem("dontShowTourModal", "true");
        setShowTourModal(false);
    };

    return (
        <ProductContext.Provider
            value={{
                showTourModal,
                setShowTourModal,
                handleDontShowAgain,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
