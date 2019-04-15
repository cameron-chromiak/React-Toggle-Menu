import React from 'react'


const Portfolio = () =>(
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                  <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <h3 className='h3'>Contact Us for Pricing</h3>
              <div>
                <a href="">Dave Lynch</a><br/>
                <a href="">Customer Service</a>
              </div>
            </div>
          </div>
        </div>
)



export default Portfolio
