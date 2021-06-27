import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Menu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Licor</a></li>
                  <li><a className="dropdown-item" href="#">Exportacion</a></li>
                  <li><a className="dropdown-item" href="#">Playeras</a></li>
                  <li><a className="dropdown-item" href="#">Green shop</a></li>
                </ul>
              </li>
              <CartWidget/>
            </ul>
          </div>
        </div>
      </nav>      

    )

}

export default NavBar;