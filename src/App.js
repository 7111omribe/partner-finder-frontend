import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import LoginForm from "./user_stuff/login.components";
import SignUp from './user_stuff/signup.components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [userData, setUserData] = useState({});
  return (
    <Router>
      <div className="App">
        {Object.keys(userData).length === 0 ? (
          <div className="auth-inner">
            <Routes>
              <Route path="/sign-in" element={<LoginForm userDataSetter={setUserData} />} />
              <Route path="/sign-up" element={<SignUp userDataSetter={setUserData}/>} />
              {/* Redirect to sign-in if an unauthenticated user attempts to access other routes */}
              <Route path="*" element={<Navigate to="/sign-in" />} />
            </Routes>
          </div>
        ) : (
          // Render authenticated user content here
          <div>
            <Routes>
              <Route path="/" element={"hey Im in!"} />

            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
