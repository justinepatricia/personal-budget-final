import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";

import ConfigureBudgets from './ConfigureBudgets/ConfigureBudgets';
import Dashboard from './Dashboard/Dashboard';
import HomePage from './HomePage/HomePage';
import EnterExpense from './EnterExpense/EnterExpense';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Signup from './Signup/Signup';

//import Chart from './Chart/Chart';
import ServerF from './ServerF/server';

function App() {  
  return (
    <Router>
      <HomePage/>
      <div className = "mainContainer">
      <Signup/>
        <Switch>
          <Route path ="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path ="/Login">
            <Login/>
          </Route>
          <Route path = "/Logout">
            <Logout/>
          </Route>
          <Route path = "/ConfigureBudgets">
            <ConfigureBudgets/>
          </Route>
          <Route path = "/EnterExpense">
            <EnterExpense/>
          </Route>
          < Route path ="/">
            <HomePage/>        
          </Route>
        </Switch>
      </div>
      <HomePage/>  
      <ServerF/>
    </Router>
  );
}

export default App;
