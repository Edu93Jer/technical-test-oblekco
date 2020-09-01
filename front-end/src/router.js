import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

const Profile = () => <h1>Profile</h1>


const AppRouter = () => (
 <Router>
  <Route exact component={SignUp} path="/signup" />
  <Route exact component={LogIn} path="/login" />
  <Route exact component={Profile} path="/profile" />
 </Router>
)

export default AppRouter;