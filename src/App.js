import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterNavBar from './components/layout/FooterNavBar';
import Home from './components/home/Home';
import CoachRegistration from './components/coach/CoachRegistration';
import CoachLogin from './components/coach/CoachLogin';
import CoachHome from './components/coach/CoachHome';
import UserRegistration from './components/users/UserRegistration';
import UserLogin from './components/users/UserLogin';
import UserHome from './components/users/UserHome';
import View from './components/users/View';

function App() {
  return (
    <Router>
      <div>        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/coachsignup" element={<CoachRegistration/>} />
          <Route exact path="/coachlogin" element={<CoachLogin/>} />
          <Route exact path="/coachhome" element={<CoachHome/>} />
          <Route exact path="/usersignup" element={<UserRegistration/>} />
          <Route exact path="/userlogin" element={<UserLogin/>} />
          <Route exact path="/userhome" element={<UserHome/>} />
          <Route exact path="/userviewprofile" element={<View/>} />
        </Routes>
        <FooterNavBar/>       
      </div>
    </Router>    
  );
}

export default App;
