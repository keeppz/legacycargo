'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc
} from 'firebase/firestore';
import { 
  Search, 
  FileText, 
  Edit, 
  Save, 
  X, 
  ChevronDown, 
  ArrowUpDown,
  Package
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
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Definir columnas importantes y su orden según el esquema real
const COLUMNAS_PRINCIPALES = [
  { key: 'id', label: 'ID' },
  { key: 'user', label: 'Cliente', sortable: true },
  { key: 'creation_date', label: 'Fecha', tipo: 'fecha' },
  // { key: 'description', label: 'Descripción' },
  { key: 'country', label: 'Origen' },
  { key: 'type_of_shipment', label: 'Tipo de Envío' },
  { key: 'provider_tracking', label: 'Tracking' },
  { key: 'status', label: 'Estado' },
  { key: 'weight', label: 'Peso (kg)' },
  // { key: 'value_usd', label: 'Valor USD' },
  { key: 'dimensions', label: 'Dimensiones', calculada: true },
  { key: 'proforma_invoice', label: 'Proforma' }
];

const STATUS_OPTIONS = [
  { value: 'Esperando Llegada', label: 'Esperando Llegada' },
  { value: 'Recibido en Warehouse', label: 'Recibido en Warehouse' },
  { value: 'Procesando', label: 'Procesando' },
  { value: 'Convertido', label: 'Convertido a Envío' }
];

const SHIPMENT_TYPES = [
  { value: 'Marítimo', label: 'Marítimo' },
  { value: 'Aéreo', label: 'Aéreo' },
  { value: 'Terrestre', label: 'Terrestre' }
];

// Campos editables
const CAMPOS_EDITABLES = ['cliente', 'descripcion', 'origen', 'tracking', 'status'];

export default function PrealertsPage() {
  const [prealerts, setPrealerts] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState('creation_date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [usersData, setUsersData] = useState({});
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    fetchPrealerts();
  }, []);

  const fetchPrealerts = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'prealerts'), orderBy('creation_date', 'desc'));
      const snapshot = await getDocs(q);
      
      // Obtener los documentos
      const docs = snapshot.docs.map(doc => {
        const data = doc.data();
        return { 
          id: doc.id, 
          ...data,
          // Calcular campos derivados
          dimensions: data.width && data.height && data.lenght ? 
            `${data.width}×${data.height}×${data.lenght} cm` : '-'
        };
      });
      
      console.log("Prealertas cargadas:", docs.length);
      setPrealerts(docs);
      
      // Generar columnas basadas en los datos reales
      if (docs.length > 0) {
        // Obtener todas las claves posibles de los documentos
        const todasLasClaves = new Set();
        docs.forEach(doc => {
          Object.keys(doc).forEach(key => todasLasClaves.add(key));
        });
        
        // Lista de campos que se quieren ocultar explícitamente
        const camposOcultos = [
          'convertedToShipment',
          'lenght',
          'senderName',
          'width',
          'height',
          'value_usd',
          // Añadir aquí cualquier otro campo que se quiera ocultar
        ];
        
        // Filtrar las claves para excluir las que se quieren ocultar
        camposOcultos.forEach(campo => {
          todasLasClaves.delete(campo);
        });
        
        // Ordenar columnas según COLUMNAS_PRINCIPALES primero
        const columnasOrdenadas = [];
        
        // Primero añadir las columnas principales en el orden especificado
        COLUMNAS_PRINCIPALES.forEach(col => {
          if (todasLasClaves.has(col.key)) {
            columnasOrdenadas.push({ key: col.key, label: col.label, tipo: col.tipo, calculada: col.calculada });
          } else if (col.alternativas) {
            // Buscar alternativas
            const alternativaEncontrada = col.alternativas.find(alt => todasLasClaves.has(alt));
            if (alternativaEncontrada) {
              columnasOrdenadas.push({ key: alternativaEncontrada, label: col.label, tipo: col.tipo, calculada: col.calculada });
            }
          }
        });
        
        // Luego añadir cualquier columna adicional que no esté en las principales ni en los ocultos
        Array.from(todasLasClaves)
          .filter(key => !columnasOrdenadas.some(col => col.key === key) && key !== 'id' && !camposOcultos.includes(key))
          .forEach(key => {
            columnasOrdenadas.push({ key, label: key.charAt(0).toUpperCase() + key.slice(1) });
          });
          
        // Añadir la columna de acciones al final
        columnasOrdenadas.push({ key: 'acciones', label: 'Acciones' });
        
        setColumnas(columnasOrdenadas);
      }
      
      // Obtener información de usuarios
      await fetchUserInfo(docs);
    } catch (error) {
      console.error('Error al obtener prealertas:', error);
    } finally {
      setLoading(false);
    }
  };

  // Función para extraer el ID de usuario
  const extractUserId = (userRef) => {
    if (!userRef) return null;
    
    // Añadir logging para debug
    console.log("Tipo de userRef:", typeof userRef, userRef);
    
    if (typeof userRef === 'string') {
      // Si es una referencia en formato string
      if (userRef.includes('/users/')) {
        return userRef.split('/').pop();
      }
      // Si es directamente el ID
      return userRef;
    }
    
    if (typeof userRef === 'object' && userRef !== null) {
      // Para referencias de Firestore
      if (userRef._path?.segments?.length > 7) {
        return userRef._path.segments[1];
      }
      
      // Para referencias convertidas a objeto
      if (userRef.path) {
        return userRef.path.split('/').pop();
      }
      
      // Para objetos con id
      if (userRef.id) {
        return userRef.id;
      }
      
      // Para objetos Firebase con documentId
      if (userRef._key?.path?.segments?.length > 0) {
        return userRef._key.path.segments[userRef._key.path.segments.length - 1];
      }
    }
    
    return null;
  };

  // Función para obtener información de usuarios en bloque
  const fetchUserInfo = async (prealertData) => {
    const usersToFetch = {};
    
    // Recolectar referencias únicas a usuarios
    prealertData.forEach(prealert => {
      if (prealert.user) {
        let userId = extractUserId(prealert.user);
        if (userId) {
          usersToFetch[userId] = true;
        }
      }
    });
    
    console.log("IDs de usuarios a buscar:", Object.keys(usersToFetch));
    
    // Si no hay usuarios para consultar, salir
    if (Object.keys(usersToFetch).length === 0) return;
    
    // Obtener datos de usuarios directamente desde Firestore
    for (const userId of Object.keys(usersToFetch)) {
      try {
        // Obtener directamente de Firestore
        const userDocRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userDocRef);
        
        console.log(`Usuario ${userId} existe:`, userSnap.exists());
        
        if (userSnap.exists()) {
          const userData = userSnap.data();
          console.log(`Datos de usuario ${userId}:`, userData);
          
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

  // Función para obtener datos de un usuario directamente de Firestore
  const fetchUserById = async (userId) => {
    if (!userId) return null;
    
    try {
      // Si ya tenemos los datos en cache, devolverlos
      if (usersData[userId]) {
        return usersData[userId];
      }
      
      // Obtener directamente de Firestore
      const userDocRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userDocRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        
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
        // Guardar un objeto vacío para evitar consultas repetidas
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

  const handleEdit = (prealert) => {
    setEditingId(prealert.id);
    setEditForm({ ...prealert });
    setSheetOpen(true);
  };

  const handleChange = (key, value) => {
    setEditForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    try {
      // Remover el id antes de actualizar
      const { id, ...updateData } = editForm;
      
      // Convertir medidas a números
      if (updateData.width) updateData.width = Number(updateData.width);
      if (updateData.height) updateData.height = Number(updateData.height);
      if (updateData.lenght) updateData.lenght = Number(updateData.lenght);
      if (updateData.weight) updateData.weight = Number(updateData.weight);
      
      await updateDoc(doc(db, 'prealerts', id), updateData);
      
      // Actualizar la vista local
      setPrealerts(prealerts.map(p => p.id === id ? { 
        ...p, 
        ...updateData,
        // Actualizar dimensiones calculadas
        dimensions: updateData.width && updateData.height && updateData.lenght ? 
          `${updateData.width}×${updateData.height}×${updateData.lenght} cm` : '-'
      } : p));
      
      setEditingId(null);
      setSheetOpen(false);
      
      // Mostrar mensaje de éxito
      alert('Prealerta actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar:', error);
      alert('Error al guardar cambios: ' + error.message);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
    setSheetOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Filtrar prealerts según la búsqueda
    const filtered = prealerts.filter(prealert => 
      Object.values(prealert).some(value => 
        value && String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setPrealerts(filtered);
  };

  const handleSort = (column) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);
    
    const sorted = [...prealerts].sort((a, b) => {
      const valueA = a[column] || '';
      const valueB = b[column] || '';
      
      if (column === 'creation_date') {
        const dateA = valueA?.toDate?.() || new Date(valueA);
        const dateB = valueB?.toDate?.() || new Date(valueB);
        return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
      }
      
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return newDirection === 'asc' 
          ? valueA.localeCompare(valueB) 
          : valueB.localeCompare(valueA);
      }
      
      return newDirection === 'asc' ? valueA - valueB : valueB - valueA;
    });
    
    setPrealerts(sorted);
  };

  // Renderizar celda según tipo de dato
  const renderCelda = (prealert, columna) => {
    // Si no estamos editando o la columna no es editable
    if (editingId !== prealert.id || !CAMPOS_EDITABLES.includes(columna.key)) {
      return renderValor(prealert, columna);
    }
    
    // Renderizar campo editable
    if (columna.key === 'status') {
      return (
        <Select 
          value={editForm.status || 'Esperando Llegada'} 
          onValueChange={(value) => handleChange('status', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccionar estado" />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }
    
    return (
      <Input
        type="text"
        value={editForm[columna.key] || ''}
        onChange={(e) => handleChange(columna.key, e.target.value)}
        className="w-full"
      />
    );
  };
  
  // Renderizar valor según el tipo
  const renderValor = (prealert, columna) => {
    if (columna.key === 'id') return prealert.id;
    
    const valor = prealert[columna.key];
    
    if (valor === undefined || valor === null) return '-';
    
    // Manejar referencia de usuario - igual que en la página de envíos
    if (columna.key === 'user') {
      // Si el valor es un string simple (no una referencia), mostrarlo directamente
      if (typeof valor === 'string' && !valor.includes('/users/')) {
        return valor;
      }
      
      const userId = extractUserId(valor);
      
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
        
        // Mostrar valor original mientras tanto
        if (typeof valor === 'string') {
          return valor;
        }
        return `Cargando...`;
      }
      
      // Si todo lo demás falla, convertir a string
      if (typeof valor === 'object' && valor !== null) {
        return JSON.stringify(valor);
      }
      
      return valor || 'Sin usuario';
    }
    
    // Manejar campos de tipo URL para documentos
    if (
      columna.key === 'invoice_url' || 
      columna.key === 'invoiceUrl' || 
      columna.key === 'proforma_invoice' || 
      columna.key === 'proformaInvoice' || 
      columna.key === 'documentUrl' ||
      columna.key === 'document' ||
      columna.key === 'tracking_url'
    ) {
      if (valor && typeof valor === 'string' && valor.trim() !== '' && (valor.startsWith('http') || valor.startsWith('/'))) {
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
      return valor || '-';
    }
    
    // Manejar timestamp de Firestore
    if (columna.tipo === 'fecha' || columna.key === 'creation_date' || columna.key === 'update_date') {
      // Si es un timestamp de Firestore con toDate()
      if (valor && typeof valor === 'object' && typeof valor.toDate === 'function') {
        return valor.toDate().toLocaleString();
      }
      
      // Si es un objeto timestamp sin método toDate
      if (valor && typeof valor === 'object' && valor._seconds !== undefined) {
        const date = new Date(valor._seconds * 1000);
        return date.toLocaleString();
      }
      
      // Si es una fecha en formato string o timestamp
      if (valor) {
        try {
          return new Date(valor).toLocaleString();
        } catch (error) {
          return String(valor);
        }
      }
    }
    
    // Manejar valores numéricos de dinero
    if (columna.key === 'value_usd') {
      const value = parseFloat(valor);
      if (!isNaN(value)) {
        return `$${value.toFixed(2)}`;
      }
      return valor || '0';
    }
    
    // Manejar valores numéricos de peso
    if (columna.key === 'weight') {
      const weight = parseFloat(valor);
      if (!isNaN(weight)) {
        return `${weight} kg`;
      }
      return valor || '0';
    }
    
    // Manejar dimensiones calculadas
    if (columna.key === 'dimensions' && columna.calculada) {
      return valor;
    }
    
    if (columna.key === 'status') {
      const variantMap = {
        'Esperando Llegada': 'warning',
        'Recibido en Warehouse': 'success',
        'Procesando': 'secondary',
        'Convertido': 'primary'
      };
      
      return (
        <Badge variant={variantMap[valor] || 'default'}>
          {STATUS_OPTIONS.find(opt => opt.value === valor)?.label || valor}
        </Badge>
      );
    }
    
    // Manejar booleanos
    if (typeof valor === 'boolean') {
      return valor ? 'Sí' : 'No';
    }
    
    // Si es un objeto, convertir a string
    if (typeof valor === 'object' && valor !== null) {
      return JSON.stringify(valor);
    }
    
    return String(valor);
  };

  // Componente de edición usando Sheet
  const EditPrealertSheet = () => {
    if (!editingId) return null;
    
    const prealert = prealerts.find(p => p.id === editingId);
    if (!prealert) return null;

    return (
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="sm:max-w-md md:max-w-lg overflow-y-auto">
          <SheetHeader className="mb-4">
            <SheetTitle>Editar Prealerta: {prealert.id}</SheetTitle>
            <SheetDescription>
              Actualiza los detalles de la prealerta. Haz clic en guardar cuando termines.
            </SheetDescription>
          </SheetHeader>
          
          <div className="grid gap-4 py-4">
            {/* Tracking */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tracking" className="text-right">
                Tracking
              </Label>
              <Input
                id="tracking"
                value={editForm.provider_tracking || ''}
                onChange={(e) => handleChange('provider_tracking', e.target.value)}
                className="col-span-3"
              />
            </div>
            
            {/* Estado */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Estado
              </Label>
              <div className="col-span-3">
                <Select 
                  value={editForm.status || ''} 
                  onValueChange={(value) => handleChange('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUS_OPTIONS.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* País de origen */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="country" className="text-right">
                País de origen
              </Label>
              <Input
                id="country"
                value={editForm.country || ''}
                onChange={(e) => handleChange('country', e.target.value)}
                className="col-span-3"
              />
            </div>
            
            {/* Método de envío */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shipment-type" className="text-right">
                Tipo de envío
              </Label>
              <div className="col-span-3">
                <Select 
                  value={editForm.type_of_shipment || ''} 
                  onValueChange={(value) => handleChange('type_of_shipment', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {SHIPMENT_TYPES.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Medidas */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Medidas (cm)
              </Label>
              <div className="col-span-3 grid grid-cols-3 gap-2">
                <Input
                  placeholder="Ancho"
                  value={editForm.width || ''}
                  onChange={(e) => handleChange('width', e.target.value)}
                />
                <Input
                  placeholder="Alto"
                  value={editForm.height || ''}
                  onChange={(e) => handleChange('height', e.target.value)}
                />
                <Input
                  placeholder="Largo"
                  value={editForm.lenght || ''}
                  onChange={(e) => handleChange('lenght', e.target.value)}
                />
              </div>
            </div>
            
            {/* Peso */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weight" className="text-right">
                Peso (kg)
              </Label>
              <Input
                id="weight"
                type="number"
                value={editForm.weight || ''}
                onChange={(e) => handleChange('weight', e.target.value)}
                className="col-span-3"
              />
            </div>
            
            {/* Dirección */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Dirección
              </Label>
              <Textarea
                id="address"
                value={editForm.address || ''}
                onChange={(e) => handleChange('address', e.target.value)}
                className="col-span-3"
                rows={3}
              />
            </div>
            
            {/* Descripción */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descripción
              </Label>
              <Textarea
                id="description"
                value={editForm.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          
          <SheetFooter className="mt-6">
            <Button variant="outline" onClick={handleCancel}>Cancelar</Button>
            <Button onClick={handleSave}>Guardar cambios</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Prealertas</h1>
        <p>Gestión de prealertas de clientes</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Lista de Prealertas</CardTitle>
            <div className="flex items-center gap-2">
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  placeholder="Buscar prealerta..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64"
                />
                <Button type="submit" variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </CardHeader>
        <CardContent>
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
                        className="cursor-pointer"
                        onClick={() => handleSort(col.key)}
                      >
                        <div className="flex items-center">
                          {col.label}
                          {sortColumn === col.key && (
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          )}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prealerts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={columnas.length} className="text-center py-10">
                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                          <Package className="h-10 w-10 mb-2" />
                          <p>No se encontraron prealertas</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    prealerts.map(prealert => (
                      <TableRow key={prealert.id}>
                        {columnas.map(col => {
                          if (col.key === 'acciones') {
                            return (
                              <TableCell key={col.key}>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  onClick={() => handleEdit(prealert)}
                                  className="h-8"
                                >
                                  <Edit className="h-4 w-4 mr-1" />
                                  Editar
                                </Button>
                              </TableCell>
                            );
                          }
                          
                          return (
                            <TableCell key={col.key}>
                              {renderCelda(prealert, col)}
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
      
      <EditPrealertSheet />
    </div>
  );
} 