import React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card product-card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹{product.price}</p>
          <Link to={`/products/${product._id}`} className="btn btn-outline-primary w-100">View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
