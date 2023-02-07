import React, { useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { loginCoach } from '../../action';
import {CoachHeaderNavBar} from '../layout/HeaderNavBar'
import coachImg from '../../images/coach.png'

function CoachLogin(props) {

    const navigate = useNavigate();   

const [coachId, setCoachId] = useState("");
const [password, setPassword] = useState("");
const [post, setPost] = useState("");

const onFormSubmit = async (event) => { 
    event.preventDefault();
    if (!coachId) {
        alert("Enter Coach Id");
        return;
    }
    if (!password) {
        alert("Enter Password");
        return;
    }

    const coach = {coachId:coachId, password:password};
    await axios.post("http://localhost:3000/coachlogin", coach).then((response) => {
        setPost(response.data);
        //console.log("sss", response.data);
        if(response.data){
            localStorage.setItem("id", response.data.coachId);
            localStorage.setItem("userType", "coach");
            setPost(response.data);
            navigate('/coachhome');
        }
    });
    props.dispatch(loginCoach(coach)); 
}

  return (
    <>
    <CoachHeaderNavBar/>
    <section className='wc-section-registration d-flex justify-content-center align-items-center' style={{minHeight: "84vh"}} >
        <div className="container w-100">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    <div className="card card-column"> 
                        <div className='d-flex mx-auto gap-3 intro-text-registration'>
                            <img src={coachImg} className="card-img-top intro-photo" alt="..." />  
                            <h2 className='text-white'>Login as Life Coach</h2>    
                        </div>                                    
                        <div className="card-body">
                            <div className="row">
                                
                                <div className="col-md-12 pb-4">
                                    <label className="form-label ">Coach Id</label>
                                    <input type="text" className="form-control" 
                                        name="coachId"
                                        value={coachId}
                                        onChange={(event) => setCoachId(event.target.value)} />
                                </div>
                                
                                <div className="col-md-12 pb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" 
                                        name="password"
                                        value={password}
                                        onChange={(event) =>setPassword(event.target.value)} 
                                        />
                                </div> 

                                <div className="col-md-12 pb-4 d-flex justify-content-center">
                                    <button type="button" className="btn btn-success btn-lg w-50" onClick={(event) => onFormSubmit(event)} >Login</button> 
                                </div>                                               
                            </div>  
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default connect()(CoachLogin)
