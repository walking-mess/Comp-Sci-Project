import Header from './components/Header';
import Body from './components/Body';
import Submissions from './pages/submissions';
import About from './pages/about';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import styled from 'styled-components';

function App() {

  const A = styled.div`
  height: 5vw; 
  background-color: #73AB84; 
  margin: none;
  display: flex;
  `;

  return (
  <div>
    <Router>
          <Header/>    
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/> 
              <Route path='/submissions' component={Submissions}/>            
          </Switch>
    </Router>      
    <Body/>
    <A/>
  </div>
  )
}

export default App
