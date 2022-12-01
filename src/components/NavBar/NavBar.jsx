import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className= "navbar navbar-expand-lg bg-light">
    <div className= "container-fluid">
      <a className= "navbar-brand" href="#">BRANCA DOG</a>
      <button className= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className= "navbar-toggler-icon"></span>
      </button>
      <div className= "collapse navbar-collapse" id="navbarNavDropdown">
        <ul className= "navbar-nav">
          <li className= "nav-item">
            <a className= "nav-link active" aria-current="page" href="some">Home</a>
          </li>
          <li className= "nav-item">
            <a className= "nav-link" href="some">Veterinaria</a>
          </li>
          <li className= "nav-item">
            <a className= "nav-link" href="some">Guarderia</a>
          </li>
          <li className= "nav-item dropdown">
            <a className= "nav-link dropdown-toggle" href="some" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pet Shop
            </a>
            <ul className= "dropdown-menu">
              <li><a className= "dropdown-item" href="some">Comederos</a></li>
              <li><a className= "dropdown-item" href="some">Pecheras</a></li>
              <li><a className= "dropdown-item" href="some">Cuchas</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div>
    <CartWidget/>
    </div>
  </nav>
   
    
    
  

    

  )
}

export default NavBar