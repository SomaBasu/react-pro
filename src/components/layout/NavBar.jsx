import React from 'react'

export function NavBar() {
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

export function CoachNavBar() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand logo">WeCare coach</a>            
            <span className="navbar-text d-flex align-items-center gap-1 text-white call-us">
                <i className="fa-solid fa-phone fa-sm"></i>Call Us: 080 2233447
            </span>
        </div>
    </nav>
  )
}


export function UserNavBar() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand logo">WeCare user</a>            
            <span className="navbar-text d-flex align-items-center gap-1 text-white call-us">
                <i className="fa-solid fa-phone fa-sm"></i>Call Us: 080 2233447
            </span>
        </div>
    </nav>
  )
}

