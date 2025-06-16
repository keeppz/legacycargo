import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  Timestamp, 
  writeBatch, 
  doc,
  getDoc
} from 'firebase/firestore';

// Nombres y apellidos para generar datos aleatorios
const nombres = [
  'Carlos', 'María', 'Juan', 'Ana', 'Luis', 'Laura', 'José', 'Sofía', 
  'Pedro', 'Elena', 'Miguel', 'Paula', 'David', 'Carmen', 'Fernando', 'Marta'
];

const apellidos = [
  'García', 'Rodríguez', 'Martínez', 'Fernández', 'López', 'Pérez', 'González',
  'Sánchez', 'Ramírez', 'Torres', 'Flores', 'Rivera', 'Gómez', 'Díaz', 'Reyes', 'Cruz'
];

// Funciones auxiliares
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const getRandomStatus = () => {
  const statuses = ['pending', 'active', 'delivered', 'cancelled'];
  return getRandom(statuses);
};

const getRandomRole = () => {
  const roles = ['admin', 'staff', 'user'];
  const weights = [0.1, 0.2, 0.7]; // 10% admin, 20% staff, 70% user
  
  const random = Math.random();
  let sum = 0;
  
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (random <= sum) return roles[i];
  }
  
  return 'user';
};

// Generar datos de usuario
const generateUser = (index) => {
  const nombre = getRandom(nombres);
  const apellido = getRandom(apellidos);
  const now = new Date();
  const createdAt = getRandomDate(new Date(now.getFullYear() - 2, 0, 1), now);
  const lastLoginAt = getRandomDate(createdAt, now);
  
  return {
    displayName: `${nombre} ${apellido}`,
    email: `${nombre.toLowerCase()}.${apellido.toLowerCase()}${index}@example.com`,
    role: getRandomRole(),
    createdAt: Timestamp.fromDate(createdAt),
    lastLoginAt: Timestamp.fromDate(lastLoginAt),
    disabled: Math.random() > 0.9, // 10% de usuarios desactivados
    phone: `+${Math.floor(Math.random() * 100000000000)}`
  };
};

// Generar datos de envío
const generateShipping = (userDisplayName, index) => {
  const now = new Date();
  const createdAt = getRandomDate(new Date(now.getFullYear() - 1, 0, 1), now);
  
  return {
    cliente: userDisplayName || `Cliente ${index}`,
    status: getRandomStatus(),
    createdAt: Timestamp.fromDate(createdAt),
    origen: getRandom(['Estados Unidos', 'China', 'Panamá', 'México']),
    destino: getRandom(['Panamá', 'Colombia', 'Costa Rica', 'Ecuador']),
    tracking: `TRK${Math.floor(Math.random() * 1000000)}`,
    peso: Math.round(Math.random() * 100 * 10) / 10,
    costo: Math.round(Math.random() * 1000 * 100) / 100
  };
};

// Generar datos de prealerta
const generatePrealert = (userDisplayName, index) => {
  const now = new Date();
  const createdAt = getRandomDate(new Date(now.getFullYear() - 1, 0, 1), now);
  
  return {
    cliente: userDisplayName || `Cliente ${index}`,
    descripcion: `Paquete #${index} - ${getRandom(['Ropa', 'Electrónicos', 'Libros', 'Juguetes', 'Herramientas'])}`,
    status: getRandom(['pending', 'processing', 'approved', 'rejected']),
    createdAt: Timestamp.fromDate(createdAt),
    origen: getRandom(['Estados Unidos', 'China', 'Panamá', 'México']),
    tracking: `PRE${Math.floor(Math.random() * 1000000)}`,
    estimatedWeight: Math.round(Math.random() * 50 * 10) / 10,
    estimatedValue: Math.round(Math.random() * 500 * 100) / 100
  };
};

// Función principal para sembrar datos
export const seedDatabase = async () => {
  try {
    // Verificar si ya hay datos
    const usersCollection = collection(db, 'users');
    const shippingsCollection = collection(db, 'shippings');
    const prealertsCollection = collection(db, 'prealerts');
    
    // Crear lotes para operaciones en masa
    const batch = writeBatch(db);
    
    // Generar usuarios
    const userCount = 50;
    const generatedUsers = [];
    
    console.log(`Generando ${userCount} usuarios...`);
    
    for (let i = 0; i < userCount; i++) {
      const userData = generateUser(i);
      generatedUsers.push(userData);
      
      // Agregar a Firestore
      const userRef = doc(collection(db, 'users'));
      batch.set(userRef, userData);
    }
    
    // Generar envíos
    const shippingCount = 100;
    console.log(`Generando ${shippingCount} envíos...`);
    
    for (let i = 0; i < shippingCount; i++) {
      const randomUser = getRandom(generatedUsers);
      const shippingData = generateShipping(randomUser.displayName, i);
      
      // Agregar a Firestore
      const shippingRef = doc(collection(db, 'shippings'));
      batch.set(shippingRef, shippingData);
    }
    
    // Generar prealertas
    const prealertCount = 75;
    console.log(`Generando ${prealertCount} prealertas...`);
    
    for (let i = 0; i < prealertCount; i++) {
      const randomUser = getRandom(generatedUsers);
      const prealertData = generatePrealert(randomUser.displayName, i);
      
      // Agregar a Firestore
      const prealertRef = doc(collection(db, 'prealerts'));
      batch.set(prealertRef, prealertData);
    }
    
    // Confirmar
    await batch.commit();
    
    return {
      success: true,
      message: `Datos creados: ${userCount} usuarios, ${shippingCount} envíos, ${prealertCount} prealertas`
    };
    
  } catch (error) {
    console.error("Error al generar datos:", error);
    return {
      success: false,
      message: `Error: ${error.message}`
    };
  }
};

// Función para verificar si hay datos
export const checkDataExists = async () => {
  try {
    const userDoc = await getDoc(doc(collection(db, 'users')));
    const shippingDoc = await getDoc(doc(collection(db, 'shippings')));
    const prealertDoc = await getDoc(doc(collection(db, 'prealerts')));
    
    return {
      users: userDoc.exists(),
      shippings: shippingDoc.exists(),
      prealerts: prealertDoc.exists()
    };
  } catch (error) {
    console.error("Error al verificar datos:", error);
    return {
      users: false,
      shippings: false,
      prealerts: false
    };
  }
}; 