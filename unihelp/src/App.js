import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import MainPage from './pages/main';
import MyUni from './pages/myUni';
import Forum from './pages/forum';
import Settings from './pages/settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={Home} exact />
        <Route path='/signin' element={SigninPage} exact />
        <Route path='/main-page' element={MainPage} exact />
        <Route path='/forum' element={Forum} exact />
        <Route path='/myUni' element={MyUni} exact />
        <Route path='/settings' element={Settings} exact />
      </Routes>
    </Router>
  );
}

export default App;