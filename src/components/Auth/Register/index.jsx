import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import cls from './Register.module.scss'
import { useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form";
import {FormsValidations} from "../../Forms/formsValidation/export";
import {useDispatch} from "react-redux";
import {updateProfile, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../firebase/firebase";
import {createNewUser} from "../../../config";
import {setUser} from "../../../store/slices/userSlice";

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [wrongData, setWrongData] = React.useState(false)
  
  // const handleRegister = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(console.log)
  //     .catch(console.error)
  // }
  
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: "onChange"
  })
  
  //
  // function onSubmit(data){
  //   console.log(data.userName, data.userPassword)
  //   handleRegister(data.userName, data.userPassword)
  //   reset()
  // }
  
  const handleNewUser = (data, userId) => {
    createNewUser(
      {
        ...data,
        totalPrice: 0,
        phoneNumber: '',
      },
      userId
    ).then(() => navigate('/'))
  }
  
  const handleFormSubmit = async (data) => {
    console.log(data)
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.userEmail,
        data.userPassword
      ).then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
      })
      await updateProfile(res.user, {
        displayName: data.userName || 'Пользователь',
        photoURL:
          'https://api-private.atlassian.com/users/2e5afb4451de305435994b4dbca95d38/avatar',
      })
      res && handleNewUser(data, res.user.uid)
    } catch (error) {
      setWrongData(true)
    } finally {
      reset()
    }
  }
  
  return (
    <div className={cls.register}>
      <form onSubmit={handleSubmit(data => handleFormSubmit(data))}>
        <h1>Регистрация</h1>
        <TextField
          type='text'
          placeholder={'Имя пользователя'}
          name={'name'}
          size={'small'}
          className={errors?.userName && cls.shake}
          {...register('userName', {
            required: 'Обязательное поле!'
          })}
        />
        <p className={cls.error}>
          {errors?.userName && errors.userName.message}
        </p>
        <TextField
          type='email'
          placeholder={'Электронная почта'}
          name={'email'}
          size={'small'}
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
          size={'small'}
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
            Зарегистрироваться
          </Button>
          <Button
            variant='outlined'
            onClick={() => navigate('/auth/login')}
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Register