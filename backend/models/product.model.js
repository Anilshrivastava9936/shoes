import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true, // Make name required
  },
  price: {
    type: Number,
    required: true, // Make price required
  },
  currency: {
    type: String,
    default: 'USD', // Default currency is USD
    required: true,
  },
  availability: {
    type: String,
    enum: ['In Stock', 'Out of Stock'], // Correct values: "In Stock" and "Out of Stock"
    required: true,
  },
  
  sizes: {
    type: [String], // Array of sizes (S, M, L, XL, etc.)
    required: true,
  },
  image: {
    type: String,
    required: true, // Image URL for the product
  },
  description: {
    type: String,
    default: '', // Default empty string
  },
  category: {
    type: String, // Product category (e.g., T-shirts, Jackets, etc.)
    required: true,
  },
  link: {
    type: String, // Link to the product overview page
    required: true,
  },
  mrp: {
    type: Number, // Maximum retail price
    required: true,
  },
  discountRate: {
    type: Number, // Discount rate (in percentage)
    default: 0, // Default discount rate is 0%
    required: true,
  }
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);

export default Product;
