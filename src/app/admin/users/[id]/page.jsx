'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ErrorMessage from '@/components/ErrorMessage';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaShieldAlt, FaLock, FaUnlock, FaUserEdit, FaTrash, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

export default function UserDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { error, clearError } = useAuth();

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error al obtener datos del usuario: ${response.statusText}`);
      }
      
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Error al obtener detalles del usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisableUser = async () => {
    if (!user) return;
    
    try {
      const response = await fetch(`/api/users/${id}/disable`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ disabled: !user.disabled }),
      });
      
      if (!response.ok) {
        throw new Error(`Error al actualizar estado del usuario: ${response.statusText}`);
      }
      
      // Actualizar estado en la UI
      fetchUserDetails();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteUser = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Error al eliminar usuario: ${response.statusText}`);
      }
      
      // Redireccionar a la lista de usuarios
      router.push('/admin/users');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderUserPhoto = () => {
    if (!user) return null;
    
    const photoUrl = user.photo_url || user.photoURL || user.photo;
    const defaultPhotoUrl = '/img/default-user.png'; // Asegúrate de tener esta imagen
    
    return (
      <div className="user-photo-container">
        {photoUrl ? (
          <Image 
            src={photoUrl} 
            alt={user.displayName || user.name || 'Usuario'} 
            width={150} 
            height={150}
            className="user-photo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultPhotoUrl;
            }}
          />
        ) : (
          <div className="user-photo-placeholder">
            <FaUser size={60} />
          </div>
        )}
      </div>
    );
  };

  const renderUserInfo = () => {
    if (!user) return null;
    
    // Extraer nombre y apellido del nombre completo si es necesario
    let firstName = user.firstName || '';
    let lastName = user.lastName || '';
    
    // Si tenemos displayName pero no firstName/lastName, intentamos dividirlo
    if ((user.displayName || user.name) && (!firstName && !lastName)) {
      const fullName = user.displayName || user.name || '';
      const nameParts = fullName.split(' ');
      
      if (nameParts.length >= 2) {
        // Consideramos el primer componente como nombre y el resto como apellido
        firstName = nameParts[0];
        lastName = nameParts.slice(1).join(' ');
      } else if (nameParts.length === 1) {
        // Si solo hay una parte, la consideramos como nombre
        firstName = nameParts[0];
      }
    }
    
    // Determinar el rol mostrado
    const getRoleName = (role) => {
      switch(role) {
        case 'basic': return 'Básico';
        case 'editor': return 'Editor';
        case 'manager': return 'Gestor';
        case 'support': return 'Soporte';
        default: return role || 'No especificado';
      }
    };
    
    return (
      <div className="user-info">
        <div className="info-row">
          <FaUser className="info-icon" />
          <div>
            <h3>Nombre</h3>
            <p>{firstName || 'No especificado'}</p>
          </div>
        </div>
        
        <div className="info-row">
          <FaUser className="info-icon" />
          <div>
            <h3>Apellido</h3>
            <p>{lastName || 'No especificado'}</p>
          </div>
        </div>
        
        <div className="info-row">
          <FaEnvelope className="info-icon" />
          <div>
            <h3>Email</h3>
            <p>{user.email || 'No especificado'}</p>
          </div>
        </div>
        
        <div className="info-row">
          <FaPhone className="info-icon" />
          <div>
            <h3>Teléfono</h3>
            <p>{user.phone_number || user.phone || user.phoneNumber || 'No especificado'}</p>
          </div>
        </div>
        
        <div className="info-row">
          <FaShieldAlt className="info-icon" />
          <div>
            <h3>Tipo de Usuario</h3>
            <p>{String(user.admin) === 'true' ? 'Administrador' : 'Usuario'}</p>
          </div>
        </div>
        
        <div className="info-row">
          <FaShieldAlt className="info-icon" />
          <div>
            <h3>Rol</h3>
            <p>{getRoleName(user.role)}</p>
          </div>
        </div>
        
        <div className="info-row">
          <FaCalendarAlt className="info-icon" />
          <div>
            <h3>Registrado</h3>
            <p>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'No especificado'}</p>
          </div>
        </div>
        
        <div className="info-row">
          <FaCalendarAlt className="info-icon" />
          <div>
            <h3>Último acceso</h3>
            <p>{user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleDateString() : 'No especificado'}</p>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="loading-screen"><div className="spinner" /></div>;
  }

  if (!user && !loading) {
    return (
      <div className="admin-main">
        <div className="not-found">
          <h2>Usuario no encontrado</h2>
          <p>No se ha encontrado un usuario con el ID proporcionado.</p>
          <button 
            className="action-btn" 
            onClick={() => router.push('/admin/users')}
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
          onClick={() => router.push('/admin/users')}
        >
          <FaArrowLeft /> Volver
        </button>
        
        <h2>Detalles del Usuario</h2>
        
        <div className="user-actions">
          <button 
            className="action-btn"
            onClick={() => router.push(`/admin/users/${id}/edit`)}
          >
            <FaUserEdit /> Editar
          </button>
          
          <button 
            className={`action-btn ${user.disabled ? 'secondary' : 'warning'}`}
            onClick={handleDisableUser}
          >
            {user.disabled ? <FaUnlock /> : <FaLock />}
            {user.disabled ? 'Activar' : 'Desactivar'}
          </button>
          
          <button 
            className={`action-btn danger ${confirmDelete ? 'confirm' : ''}`}
            onClick={handleDeleteUser}
          >
            <FaTrash />
            {confirmDelete ? '¿Confirmar?' : 'Eliminar'}
          </button>
        </div>
      </div>
      
      <div className="user-detail-container">
        {renderUserPhoto()}
        {renderUserInfo()}
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
              {Object.entries(user)
                .filter(([key]) => 
                  !['id', 'displayName', 'name', 'email', 'phone', 'phoneNumber', 
                   'role', 'createdAt', 'lastLoginAt', 'photo', 'photoURL'].includes(key) &&
                  !key.startsWith('_') &&
                  !key.includes('password') &&
                  !key.includes('Password') &&
                  !key.includes('token')
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