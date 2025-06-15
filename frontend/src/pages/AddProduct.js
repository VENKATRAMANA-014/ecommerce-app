import React, { useState } from "react"
import axios from "axios"
import "./AddProduct.css"

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("userToken")
    try {
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      alert("Product added successfully")
      setFormData({ name: "", description: "", price: "", image: "" })
    } catch (error) {
      alert("Unauthorized or failed to add product")
    }
  }

  return (
    <div className="add-product-container container">
      <div className="card p-5 shadow">
        <h2 className="mb-4 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Price</label>
            <input type="number" name="price" className="form-control" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label>Image URL</label>
            <input type="text" name="image" className="form-control" value={formData.image} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
