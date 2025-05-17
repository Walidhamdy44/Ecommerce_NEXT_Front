// Product categories data
const generateProductsByCategory = () => {
  const categories = {
    Electronics: [
      {
        title: "Samsung Galaxy S24 Ultra",
        description:
          "256GB, Titanium Gray, Android Smartphone with Advanced AI Features",
        price: 1299.99,
        image:
          "https://m.media-amazon.com/images/I/713icYPjIZL._AC_SL1500_.jpg",
      },
      {
        title: "Apple MacBook Pro M3",
        description: "14-inch, 18GB RAM, 512GB SSD, Space Black",
        price: 1999.99,
        image: "https://m.media-amazon.com/images/I/61YCWzjldDL._AC_SX679_.jpg",
      },
      {
        title: "Sony WH-1000XM5",
        description:
          "Wireless Noise Canceling Headphones with Auto Noise Canceling Optimizer",
        price: 399.99,
        image: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SX679_.jpg",
      },
      {
        title: "LG C3 65-Inch OLED TV",
        description: "4K Smart TV with AI-Powered Processing",
        price: 1796.99,
        image:
          "https://m.media-amazon.com/images/I/81mEavNm7vL._AC_SL1500_.jpg",
      },
    ],
    Sports: [
      {
        title: "NordicTrack Commercial 2450",
        description:
          'Treadmill with 22" HD Touchscreen and Auto-Adjusting Incline',
        price: 2499.99,
        image:
          "https://m.media-amazon.com/images/I/81CJkTIQR3L._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        title: "Bowflex SelectTech 552",
        description: "Adjustable Dumbbells with Weight Range 5-52.5 lbs",
        price: 429.99,
        image: "https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SX679_.jpg",
      },
      {
        title: "YOSUDA Indoor Cycling Bike",
        description: "Stationary Exercise Bike with iPad Mount",
        price: 299.99,
        image: "https://m.media-amazon.com/images/I/51zxYjV63ML._AC_SY879_.jpg",
      },
      {
        title: "ROGUE Echo Bike",
        description: "Professional Air Bike with LCD Console",
        price: 795.0,
        image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX930_.jpg",
      },
    ],
    Accessories: [
      {
        title: "Apple Watch Series 9",
        description: "GPS 45mm Aluminum Case with Sport Band",
        price: 429.99,
        image: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_SX679_.jpg",
      },
      {
        title: "Samsung Galaxy Watch 6",
        description: "44mm LTE Smartwatch with Advanced Sleep Coaching",
        price: 349.99,
        image: "https://m.media-amazon.com/images/I/617P8gEaBhL._AC_SX522_.jpg",
      },
      {
        title: "Logitech MX Master 3S",
        description: "Wireless Performance Mouse with Ultra-fast Scrolling",
        price: 99.99,
        image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX678_.jpg",
      },
      {
        title: "Apple AirPods Pro 2",
        description: "Active Noise Cancelling Earbuds with MagSafe Charging",
        price: 249.99,
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg",
      },
    ],
  };

  let id = 1;
  const products = [];

  // Generate variations for each base product
  Object.entries(categories).forEach(([category, baseProducts]) => {
    baseProducts.forEach((base) => {
      // Create multiple variations with different configurations
      const variations = [
        {
          suffix: "Pro",
          priceMultiplier: 1.2,
          features: "Professional Edition",
        },
        { suffix: "Plus", priceMultiplier: 1.1, features: "Enhanced Version" },
        {
          suffix: "Max",
          priceMultiplier: 1.3,
          features: "Maximum Performance",
        },
        { suffix: "Elite", priceMultiplier: 1.4, features: "Elite Edition" },
        {
          suffix: "Ultimate",
          priceMultiplier: 1.5,
          features: "Ultimate Package",
        },
        { suffix: "", priceMultiplier: 1.0, features: "Standard Edition" },
      ];

      variations.forEach((variation, index) => {
        const titleSuffix = variation.suffix ? ` ${variation.suffix}` : "";
        products.push({
          id: id++,
          attributes: {
            title: `${base.title}${titleSuffix}`,
            description: `${base.description} - ${variation.features}`,
            price:
              Math.round(base.price * variation.priceMultiplier * 100) / 100,
            category: category,
            badge: ["New", "Featured", "Best Seller", "Limited Edition"][
              Math.floor(Math.random() * 4)
            ],
            imgs: {
              data: [
                { attributes: { url: base.image } },
                { attributes: { url: base.image } },
              ],
            },
            coverImg: {
              data: {
                attributes: { url: base.image },
              },
            },
          },
        });
      });
    });
  });

  // Ensure we have at least 100 products per category
  while (products.length < 100) {
    const originalProduct =
      products[Math.floor(Math.random() * products.length)];
    const clone = JSON.parse(JSON.stringify(originalProduct));
    clone.id = id++;
    clone.attributes.title += ` (Special Edition)`;
    products.push(clone);
  }

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
