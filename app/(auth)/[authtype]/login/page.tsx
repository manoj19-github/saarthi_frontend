import React, { FC } from 'react'
import LoginForm from "./_components/LoginForm"
interface LoginPageProps{}
const LoginPage:FC<LoginPageProps> = () => {
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default LoginPage