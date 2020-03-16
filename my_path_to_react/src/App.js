import React from 'react';

import Navbar from './components/navbar';
import UserProfile from './components/UserProfile';

import 'bootstrap/dist/css/bootstrap.min.css'

import Todolist from './components/TodoComponents/Todolist';

import Login from './components/LoginComponent/Login';




function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container  ">
      <element/>
      
        <div className="row mt-5">

          <div className="col-md-4">
            <div className="card  p-3 text-center bg-light"><strong className="">Mero Profile</strong>
              <UserProfile />
            </div>
            <div className=" card mt-4 bg-light">
              <Login />
            </div>
          </div>

          <div className="col-md-8">
            <div className="card p-3">
              <span className="text-center btn  text-dark mb-3">Todo App</span>
              <Todolist /></div>
          </div>


        </div>
      </div>
    </div>

  );
}

export default App;
