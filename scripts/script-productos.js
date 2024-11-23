const products = [

// GAMA ALTA
    {
        name: "NVIDIA RTX 4090",
        category: "gpu",
        range: "high",
        price: 2277,
        description: "La tarjeta gráfica más potente del mercado gaming",
        image: "https://www.pny.com.tw/en/products-detail/upload/catalog_m/en_catalog_list_22j26_buxuw5wmke.jpg",
        amazonUrl: "https://amzn.to/3Z5TBqy"
    },
    {
        name: "Intel i9-14900K",
        category: "cpu",
        range: "high",
        price: 405,
        description: "El procesador más rápido para gaming",
        image: "https://utopiacomputers.co.uk/cdn/shop/files/Corei9_86170e5d-75ff-4b75-8753-568641198848.jpg?v=1718819473",
        amazonUrl: "https://amzn.to/4fEtPkf"
    },
    {
        name: "AMD Ryzen 9 7950X",
        category: "cpu",
        range: "high",
        price: 510,
        description: "El procesador más rápido para gaming de AMD",
        image: "https://m.media-amazon.com/images/I/5116zdA9uyL._AC_SL1200_.jpg",
        amazonUrl: "https://amzn.to/3Z5D9GG"
     },
     {
        name: "AMD Radeon RX 7900 XTX",
        category: "gpu",
        range: "high",
        price: 948,
        description: "La tarjeta gráfica más potente del mercado gaming de AMD",
        image: "https://m.media-amazon.com/images/I/81tvHo10s2L._AC_SL1500_.jpg",
        amazonUrl: "https://amzn.to/4g3V2wN"
    },
    {
        name: "Crucial P3 Plus SSD 2TB PCIe Gen4 NVMe",
        category: "storage",
        range: "high",
        price: 104,
        description: "Lo mejor en almacenamiento del mercado gaming",
        image: "https://m.media-amazon.com/images/I/51xZaoS+Q1L._AC_SL1080_.jpg",
        amazonUrl: "https://amzn.to/40ZzT2c"
    },
    {
        name: "Crucial Pro RAM DDR5 32GB (2x16GB) 6000MHz",
        category: "ram",
        range: "high",
        price: 67,
        description: "Lo mejor en RAM del mercado gaming",
        image: "https://m.media-amazon.com/images/I/51EJt5geVEL._AC_SL1080_.jpg",
        amazonUrl: "https://amzn.to/493Gue2"
    },
    {
        name: "ASUS ROG Strix Z790-E",
        category: "motherboard",
        range: "high",
        price: 383,
        description: "Lo mejor en placas madre del mercado gaming",
        image: "https://m.media-amazon.com/images/I/81cQQqzPcSL._AC_SL1500_.jpg",
        amazonUrl: "https://amzn.to/3B3IGFN"
    },
    {
        name: "MSI MEG X670E Ace",
        category: "motherboard",
        range: "high",
        price: 366,
        description: "Lo mejor en placas madre del mercado gaming",
        image: "https://m.media-amazon.com/images/I/81cR1YlptmL._AC_SL1500_.jpg",
        amazonUrl: "https://amzn.to/3Z5U8ZA"
    },


// GAMA MEDIA

     {
        name: "AMD Radeon RX 550",
        category: "gpu",
        range: "mid",
        price: 83,
        description: "La mejor tarjeta grafica calidad/precio",
        image: "https://m.media-amazon.com/images/I/61-PIBx43BL._AC_SL1000_.jpg",
        amazonUrl: "https://amzn.to/4fVtdX6"
    },
    {
        name: "Intel Core i7-14700KF",
        category: "cpu",
        range: "mid",
        price: 307,
        description: "Lo mejor en procesador calidad/precio",
        image: "https://m.media-amazon.com/images/I/41G2QJOwAYL._AC_SL1280_.jpg",
        amazonUrl: "https://amzn.to/3V4QMVG"
    },
    {
        name: "AMD Ryzen 77700X",
        category: "cpu",
        range: "mid",
        price: 243,
        description: "Lo mejor en procesador calidad/precio",
        image: "https://m.media-amazon.com/images/I/51hfER1cZVL._AC_SL1500_.jpg",
        amazonUrl: "https://amzn.to/3ASkFSc"
    },
    {
        name: "NVIDIA RTX 4070 SUPER",
        category: "gpu",
        range: "mid",
        price: 570,
        description: "Lo mejor en grafica calidad/precio",
        image: "https://m.media-amazon.com/images/I/711Z7T6cUWL._AC_SL1500_.jpg",
        amazonUrl: "https://amzn.to/3V5iUYx"
    },
    {
        name: "AMD Radeon RX 7700 XT",
        category: "gpu",
        range: "mid",
        price: 337,
        description: "Lo mejor en grafica calidad/precio",
        image: "https://m.media-amazon.com/images/I/71mgr3jiEvL._AC_SL1500_.jpg",
        amazonUrl: "https://amzn.to/4eHZmAD"
    },
    {
        name: "Patriot DDR5 RAM 16GB (1X16GB) 5600MHz",
        category: "ram",
        range: "mid",
        price: 49,
        description: "Lo mejor en RAM calidad/precio",
        image: "https://m.media-amazon.com/images/I/71ggXnQSCuL._AC_SX569_.jpg",
        amazonUrl: "https://amzn.to/3CGORjM"
    },
    {
        name: "Kingston NV3 NVMe PCIe 4.0 1TB",
        category: "storage",
        range: "mid",
        price: 48,
        description: "Lo mejor en almacenamiento calidad/precio",
        image: "https://m.media-amazon.com/images/I/71ZnK38jZzL._AC_SX569_.jpg",
        amazonUrl: "https://amzn.to/3Zl35jd"
    },
    {
        name: "GIGABYTE Z790 Aorus Elite",
        category: "motherboard",
        range: "mid",
        price: 199,
        description: "Lo mejor en placas madre calidad/precio",
        image: "https://m.media-amazon.com/images/I/61T1P18owDL._AC_SL1000_.jpg",
        amazonUrl: "https://amzn.to/3CQdv1e"
    },
    {
        name: "ASUS TUF Gaming X670E",
        category: "motherboard",
        range: "mid",
        price: 244,
        description: "Lo mejor en placas madre calidad/precio",
        image: "https://m.media-amazon.com/images/I/81vIMCeTjqL._AC_SX569_.jpg",
        amazonUrl: "https://amzn.to/4965SzK"
    },


// GAMA BAJA

    {
        name: "Intel Core i5-14600KF",
        category: "cpu",
        range: "budget",
        price: 186,
        description: "Lo mejor en procesadores de gama de entrada",
        image: "https://m.media-amazon.com/images/I/51jyaxxUM1L._AC_SX425_.jpg",
        amazonUrl: "https://amzn.to/3Z1AHkH"
    },
    {
        name: "NVIDIA RTX 4060",
        category: "gpu",
        range: "budget",
        price: 259,
        description: "Lo mejor en graficas de gama de entrada",
        image: "https://m.media-amazon.com/images/I/814YjnjyE1L._AC_SX425_.jpg",
        amazonUrl: "https://amzn.to/411qqYy"
    },
    {
        name: "AMD Ryzen 5 5600X",
        category: "cpu",
        range: "budget",
        price: 99,
        description: "Lo mejor en procesadores de gama de entrada",
        image: "https://m.media-amazon.com/images/I/51ld6RR8IrL._AC_SY550_.jpg",
        amazonUrl: "https://amzn.to/496gTB9"
    },
    {
        name: "AMD Radeon RX 6750 XT",
        category: "gpu",
        range: "budget",
        price: 379,
        description: "Lo mejor en graficas de gama de entrada",
        image: "https://m.media-amazon.com/images/I/71aSQBR3UKL._AC_SX425_.jpg",
        amazonUrl: "https://amzn.to/4hZuX3A"
    },
    {
        name: "MSI B760 Tomahawk",
        category: "motherboard",
        range: "budget",
        price: 140,
        description: "Lo mejor en placas madre de gama de entrada",
        image: "https://m.media-amazon.com/images/I/81mtudlL3ZL._SX425_.jpg",
        amazonUrl: "https://amzn.to/3AVh8m0"
    },
    {
        name: "ASUS Prime B650-Plus",
        category: "motherboard",
        range: "budget",
        price: 136,
        description: "Lo mejor en placas madre de gama de entrada",
        image: "https://m.media-amazon.com/images/I/81fRI8kUSVL._AC_SX425_.jpg",
        amazonUrl: "https://amzn.to/3AVWv9m"
    },

];

