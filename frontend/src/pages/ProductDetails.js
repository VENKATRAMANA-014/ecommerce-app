import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./ProductDetails.css"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`)
      setProduct(res.data)
    }
    fetchProduct()
  }, [id])

  if (!product) return <div className="loading">Loading...</div>

  return (
    <div className="container product-detail-container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid detail-image" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">₹{product.price}</h4>
                    <button
            className="btn btn-success mt-3 w-100"
            onClick={() => {
                const cart = JSON.parse(localStorage.getItem("cart")) || []
                cart.push(product)
                localStorage.setItem("cart", JSON.stringify(cart))
                alert("Added to cart")
            }}
            >
            Add to Cart
            </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails
