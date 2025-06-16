'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import ErrorMessage from '@/components/ErrorMessage';
import { db } from '@/lib/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Eye, 
  Package, 
  Users, 
  Truck,
  Calendar,
  MapPin,
  FileText
} from 'lucide-react';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Definir columnas importantes y su orden
const COLUMNAS_PRINCIPALES = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'user', label: 'Cliente', sortable: true },
  { key: 'status', label: 'Estado', sortable: true, tipo: 'estado' },
  { key: 'price', label: 'Tarifa', alternativas: ['costo', 'amount'], sortable: true, tipo: 'precio' },
  { key: 'totalSize', label: 'Tamaño total', alternativas: ['size', 'packageSize'], sortable: true },
  { key: 'proformaInvoice', label: 'Proforma Invoice', alternativas: ['invoice', 'invoiceNumber'], sortable: true },
  { key: 'origin', label: 'Origen', alternativas: ['origen'], sortable: true },
  { key: 'destination', label: 'Destino', alternativas: ['destino'], sortable: true }
];

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pendiente', variant: 'warning' },
  { value: 'processing', label: 'En Proceso', variant: 'secondary' },
  { value: 'active', label: 'Activo', variant: 'default' },
  { value: 'delivered', label: 'Entregado', variant: 'success' },
  { value: 'cancelled', label: 'Cancelado', variant: 'destructive' }
];

const FILTROS_ESTADO = [
  { value: 'all', label: 'Todos los estados' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'processing', label: 'En Proceso' },
  { value: 'active', label: 'Activos' },
  { value: 'delivered', label: 'Entregados' },
  { value: 'cancelled', label: 'Cancelados' }
];

