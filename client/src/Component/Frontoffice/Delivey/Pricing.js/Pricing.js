import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
<section>
  <div class="container py-5 ">

    <header class="text-center mb-5 text-white">
      <div class="row">
        <div class="col-lg-7 mx-auto">
          <h1>Bootstrap pricing table</h1>
          <p>Easily create a classy pricing table in Bootstrap&nbsp;4.<br/> <a href="https://bootstrapious.com/snippets" class="text-reset">Bootstrap snippet by Bootstrapious</a></p>
        </div>
      </div>
    </header>
  
<div className='col justify-content-center'>
    <div class="row text-center center align-items-end">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="bg-white p-5 rounded-lg shadow">
          <h1 class="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
          <h2 class="h1 font-weight-bold">Free<span class="text-small font-weight-normal ml-2">/ month</span></h2>

          <div class="custom-separator my-4 mx-auto bg-primary"></div>

          <ul class="list-unstyled my-5 text-small text-left">
            <li class="mb-3">
              <i class="fa fa-check mr-2 text-primary"></i> You can Take Ordres</li>
              <li class="mb-3">
              <i class="fa fa-check mr-2 text-primary"></i> You can acces to ordres </li>
            <li class="mb-3 text-muted">
              <i class="fa fa-times mr-2"></i>
              <del>You will Get Notifications Via Phone</del>
            </li>
            <li class="mb-3 text-muted">
              <i class="fa fa-times mr-2"></i>
              <del>You will Get Notifications Via Email</del>
            </li>
            
          </ul>
          <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
        </div>
      </div>
  
     
   
      <div class="col-lg-6">
        <div class="bg-white p-5 rounded-lg shadow">
          <h1 class="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
          <h2 class="h1 font-weight-bold">$19<span class="text-small font-weight-normal ml-2">/ month</span></h2>

          <div class="custom-separator my-4 mx-auto bg-primary"></div>

          <ul class="list-unstyled my-5 text-small text-left">
            <li class="mb-3">
              <i class="fa fa-check mr-2 text-primary"></i> You can Take Ordres</li>
              <li class="mb-3">
              <i class="fa fa-check mr-2 text-primary"></i> You can acces to ordres </li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary"></i>
             You will Get Notifications Via Phone
            </li>
            <li class="mb-3 text-muted">
              <i class="fa fa-check mr-2 text-primary"></i>
              You will Get Notifications Via Email
            </li>
            
          </ul>
          <Link to="/PlaceOrderPremuim" href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</Link>
        </div>
      </div>

    </div>
    </div>
  </div>
</section>  )
}

export default Pricing