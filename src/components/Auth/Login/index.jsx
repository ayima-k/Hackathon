import React from 'react'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import cls from './Login.module.scss'
import {useForm} from "react-hook-form";
import {FormsValidations} from "../../Forms/formsValidation/export";
import {useDispatch} from "react-redux";
import {auth} from "../../../firebase/firebase";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: "onBlur"
  })
  
  const handleFormSubmit = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.userEmail,
        data.userPassword
      )
      user && navigate('/')
    } catch (error) {
      console.log(error)
    } finally {
      reset()
    }
  }
  
  
  return (
    <div className={cls.login}>
      <form onSubmit={handleSubmit(data => handleFormSubmit(data))}>
        <h1>Вход</h1>
        <TextField
          type='email'
          placeholder={'Электронная почта'}
          name={'email'}
          className={errors?.userEmail && cls.shake}
          {...register('userEmail', {
            required: 'Обязательное поле!'
          })}
        />
        <p className={cls.error}>
          {errors?.userEmail && errors.userEmail.message}
        </p>
        <TextField
          type='password'
          placeholder={'Пароль'}
          name={'password'}
          className={errors?.userPassword && cls.shake}
          {...register('userPassword', {
            required: FormsValidations.RequiredInput.required,
            minLength: FormsValidations.minLengthValidation,
          })}
        />
        <p className={cls.error}>
          {errors?.userPassword && errors.userPassword.message}
        </p>
        <div className={cls.btn}>
          <Button 
            variant='contained'
            type={'submit'}
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
        
      </form>
    </div>
  )
}

export default Login