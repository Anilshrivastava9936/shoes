import express from 'express';
import Product from '../models/product.model.js';
const router = express.Router();
// router.get("/products/:id", async (req, res) => {
//     const productId = req.params.id;
//     const product = Product.find((p) => p.id === productId);
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
// });
router.get('/products/:_id', async (req, res) => {
  const { _id } = req.params; // Get product ID from URL
  console.log("_id",_id);
  try {
      const product = await Product.findById(_id);
      if (!product) {
          return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product); // Send product data as response
  } catch (err) {
      res.status(500).json({ message: 'Error fetching product', error: err });
  }
});
export default router;


