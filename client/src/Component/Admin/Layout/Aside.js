import React from 'react'
import { Link } from 'react-router-dom'

function Aside() {
  return (
<aside class="app-navbar">
               
                    <div class="sidebar-nav scrollbar scroll_light">
                        <ul class="metismenu " id="sidebarNav">
                            <li class="nav-static-title">Personal</li>
                            <li class="active">
                                <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                                    <i class="nav-icon ti ti-rocket"></i>
                                <Link to="all-Users">   <span  class="nav-title">All Users</span></Link>  
                                    <span class="nav-label label label-danger">9</span>
                                </a>
                         
                            </li>
                           
                            <li class="active">
                                <Link to="organisations-list" class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                                    <i class="nav-icon ti ti-rocket"></i>
                                    <span class="nav-title">Organisation Request</span>
                                    <span class="nav-label label label-danger">9</span>
                                </Link>
                         
                            </li>
                           
                            <li class="active">
                                <Link to="listquestion" class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                                    <i class="nav-icon ti ti-rocket"></i>
                                    <span class="nav-title">List Question</span>
                                    <span class="nav-label label label-danger">9</span>
                                </Link>
                         
                            </li>
                            <li class="active">
                                <Link  to="delivery-list"class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                                    <i class="nav-icon ti ti-rocket"></i>
                                    <span class="nav-title">Delivery Request</span>
                                    <span class="nav-label label label-danger">9</span>
                                </Link>
                         
                            </li>
                    
                          
                           
                           
                        </ul>
                    </div>
                  
                </aside>
              
  )
}

export default Aside