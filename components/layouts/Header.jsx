import Link from 'next/link'
import React from 'react'
//this is the header component of my project
export default function Header() {
  return (
    <>
    <div className="nav-container">
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="/images/Phoneix-logo1.png" alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa-solid fa-bars" /></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li> */}
                </ul>
                <div className="d-flex info-element">
                  <span className="text-white"> <i className="fa-solid fa-phone" style={{color: '#ffffff'}} /> +975 17623211</span>
                  &nbsp; &nbsp;
                  <span className="text-white" > <i className="fa-regular fa-envelope" style={{color: '#ffffff'}} href="mailto:drukdendorji@gmail.com"/>
                    drukdendorji@gmail.com</span> &nbsp; &nbsp;
                </div>
                <div className="d-flex">
                  <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-regular fa-user " style={{color: '#ffffff'}} />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        
                    <li>
                        <Link className="dropdown-item" href="/output">Crop Details </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/oversease-mediclaim">Terms & Condition</Link>
                    </li>
                   
                    <li>
                    <Link className="dropdown-item" href="/business-holiday/info">Register Crops</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/business-holiday/landing">Landing Page</ Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/login/Registration">Log out</ Link>
                    </li>
                    {/* <li><a className="dropdown-item" href="business-holiday-premium-calculation.html">BH premium calculation</a></li> */}
                  </ul>
                </div>
                {/* <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
