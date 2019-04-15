import React from 'react'

import Link from 'react-router-dom'

import './SideBar.css'

const SideBar = props =>{

  let sideBarClasses = 'side-bar'

  if(props.show){
    sideBarClasses = 'side-bar open'
  }

  return(
    <nav className={sideBarClasses}>
      <ul>
        <li><a href="/">Link</a></li>
        <li><a href="/">Link</a></li>
        <li><a href="/">Link</a></li>
        <li><a href="/">Link</a></li>
      </ul>
    </nav>
  )
}
export default SideBar
