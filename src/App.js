import React, { Component } from 'react';

import Navbar from './components/Navbar'
import SideBar from './components/sidebar/SideBar.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <SideBar/>
        <main className='main'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ut dicta, reprehenderit delectus libero quod atque velit doloremque magnam adipisci.</p>
        </main>
      </div>
    );
  }
}

export default App;
