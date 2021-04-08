import React, {useState} from 'react';
import './Header.css'

import logo from '../../assets/img/audowizard-logo-white.png'

function Header({active}) {

  const [show, setShow] = useState(false);

  return(
  <header className="header navbar-fixed">
<nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-gradient-primary navbar-collapsed">
  <a className="navbar-brand mr-lg-5">
    <img alt="logo" className="logo" src={logo} />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" onClick={() => setShow(!show)}></span>
  </button>
  
  <div className={`collapse navbar-collapse ${show ? "show": ""}`} id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</header>
  )
}

export default Header