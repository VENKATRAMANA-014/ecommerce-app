import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content container text-center">
          <h1>Discover the Best Deals</h1>
          <p>Trendy products. Reliable service. Unbeatable prices.</p>
          <Link to="/products" className="btn btn-lg btn-light mt-3 shadow-sm">
            Start Shopping
          </Link>
        </div>
      </section>

      <section className="features-section container text-center mt-5">
        <h2 className="mb-4 fw-bold">Why Shop With Us?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="feature-box p-4 shadow-lg">
              <i className="bi bi-truck fs-1 mb-3 text-primary"></i>
              <h4>Super Fast Delivery</h4>
              <p>Get your products delivered at lightning speed.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box p-4 shadow-lg">
              <i className="bi bi-credit-card fs-1 mb-3 text-success"></i>
              <h4>100% Secure Payment</h4>
              <p>Trusted transactions using modern payment gateways.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box p-4 shadow-lg">
              <i className="bi bi-award fs-1 mb-3 text-warning"></i>
              <h4>Premium Products</h4>
              <p>Top-rated items from verified sellers only.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-section text-center mt-5 mb-5">
        <div className="container p-5 rounded-4 bg-light shadow-sm">
          <h3 className="mb-4 fw-semibold">Hot Picks of the Month</h3>
          <p>Check out what everyone’s loving! Limited time offers on our bestsellers.</p>
          <Link to="/products" className="btn btn-outline-dark mt-3 px-4 py-2">
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
