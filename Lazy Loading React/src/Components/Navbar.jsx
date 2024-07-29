import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/Home">Go To NPage1 Home Page</Link><br/>
      <Link to="/About">Go To NPage2 About Page</Link><br/>
      <Link to="/lazy">Lazy Component</Link>
    </div>
  );
}

export default Navbar;
