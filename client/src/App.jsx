import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoardLayout from './Components/DashBoardLayout';
import Usermanagement from './Pages/Usermanagement';
import AuthPage from './Components/AuthPage';
import HomeDashboard from './Components/HomeDashboard';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        {/* Home Route */}
        <Route path='/' element={<Home />} />

        {/* Auth and Login Routes */}
        <Route path="/login" element={<AuthPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<HomeDashboard />}>
          {/* Nested routes for dashboard */}
          <Route path="" element={<DashBoardLayout />} />  {/* Default dashboard route */}
          <Route path="user" element={<Usermanagement />} /> {/* Correct nested path */}
        </Route>

       
        <Route path="/user" element={<Usermanagement />} /> 
      </Routes>
    </div>
  );
}

export default App;
