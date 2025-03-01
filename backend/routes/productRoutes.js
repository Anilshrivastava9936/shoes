import express from 'express';
import Product from '../models/product.model.js';

const router = express.Router();

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
});

// Get a single product by ID
router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', error: err });
  }
});

// Add a new product
router.post('/products', async (req, res) => {
  const { name, price, currency, availability, sizes, image, description, category, link, mrp, discountRate } = req.body;

  try {
    const newProduct = new Product({
     
      name,
      price,
      currency,
      availability,
      sizes,
      image,
      description,
      category,
      link,
      mrp,
      discountRate,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error adding product', error: err });
  }
});

// Update a product by ID
router.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, currency, availability, sizes, image, description, category, link, mrp, discountRate } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, currency, availability, sizes, image, description, category, link, mrp, discountRate },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error updating product', error: err });
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  // console.log("id",id)
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err });
  }
});

export default router;
