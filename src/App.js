import React, { Component } from 'react';

import Navbar from './components/Navbar'
import SideBar from './components/sidebar/SideBar.js'
import './App.css'
import Backdrop from './components/backdrop/Backdrop'

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
    let sideBar
    let backdrop

    if(this.state.sideBarOpen){
      sideBar = <SideBar/>
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
        <Navbar handleToggleClick={this.toggleSideBar}/>
        {backdrop}
        {sideBar}
        <main className='main'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ut dicta, reprehenderit delectus libero quod atque velit doloremque magnam adipisci.</p>
        </main>
      </div>
    );
  }
}

export default App;
