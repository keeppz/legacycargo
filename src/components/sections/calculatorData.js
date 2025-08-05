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

// Categorización de rubros para Panamá según el nuevo tabulador
export const rubrosPorCategoriaPanama = {
    'Ropa': ['Ropa', "Accesorios"],
    'Variado Bajo': ['Calzado', 'Alimentos'],
    'Ferretería y Repuestos': ['Ferretería', 'Repuestos', 'Autopartes'],
    'Variado Alto': ['Juguetes', 'Electrónicos', 'Tecnología', 'Electrodomésticos', 'Accesorios', 'Cosméticos', 'Medicina', 'Muebles', 'Maquinaria', 'Otros']
};

// Categorización de rubros simplificada para USA y China (mantener compatibilidad)
export const rubrosPorCategoria = {
    'A': ['Ropa', 'Calzado'], // Solo Ropa y Calzado en categoría A
    'B': ['Accesorios', 'Alimentos', 'Autopartes', 'Cosméticos', 'Electrodomésticos', 'Electrónicos', 'Ferretería', 'Juguetes', 'Maquinaria', 'Medicina', 'Muebles', 'Repuestos', 'Tecnología', 'Otros'] // Todo lo demás en categoría B
};

// Agrupación de estados por región para Panamá (6 regiones)
export const regionesPorEstadoPanama = {
    'REGION 1': [
        'Distrito Capital',
        'Miranda',
        'Vargas'
    ],
    'REGION 2': [
        'Aragua',
        'Carabobo'
    ],
    'REGION 3': [
        'Lara',
        'Anzoátegui',
        'Cojedes',
        'Yaracuy'
    ],
    'REGION 4': [
        'Barinas',
        'Guárico',
        'Portuguesa',
        'Falcón'
    ],
    'REGION 5': [
        'Monagas',
        'Sucre',
        'Mérida',
        'Bolívar',
        'Trujillo'
    ],
    'REGION 6': [
        'Táchira',
        'Amazonas',
        'Delta Amacuro',
        'Apure',
        'Nueva Esparta'
    ]
};

// Agrupación de estados por región para USA y China (mantener compatibilidad)
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

// Nuevas tarifas de Panamá según el tabulador actualizado + $2.00 USD (en USD/ft³)
export const tarifasPanamaCoLoader = {
    'REGION 1': {
        'Ropa': 16.00,
        'Variado Bajo': 16.50,
        'Ferretería y Repuestos': 16.00,
        'Variado Alto': 19.00
    },
    'REGION 2': {
        'Ropa': 16.50,
        'Variado Bajo': 17.00,
        'Ferretería y Repuestos': 16.50,
        'Variado Alto': 19.50
    },
    'REGION 3': {
        'Ropa': 17.50,
        'Variado Bajo': 18.00,
        'Ferretería y Repuestos': 17.50,
        'Variado Alto': 20.50
    },
    'REGION 4': {
        'Ropa': 18.00,
        'Variado Bajo': 18.50,
        'Ferretería y Repuestos': 17.50,
        'Variado Alto': 21.00
    },
    'REGION 5': {
        'Ropa': 18.50,
        'Variado Bajo': 19.00,
        'Ferretería y Repuestos': 18.00,
        'Variado Alto': 21.50
    },
    'REGION 6': {
        'Ropa': 19.00,
        'Variado Bajo': 19.50,
        'Ferretería y Repuestos': 18.50,
        'Variado Alto': 22.00
    }
};

// Tarifas de Panamá anteriores (mantener para compatibilidad si es necesario)
export const tarifasPanama = {
    'Zona 1': {
        'A': 14.0,
        'B': 18.0
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