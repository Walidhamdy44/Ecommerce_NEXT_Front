
// Dummy data for products
const dummyProducts = [
  {
    id: 1,
    attributes: {
      title: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 199.99,
      category: "Electronics",
      badge: "New",
      imgs: {
        data: [
          { attributes: { url: "/payment-1.webp" } },
          { attributes: { url: "/payment-2.webp" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "/payment-1.webp" }
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Smartphone Pro Max",
      description: "Latest smartphone with advanced features",
      price: 999.99,
      category: "Electronics",
      badge: "Featured",
      imgs: {
        data: [
          { attributes: { url: "/payment-3.webp" } },
          { attributes: { url: "/payment-4.webp" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "/payment-3.webp" }
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Smart Watch",
      description: "Fitness tracking smart watch",
      price: 299.99,
      category: "Electronics",
      badge: "Sale",
      imgs: {
        data: [
          { attributes: { url: "/payment-5.webp" } },
          { attributes: { url: "/payment-1.webp" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "/payment-5.webp" }
        }
      }
    }
  }
];

// Mock API functions
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
  const filteredProducts = dummyProducts.filter(
    product => product.attributes.category === cat
  );
  return Promise.resolve({ data: { data: filteredProducts } });
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
