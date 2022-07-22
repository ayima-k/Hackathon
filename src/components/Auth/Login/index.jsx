import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import cls from './Login.module.scss'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className={cls.login}>
      <form>
        <img src="https://static.tildacdn.com/tild3639-3135-4765-a366-303730373766/ololo-creativehubs-l.png" alt="" />
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