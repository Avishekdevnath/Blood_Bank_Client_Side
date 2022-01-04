import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className="flex md:justify-around py-4 bg-white sticky top-0">
        <div className="text-2xl">
          <h1 className="font-semibold pl-3 md:pl-0 lg:pl-0">
            Blood <span className="text-red-600">Donataion</span>{" "}
          </h1>
        </div>
        <div className="nav-link">
          <ul className="flex space-x-8 text-xl font-medium">
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-red-600">
              About Us
            </Link>
            <Link to="/donate" className="hover:text-red-600">Donate</Link>
            <Link to="contact" className="hover:text-red-600">Contact</Link>
            
            <Link to="/dashboard" className="hover:text-red-600">
              Dashboard
            </Link>
            <Link to="/login" className="hover:text-red-600">Login</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
