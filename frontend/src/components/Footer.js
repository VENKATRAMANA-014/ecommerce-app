import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <div className="container text-center py-3">
        <p className="mb-1">© 2025 MyShop. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
