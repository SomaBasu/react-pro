import React, { useEffect, useState }  from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { CoachHeaderNavBar } from '../layout/HeaderNavBar'

function CoachHome() {

  const coachId = localStorage.getItem("id"); 
  console.log(coachId, "cid")
  const [appointment, setAppointment] = useState();

  const getCoachAppointment = () => {
    axios.get("http://localhost:3000/booking").then((response) => {
      if(response){
        let value = response.data;  
        //console.log(value, 'data')      
        let result =  value.filter(val => val.coachId == coachId)       
        //console.log(result, 'rr');
        setAppointment(result)         
      }
  });
}

  useEffect(()=>{
    getCoachAppointment()
  },[])

  return (
    <>
    <CoachHeaderNavBar/>

    <section className='wc-section' style={{minHeight: "85vh"}}>        
      <div className="container">
        <div className="row justify-content-center gap-3">
          {
            appointment?.map((app, index) => (
                <div className="col-md-3" key={index}>                    
                    <div className="card card-column">                        
                        <div className="card-body d-flex flex-column gap-3">  
                          <h2 className='text-white'>Appointment Date: {app.doa} </h2>
                          <h3 className='text-white'>Slot: {app.slot} </h3>
                          <h5 className='text-white text-center'>Booking id: {app.id}</h5>
                          <h5 className='text-white text-center'>User id: {app.userId}</h5>
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

export default connect()(CoachHome)
