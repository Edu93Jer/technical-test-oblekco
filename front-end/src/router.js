import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'


const AppRouter = () => (
 <Router>
  <Route exact component={SignUp} path="/" />
  <Route exact component={LogIn} path="/login" />
  <Route exact component={Profile} path="/profile" />
 </Router>
)

export default AppRouter;