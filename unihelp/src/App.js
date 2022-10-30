import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import MainPage from './pages/main';
import SubmitResults from './pages/submitResults';
import Forum from './pages/forum';
import Settings from './pages/settings';
import NTU from './pages/ntu';
import NUS from './pages/nus';
import SMU from './pages/smu';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
        <Route path='/main-page' component={MainPage} exact />
        <Route path='/forum' component={Forum} exact />
        <Route path='/submit-results' component={SubmitResults} exact />
        <Route path='/settings' component={Settings} exact />
        <Route path='/smu' component={SMU} exact />
        <Route path='/ntu' component={NTU} exact />
        <Route path='/nus' component={NUS} exact />
      </Switch>
    </Router>
  );
}

export default App;
