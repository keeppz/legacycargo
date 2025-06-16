'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, handleFirestoreError } from '@/lib/firebase';

// Crear el contexto
const AuthContext = createContext(null);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    }, (error) => {
      console.error("Error de autenticación:", error);
      setError(error.message);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Función para envolver operaciones de Firestore y manejar errores
  const withErrorHandling = async (operation) => {
    try {
      return await operation();
    } catch (error) {
      const result = handleFirestoreError(error);
      setError(result.message);
      return result;
    }
  };

  // Limpiar errores
  const clearError = () => setError(null);

  const value = {
    currentUser,
    isLoading,
    error,
    clearError,
    withErrorHandling
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 