import React from "react";

//create your first component
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar