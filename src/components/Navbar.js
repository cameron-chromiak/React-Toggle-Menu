import React from 'react'


import './Navbar.css'
import SideBarToggleButton from './sidebar/ToggleButton'

const Navbar = props => (
  <header className='navbar'>
    <nav className='navbar-nav'>
      <div>
        <SideBarToggleButton click={props.handleToggleClick}/>
      </div>
      <div className='navbar-logo'><a href="#">LOGO</a></div>
      <div className="spacer"/>
      <div className='navbar-items'>
        <ul>
          <li><a href="#" className='li-item-end'>Link</a></li>
          <li><a href="#" className='li-item-end'>Link</a></li>
          <li><a href="#" className='li-item-end'>Link</a></li>
          <li><a href="#" className='li-item-end'>Link</a></li>
        </ul>
      </div>
    </nav>
  </header>
)
export default Navbar
