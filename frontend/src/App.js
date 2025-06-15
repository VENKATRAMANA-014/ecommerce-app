import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import AdminDashboard from "./pages/AdminDashboard"
import AddProduct from "./pages/AddProduct"
import Navbar from "./components/Navbar"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add" element={<AddProduct />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
