import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'
import cls from './Register.module.scss'
import logo from '../../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.register}>
      <form>
        <div className={cls.logo}>
          <img src={logo} alt="" />
        </div>
        <h1>Регистрация</h1>
        <TextField
          type='text'
          placeholder={'Имя пользователя'}
          name={'name'}
        />

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
            Зарегистрироваться
          </Button>
          <Button
            variant='outlined'
            onClick={() => navigate('/auth/login')}
          >
            Войти
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

export default Register