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
        <a href="/checkout" className="fa fa-shopping-cart" id="favicon"></a>
        {/* <a href="/checkout">shopping cart</a> */}
      </div>
      
        {/* <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
          <a  href="/cooks">Cooks</a>
          </li>
          <li className="list-group-item">
          <a href="/eater">Consumers</a>
          </li>
          <li className="list-group-item">
          <a href="/checkout">shopping cart</a>
          </li>
        </ul> */}
        
      
      


     
    </nav>
  );
}

export default Nav;
