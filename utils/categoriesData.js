// Definición de rubros sin categorías para mostrar al usuario
export const rubros = [
    'ROPA',
    'BOLSOS',
    'MOCHILAS',
    'OPTICA',
    'ARTICULOS PARA BEBES',
    'RELOJERIA',
    'CALZADO',
    'ARTICULOS DE HOGAR',
    'ARTICULOS DE LIMPIEZA',
    'ARTICULOS DEPORTIVOS',
    'ARTICULOS DE FIESTA',
    'ARTICULOS DE OFICINA',
    'ARTICULOS ESCOLARES',
    'ELECTRODOMESTICOS',
    'REPUESTOS',
    'REPUESTOS PARA REFRIGERACION (NO GAS REFRIGERANTE)',
    'FERRETERIA EN GENERAL',
    'JUGUETES ARTICULOS ELECTRONICOS',
    'EQUIPOS MEDICOS',
    'DETERGENTES',
    'BICICLETAS',
    'LINEA BLANCA',
    'TELAS',
    'EQUIPOS PARA OPTICA'
];

// Categorización de rubros para uso interno
export const rubrosPorCategoria = {
    'Ropa': [
        'ROPA',
        'BOLSOS',
        'MOCHILAS',
        'OPTICA',
        'ARTICULOS PARA BEBES',
        'RELOJERIA',
        'CALZADO'
    ],
    'Variado Bajo': [
        'ARTICULOS DE HOGAR',
        'ARTICULOS DE LIMPIEZA',
        'ARTICULOS DEPORTIVOS',
        'ARTICULOS DE FIESTA',
        'ARTICULOS DE OFICINA',
        'ARTICULOS ESCOLARES',
        'ELECTRODOMESTICOS'
    ],
    'Ferreteria y repuestos': [
        'REPUESTOS',
        'REPUESTOS PARA REFRIGERACION (NO GAS REFRIGERANTE)',
        'FERRETERIA EN GENERAL'
    ],
    'Variado alto': [
        'JUGUETES ARTICULOS ELECTRONICOS',
        'EQUIPOS MEDICOS',
        'DETERGENTES',
        'BICICLETAS',
        'LINEA BLANCA',
        'TELAS',
        'EQUIPOS PARA OPTICA'
    ]
};

// Agrupación de estados por región
export const regionesPorEstado = {
    'Region1': ['DISTRITO CAPITAL', 'MIRANDA', 'VARGAS'],
    'Region2': ['ARAGUA', 'CARABOBO'],
    'Region3': ['LARA', 'ANZOATEGUI'],
    'Region4': ['BARINAS', 'COJEDES', 'YARACUY', 'PORTUGUESA', 'FALCON', 'SUCRE'],
    'Region5': ['MONAGAS'],
    'Region6': ['ZULIA', 'MERIDA', 'BOLIVAR', 'TRUJILLO', 'TACHIRA', 'GUARICO', 'DELTA AMACURO', 'APURE']
};

// Estructura para las tarifas por región y categoría
export const tarifas = {
    'Region1': {
        'Ropa': 0,
        'Variado Bajo': 0,
        'Ferreteria y repuestos': 0,
        'Variado alto': 0
    },
    // ... repetir para cada región
};

// Tarifas específicas para Panamá marítimo por región y categoría (en USD/ft³)
export const tarifasPanama = {
    'Region1': {
        'Ropa': 15.50,
        'Variado Bajo': 16.50,
        'Ferreteria y repuestos': 16.00,
        'Variado alto': 19.00
    },
    'Region2': {
        'Ropa': 15.50,
        'Variado Bajo': 17.50,
        'Ferreteria y repuestos': 16.50,
        'Variado alto': 19.50
    },
    'Region3': {
        'Ropa': 17.00,
        'Variado Bajo': 18.00,
        'Ferreteria y repuestos': 17.00,
        'Variado alto': 20.50
    },
    'Region4': {
        'Ropa': 17.50,
        'Variado Bajo': 18.50,
        'Ferreteria y repuestos': 17.50,
        'Variado alto': 21.00
    },
    'Region5': {
        'Ropa': 18.00,
        'Variado Bajo': 19.00,
        'Ferreteria y repuestos': 18.00,
        'Variado alto': 21.50
    },
    'Region6': {
        'Ropa': 18.50,
        'Variado Bajo': 19.50,
        'Ferreteria y repuestos': 18.50,
        'Variado alto': 22.00
    }
}; 