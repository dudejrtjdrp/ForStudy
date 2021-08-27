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
import Test from "./components/Test";
import styled from 'styled-components';
import './Detail.css';
import { registerUser, loginUser, getAward,getEdulevel,getCertificate,getProject } from "./service/auth";
import '../App.css';



// location.state.user 정보에 따라 페이지를 이동하는 코드를 작성하세요.
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
            <RegisterPage />
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
  // 로그인 기능을 구현하세요.

   const handleSubmit = async (formData) => {
    // loginUser를 활용해 유저 정보를 검색하세요.
    // 유저 정보가 없다면, 로그인이 되지 않습니다.
    // 유저 정보를 찾으면, location.state.user에 유저 정보를 저장하고 detail page로 이동하세요.
    const user =  await loginUser(formData)
    const award =  await getAward(formData)
    const edulevel =  await getEdulevel(formData)
    const certificate =  await getCertificate(formData)
    const project =  await getProject(formData)
    if (!user) return
    
    history.push({
        pathname:'/detail',
        state:{
            user,
            award,
            certificate,
            edulevel,
            project
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
  // 회원가입 기능을 구현하세요.

  const handleSubmit = (formData) => {
    // registerUser를 활용하여 유저를 등록하세요.
    // 등록했으면 로그인 페이지로 이동하세요.
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
  // 회원의 정보를 출력하는 기능을 구현하세요.
  // 유저 정보는 location.state.user에 있습니다.
  // PrivateRoute 컴포넌트는 유저 정보가 없을 경우 로그인 페이지로 사용자를 리다이렉트합니다.

  const location = useLocation()
  const user = location.state.user
  const award = location.state.award
  const certificate = location.state.certificate
  const project = location.state.project
  const edulevel = location.state.edulevel
  useEmptyLocationState();


  return (
    <Fragment>
      <div>
        <Detail user={user} award={award} certificate={certificate} project={project} edulevel={edulevel}/>
      </div>
    </Fragment>
  );
}

// location state를 지우는 헬퍼 함수입니다.
function useEmptyLocationState() {
  const history = useHistory();

  useEffect(() => {
    return () => history.replace();
  }, [history]);
}
