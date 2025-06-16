'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import ErrorMessage from '@/components/ErrorMessage';
import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  limit
} from 'firebase/firestore';
import { FaUser, FaUserShield, FaUserCog, FaSort, FaSearch, FaFilter } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from '@/scss/admin/_users-table.module.scss';

// Definir columnas importantes y su orden
/**
 * COLUMNAS_PRINCIPALES define:
 * 1. Qué columnas se deben mostrar en la tabla de usuarios
 * 2. El orden exacto en que deben aparecer (de izquierda a derecha)
 * 3. Alternativas de nombre para cada columna en caso que vengan con nombres diferentes del API
 * 
 * Para modificar el orden de las columnas, simplemente cambie el orden en este array.
 * Cualquier columna adicional no definida aquí aparecerá al final de la tabla.
 */
const COLUMNAS_PRINCIPALES = [
  { key: 'uid', label: 'UID', sourceKey: 'uid' },
  { key: 'name', label: 'Nombre', sourceKey: 'firstName' },
  { key: 'lastname', label: 'Apellido', sourceKey: 'lastname' },
  { key: 'admin', label: 'Rol', sourceKey: 'admin' },
  { key: 'documenet_type', label: 'Tipo de Documento', sourceKey: 'documenet_type' },
  { key: 'document', label: 'Documento', sourceKey: 'documentNumber' },
  { key: 'address', label: 'Dirección', sourceKey: 'address' },
  { key: 'phone', label: 'Teléfono', sourceKey: 'phone_number' }
];

const FILTROS_ROLES = [
  { value: 'all', label: 'Todos los tipos' },
  { value: 'true', label: 'Administradores' },
  { value: 'false', label: 'Usuarios' }
];

const FILTROS_ESTADO = [
  { value: 'all', label: 'Todos los estados' },
  { value: 'active', label: 'Activos' },
  { value: 'disabled', label: 'Inactivos' }
];

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [ordenCampo, setOrdenCampo] = useState('createdAt');
  const [ordenDireccion, setOrdenDireccion] = useState('desc');
  const [filtroRol, setFiltroRol] = useState('all');
  const [filtroEstado, setFiltroEstado] = useState('all');
  const [busqueda, setBusqueda] = useState('');
  const [limite, setLimite] = useState(50);
  const { error, clearError } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, [ordenCampo, ordenDireccion, filtroRol, filtroEstado, limite]);

  const handleRowClick = (uid) => {
    router.push(`/admin/users/${uid}`);
  };

  const renderValor = (user, columna) => {
    const valor = user[columna.key];

    if (columna.key === 'uid') {
      return (
        <span className="uid-cell">
          {valor}
        </span>
      );
    }

    if (columna.key === 'admin') {
      return valor === true ? 'Administrador' : 'Usuario';
    }

    return valor || '-';
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleBusquedaSubmit = (e) => {
    e.preventDefault();
    fetchUsers();
  };

  const handleSort = (campo) => {
    if (ordenCampo === campo) {
      setOrdenDireccion(ordenDireccion === 'asc' ? 'desc' : 'asc');
    } else {
      setOrdenCampo(campo);
      setOrdenDireccion('asc');
    }
  };

  const mapUserData = (user) => {
    const mappedUser = {};
    COLUMNAS_PRINCIPALES.forEach(columna => {
      mappedUser[columna.key] = user[columna.sourceKey] || user[columna.key] || '-';
    });
    return mappedUser;
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      let apiUrl = `/api/users?limit=${limite}`;
      
      if (filtroRol !== 'all') {
        apiUrl += `&role=${filtroRol}`;
      }
      
      if (filtroEstado === 'active') {
        apiUrl += `&status=active`;
      } else if (filtroEstado === 'disabled') {
        apiUrl += `&status=disabled`;
      }
      
      apiUrl += `&sort=${ordenCampo}&order=${ordenDireccion}`;
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Error al obtener usuarios: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.users) {
        let usersData = data.users.map(mapUserData);
        
        if (busqueda.trim()) {
          const searchLower = busqueda.toLowerCase();
          usersData = usersData.filter(user => {
            return Object.values(user).some(value => 
              String(value).toLowerCase().includes(searchLower)
            );
          });
        }
        
        setUsers(usersData);
        setTotalUsuarios(data.total || usersData.length);
        setColumnas(COLUMNAS_PRINCIPALES);
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.usersContainer}>
      {error && <ErrorMessage message={error} onDismiss={clearError} />}
      
      <div className={styles.header}>
        <h2>Usuarios</h2>
        <div className={styles.totalCount}>
          Total: {totalUsuarios}
        </div>
      </div>
      
      <div className={styles.filtersSection}>
        <div className={styles.searchGroup}>
          <Input
            placeholder="Buscar usuarios..."
            value={busqueda}
            onChange={handleBusquedaChange}
          />
          <button onClick={handleBusquedaSubmit} className={styles.searchButton}>
            <FaSearch className="h-4 w-4" />
          </button>
        </div>
        
        <div className={styles.filtersGroup}>
          <Select value={filtroRol} onValueChange={setFiltroRol}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por rol" />
            </SelectTrigger>
            <SelectContent>
              {FILTROS_ROLES.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={filtroEstado} onValueChange={setFiltroEstado}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              {FILTROS_ESTADO.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={String(limite)} onValueChange={(value) => setLimite(Number(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Mostrar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {loading ? (
        <div className={styles.loadingSpinner}>
          <div className={styles.spinner} />
        </div>
      ) : users.length === 0 ? (
        <div className={styles.noResults}>
          No se encontraron usuarios con los filtros seleccionados.
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <Table>
            <TableHeader className={styles.tableHeader}>
              <TableRow>
                {COLUMNAS_PRINCIPALES.map(col => (
                  <TableHead 
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                  >
                    <div className={styles.headerContent}>
                      <span>{col.label}</span>
                      {ordenCampo === col.key && (
                        <FaSort className={`${styles.sortIcon} ${ordenDireccion === 'asc' ? styles.asc : ''}`} />
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow 
                  key={user.uid}
                  onClick={() => handleRowClick(user.uid)}
                  className={styles.tableRow}
                >
                  {COLUMNAS_PRINCIPALES.map(col => (
                    <TableCell key={col.key}>
                      {renderValor(user, col)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}