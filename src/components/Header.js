import React from 'react';
import '../css/Header.css';

import logo from '../icons/logo_transparent.png';

function Header() {
    
  return (
    <header className="App-header"><img src={logo} className="App-logo" alt="logo"/></header>
  )
}

export default Header