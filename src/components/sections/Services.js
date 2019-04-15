import React from 'react'

import './SectionsStyle.css'


const Services = () =>(
    <div class="d-md-flex h-md-100 align-items-center">
      <div class="col-md-6 p-0 bg-indigo h-md-100">
        <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
          <div class="pt-5 pb-5">
              <h1 className='display-2'>Let's</h1><br/>
              <h1 className='display-2 font-weight-light'>Get</h1><br/>
              <h1 className='display-2'>Printing</h1><br/>
          </div>
        </div>
      </div>
      <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
        <div class="d-md-flex-column h-md-100 p-5 justify-content-center">
          <div>
                <img className='img img-fluid' src="http://www.rogersprinting.com/images/services.jpg" alt=""/>
          </div>
          <div className='pt-3 text-lg'>
          <p>At Rogers, we've been printing for 50 years.
           So we've learned a few things about quality.
           We provide a wide range of services each held to
            our strict quality guidelines.</p> <br/>
            <p>For your must-get-it-right direct mail
             projects, we provide a wide range of important
              mailing services, including bar code discounting,
               and fulfillment.</p>
          </div>
        {/*<ul class="list-group">
          <li class="list-group-item">Brochures</li>
          <li class="list-group-item">Portfolios</li>
          <li class="list-group-item">Catalogues</li>
          <li class="list-group-item">Presentation folders</li>
          <li class="list-group-item">Newsletters</li>
          <li class="list-group-item">Sell shees</li>
          <li class="list-group-item font-weight-bold">And so much more</li>
        </ul>*/}
        </div>
      </div>
    </div>
)

export default Services
