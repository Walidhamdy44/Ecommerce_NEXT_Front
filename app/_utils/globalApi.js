
// Real product data from Amazon
const dummyProducts = [
  {
    id: 1,
    attributes: {
      title: "Apple iPhone 15 Pro Max",
      description: "256GB, Natural Titanium - Unlocked (Renewed Premium)",
      price: 1199.99,
      category: "Electronics",
      badge: "New",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/81+GIkwqF+L._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/71TSx9D2BVL._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/81+GIkwqF+L._AC_SX679_.jpg" }
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Samsung Galaxy S24 Ultra Android Smartphone",
      description: "512GB Storage, Titanium Gray, AI-Powered Features",
      price: 1299.99,
      category: "Electronics",
      badge: "Featured",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/71nkpcyoFDL._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/81lnKabqs3L._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/71nkpcyoFDL._AC_SX679_.jpg" }
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Apple 2023 MacBook Pro",
      description: "16-inch, M3 Pro chip, 18GB RAM, 512GB SSD",
      price: 2499.99,
      category: "Electronics",
      badge: "Sale",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/71DBkrxqBDL._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/61LNGJEMh0L._AC_SX679_.jpg" }
        }
      }
    }
  },
  {
    id: 4,
    attributes: {
      title: "Sony WH-1000XM5 Wireless Headphones",
      description: "Industry Leading Noise Canceling, Black",
      price: 399.99,
      category: "Electronics",
      badge: "Best Seller",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/71o8Q5DpBOL._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SX679_.jpg" }
        }
      }
    }
  },
  {
    id: 5,
    attributes: {
      title: "Apple iPad Pro 12.9-inch",
      description: "2024 Release, M2 chip, Wi-Fi, 256GB, Space Gray",
      price: 1099.99,
      category: "Electronics",
      badge: "New Release",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg" }
        }
      }
    }
  }
];

// Generate more unique products
const generateUniqueProducts = () => {
  const products = [
    {
      name: "Samsung 65-Inch OLED TV",
      image: "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_SX679_.jpg",
      price: 2799.99,
      category: "Electronics"
    },
    {
      name: "Dell XPS 15 Laptop",
      image: "https://m.media-amazon.com/images/I/71dK2g+UqbL._AC_SX679_.jpg",
      price: 1899.99,
      category: "Electronics"
    },
    {
      name: "Bose QuietComfort Earbuds II",
      image: "https://m.media-amazon.com/images/I/61Qg3IRqFiL._AC_SX679_.jpg",
      price: 299.99,
      category: "Electronics"
    }
    // Add more products here...
  ];

  let id = 6;
  for (const product of products) {
    dummyProducts.push({
      id: id++,
      attributes: {
        title: product.name,
        description: `High-quality ${product.category.toLowerCase()} product`,
        price: product.price,
        category: product.category,
        badge: ["New", "Featured", "Sale", "Best Seller"][Math.floor(Math.random() * 4)],
        imgs: {
          data: [
            { attributes: { url: product.image } },
            { attributes: { url: product.image } }
          ]
        },
        coverImg: {
          data: {
            attributes: { url: product.image }
          }
        }
      }
    });
  }
};

generateUniqueProducts();

// API functions
const getAllProduct = () => {
  return Promise.resolve({ data: { data: dummyProducts } });
};

const getAllProductByCat = (cat) => {
  const filteredProducts = dummyProducts.filter(
    product => product.attributes.category === cat
  );
  return Promise.resolve({ data: { data: filteredProducts } });
};

const getProductById = (id) => {
  const product = dummyProducts.find(p => p.id === parseInt(id));
  return Promise.resolve({ data: { data: product } });
};

const addToCart = async (data) => {
  return Promise.resolve({ data: data });
};

const getCartUserByEmail = async (email) => {
  return Promise.resolve({ data: [] });
};

const deleteItemFromCart = async (id) => {
  return Promise.resolve({ success: true });
};

const getAllProductWithFilter = async (cat) => {
  if (!cat) return Promise.resolve({ data: dummyProducts });
  const filteredProducts = dummyProducts.filter(
    product => product.attributes.category === cat
  );
  return Promise.resolve({ data: filteredProducts });
};

export {
  getAllProduct,
  getProductById,
  getAllProductByCat,
  addToCart,
  getCartUserByEmail,
  deleteItemFromCart,
  getAllProductWithFilter,
};
