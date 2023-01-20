import React from 'react'
import { Outlet, Link } from "react-router-dom";
import coachImg from '../../images/coach.png'
import userImg from '../../images/woman.png'

function Home() {
  return (
    <section className='wc-section'>
        <div className="container">
            <div className="row section-title">
                <div className="col">
                    <h2 className='text-center'>We are at the heart of appropriate care</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">                    
                    <div className="card card-column">
                        <img src={coachImg} className="card-img-top photo" alt="..." />
                        <div className="card-body d-flex flex-column gap-3">  
                            <Link className="btn btn-sky" to="/coachlogin">Login as a Coach</Link>                          
                            <Link className="btn btn-sky" to="/coachsignup">Join as a Coach</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">                    
                    <div className="card card-column">
                        <img src={userImg} className="card-img-top photo" alt="..." />
                        <div className="card-body d-flex flex-column gap-3">                            
                            <a href="#" className="btn btn-sky mb-3">Login as a User</a>
                            <Link className="btn btn-sky" to="/usersignup">Join as a User</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home