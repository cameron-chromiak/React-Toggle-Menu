import React, { Component } from 'react';

import Navbar from './components/Navbar'
import SideBar from './components/sidebar/SideBar.js'
import './App.css'
import Backdrop from './components/backdrop/Backdrop'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'


class App extends Component {

  state = {
    sideBarOpen: false
  }

  toggleSideBar = () =>{
    this.setState({ sideBarOpen: !this.state.sideBarOpen})
  }

  backdropClickHandler = () =>{
    this.setState({sideBarOpen: false})
  }

  render() {
    let backdrop

    if(this.state.sideBarOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
        <Navbar handleToggleClick={this.toggleSideBar}/>
        {backdrop}
        <SideBar show={this.state.sideBarOpen}/>
        <main className='main'>
          <Services/>
          <Portfolio/>
        </main>
      </div>
    );
  }
}

export default App;
