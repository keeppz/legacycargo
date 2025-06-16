'use client';

import { useState, useEffect } from 'react';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const ErrorMessage = ({ message, onDismiss }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setVisible(true);
      
      // Auto-ocultar después de 5 segundos
      const timer = setTimeout(() => {
        handleDismiss();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleDismiss = () => {
    setVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!message || !visible) {
    return null;
  }

  return (
    <div className="error-message-container">
      <div className="error-message">
        <FaExclamationTriangle className="error-icon" />
        <p>{message}</p>
        <button onClick={handleDismiss} className="dismiss-button">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage; 