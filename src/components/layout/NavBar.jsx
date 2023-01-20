import React from 'react'

function NavBar() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand logo">WeCare</a>            
            <span className="navbar-text d-flex align-items-center gap-1 text-white call-us">
                <i className="fa-solid fa-phone fa-sm"></i>Call Us: 080 2233447
            </span>
        </div>
    </nav>
  )
}

export default NavBar
