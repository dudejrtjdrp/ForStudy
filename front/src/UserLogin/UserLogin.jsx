import React, { Fragment, useEffect } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import Detail from "./components/Detail";
import Network from "./components/Network";
import './Detail.css';
import { registerUser, loginUser, getAward,getEdulevel,getCertificate,getProject, getUser, getUserInfo } from "./service/auth";
import '../App.css';
import axios from "axios";


export default function UserLogin() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>
          
          <Route path="/network">
            <NetworkPage />
          </Route>

          <PrivateRoute path="/detail">
            <UserDetailPage />
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

 function LoginPage() {
  const history = useHistory();

   const handleSubmit = async (formData) => {
    const user_id = await loginUser(formData)
    const user =  await getUser(formData)
    const award =  await getAward(formData)
    const edulevel =  await getEdulevel(formData)
    const certificate =  await getCertificate(formData)
    const project =  await getProject(formData)
    const users = await getUserInfo()
    if (!user) return
    
    history.push({
        pathname:'/detail',
        state:{
            user_id,
            user,
            award,
            certificate,
            edulevel,
            project,
            users
        }
    })
  };

  return (
    <div className="app-container2">
      <LoginForm onSubmit={handleSubmit} />
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

function RegisterPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    registerUser(formData)
    history.push('/login')
  };

  return (
    <div className="app-container2">
      <h2>Register Page</h2>
      <RegisterForm onSubmit={handleSubmit} />
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

function UserDetailPage() {

  const location = useLocation()
  const user_id = location.state.user_id
  const user = location.state.user
  const award = location.state.award
  const certificate = location.state.certificate
  const project = location.state.project
  const edulevel = location.state.edulevel
  
  const users = location.state.users
  useEmptyLocationState();


  return (
    <Fragment>
      <div>
        <Detail user_id={user_id} user={user} award={award} certificate={certificate} project={project} edulevel={edulevel} users={users}/>
      </div>
    </Fragment>
  );
}


 function  NetworkPage() {
  const users =  getUserInfo()
  console.log(users.id)
  return (
    <Fragment>
      <div>
        <Network />
      </div>
    </Fragment>
  );
}


function useEmptyLocationState() {
  const history = useHistory();

  useEffect(() => {
    return () => history.replace();
  }, [history]);
}
