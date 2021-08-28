import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    useHistory,
  } from "react-router-dom";
import styled from 'styled-components'
import '../../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerUser, loginUser, getAward,getEdulevel,getCertificate,getProject, getUser, getUserInfo } from "../service/auth";


export default class Detail  extends React.Component {
    
    render() {
      const {user,award, certificate,edulevel,project,users} = this.props;
      console.log(users)
      return (
        <div className="control">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="temp-box-profile">
          <h2>Welcome!</h2>
          <div className="photo">
              <img src={user.image}></img>
          </div>
          <div className="text">
            <p>이름 : {user.name}</p>
            <p>한 줄 소개 : {user.description}</p>
          </div>
    
          <div className="item">
            <Link to="/login" >Logout</Link>
            <Link to="/network" >Network</Link>
          </div>
          </div>
          <div></div>
          <div className="temp-box-pf">
          <div></div>
          <h2>학력</h2>
          <div></div>
          <div></div>
          <div></div>
          <div>
          <p>학교 : {edulevel.name}</p>
          <p>전공 : {edulevel.major}</p>
          <p>상태 : {edulevel.type}</p>
          {/* <input id = "" type = "text" placeholder= "학교이름" name = "" value = ""></input>
          <input id = "" type = "text" placeholder= "전공" name = "" value = ""></input> */}
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="subbut">
          <input id = "" type = "button" name = "edit" value = "수정"></input>
          <input id = "" type = "submit" name = "save" value = "저장"></input> 
          </div>
          <div>
          </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="temp-box-pf">
          <div></div>
          <h2>수상이력</h2>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <p>수상내역 : {award.name}</p>
            <p>상세내역 : {award.description}</p>
            {/* <input id = "" type = "text" placeholder= "수상내역" name = "" value = ""></input>
            <input id = "" type = "text" placeholder= "상세내역" name = "" value = ""></input> */}
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="subbut">
          <input id = "" type = "button" name = "edit" value = "수정"></input>
          <input id = "" type = "submit" name = "save" value = "저장"></input>
          </div>
          <div>
          </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="temp-box-pf">
          <div></div>
          <h2>프로젝트</h2>
          <div></div>
          <div></div>
          <div></div>
          <div>
          <p>프로젝트명 : {project.name}</p>
          <p>프로젝트 설명 : {project.description}</p>
          <p>시작 날짜 : {project.startdate}</p>
          <p>끝 날짜 : {project.enddate}</p>
          <p>Url : {project.url}</p>
          {/* <input id = "" type = "text" placeholder= "프로젝트명" name = "" value = ""></input>
          <input id = "" type = "text" placeholder= "프로젝트 내용" name = "" value = ""></input> */}
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="subbut">
          <input id = "" type = "button" name = "edit" value = "수정"></input>
          <input id = "" type = "submit" name = "save" value = "저장"></input>
          </div>
          <div>
          </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="temp-box-pf">
          <div></div>
          <h2>자격증</h2>
          <div></div>
          <div></div>
          <div></div>
          <div>
          <p>자격증 : {certificate.name}</p>
          <p>공급기관 : {certificate.agency}</p>
          {/* <input id = "" type = "text" placeholder= "자격증" name = "" value = ""></input>
          <input id = "" type = "text" placeholder= "공급기관" name = "" value = ""></input> */}
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="subbut">
          <input id = "" type = "button" name = "edit" value = "수정"></input>
          <input id = "" type = "submit" name = "save" value = "저장"></input>
          </div>
          <div>
          </div>
          </div>
        </div>
        
      );
    }
  }