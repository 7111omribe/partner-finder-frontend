import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import LoginForm from "./component/authing/login.components";
import SignUp from './component/authing/signup.components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navigation/AppNavbar.components';
import ActivitiesPage from './component/activities/ActivitiesPage.components';
import SettingsPage from './component/navigation/settings/SettingsPage.components';


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
          <div style={{height:'100%'}}>
            <Navbar userData={userData} locationData={locationData} locationSetter={setlocationData} />
            <Routes>
              <Route path="/activities" element={
                <ActivitiesPage userId={userData['user_id']} locationId={locationData['location_id']} />
              } />
              <Route path="/settings" element={
                <SettingsPage userData={userData} userDataSetter={setUserData}/>
              } />

            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
