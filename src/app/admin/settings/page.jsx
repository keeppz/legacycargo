'use client';

import { useState, useEffect } from 'react';
import { seedDatabase, checkDataExists } from '@/utils/seedData';
import { FaDatabase, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

export default function SettingsPage() {
  const [dataStatus, setDataStatus] = useState({
    users: null,
    shippings: null,
    prealerts: null
  });
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    checkDataStatus();
  }, []);

  const checkDataStatus = async () => {
    setLoading(true);
    try {
      const status = await checkDataExists();
      setDataStatus(status);
    } catch (error) {
      console.error("Error al verificar estado de datos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeedData = async () => {
    setSeeding(true);
    setResult(null);
    
    try {
      const seedResult = await seedDatabase();
      setResult(seedResult);
      
      // Si fue exitoso, refrescar el estado
      if (seedResult.success) {
        await checkDataStatus();
      }
    } catch (error) {
      console.error("Error al sembrar datos:", error);
      setResult({
        success: false,
        message: `Error inesperado: ${error.message}`
      });
    } finally {
      setSeeding(false);
    }
  };

  const getStatusIcon = (status) => {
    if (status === null) return <FaSpinner className="status-icon spinning" />;
    return status ? <FaCheck className="status-icon success" /> : <FaTimes className="status-icon error" />;
  };

  return (
    <div className="admin-main">
      <h2>Configuración</h2>
      
      <div className="settings-card">
        <h3>Datos de la aplicación</h3>
        <p className="settings-description">
          Verifica si hay datos en las colecciones principales y genera datos de prueba si es necesario.
        </p>
        
        <div className="data-status-grid">
          <div className="data-status-item">
            <div className="status-header">
              <h4>Usuarios</h4>
              {getStatusIcon(dataStatus.users)}
            </div>
            <p>
              {dataStatus.users === null ? 'Verificando...' : 
               dataStatus.users ? 'Hay usuarios en la base de datos' : 'No hay usuarios'}
            </p>
          </div>
          
          <div className="data-status-item">
            <div className="status-header">
              <h4>Envíos</h4>
              {getStatusIcon(dataStatus.shippings)}
            </div>
            <p>
              {dataStatus.shippings === null ? 'Verificando...' : 
               dataStatus.shippings ? 'Hay envíos en la base de datos' : 'No hay envíos'}
            </p>
          </div>
          
          <div className="data-status-item">
            <div className="status-header">
              <h4>Prealertas</h4>
              {getStatusIcon(dataStatus.prealerts)}
            </div>
            <p>
              {dataStatus.prealerts === null ? 'Verificando...' : 
               dataStatus.prealerts ? 'Hay prealertas en la base de datos' : 'No hay prealertas'}
            </p>
          </div>
        </div>
        
        <div className="actions-bar">
          <button 
            className="action-btn seed-btn" 
            onClick={handleSeedData}
            disabled={seeding || (dataStatus.users && dataStatus.shippings && dataStatus.prealerts)}
          >
            {seeding ? <FaSpinner className="spinning" /> : <FaDatabase />}
            {seeding ? 'Generando datos...' : 'Generar datos de prueba'}
          </button>
          
          <button 
            className="action-btn refresh-btn" 
            onClick={checkDataStatus}
            disabled={loading}
          >
            Refrescar estado
          </button>
        </div>
        
        {result && (
          <div className={`seed-result ${result.success ? 'success' : 'error'}`}>
            <p>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
} 