import React from 'react'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './Navbar.css'
import SideBarToggleButton from './sidebar/ToggleButton'

class Navbar extends React.Component{


  render(){
    return(
      <header className='custom-navbar'>
        <nav className='custom-navbar-nav'>
          <div>
            <SideBarToggleButton click={this.props.handleToggleClick}/>
          </div>
          <div className='custom-navbar-logo'><a href="#">LOGO</a></div>
          <div className="spacer"/>
          <div className='custom-navbar-items'>
            <ul>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
              Test 1
            </Link>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
              Test 2 (delay)
            </Link>
            <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
              Test 6 (anchor)
            </Link>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
export default Navbar