function getRangeClass(range) {
    switch(range) {
        case 'high': return 'high-end';
        case 'mid': return 'mid-range';
        case 'budget': return 'budget';
        default: return '';
    }
}

function displayProducts(filteredProducts = products) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <span class="product-category ${getRangeClass(product.range)}">
                ${product.range === 'high' ? 'Gama Alta' : product.range === 'mid' ? 'Gama Media' : 'Gama Baja'}
            </span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <a href="${product.amazonUrl}" class="amazon-button" target="_blank">Ver en Amazon</a>
        `;
        container.appendChild(card);
    });
}

function filterProducts() {
    const category = document.getElementById('category').value;
    const range = document.getElementById('range').value;
    const priceRange = document.getElementById('price').value;

    let filtered = products;

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    if (range !== 'all') {
        filtered = filtered.filter(p => p.range === range);
    }

    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filtered = filtered.filter(p => {
            if (max) {
                return p.price >= min && p.price <= max;
            } else {
                return p.price >= min;
            }
        });
    }

    displayProducts(filtered);
}

// Event listeners para los filtros
document.getElementById('category').addEventListener('change', filterProducts);
document.getElementById('range').addEventListener('change', filterProducts);
document.getElementById('price').addEventListener('change', filterProducts);

// Mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => displayProducts());