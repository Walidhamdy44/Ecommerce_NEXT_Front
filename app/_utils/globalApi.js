// Import the axios library and assign the default export to the variable axios
const { default: axios } = require("axios");

// Retrieve the REST API key from the environment variables
const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;

// Define the base URL for the API requests
const Url = "https://ecommerce-app-stapi-backend.onrender.com/api/";

// Create an instance of Axios with the base URL and authorization headers
export const AxiosAPI = axios.create({
  baseURL: Url,
  headers: {
    Authorization: `Bearer ${apikey}`, // Set the authorization header with the API key
  },
});

// product Api ----------------------------------------------------------------

// Function to get all products sorted by title in ascending order
const getAllProduct = () => AxiosAPI.get(`products?sort=title:asc&populate=*`);

// Function to get all products belonging to a specific category
const getAllProductByCat = (cat) =>
  AxiosAPI.get(`products?filters[category][$eq]=${cat}&populate=*`);

// Function to get a product by its ID
const getProductById = (id) => AxiosAPI.get(`products/${id}?populate=*`);

// add to cart -----------------------------------------------------------------

// Function to add an item to the cart
const addToCart = async (data) => {
  try {
    const response = await AxiosAPI.post(`/carts`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error;
  }
};

// Function to get the cart data for a user by email
const getCartUserByEmail = async (email) => {
  try {
    const response = await AxiosAPI.get(
      `/carts?populate[products][populate][0]=coverImg&filters[email][$eq]=${email}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cart data:", error);
    throw error;
  }
};

// Function to delete an item from the cart by its ID
const deleteItemFromCart = async (id) => {
  try {
    const response = await AxiosAPI.delete(`/carts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart data:", error);
    throw error;
  }
};

// get data with filter

// Function to get all products with a specific category filter, sorted by creation date in descending order
const getAllProductWithFilter = async (cat) => {
  try {
    const response = await AxiosAPI.get(
      `products?filters[category][$eq]=${cat}&sort=createdAt:desc&populate=*`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Export the functions for external use
export {
  getAllProduct,
  getProductById,
  getAllProductByCat,
  addToCart,
  getCartUserByEmail,
  deleteItemFromCart,
  getAllProductWithFilter,
};
