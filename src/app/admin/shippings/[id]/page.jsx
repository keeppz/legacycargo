'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ErrorMessage from '@/components/ErrorMessage';
import { 
  FaBox, 
  FaUser, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaTruck, 
  FaBarcode,
  FaMoneyBillAlt,
  FaTag,
  FaArrowLeft,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaWeight,
  FaGlobeAmericas
} from 'react-icons/fa';

export default function ShipmentDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [clientInfo, setClientInfo] = useState(null);
  const { error, clearError, setError } = useAuth();

  const STATUS_OPTIONS = [
    { value: 'Entregado', label: 'Entregado' },
    { value: 'En Tránsito', label: 'En Tránsito' },
    { value: 'En Aduana', label: 'En Aduana' },
    { value: 'En Almacén', label: 'En Almacén' }
  ];

  useEffect(() => {
    fetchShipmentDetails();
  }, [id]);

  const fetchShipmentDetails = async () => {
    try {
      setLoading(true);
      
      // Llamar a la API para obtener los detalles del envío
      const response = await fetch(`/api/shipments/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error al obtener detalles del envío: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.shipment) {
        setShipment(data.shipment);
        setNewStatus(data.shipment.status || 'En Almacén');
        
        // Si existe un userID, buscar información del cliente
        if (data.shipment.user && data.shipment.user.id) {
          fetchClientInfo(data.shipment.user.id);
        } else if (data.shipment.userId) {
          fetchClientInfo(data.shipment.userId);
        }
      } else {
        throw new Error('No se pudo obtener la información del envío');
      }
    } catch (error) {
      console.error("Error al obtener detalles del envío:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchClientInfo = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      
      if (!response.ok) {
        console.error(`Error al obtener información del cliente: ${response.statusText}`);
        return;
      }
      
      const data = await response.json();
      
      if (data.user) {
        // Guardamos la información del usuario para acceder a nombre y apellido
        setClientInfo(data.user);
        console.log("Información del cliente obtenida:", data.user);
      }
    } catch (error) {
      console.error("Error al obtener información del cliente:", error);
    }
  };

  const handleUpdateStatus = async () => {
    try {
      const response = await fetch(`/api/shipments/${id}/update-status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (!response.ok) {
        throw new Error(`Error al actualizar estado: ${response.statusText}`);
      }
      
      const result = await response.json();
      
      // Actualizar el envío en el estado local
      setShipment({ ...shipment, status: newStatus });
      setEditStatus(false);
      
      console.log('Estado actualizado:', result);
    } catch (error) {
      console.error("Error al actualizar estado:", error);
      setError(error.message);
    }
  };

  const handleDeleteShipment = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    
    try {
      const response = await fetch(`/api/shipments/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error(`Error al eliminar envío: ${response.statusText}`);
      }
      
      // Redireccionar a la lista de envíos
      router.push('/admin/shippings');
    } catch (error) {
      console.error("Error al eliminar envío:", error);
      setError(error.message);
    }
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return 'No especificado';
    
    // Si es un string de fecha
    if (typeof dateValue === 'string') {
      return new Date(dateValue).toLocaleDateString();
    }
    
    // Si es un timestamp de Firestore
    if (dateValue?.toDate) {
      return dateValue.toDate().toLocaleDateString();
    }
    
    // Si es un objeto timestamp con seconds
    if (dateValue?.seconds) {
      return new Date(dateValue.seconds * 1000).toLocaleDateString();
    }
    
    return 'Formato de fecha desconocido';
  };

  const renderStatusBadge = (status) => {
    // Obtener etiqueta del estado
    const statusOption = STATUS_OPTIONS.find(opt => opt.value === status);
    const label = statusOption ? statusOption.label : status;
    
    let badgeClass = '';
    
    switch(status) {
      case 'entregado':
        badgeClass = 'bg-green-100 text-green-800';
        break;
      case 'en transito':
        badgeClass = 'bg-blue-100 text-blue-800';
        break;
      case 'en aduana':
        badgeClass = 'bg-yellow-100 text-yellow-800';
        break;
      case 'en almacen':
        badgeClass = 'bg-indigo-100 text-indigo-800';
        break;
      default:
        badgeClass = 'bg-gray-100 text-gray-800';
    }
    
    return (
      <span className={`status-badge ${badgeClass}`}>
        {label}
      </span>
    );
  };

  if (loading) {
    return <div className="loading-screen"><div className="spinner" /></div>;
  }

  if (!shipment && !loading) {
    return (
      <div className="admin-main">
        <div className="not-found">
          <h2>Envío no encontrado</h2>
          <p>No se ha encontrado un envío con el ID proporcionado.</p>
          <button 
            className="action-btn" 
            onClick={() => router.push('/admin/shippings')}
          >
            <FaArrowLeft /> Volver a la lista
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-main">
      {error && <ErrorMessage message={error} onDismiss={clearError} />}
      
      <div className="user-detail-header">
        <button 
          className="back-btn"
          onClick={() => router.push('/admin/shippings')}
        >
          <FaArrowLeft /> Volver
        </button>
        
        <h2>Detalles del Envío</h2>
        
        <div className="user-actions">
          <button 
            className="action-btn"
            onClick={() => router.push(`/admin/shippings/${id}/edit`)}
          >
            <FaEdit /> Editar
          </button>
          
          {editStatus ? (
            <div className="status-edit-controls">
              <select 
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="status-select"
              >
                {STATUS_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <button 
                className="action-btn save"
                onClick={handleUpdateStatus}
              >
                <FaCheck /> Guardar
              </button>
              <button 
                className="action-btn secondary"
                onClick={() => setEditStatus(false)}
              >
                <FaTimes /> Cancelar
              </button>
            </div>
          ) : (
            <button 
              className="action-btn secondary"
              onClick={() => setEditStatus(true)}
            >
              Cambiar Estado
            </button>
          )}
          
          <button 
            className={`action-btn danger ${confirmDelete ? 'confirm' : ''}`}
            onClick={handleDeleteShipment}
          >
            <FaTrash />
            {confirmDelete ? '¿Confirmar?' : 'Eliminar'}
          </button>
        </div>
      </div>
      
      <div className="user-detail-container">
        <div className="user-info">
          <div className="info-row">
            <FaUser className="info-icon" />
            <div>
              <h3>Cliente</h3>
              <p>{clientInfo ? `${clientInfo.nombre || ''} ${clientInfo.apellido || ''}`.trim() : 'No especificado'}</p>
            </div>
          </div>
        
          <div className="info-row">
            <FaBarcode className="info-icon" />
            <div>
              <h3>Tracking ID</h3>
              <p>{id}</p>
            </div>
          </div>
          
          <div className="info-row">
            <FaWeight className="info-icon" />
            <div>
              <h3>Tamaño Total</h3>
              <p>{shipment.total_size + ' ft3' || 'No especificado'}</p>
            </div>
          </div>
          
          <div className="info-row">
            <FaGlobeAmericas className="info-icon" />
            <div>
              <h3>Origen</h3>
              <p>{shipment.country || shipment.origin || shipment.origen || 'No especificado'}</p>
            </div>
          </div>
          
          <div className="info-row">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Destino</h3>
              <p>{shipment.address || shipment.destination || shipment.destino || 'No especificado'}</p>
            </div>
          </div>
          
          <div className="info-row">
            <FaBox className="info-icon" />
            <div>
              <h3>Estado</h3>
              <p>{renderStatusBadge(shipment.status || 'en almacen')}</p>
            </div>
          </div>
          
          <div className="info-row">
            <FaCalendarAlt className="info-icon" />
            <div>
              <h3>Creado</h3>
              <p>{formatDate(shipment.creation_date)}</p>
            </div>
          </div>
          
          <div className="info-row">
            <FaCalendarAlt className="info-icon" />
            <div>
              <h3>Actualizado</h3>
              <p>{formatDate(shipment.last_update || shipment.lastUpdate || shipment.updatedAt)}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección para mostrar datos adicionales */}
      <div className="additional-data">
        <h3>Datos adicionales</h3>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Campo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(shipment)
                .filter(([key]) => 
                  !['id', 'customerName', 'user', 'nombre', 'status', 
                   'creation_date', 'last_update', 'lastUpdate', 'updatedAt',
                   'origin', 'origen', 'destination', 'destino',
                   'providerTrackingID', 'tracking', 'trackingId',
                   'total_size', 'country', 'address',
                   'userId', 'clientId'].includes(key)
                )
                .map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>
                      {typeof value === 'object' 
                        ? JSON.stringify(value) 
                        : String(value)
                      }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}