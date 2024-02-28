import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import LoginForm from "./component/authing/login.components";
import SignUp from './component/authing/signup.components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navigation/AppNavbar.components';
import ActivitiesPage from './component/activities/ActivitiesPage.components';
import SettingsPage from './component/navigation/settings/SettingsPage.components';

const UserDataContext = createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [locationData, setlocationData] = useState({});
  return (
    <UserDataContext.Provider value={{ userData, setUserData, locationData, setlocationData }}>
      <Router>
        <div className="App">
          {Object.keys(userData).length === 0 ? (
            <div className="auth-inner">
              <Routes>
                <Route path="/sign-in" element={<LoginForm locationDataSetter={setlocationData} />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/sign-in" />} />
              </Routes>
            </div>
          ) : (
            // Render authenticated user content here
            <div style={{ height: '100%' }}>
              <Navbar locationData={locationData} locationSetter={setlocationData} />
              <Routes>
                <Route path="/activities" element={
                  <ActivitiesPage locationId={locationData['location_id']} />
                } />
                <Route path="/settings" element={
                  <SettingsPage userData={userData} />
                } />

              </Routes>
            </div>
          )}
        </div>
      </Router>
    </UserDataContext.Provider>
  );
}

export { App, UserDataContext };