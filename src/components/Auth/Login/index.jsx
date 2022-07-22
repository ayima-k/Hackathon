import { Button, TextField } from '@mui/material'
import React from 'react'
import cls from './Login.module.scss'

const Login = () => {
  return (
    <div className={cls.login}>
      <form>
        <h1>Войти</h1>
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
              Отправить
            </Button>
            <Button
              variant='outlined'
            >
              Регистрация
            </Button>
          </div>


          <div className={cls.container}>
            <img
              width={'30px'}
              style={{cursor: 'pointer'}}
              src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png" 
              alt=""
            />
            <p>Войти с помощью Google?</p>
          </div>
      </form>
    </div>
  )
}

export default Login