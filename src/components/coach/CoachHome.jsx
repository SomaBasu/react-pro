import React, { useEffect, useState }  from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { CoachHeaderNavBar } from '../layout/HeaderNavBar'

function CoachHome() {

  const coachId = localStorage.getItem("id"); 
  console.log(coachId, "cid")
  const [appointment, setAppointment] = useState({});

  const getCoachAppointment = () => {
    axios.get("http://localhost:3000/booking").then((response) => {
      if(response){
        let value = response.data;  
        //console.log(value)      
        let result =  value.filter(val => val.coachId === coachId)
        console.log(result);
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

        </div>
      </div>
    </section>
    </>
    
  )
}

export default connect()(CoachHome)
