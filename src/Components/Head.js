import React from "react";
import { Link } from "react-router-dom";
import './Style.css'

function Head() {
  return (
    <div className="header">
      <h1 className="header--topic">BookSwap</h1>
      <nav className="hedaer--navigation">
        <ul className="hedaer--ul">

          <li>
            <Link className="nav-links" to="/">Home</Link>
          </li>

          <li>
            <Link className="nav-links" to="/buy">Buy Books</Link>
          </li>

          <li>
            <Link className="nav-links" to="/borrow">Borrow Books</Link>
          </li>

          <li>
            <Link className="nav-links" to="/about">About Us</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Head;
