import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import userImg from '../../images/user.png';
import { UserHeaderNavBar } from '../layout/HeaderNavBar'

function View(props) {
    const id = localStorage.getItem("id");  
    const [user, setUser] = useState({});

    const getUser = () => {
    axios.get(`http://localhost:3000/users/${id}`).then((response) => {
        console.log(response.data,'ffff');
        if(response){
            setUser(response.data)
            console.log(response.data,'ffgg');
            //setRegister(false)
        }
    });
}

useEffect(()=>{
    getUser()
},[])

  return (
  <>
  <UserHeaderNavBar/>
  <section className='wc-section' style={{minHeight: "85vh"}}>        
    <div className="container">
      <div className="row justify-content-center gap-3">
        <div className="col-md-5" >                    
            <div className="card card-column-user d-flex flex-row gap-3">
                <img src={userImg} className="card-img-top photo" alt="..."/>
                <div className="card-body body-text d-flex flex-column gap-3">  
                    <h3>{user.name}</h3>
                    <h5>Date of Birth: {user.dob}</h5>
                    <h5>Email ID: {user.email}</h5>
                    <h5>Mobile No: {user.phone}</h5>                      
                    <h5>Address: {user.address}</h5>                      
                    <h5>PinCode: {user.pincode}</h5>                      
                </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  </>
  )
}

export default connect()(View)
