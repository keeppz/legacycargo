'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ErrorMessage from '@/components/ErrorMessage';
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaShieldAlt, FaSave, FaTimes, FaArrowLeft, FaSpinner } from 'react-icons/fa';

export default function EditUserPage() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [changedFields, setChangedFields] = useState({});
  const [loadError, setLoadError] = useState(null);
  const { error, clearError, setError } = useAuth();

  // Define tipos de documentos disponibles
  const defaultDocumentTypes = [
    { value: 'V', label: 'V' },
    { value: 'J', label: 'J' },
    { value: 'G', label: 'G' },
    { value: 'E', label: 'E' },
  ];
  
  // Define opciones de administrador
  const adminOptions = [
    { value: 'true', label: 'Administrador' },
    { value: 'false', label: 'Usuario' }
  ];
  
  // Define roles disponibles (para permisos granulares)
  const roles = [
    { value: 'basic', label: 'Básico' },
    { value: 'editor', label: 'Editor' },
    { value: 'manager', label: 'Gestor' },
    { value: 'support', label: 'Soporte' }
  ];

  // Estado para los tipos de documentos que incluirá el valor de la BD si es diferente
  const [documentTypes, setDocumentTypes] = useState(defaultDocumentTypes);

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      setLoadError(null);
      
      console.log(`Cargando datos del usuario ID: ${id}`);
      const response = await fetch(`/api/users/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error al obtener datos del usuario: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (!data.success || !data.user) {
        throw new Error('No se pudieron cargar los datos del usuario desde la API');
      }
      
      const userObj = data.user;
      console.log('Datos recibidos del servidor:', userObj);
      console.log('Tipo de documento recibido:', userObj.documentType);
      
      setUser(userObj);
      
      // Extraer nombre y apellido del nombre completo si es necesario
      let firstName = userObj.firstName || '';
      let lastName = userObj.lastName || '';
      
      // Si tenemos displayName pero no firstName/lastName, intentamos dividirlo
      if ((userObj.displayName || userObj.name) && (!firstName || !lastName)) {
        const fullName = userObj.displayName || userObj.name || '';
        const nameParts = fullName.split(' ');
        
        if (nameParts.length >= 2) {
          // Consideramos el primer componente como nombre y el resto como apellido
          firstName = firstName || nameParts[0];
          lastName = lastName || nameParts.slice(1).join(' ');
        } else if (nameParts.length === 1) {
          // Si solo hay una parte, la consideramos como nombre
          firstName = firstName || nameParts[0];
        }
      }
      
      // Mapear todos los campos posibles desde el usuario con fallbacks
      const initialData = {
        firstName: firstName,
        lastName: lastName,
        displayName: userObj.displayName || userObj.name || '',
        email: userObj.email || '',
        phone: userObj.phone || userObj.phoneNumber || '',
        admin: String(userObj.admin) === 'true' ? 'true' : 'false', // Convertir a string 'true' o 'false'
        role: userObj.role || 'basic',
        documentType: userObj.documentType || '',
        documentNumber: userObj.documentNumber || '',
        photoURL: userObj.photoURL || userObj.photo || '',
        address: userObj.address || '',
        city: userObj.city || '',
        country: userObj.country || '',
        // Agregar cualquier otro campo necesario
      };
      
      console.log('Datos mapeados para el formulario:', initialData);
      console.log('Tipo de documento mapeado:', initialData.documentType);
      
      // Actualizar los tipos de documento para incluir el valor de la BD si es necesario
      const docType = initialData.documentType;
      const updatedDocTypes = [...defaultDocumentTypes];
      
      if (docType && !defaultDocumentTypes.some(dt => dt.value === docType)) {
        console.log(`Añadiendo tipo de documento personalizado: ${docType}`);
        updatedDocTypes.push({ value: docType, label: docType });
      }
      
      // Actualizar el estado de los tipos de documentos primero
      setDocumentTypes(updatedDocTypes);
      
      // Luego actualizar el formData y originalData
      setOriginalData({...initialData});
      setFormData({...initialData});
      
    } catch (error) {
      console.error("Error al obtener detalles del usuario:", error);
      setLoadError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Actualizar el formData
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Marcar campo como cambiado si difiere del original
    if (value !== originalData[name]) {
      setChangedFields(prev => ({
        ...prev,
        [name]: true
      }));
    } else {
      // Si vuelve al valor original, quitar de changedFields
      setChangedFields(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      
      // Encontrar solo los campos que han cambiado
      const fieldsToUpdate = {};
      Object.keys(changedFields).forEach(key => {
        fieldsToUpdate[key] = formData[key];
      });
      
      // Si se modificaron el nombre o apellido, actualizar también displayName
      if (changedFields.firstName || changedFields.lastName) {
        const fullName = `${formData.firstName} ${formData.lastName}`.trim();
        fieldsToUpdate.displayName = fullName;
        
        // Si el displayName resultante es diferente al original, marcarlo como cambiado
        if (fullName !== originalData.displayName) {
          changedFields.displayName = true;
        }
      }
      
      // Si no hay cambios, simplemente regresar al perfil
      if (Object.keys(fieldsToUpdate).length === 0) {
        router.push(`/admin/users/${id}`);
        return;
      }
      
      console.log('Enviando cambios al servidor:', fieldsToUpdate);
      
      // Solo enviar los campos modificados
      const response = await fetch(`/api/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fieldsToUpdate),
      });
      
      if (!response.ok) {
        throw new Error(`Error al actualizar usuario: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('Respuesta del servidor:', result);
      
      // Redireccionar a la página de detalles
      router.push(`/admin/users/${id}`);
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      setError(error.message);
      setSaving(false);
    }
  };

  // Función para determinar la clase de los campos
  const getFieldClass = (fieldName) => {
    return changedFields[fieldName] ? 'modified' : '';
  };

  // Componente para depurar el estado actual
  const DebugInfo = () => (
    <div className="debug-info" style={{margin: '10px 0', padding: '10px', background: '#f5f5f5', borderRadius: '4px'}}>
      <h4>Información de depuración:</h4>
      <p>ID: {id}</p>
      <p>Tipo de documento seleccionado: {formData.documentType || 'No seleccionado'}</p>
      <p>Tipos de documento disponibles: {documentTypes.map(dt => dt.value).join(', ')}</p>
    </div>
  );

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Cargando datos del usuario...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="admin-main">
        <div className="error-container">
          <h2>Error al cargar datos</h2>
          <p>{loadError}</p>
          <div className="error-actions">
            <button 
              className="action-btn" 
              onClick={fetchUserDetails}
            >
              Intentar de nuevo
            </button>
            <button 
              className="action-btn secondary" 
              onClick={() => router.push('/admin/users')}
            >
              Volver a la lista
            </button>
          </div>
        </div>
      </div>
    );
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
          onClick={() => router.push(`/admin/users/${id}`)}
        >
          <FaArrowLeft /> Volver
        </button>
        
        <h2>Editar Usuario: {formData.displayName || id}</h2>
        
        <div className="form-actions">
          <button 
            className={`action-btn ${Object.keys(changedFields).length > 0 ? 'primary' : ''}`}
            onClick={handleSubmit}
            disabled={saving || Object.keys(changedFields).length === 0}
          >
            {saving ? <FaSpinner className="spinner-icon" /> : <FaSave />} 
            {saving ? 'Guardando...' : 'Guardar'}
          </button>
          
          <button 
            className="action-btn secondary"
            onClick={() => router.push(`/admin/users/${id}`)}
            disabled={saving}
          >
            <FaTimes /> Cancelar
          </button>
        </div>
      </div>
      
      <div className="user-edit-container">
        {Object.keys(changedFields).length > 0 && (
          <div className="changes-summary">
            <p>Has realizado {Object.keys(changedFields).length} cambio(s) en el formulario.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="user-edit-form">
          {/* Sección de información básica */}
          <div className="form-section">
            <h3>Información Básica</h3>
            
            <div className="form-group">
              <label>
                <FaUser className="field-icon" /> ID de Usuario
              </label>
              <input 
                type="text" 
                value={id}
                disabled
                className="disabled"
              />
              <small>El ID de usuario no se puede modificar</small>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>
                  <FaUser className="field-icon" /> Nombre
                </label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className={getFieldClass('firstName')}
                />
              </div>
              
              <div className="form-group">
                <label>
                  <FaUser className="field-icon" /> Apellido
                </label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className={getFieldClass('lastName')}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>
                <FaEnvelope className="field-icon" /> Email
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className={getFieldClass('email')}
              />
            </div>
            
            <div className="form-group">
              <label>
                <FaPhone className="field-icon" /> Teléfono
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Número de teléfono"
                className={getFieldClass('phone')}
              />
            </div>
            
            <div className="form-group">
              <label>
                <FaShieldAlt className="field-icon" /> Permisos de Administrador
              </label>
              <select
                name="admin"
                value={formData.admin}
                onChange={handleChange}
                className={getFieldClass('admin')}
              >
                {adminOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <small>Define si el usuario tiene permisos de administrador</small>
            </div>
            
            <div className="form-group">
              <label>
                <FaShieldAlt className="field-icon" /> Rol del Usuario
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={getFieldClass('role')}
              >
                {roles.map(role => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
              <small>Define los permisos específicos del usuario</small>
            </div>
          </div>
          
          {/* Sección de documentación */}
          <div className="form-section">
            <h3>Documentación</h3>
            
            <div className="form-group">
              <label>
                <FaIdCard className="field-icon" /> Tipo de Documento
              </label>
              <select
                name="documentType"
                value={formData.documentType || ''}
                onChange={handleChange}
                className={getFieldClass('documentType')}
              >
                <option value="">Seleccionar tipo</option>
                {documentTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {formData.documentType && !documentTypes.some(dt => dt.value === formData.documentType) && (
                <small>Tipo de documento personalizado: {formData.documentType}</small>
              )}
            </div>
            
            <div className="form-group">
              <label>
                <FaIdCard className="field-icon" /> Número de Documento
              </label>
              <input 
                type="text" 
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleChange}
                placeholder="Número de documento"
                className={getFieldClass('documentNumber')}
              />
            </div>
          </div>
          
          {/* Sección de contacto */}
          <div className="form-section">
            <h3>Información de Contacto</h3>
            
            <div className="form-group">
              <label>Foto (URL)</label>
              <input 
                type="url" 
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="URL de la foto de perfil"
                className={getFieldClass('photoURL')}
              />
            </div>
            
            <div className="form-group">
              <label>Dirección</label>
              <input 
                type="text" 
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Dirección"
                className={getFieldClass('address')}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Ciudad</label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ciudad"
                  className={getFieldClass('city')}
                />
              </div>
              
              <div className="form-group">
                <label>País</label>
                <input 
                  type="text" 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="País"
                  className={getFieldClass('country')}
                />
              </div>
            </div>
          </div>
          
          {/* Botones de acción */}
          <div className="form-buttons">
            <button 
              type="submit" 
              className={`action-btn ${Object.keys(changedFields).length > 0 ? 'primary' : ''}`}
              disabled={saving || Object.keys(changedFields).length === 0}
            >
              {saving ? <FaSpinner className="spinner-icon" /> : <FaSave />}
              {saving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
            
            <button 
              type="button" 
              className="action-btn secondary"
              onClick={() => router.push(`/admin/users/${id}`)}
              disabled={saving}
            >
              <FaTimes /> Cancelar
            </button>
          </div>
        </form>

        {/* Mostrar la información de depuración temporalmente */}
        {process.env.NODE_ENV === 'development' && <DebugInfo />}
      </div>
    </div>
  );
} 