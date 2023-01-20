import React, { useEffect, useState } from 'react'
import {UserNavBar} from '../layout/NavBar'
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import coachImg from '../../images/coach.png'

function UserHome() {
  const {state} = useLocation()
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    axios.get("http://localhost:5000/posts").then((response) => {
      console.log(response.data);
      if(response){
        setUsers(response.data)
          //console.log(response.data);
          //setRegister(false)
      }
  });

  }
  useEffect(()=>{
    getAllUsers()
  },[])
  
 // console.log('params',state.userType);
  return (
    <>
    {state.userType == 'user' && <UserNavBar/>}

    <section className='wc-section'>        
      <div className="container">
        <div className="row justify-content-center gap-3">
          {
            users.map((user, index) => (
              <div className="col-md-5" key={index}>                    
                <div className="card card-column-user d-flex flex-row gap-3">
                    <img src={coachImg} className="card-img-top photo" alt="..."/>
                    <div className="card-body body-text d-flex flex-column gap-3">  
                      <h3>{user.name}</h3>
                      <h4>Coach Id: {user.id}</h4>
                      <h5>Mobile No: {user.phone}</h5>
                      <h5>speciality: sdfsdf</h5>
                      <button type="button" className="btn btn-primary">Book an Appointment</button>
                    </div>
                </div>
              </div>
            ))
          }
                    
        </div>
      </div>
    </section>
    
    </>
  )
}

export default UserHome