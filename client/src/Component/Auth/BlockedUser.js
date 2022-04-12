import React from 'react'
import { Link } from 'react-router-dom'

function BlockedUser() {
  return (
    <div class="app-content">

       
        <div class="u-s-p-b-60">

          
            <div class="section__content">
                <div class="container">
                    <div class="row row--center">
                        <div class="col-lg-6 col-md-8 u-s-m-b-30">
                            <div class="l-f-o">
                                <div class="l-f-o__pad-box">
                                    <h1 class="gl-h1">Blocked</h1>

                                    <span class="gl-text u-s-m-b-30"> This User is Blocked.</span>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default BlockedUser