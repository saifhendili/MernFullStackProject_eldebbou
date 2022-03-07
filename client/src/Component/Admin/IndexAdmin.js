import React from 'react'
import Loading from './Layout/Loading'
import Layout from './Layout/Navbar'
import Aside from './Layout/Aside'
import ListeUser from './Liste-User/ListeUser'

function IndexAdmin() {
  return (
    <div class="app">
<div class="app-wrap">
<Loading/>  

 <Layout />
 

 <div class="app-container">
 <Aside/>
 <ListeUser/>
 </div>
    </div> 
    </div> 
  )
}

export default IndexAdmin