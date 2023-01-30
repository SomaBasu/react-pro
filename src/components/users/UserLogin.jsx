import React, { useState } from 'react'
import { HeaderNavBar } from '../layout/HeaderNavBar';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { loginUser } from '../../action';
import userImg from '../../images/user.png';

function UserLogin(props) {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [post, setPost] = useState("");

    const navigate = useNavigate();

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!userId) {
            alert("Enter Coach Id");
            return;
        }
        if (!password) {
            alert("Enter Password");
            return;
        }

        const user = { userId: userId, password: password };
        //console.log(user)
        await axios.post("http://localhost:3000/userlogin", user).then((response) => {            
            if(response){
                console.log(response.data.id, 'data')
                localStorage.setItem("id", response.data.userId);
                localStorage.setItem("userType", "user");
                setPost(response.data);
                navigate("/userhome");  
            }
        });
        props.dispatch(loginUser(user));
    }


  return (
    <>
    <HeaderNavBar/>
    <section className='wc-section-registration d-flex justify-content-center align-items-center' style={{minHeight: "84vh"}} >
        <div className="container w-100">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    <div className="card card-column"> 
                        <div className='d-flex mx-auto gap-3 intro-text-registration'>
                            <img src={userImg} className="card-img-top intro-photo" alt="..." />  
                            <h2 className='text-white'>Login as User</h2>    
                        </div>                                    
                        <div className="card-body">
                            <div className="row">
                                
                                <div className="col-md-12 pb-4">
                                    <label className="form-label ">User Id</label>
                                    <input type="text" className="form-control" 
                                        name="userId"
                                        value={userId}
                                        onChange={(event) => setUserId(event.target.value)} />
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

export default connect()(UserLogin)
