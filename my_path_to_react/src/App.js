import React from 'react';

import Navbar from './components/navbar';
import UserProfile from './components/UserProfile';

import 'bootstrap/dist/css/bootstrap.min.css'

import Todolist from './components/TodoComponents/Todolist';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container  ">
        <div className="row mt-5">

          <div className="col-md-4">
            <div className="card  p-3 text-center"><strong className="">Mero Profile</strong>
              <UserProfile />
            </div>
          </div>

          <div className="col-md-8">
            <div className="card p-3">
            <h2 className="text-center btn  text-dark mb-3">Todo App</h2>
            <Todolist /></div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
