import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { CoachHeaderNavBar } from '../layout/HeaderNavBar'
import coachImg from '../../images/user.png';

function ViewCoach() {

  const coachId = localStorage.getItem("id");  
  const [coach, setCoach] = useState({});

    const getCoach = () => {
    axios.get(`http://localhost:3000/coachs/${coachId}`).then((response) => {
        console.log(response.data,'ffff');
        if(response){
            setCoach(response.data)
        }
    });
}

useEffect(()=>{
  getCoach()
},[])


  return (
  <>
  <CoachHeaderNavBar/>
  <section className='wc-section' style={{minHeight: "85vh"}}>        
    <div className="container">
      <div className="row justify-content-center gap-3">
        <div className="col-md-5" >                    
            <div className="card card-column d-flex flex-row gap-3">
                <img src={coachImg} className="card-img-top photo" alt="..."/>
                <div className="card-body body-text d-flex flex-column gap-3">  
                    <h3 className='text-white'>Coach ID: {coach.id}</h3>
                    <h3 className='text-white'>{coach.name}</h3>
                    <h5 className='text-white'>Date of Birth: {coach.dob}</h5>
                    <h5 className='text-white'>Mobile Number: {coach.phone}</h5>
                    <h5 className='text-white'>speciality: {coach.speciality}</h5>  
                </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  </>
  )
}

export default connect()(ViewCoach)
