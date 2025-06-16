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

// Categorización de rubros para uso interno
export const rubrosPorCategoria = {
    'A': ['Ropa', 'Calzado', 'Accesorios', 'Juguetes'],
    'B': ['Cosméticos', 'Medicina', 'Alimentos'],
    'C': ['Electrónicos', 'Electrodomésticos', 'Tecnología'],
    'D': ['Autopartes', 'Repuestos', 'Maquinaria', 'Ferretería', 'Muebles'],
    'E': ['Otros']
};

// Agrupación de estados por región
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
        'Yaracuy'
    ],
    'Zona 3': [
        'Falcón',
        'Guárico',
        'Cojedes',
        'Portuguesa'
    ],
    'Zona 4': [
        'Anzoátegui',
        'Monagas',
        'Nueva Esparta',
        'Sucre'
    ],
    'Zona 5': [
        'Táchira',
        'Mérida',
        'Trujillo',
        'Barinas'
    ],
    'Zona 6': [
        'Bolívar',
        'Amazonas',
        'Delta Amacuro',
        'Apure'
    ]
};

// Estructura para las tarifas por región y categoría
export const tarifas = {
    'aereo': {
        'estados_unidos': 15.0,
        'panama': 12.0
    },
    'maritimo': {
        'estados_unidos': 30.0,
        'china': 840.0
    }
};

// Tarifas específicas para Panamá marítimo por región y categoría (en USD/ft³)
export const tarifasPanama = {
    'Zona 1': {
        'A': 25.0,
        'B': 28.0,
        'C': 30.0,
        'D': 32.0,
        'E': 35.0
    },
    'Zona 2': {
        'A': 27.0,
        'B': 30.0,
        'C': 32.0,
        'D': 34.0,
        'E': 37.0
    },
    'Zona 3': {
        'A': 29.0,
        'B': 32.0,
        'C': 34.0,
        'D': 36.0,
        'E': 39.0
    },
    'Zona 4': {
        'A': 31.0,
        'B': 34.0,
        'C': 36.0,
        'D': 38.0,
        'E': 41.0
    },
    'Zona 5': {
        'A': 33.0,
        'B': 36.0,
        'C': 38.0,
        'D': 40.0,
        'E': 43.0
    },
    'Zona 6': {
        'A': 35.0,
        'B': 38.0,
        'C': 40.0,
        'D': 42.0,
        'E': 45.0
    }
}; 