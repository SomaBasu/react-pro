import React, {useEffect, useState} from 'react'
import { UserHeaderNavBar } from '../layout/HeaderNavBar'
import { connect } from 'react-redux';
import axios from 'axios';
import { bookAppointment } from '../../action';
import coachImg from '../../images/coach.png'

function UserHome(props) {

  const userId = localStorage.getItem("id");  
  const [coachs, setCoachs] = useState([]);
  const [coachChosen,setCoachChosen] = useState(false);
  const [coachId,setcoachId] = useState(0);
  const [doa, setDoa] = useState("");
  const [slot, setSlot] = useState("");
  const [appointment, setAppointment] = useState({})
  const [bookApp, setBookApp] = useState(false);

  const getAllUsers = () => {
    axios.get("http://localhost:3000/coachs").then((response) => {
      if(response){
        setCoachs(response.data)
          console.log(response.data);
          //setRegister(false)
      }
  });
  }

  useEffect(()=>{
    getAllUsers()
  },[])

  const onAppointmentSubmit = async (event) => {
    event.preventDefault();
    
    const appointment = { slot:slot, doa:doa, coachId:coachId, userId:userId };
    console.log(appointment, "appointmentData");
    await axios.post("http://localhost:3000/booking", appointment).then((response) => {
            if(response){
                setAppointment(response.data)                
                setBookApp(true)
            }
      });
    props.dispatch(bookAppointment(appointment));
  }

  const getAppointment = (id) => {    
    setCoachChosen(true);
    setcoachId(id);
  }

  const resetPage = () => {
    setBookApp(false);
    setCoachChosen(false);
  } 

  if(bookApp){
    return(
      <>
      <UserHeaderNavBar/>
      <section className="wc-section" style={{minHeight: "85vh"}}>
        <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                  <div className="card card-column align-items-center">
                    <div className="card-body">
                      <h2 className='text-white'>Your Appointment is scheduled successfully</h2>
                      <div className="col pt-5 d-flex justify-content-center">
                              <button type="button" className="btn btn-success btn-lg " onClick = {resetPage}>Go Back</button> 
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


  if(coachChosen) {
    return (
      <>
      <UserHeaderNavBar/>  
      <section className="wc-section" style={{minHeight: "85vh"}}>
      <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                  <div className="card card-column">
                      <div className='d-flex mx-auto gap-3 intro-text'>
                          <i class="fa-light fa-calendar-days"></i>
                          <h2 className='text-white'>Proceed with you Appointment</h2>
                      </div>
                      <div className="card-body">
                          <div className="row justify-content-center">
                            <div className="col-md-10 pb-4">
                              <label className="form-label ">Date of Appointment</label>
                              <input type="date" className="form-control" 
                                  name="doa"
                                  value={doa}
                                  onChange={(event) => setDoa(event.target.value)} 
                                  /> 
                            </div> 

                            <div className="col-md-10 pb-4">
                              <label className="form-label ">Preferred Slot</label>
                              <div className='d-flex gap-3'>
                                  <input type="radio" className="form-check-input" 
                                      name="slot"
                                      value="9 AM to 10 AM"
                                      onChange={(event) => setSlot(event.target.value)}                                         
                                  />
                                  <label className="form-label">9 AM to 10 AM</label> 
                              
                                  <input type="radio" className="form-check-input" name="slot"
                                      value="10 AM to 11 AM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">10 AM to 11 AM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="11 Am to 12 AM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">11 Am to 12 AM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="2 PM to 3 PM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">2 PM to 3 PM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="3 PM to 4 PM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">3 PM to 4 PM</label>

                                  <input type="radio" className="form-check-input" name="slot"
                                      value="4 Pm to 5 PM"
                                      onChange={(event) => setSlot(event.target.value)} 
                                  />
                                  <label className="form-label ">4 Pm to 5 PM</label>
                                </div>
                            </div> 
                              
                            <div className="col-md-10 pb-5 d-flex justify-content-center">
                              <button type="button" className="btn btn-success btn-lg w-50" onClick={(event) => onAppointmentSubmit(event)}>Confirm your Appointment</button> 
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

  return (
    <>
    <UserHeaderNavBar/>
    <section className='wc-section' style={{minHeight: "85vh"}}>        
      <div className="container">
        <div className="row justify-content-center gap-3">
          {
            coachs.map((coach, index) => (
              <div className="col-md-5" key={index}>                    
                <div className="card card-column-user d-flex flex-row gap-3">
                    <img src={coachImg} className="card-img-top photo" alt="..."/>
                    <div className="card-body body-text d-flex flex-column gap-3">  
                      <h3>{coach.name}</h3>
                      <h4>Coach Id: {coach.id}</h4>
                      <h5>Mobile No: {coach.phone}</h5>
                      <h5>Speciality: {coach.speciality}</h5>
                      <button type="button" className="btn btn-primary" onClick={ () => getAppointment(coach.id)} >Book an Appointment</button>
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

export default connect()(UserHome)
