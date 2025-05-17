
// Dummy data for products with real-world examples
const dummyProducts = [
  {
    id: 1,
    attributes: {
      title: "Apple iPhone 15 Pro Max",
      description: "6.7-inch Super Retina XDR display, A17 Pro chip, 48MP main camera system",
      price: 1199.99,
      category: "Electronics",
      badge: "New",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/61f3V-d0xQL._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_SX679_.jpg" }
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Samsung Galaxy S24 Ultra",
      description: "6.8-inch Dynamic AMOLED display, 200MP camera, S Pen included",
      price: 1299.99,
      category: "Electronics",
      badge: "Featured",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/71BWRZYx4ML._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_SX679_.jpg" }
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Apple MacBook Pro 16",
      description: "M3 Max chip, 32GB RAM, 1TB SSD, 16-inch Liquid Retina XDR display",
      price: 2499.99,
      category: "Electronics",
      badge: "Sale",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SX679_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/71YzU4mxvVL._AC_SX679_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SX679_.jpg" }
        }
      }
    }
  },
  {
    id: 4,
    attributes: {
      title: "Nike Air Max 270",
      description: "Men's Running Shoes, Breathable Mesh Upper, Air Cushioning",
      price: 150.00,
      category: "Sports",
      badge: "Best Seller",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX695_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/71BP1eumXVL._AC_UX695_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX695_.jpg" }
        }
      }
    }
  },
  {
    id: 5,
    attributes: {
      title: "Adidas Ultraboost 22",
      description: "Women's Running Shoes, Responsive Boost Midsole",
      price: 180.00,
      category: "Sports",
      badge: "Popular",
      imgs: {
        data: [
          { attributes: { url: "https://m.media-amazon.com/images/I/71cp9pTKi4L._AC_UX695_.jpg" } },
          { attributes: { url: "https://m.media-amazon.com/images/I/71Jk3sgYNxL._AC_UX695_.jpg" } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: "https://m.media-amazon.com/images/I/71cp9pTKi4L._AC_UX695_.jpg" }
        }
      }
    }
  }
];

// Generate 95 more products programmatically
const categories = ['Electronics', 'Sports', 'Fashion', 'Home', 'Beauty', 'Books', 'Toys'];
const badges = ['New', 'Featured', 'Sale', 'Best Seller', 'Popular', null];

for (let i = 6; i <= 100; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const badge = badges[Math.floor(Math.random() * badges.length)];
  const price = (Math.random() * 1000 + 10).toFixed(2);
  
  let productTitle, productDesc, productImage;
  
  switch(category) {
    case 'Electronics':
      productTitle = `Smart ${['TV', 'Watch', 'Speaker', 'Tablet', 'Laptop'][Math.floor(Math.random() * 5)]} ${i}`;
      productDesc = "High-performance electronic device with advanced features";
      productImage = "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX679_.jpg";
      break;
    case 'Sports':
      productTitle = `Pro ${['Running Shoes', 'Tennis Racket', 'Basketball', 'Yoga Mat', 'Gym Bag'][Math.floor(Math.random() * 5)]} ${i}`;
      productDesc = "Professional grade sports equipment for peak performance";
      productImage = "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX695_.jpg";
      break;
    case 'Fashion':
      productTitle = `Trendy ${['Jacket', 'Jeans', 'Shirt', 'Dress', 'Sweater'][Math.floor(Math.random() * 5)]} ${i}`;
      productDesc = "Stylish and comfortable clothing for all occasions";
      productImage = "https://m.media-amazon.com/images/I/71cVOgvystL._AC_UY879_.jpg";
      break;
    default:
      productTitle = `Premium Product ${i}`;
      productDesc = "High-quality item with excellent features";
      productImage = "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_SX679_.jpg";
  }

  dummyProducts.push({
    id: i,
    attributes: {
      title: productTitle,
      description: productDesc,
      price: parseFloat(price),
      category: category,
      badge: badge,
      imgs: {
        data: [
          { attributes: { url: productImage } },
          { attributes: { url: productImage } }
        ]
      },
      coverImg: {
        data: {
          attributes: { url: productImage }
        }
      }
    }
  });
}

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
