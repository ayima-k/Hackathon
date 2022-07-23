import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import cls from './Login.module.scss'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.login}>
      <form>
        <div className={cls.logo}>
          <img src={logo} alt="" />
        </div>
        <h1>Вход</h1>
        <TextField
          type='email'
          placeholder={'Электронная почта'}
          name={'email'}
        />

        <TextField
          type='password'
          placeholder={'Пароль'}
          name={'password'}
        />

        <div className={cls.btn}>
          <Button 
            variant='contained'
          >
            Войти
          </Button>
          <Button
            variant='outlined'
            onClick={() => navigate('/auth/register')}
          >
            Регистрация
          </Button>
        </div>


        <div className={cls.container}>
          <FcGoogle/>
          <p>Войти с помощью Google</p>
        </div>
      </form>
    </div>
  )
}

export default Login