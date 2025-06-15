import React, { useEffect, useState } from "react"
import "./Cart.css"

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(savedCart)
  }, [])

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCartItems(updatedCart)
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart-container container">
      <h2 className="mb-4 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div className="cart-item card mb-3" key={item._id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">₹{item.price}</p>
                    <button className="btn btn-danger" onClick={() => removeItem(item._id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h4 className="text-end">Total: ₹{total}</h4>
          <div className="text-end">
            <button
  className="btn btn-success mt-3"
  onClick={() => window.location.href = "/checkout"}
>
  Proceed to Checkout
</button>

          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
