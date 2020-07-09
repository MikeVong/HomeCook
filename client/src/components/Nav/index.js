import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Choices
      </a>
      <a className="navbar-brand" href="/cooks">
        Cooks
      </a>
      <a className="navbar-brand" href="/eater">
        Eater
      </a>
     
    </nav>
  );
}

export default Nav;
