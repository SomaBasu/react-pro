import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { UserHeaderNavBar } from '../layout/HeaderNavBar'

function UserAppointments(props) {
    const userId = localStorage.getItem("id"); 
    const [appointment, setAppointment] = useState([]);
    const [scheduleAppointment, setScheduleAppointment] = useState(false);
    const [bookigId, setBookingId] = useState(0);
    const [doa, setDoa] = useState("");
    const [slot, setSlot] = useState("");
    const [reAppointment, setReAppointment] = useState({})

    const [editBooking,setEditBooking] = useState({});
    const [isRescheduling,setIsRescheduling] = useState(false);
    const [bookApp, setBookApp] = useState(false);

    console.log(editBooking,'edv');

    const getAllAppoinment = () => {
        axios.get("http://localhost:3000/booking").then((response) => {
          if(response){
            let value = response.data;
            let result =  value.filter(val => val.userId === userId)
            console.log(result);
            setAppointment(result)
          }
      });
    }

    useEffect(()=>{
        getAllAppoinment()
    },[appointment])


    const rescheduleAppointment = (id) => {    
        setScheduleAppointment(true);
        setBookingId(id);
    }

    
    const onAppointmentSubmit = async (event) => {
    event.preventDefault();
    
    const appointment = { slot:slot, doa:doa, coachId:editBooking.coachId, userId:editBooking.userId };
    //console.log(appointment, "appointmentData");
    await axios.put(`http://localhost:3000/booking/${editBooking.id}`, appointment).then((response) => {
            if(response){
                console.log(response.data, 'tttt')
                setAppointment(response.data)                
                setBookApp(true)
            }
        });        
    }

    const resetPage = () => {
    setBookApp(false);
    setIsRescheduling(false);
    } 

    const cancelAppointment = (appointmentId) => {   
        console.log(appointmentId, 'de')     
        axios.delete(`http://localhost:3000/booking/${appointmentId}`)        
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
                          <h2 className='text-white'>Your Appointment is rescheduled successfully</h2>
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
    
    if(isRescheduling) {
    return (
        <>
        <UserHeaderNavBar/>  
        <section className="wc-section" style={{minHeight: "85vh"}}>
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="card card-column">
                        <div className='d-flex mx-auto gap-3 intro-text'>
                            <i className="fa-light fa-calendar-days"></i>
                            <h2 className='text-white'>Reschedule your Appoinment</h2>
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
            <div className="row justify-content-center">
                {
                    appointment.map((app, index) => (
                        <div className="col-md-4" key={index}>                    
                            <div className="card card-column">                        
                                <div className="card-body d-flex flex-column gap-3">  
                                <h2 className='text-white'>Appointment Date: {app.doa} </h2>
                                <h3 className='text-white'>Slot: {app.slot} </h3>
                                <h5 className='text-white text-center'>Booking id: {app.id}</h5>
                                <h5 className='text-white text-center'>User id: {app.userId}</h5>
                                <h5 className='text-white text-center'>Coach id: {app.coachId}</h5>
                                <button type="button" className="btn btn-info fs-4" 
                                    onClick = {() => {
                                    setEditBooking(app); 
                                    setIsRescheduling(true);
                                }}>Reschedule Appoinment</button>
                                <button type="button" className="btn btn-danger fs-4" onClick = {() => cancelAppointment(app.id)}>Cancle Appoinment</button>                                
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

export default connect()(UserAppointments)