export default function ShippingsPage() {
  const [shippings, setShippings] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [totalEnvios, setTotalEnvios] = useState(0);
  const [usersData, setUsersData] = useState({});
  
  // Estados para ordenamiento y filtros
  const [ordenCampo, setOrdenCampo] = useState('createdAt');
  const [ordenDireccion, setOrdenDireccion] = useState('desc');
  const [filtroEstado, setFiltroEstado] = useState('all');
  const [busqueda, setBusqueda] = useState('');
  const [limite, setLimite] = useState(50);
  
  // Router para navegación
  const router = useRouter();
  
  // Usar el contexto de autenticación
  const { withErrorHandling, error, clearError, setError } = useAuth();

  useEffect(() => {
    fetchShippings();
  }, [filtroEstado, ordenCampo, ordenDireccion, limite]);
  
  const fetchShippings = async () => {
    setLoading(true);
    
    try {
      // Usar la API en lugar de Firestore directamente
      const response = await fetch('/api/shipments');
      
      if (!response.ok) {
        throw new Error(`Error al obtener envíos: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Verificar si hay datos
      if (data.shipments) {
        let shipmentsData = data.shipments;
        
        // Filtrar por búsqueda si es necesario
        if (busqueda.trim()) {
          const searchLower = busqueda.toLowerCase();
          shipmentsData = shipmentsData.filter(item => {
            return Object.entries(item).some(([key, value]) => {
              if (typeof value === 'string') {
                return value.toLowerCase().includes(searchLower);
              }
              if (typeof value === 'number') {
                return String(value).includes(searchLower);
              }
              return false;
            });
          });
        }
        
        // Filtrar por estado si es necesario
        if (filtroEstado && filtroEstado !== 'all') {
          shipmentsData = shipmentsData.filter(item => item.status === filtroEstado);
        }
        
        setShippings(shipmentsData);
        setTotalEnvios(shipmentsData.length);
        
        // Generar columnas basadas en los datos
        if (shipmentsData.length > 0) {
          generateColumns(shipmentsData);
        }
        
        // Obtener información de usuarios
        await fetchUserInfo(shipmentsData);
      }
    } catch (error) {
      console.error('Error al obtener envíos:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener información de usuarios
  const fetchUserInfo = async (shippingsData) => {
    const usersToFetch = {};
    
    // Recolectar referencias únicas a usuarios
    shippingsData.forEach(shipping => {
      if (shipping.user) {
        let userId = null;
        
        // Si es una referencia en formato string
        if (typeof shipping.user === 'string' && shipping.user.includes('/users/')) {
          userId = shipping.user.split('/').pop();
        } 
        // Si es un objeto con _path.segments (formato referencia Firestore)
        else if (typeof shipping.user === 'object' && shipping.user !== null) {
          // Acceder a _path.segments[1] si existe
          if (shipping.user._path && shipping.user._path.segments && shipping.user._path.segments.length > 1) {
            userId = shipping.user._path.segments[1];
          }
          // Alternativa usando path
          else if (shipping.user.path) {
            userId = shipping.user.path.split('/').pop();
          } 
          // Alternativa usando id directamente
          else if (shipping.user.id) {
            userId = shipping.user.id;
          }
        }
        
        if (userId) {
          usersToFetch[userId] = true;
        }
      }
    });
    
    // Si no hay usuarios para consultar, salir
    if (Object.keys(usersToFetch).length === 0) return;
    
    // Obtener datos de usuarios, ahora intentando directamente con Firestore primero
    for (const userId of Object.keys(usersToFetch)) {
      try {
        // Obtener directamente de Firestore
        const userDocRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userDocRef);
        
        if (userSnap.exists()) {
          const userData = userSnap.data();
          
          if (userData) {
            setUsersData(prevState => ({
              ...prevState,
              [userId]: {
                id: userId,
                name: userData.firstName || userData.name || '',
                lastname: userData.lastName || userData.lastname || '',
                email: userData.email || '',
                phone: userData.phone || userData.phoneNumber || ''
              }
            }));
          }
        } else {
          console.log(`No se encontró el usuario con ID: ${userId}`);
          // Almacenar un objeto vacío para evitar consultas repetidas
            setUsersData(prevState => ({
              ...prevState,
            [userId]: { id: userId, name: '', lastname: '' }
          }));
        }
      } catch (error) {
        console.error(`Error al obtener usuario ${userId}:`, error);
      }
    }
  };

  // Función modificada para obtener usuario directamente de Firestore
  const fetchUserById = async (userId) => {
    if (!userId) return null;
    
    try {
      // Verificar si ya tenemos los datos en el cache
      if (usersData[userId]) {
        return usersData[userId];
      }
      
      // Obtener directamente de Firestore
      const userDocRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userDocRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        
        // Guardar en el estado para futuras referencias
        const userInfo = {
          id: userId,
          name: userData.firstName || userData.name || '',
          lastname: userData.lastName || userData.lastname || '',
          email: userData.email || '',
          phone: userData.phone || userData.phoneNumber || ''
        };
        
        setUsersData(prevState => ({
          ...prevState,
          [userId]: userInfo
        }));
        
        return userInfo;
      } else {
        console.log(`No se encontró el usuario con ID: ${userId}`);
        // Almacenar un objeto vacío para evitar consultas repetidas
        setUsersData(prevState => ({
          ...prevState,
          [userId]: { id: userId, name: '', lastname: '' }
        }));
      }
    } catch (error) {
      console.error(`Error al obtener usuario ${userId}:`, error);
    }
    
    return null;
  };

  // Generar columnas basadas en los datos
  const generateColumns = (data) => {
    // Crear un conjunto con todas las claves disponibles en los datos
    const keysInData = new Set();
    data.forEach(item => {
      Object.keys(item).forEach(key => keysInData.add(key));
    });
    
    // Array final de columnas ordenadas
    const columnasOrdenadas = [];
    
    // Mapa para rastrear las claves ya procesadas (evita duplicados)
    const processedKeys = new Set();
    
    // 1. Primero procesar las columnas principales en el orden exacto definido
    COLUMNAS_PRINCIPALES.forEach(columnaDef => {
      // Verificar si la clave principal existe en los datos
      if (keysInData.has(columnaDef.key)) {
        columnasOrdenadas.push({
          key: columnaDef.key,
          label: columnaDef.label,
          tipo: columnaDef.tipo,
          sortable: columnaDef.sortable
        });
        processedKeys.add(columnaDef.key);
      }
      // Si la clave principal no existe, buscar alternativas
      else if (columnaDef.alternativas) {
        // Encontrar la primera alternativa que existe en los datos
        const altKey = columnaDef.alternativas.find(alt => keysInData.has(alt));
        if (altKey) {
            columnasOrdenadas.push({
            key: altKey,
            label: columnaDef.label,
            tipo: columnaDef.tipo,
            sortable: columnaDef.sortable
            });
            processedKeys.add(altKey);
        }
      }
    });
    
    // 2. Luego agregar columnas restantes en orden alfabético
    Array.from(keysInData)
      .filter(key => !processedKeys.has(key) && key !== 'id') // Excluir 'id' ya que está en COLUMNAS_PRINCIPALES
      .sort()
      .forEach(key => {
        columnasOrdenadas.push({
          key,
          label: key.charAt(0).toUpperCase() + key.slice(1),
          sortable: true
        });
      });
    
    // Añadir columna de acciones
    columnasOrdenadas.push({ key: 'actions', label: 'Acciones', sortable: false });
    
    setColumnas(columnasOrdenadas);
  };

  const handleRowClick = (id) => {
    router.push(`/admin/shippings/${id}`);
  };

  const handleSort = (campo) => {
    if (campo === ordenCampo) {
      setOrdenDireccion(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setOrdenCampo(campo);
      setOrdenDireccion('asc');
    }
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleBusquedaSubmit = (e) => {
    e.preventDefault();
    fetchShippings();
  };

  const renderValor = (shipping, columna) => {
    // Si no hay valor, mostrar guion
    const valor = shipping[columna.key];
    if (valor === undefined || valor === null) return '-';
    
    // Manejar referencia de usuario
    if (columna.key === 'user') {
      const userId = extractUserId(shipping.user);
      
      // Si tenemos los datos del usuario en el estado, mostrarlos
      if (userId && usersData[userId]) {
        const user = usersData[userId];
        if (user.name || user.lastname) {
          return `${user.name || ''} ${user.lastname || ''}`.trim();
        } else {
          return `${userId}`;
        }
      }
      
      // Si no tenemos los datos, iniciar una petición para obtenerlos
      if (userId) {
        // Iniciar la petición en segundo plano
        fetchUserById(userId).catch(console.error);
        
        // Mostrar un estado de carga temporal
        return `Cargando...`;
      }
      
      return shipping.user || 'Sin usuario';
    }
    
    // Manejar campos de tipo URL para documentos (invoice_url, proformaInvoice, etc.)
    if (
      columna.key === 'invoice_url' || 
      columna.key === 'invoiceUrl' || 
      columna.key === 'proformaInvoice' || 
      columna.key === 'documentUrl'
    ) {
      if (valor && typeof valor === 'string' && (valor.startsWith('http') || valor.startsWith('/'))) {
        return (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={(e) => {
              e.stopPropagation(); // Evitar que se active la fila
              window.open(valor, '_blank');
            }}
          >
            <FileText className="h-4 w-4 mr-1" />
            Ver documento
          </Button>
        );
      }
      return valor;
    }
    
    // Manejar estado con badge
    if (columna.key === 'status') {
      const status = shipping.status;
      const statusOption = STATUS_OPTIONS.find(opt => opt.value === status);
      return (
        <Badge variant={statusOption?.variant || 'secondary'}>
          {statusOption?.label || status || 'Desconocido'}
        </Badge>
      );
    }
    
    // Manejar precio
    if (columna.tipo === 'precio') {
      const price = parseFloat(shipping[columna.key]);
      if (isNaN(price)) return shipping[columna.key] || '-';
      return `$${price.toFixed(2)}`;
    }
    
    // Manejar timestamp de Firestore
    if (valor && typeof valor === 'object' && valor._seconds !== undefined && valor._nanoseconds !== undefined) {
      const date = new Date(valor._seconds * 1000);
      return date.toLocaleDateString();
    }
    
    // Manejar objetos Date normales
    if (valor instanceof Date) {
      return valor.toLocaleDateString();
    }
    
    // Para otros objetos, convertir a string
    if (typeof valor === 'object') {
      return JSON.stringify(valor);
    }
    
    return String(valor);
  };
  
  const extractUserId = (userRef) => {
    if (!userRef) return null;
    
    if (typeof userRef === 'string' && userRef.includes('/users/')) {
      return userRef.split('/').pop();
    }
    
    if (typeof userRef === 'object' && userRef !== null) {
      // Caso para referencias de Firestore
      if (userRef._path?.segments?.length > 1) {
        return userRef._path.segments[1];
      }
      
      // Caso para referencias convertidas a objeto
      if (userRef.path) {
        return userRef.path.split('/').pop();
      }
      
      // Caso para objetos con id
      if (userRef.id) {
        return userRef.id;
      }
    }
    
    return null;
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Gestión de Envíos</h1>
        <p>Administración de envíos y seguimiento de paquetes</p>
      </div>
      
      {error && (
        <div className="mb-6">
          <ErrorMessage message={error} onDismiss={clearError} />
        </div>
      )}
      
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Filtros y Búsqueda</CardTitle>
              <CardDescription>Localiza envíos específicos</CardDescription>
            </div>
            <Badge variant="outline" className="ml-2">
              Total: {totalEnvios}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1">
              <form onSubmit={handleBusquedaSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
                    type="search"
                    placeholder="Buscar por ID, cliente, origen..."
                    className="pl-8"
            value={busqueda}
            onChange={handleBusquedaChange}
          />
                </div>
                <Button type="submit">
                  Buscar
                </Button>
              </form>
        </div>
        
            <div className="flex flex-wrap gap-2">
          <Select value={filtroEstado} onValueChange={setFiltroEstado}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Estado" />
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
                <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Mostrar" />
            </SelectTrigger>
            <SelectContent>
                  <SelectItem value="10">10 envíos</SelectItem>
                  <SelectItem value="25">25 envíos</SelectItem>
                  <SelectItem value="50">50 envíos</SelectItem>
                  <SelectItem value="100">100 envíos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
      {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="spinner" />
        </div>
      ) : (
            <div className="rounded-md border">
          <Table>
                <TableHeader>
              <TableRow>
                {columnas.map(col => (
                  <TableHead 
                    key={col.key}
                        className={col.sortable ? "cursor-pointer" : ""}
                        onClick={col.sortable ? () => handleSort(col.key) : undefined}
                      >
                        <div className="flex items-center">
                          {col.label}
                          {col.sortable && ordenCampo === col.key && (
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
                  {shippings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={columnas.length} className="text-center py-10">
                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                          <Package className="h-10 w-10 mb-2" />
                          <p>No se encontraron envíos</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    shippings.map(shipping => (
                <TableRow 
                  key={shipping.id}
                        className="cursor-pointer hover:bg-muted/50"
                >
                        {columnas.map(col => {
                          if (col.key === 'actions') {
                            return (
                    <TableCell key={col.key}>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRowClick(shipping.id);
                                  }}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  Ver
                                </Button>
                              </TableCell>
                            );
                          }
                          
                          return (
                            <TableCell key={col.key} onClick={() => handleRowClick(shipping.id)}>
                      {renderValor(shipping, col)}
                    </TableCell>
                          );
                        })}
                </TableRow>
                    ))
                  )}
            </TableBody>
          </Table>
        </div>
      )}
        </CardContent>
      </Card>
    </div>
  );
} 