import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import LoginForm from "./user_stuff/login.components";
import SignUp from './user_stuff/signup.components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navigation/AppNavbar.components';
import ActivitiesPage from './activities/ActivitiesPage.components';


function App() {
  const [userData, setUserData] = useState({});
  const [locationData, setlocationData] = useState({});
  return (
    <Router>
      <div className="App">
        {Object.keys(userData).length === 0 ? (
          <div className="auth-inner">
            <Routes>
              <Route path="/sign-in" element={<LoginForm userDataSetter={setUserData} locationDataSetter={setlocationData} />} />
              <Route path="/sign-up" element={<SignUp userDataSetter={setUserData} />} />
              <Route path="*" element={<Navigate to="/sign-in" />} />
            </Routes>
          </div>
        ) : (
          // Render authenticated user content here
          <div>
            <Navbar userData={userData} locationData={locationData} locationSetter={setlocationData} />
            <Routes>
              <Route path="/activities" element={
                <ActivitiesPage userId={userData['user_id']} locationId={locationData['location_id']}></ActivitiesPage>
              } />

            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
