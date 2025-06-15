import React, { useState } from "react"
import axios from "axios"
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/users/register", formData)
    alert("Registered successfully")
  }

  return (
    <div className="register-container container">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" className="form-control mb-3" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
