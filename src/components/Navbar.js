import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navber-dark bg-dark">
  <div class="container">
    <img src="/images/logo.png" alt="" style={{height:"70px",width:"150px",borderRadius:"12px"}} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  ms-auto me-auto mb-lg-0 text-white">
        
              <li class="nav-item">
              <Link class="nav-link ms-5" style={{fontFamily:"inherit" , fontSize:"19px",color:"white"}}  to = "/movies/popular">Popular</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-2" style={{fontFamily:"inherit" , fontSize:"19px" ,color:"white"}} to = "/movies/top_rated">Top Rated</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-2" style={{fontFamily:"inherit" , fontSize:"19px", color:"white"}} to = "/movies/upcoming">Upcoming</Link>
                        
                       
        </li>
      </ul>
      <form class="d-flex " role="search">
        <input class="form-control me-2" type="search" placeholder="Search your Movie here" aria-label="Search"/>
        <button class="btn" type="submit" style={{color:"red" , fontWeight:"bolder", background:"black" , border:"none"}}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navber
