import React from 'react'
import { Link } from "react-router-dom";
import { HeaderNavBar } from '../layout/HeaderNavBar';

import coachImg from '../../images/coach.png'
import userImg from '../../images/user.png'

function Home() {
  return (
    <>
    <HeaderNavBar/>
    <section className='wc-section'>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col intro-text">
                    <h2 className='text-center'>We are at the heart of appropriate care</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">                    
                    <div className="card card-column">
                        <img src={coachImg} className="card-img-top card-image" alt="..." />
                        <div className="card-body d-flex flex-column gap-3">  
                            <Link to="/coachlogin" className="btn btn-sky" >Login as a Coach</Link>                          
                            <Link to="/coachsignup" className="btn btn-sky" >Join as a Coach</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">                    
                    <div className="card card-column">
                        <img src={userImg} className="card-img-top card-image" alt="..." />
                        <div className="card-body d-flex flex-column gap-3">
                            <Link to="/userlogin" className="btn btn-sky">Login as a User</Link>
                            <Link to="/usersignup" className="btn btn-sky" >Join as a User</Link>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
