import React from "react";
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark">

      <a className="navbar-brand" href="/">
        Home-cooks
      </a>

      <div  id="choices">
        <a className="navbar-brand" href="/cooks">
          Cook
        </a>
        <a className="navbar-brand" href="/eater">
          Eat
        </a>
      </div>
      
      <a className="navbar-brand" href="/checkout">
        shopping cart
      </a>

     
    </nav>
  );
}

export default Nav;
