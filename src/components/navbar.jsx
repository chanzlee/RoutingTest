import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // Link make sure bundle js not http requested every time when routing
    // by preventing default behavior of anchor tag rendered inside.
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
