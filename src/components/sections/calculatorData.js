'use client'

// Definición de rubros sin categorías para mostrar al usuario
export const rubros = [
    'Accesorios',
    'Alimentos',
    'Autopartes',
    'Calzado',
    'Cosméticos',
    'Electrodomésticos',
    'Electrónicos',
    'Ferretería',
    'Juguetes',
    'Maquinaria',
    'Medicina',
    'Muebles',
    'Repuestos',
    'Ropa',
    'Tecnología',
    'Otros'
];

// Categorización de rubros simplificada a 2 categorías
export const rubrosPorCategoria = {
    'A': ['Ropa', 'Calzado'], // Solo Ropa y Calzado en categoría A
    'B': ['Accesorios', 'Alimentos', 'Autopartes', 'Cosméticos', 'Electrodomésticos', 'Electrónicos', 'Ferretería', 'Juguetes', 'Maquinaria', 'Medicina', 'Muebles', 'Repuestos', 'Tecnología', 'Otros'] // Todo lo demás en categoría B
};

// Agrupación de estados por región simplificada a 2 zonas
export const regionesPorEstado = {
    'Zona 1': [
        'Distrito Capital',
        'Miranda',
        'Vargas'
    ],
    'Zona 2': [
        'Aragua',
        'Carabobo',
        'Lara',
        'Yaracuy',
        'Falcón',
        'Guárico',
        'Cojedes',
        'Portuguesa',
        'Anzoátegui',
        'Monagas',
        'Nueva Esparta',
        'Sucre',
        'Táchira',
        'Mérida',
        'Trujillo',
        'Barinas',
        'Bolívar',
        'Amazonas',
        'Delta Amacuro',
        'Apure'
    ]
};

// Estructura para las tarifas por región y categoría
export const tarifasUSA = {
    'Zona 1': 30.0,
    'Zona 2': 35.0
};

// Tarifas específicas para China por región (en USD/ft³) - Solo marítimo por ahora
export const tarifasChina = {
    'Zona 1': 21.0,
    'Zona 2': 24.0
};

// Tarifas específicas para Panamá marítimo por región y categoría (en USD/ft³)
export const tarifasPanama = {
    'Zona 1': {
        'A': 25.0,
        'B': 28.0
    },
    'Zona 2': {
        'A': 27.0,
        'B': 30.0
    }
};

// Tarifas aéreas por origen (en USD/lb) - No varían por rubro, solo por peso
export const tarifasAereas = {
    'estados_unidos': 15.0,
    'panama': 12.0,
    'china': 18.0 // Preparado para futuro
}; 