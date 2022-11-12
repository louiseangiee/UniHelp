import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

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
import AddPost from './pages/AddPost';
import ForumPost from './pages/forumPost';


function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div>
      {authIsReady && (
        <Router>
          <Switch>
            <Route path="/" exact>
                {user && <Redirect to="/main-page" /> }
                {!user && <Home /> }
            </Route>
            <Route path="/signin" exact>
                {user && <Redirect to="/main-page" /> }
                {!user && <SigninPage /> }
            </Route>
            <Route path="/signup" exact>
                {user && <Redirect to="/main-page" /> }
                {!user && <SignupPage /> }
            </Route>
            <Route path="/main-page" exact>
                {!user && <Redirect to="/signin" />}
                {user && <MainPage />}
            </Route>
            <Route path="/forum" exact>
                {!user && <Redirect to="/signin" />}
                {user && <Forum />}
            </Route>
            <Route path="/forum/:id" exact>
                {!user && <Redirect to="/signin" />}
                {user && <ForumPost />}
            </Route>
            <Route path="/submit-results" exact>
                {!user && <Redirect to="/signin" />}
                {user && <SubmitResults />}
            </Route>
            <Route path='/settings' exact>
                {!user && <Redirect to="/" />}
                {user && <Settings />}
            </Route>
            <Route path='/smu' exact>
                {!user && <Redirect to="/signin" />}
                {user && <SMU />}
            </Route>
            <Route path='/ntu' exact>
                {!user && <Redirect to="/signin" />}
                {user && <NTU />}
            </Route>
            <Route path='/nus' exact>
                {!user && <Redirect to="/signin" />}
                {user && <NUS />}
            </Route>
            <Route path='/AddPost' exact>
                {!user && <Redirect to="/signin" />}
                {user && <AddPost />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
