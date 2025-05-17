// Product categories data
const generateProductsByCategory = () => {
  const categories = {
    Electronics: [
      {
        title: "Apple MacBook Pro M3",
        description: "14-inch, M3 Pro chip, 18GB RAM, 512GB SSD",
        price: 1999.99,
        image: "https://m.media-amazon.com/images/I/61liNHgqJ9L._AC_SX679_.jpg",
      },
      {
        title: "Samsung 65-inch OLED 4K TV",
        description: "S95C Series Quantum HDR",
        price: 2499.99,
        image: "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_SX679_.jpg",
      },
      // Add more electronics...
    ],
    Sports: [
      {
        title: "NordicTrack Commercial Treadmill",
        description: "30-Day iFIT Family Membership Included",
        price: 1799.99,
        image: "https://m.media-amazon.com/images/I/81q+-c7GtzL._AC_SX679_.jpg",
      },
      {
        title: "Bowflex SelectTech 552 Dumbbells",
        description: "Adjustable Weight Set",
        price: 429.99,
        image: "https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SX679_.jpg",
      },
      // Add more sports equipment...
    ],
    Accessories: [
      {
        title: "Apple Watch Series 9",
        description: "GPS 45mm Aluminum Case",
        price: 429.99,
        image: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_SX679_.jpg",
      },
      {
        title: "Sony WH-1000XM5",
        description: "Wireless Noise Canceling Headphones",
        price: 399.99,
        image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SX679_.jpg",
      },
      // Add more accessories...
    ]
  };

  let id = 1;
  const products = [];

  // Generate 100+ products for each category
  Object.entries(categories).forEach(([category, baseProducts]) => {
    // Create variations of base products
    for (let i = 0; i < Math.ceil(100 / baseProducts.length); i++) {
      baseProducts.forEach(base => {
        const variations = [
          { suffix: "Pro", priceMultiplier: 1.2 },
          { suffix: "Plus", priceMultiplier: 1.1 },
          { suffix: "Lite", priceMultiplier: 0.9 },
          { suffix: "Max", priceMultiplier: 1.3 },
          { suffix: "Basic", priceMultiplier: 0.8 }
        ];

        variations.forEach(variation => {
          products.push({
            id: id++,
            attributes: {
              title: `${base.title} ${variation.suffix}`,
              description: `${base.description} - ${variation.suffix} Edition`,
              price: Math.round(base.price * variation.priceMultiplier * 100) / 100,
              category: category,
              badge: ["New", "Featured", "Sale", "Best Seller"][Math.floor(Math.random() * 4)],
              imgs: {
                data: [
                  { attributes: { url: base.image } },
                  { attributes: { url: base.image } }
                ]
              },
              coverImg: {
                data: {
                  attributes: { url: base.image }
                }
              }
            }
          });
        });
      });
    }
  });

  return products;
};

const dummyProducts = generateProductsByCategory();

// API functions
const getAllProduct = () => {
  return Promise.resolve({ data: { data: dummyProducts } });
};

const getAllProductByCat = (cat) => {
  const filteredProducts = dummyProducts.filter(
    (product) => product.attributes.category === cat
  );
  return Promise.resolve({ data: { data: filteredProducts } });
};

const getProductById = (id) => {
  const product = dummyProducts.find((p) => p.id === parseInt(id));
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
    (product) => product.attributes.category === cat
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