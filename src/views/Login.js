import React from 'react'
import '../styles/login.sass'
import { inject, observer } from "mobx-react";

const Login = () =>{
  return (
  <div className="">
    登入頁面
  </div>)
}

export default inject('authStore')(observer(Login))