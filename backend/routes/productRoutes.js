const express = require("express")
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController")
const { protect } = require("../middleware/auth")
const router = express.Router()
router.get("/", getProducts)
router.get("/:id", getProduct)
router.post("/", protect, createProduct)
router.put("/:id", protect, updateProduct)
router.delete("/:id", protect, deleteProduct)
module.exports = router

router.post("/", async (req, res) => {
  const { name, description, price, image } = req.body
  const product = new Product({ name, description, price, image })
  await product.save()
  res.status(201).json(product)
})
