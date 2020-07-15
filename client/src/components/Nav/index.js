import React from "react";
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark">

      <a className="navbar-brand" href="/">
        Home-cooks
      </a>

      
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">
          <a  href="/cooks">Cooks</a>
          </li>
          <li className="list-group-item">
          <a href="/eater">Consumers</a>
          </li>
          <li className="list-group-item">
          <a href="/checkout">shopping cart</a>
          </li>
        </ul>
        
      
      


     
    </nav>
  );
}

export default Nav;
