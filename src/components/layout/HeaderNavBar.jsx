import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export function HeaderNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-white wecare-logo">WeCare</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className='d-flex justify-content-end'>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav main-menu">                        
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"><i className="fa-solid fa-phone fa-fw"></i>Call Us: 0802233447</a>
                        </li> 
                    </ul>
                </div>
            </div>            
        </div>
    </nav>
  )
}

export function CoachHeaderNavBar() {
    const navigate = useNavigate();
    const logout = () => { 
        localStorage.removeItem('id');
        localStorage.removeItem('userType');
        navigate("/");  
    } 
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
              <Link to={'/coachhome'} className="navbar-brand text-white wecare-logo">WeCare</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className='d-flex justify-content-end'>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav main-menu">
                          <li className="nav-item">
                              <Link className="nav-link text-white" to={"/coachviewprofile"}><i className="fa-solid fa-user fa-fw"></i>View Profile</Link>
                          </li>
                          <li className="nav-item">
                              <Link to={'/coachschedules'} className="nav-link text-white" href="#"><i className="fa-solid fa-calendar fa-fw"></i>My Schedules</Link>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link text-white" href="#"><i className="fa-solid fa-phone fa-fw"></i>Call Us: 0802233447</a>
                          </li>     
                          <li className="nav-item">
                              <a className="nav-link text-white" onClick = {logout}><i className="fa-solid fa-right-from-bracket fa-fw"></i>Logout</a>
                          </li>     
                      </ul>
                  </div>
              </div>            
          </div>
      </nav>
    )
  }

  export function UserHeaderNavBar() {
    const navigate = useNavigate();
    const logout = () => { 
        localStorage.removeItem('id');
        localStorage.removeItem('userType');
        navigate("/");  
    } 

    return (
      <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
              <Link to={'/userhome'} className="navbar-brand text-white wecare-logo">WeCareu</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className='d-flex justify-content-end'>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav main-menu">
                          <li className="nav-item">
                              <Link className="nav-link text-white" to={'/userviewprofile'}><i className="fa-solid fa-user fa-fw"></i>View Profile</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link text-white" to={'/userappointments'}><i className="fa-solid fa-calendar fa-fw"></i>My Schedules</Link>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link text-white"><i className="fa-solid fa-phone fa-fw"></i>Call Us: 0802233447</a>
                          </li>     
                          <li className="nav-item">
                              <a className="nav-link text-white" onClick = {logout}><i className="fa-solid fa-right-from-bracket fa-fw" ></i>Logout</a>
                          </li>     
                      </ul>
                  </div>
              </div>            
          </div>
      </nav>
    )
  }

  