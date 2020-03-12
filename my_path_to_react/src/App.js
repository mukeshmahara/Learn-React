import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import UserProfile from './components/UserProfile';

import './'
function App() {
  return (
    <div className= "navbar">
      <Navbar />
      <div className="userProfile center">
        <UserProfile />
      </div>
    </div>
   
  );
}

export default App;
