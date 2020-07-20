import React from "react";
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark">

      <a className="navbar-brand" href="/">Home-cooks</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarNav">

      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a className="navbar-brand" href="/cooks">
            Cook
          </a>
        </li>

        <li class="nav-item">
          <a className="navbar-brand" href="/eater">
            Eat
          </a>
        </li>

        <li>
          <a href="/checkout" className="fa fa-shopping-cart" id="favicon"></a>
        </li>
      </ul>
    </div>

    </nav>
  );
}

export default Nav;
