import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const SignUp = () => <h1>SignUp</h1>
const Login = () => <h1>Login holi</h1>
const Profile = () => <h1>Profile</h1>


const AppRouter = () => (
 <Router>
  <Route exact component={SignUp} path="/signup" />
  <Route exact component={Login} path="/login" />
  <Route exact component={Profile} path="/profile" />
 </Router>
)

export default AppRouter;