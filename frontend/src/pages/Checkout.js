import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Checkout.css"

const Checkout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem("cart")
    const timer = setTimeout(() => {
      navigate("/")
    }, 5000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="checkout-container">
      <div className="card text-center p-5 shadow">
        <h2 className="text-success mb-3">Thank you for your purchase!</h2>
        <p>Your order has been successfully placed.</p>
        <p className="text-muted">You will be redirected to the home page shortly...</p>
      </div>
    </div>
  )
}

export default Checkout
