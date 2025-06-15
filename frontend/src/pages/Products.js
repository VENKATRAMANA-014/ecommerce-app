import React, { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/api/products")
      setProducts(res.data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="products-container">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
