import { Button } from '@mui/material'
import React from 'react'
import { MdPhotoCamera } from 'react-icons/md'
import { FiDownload } from 'react-icons/fi'
import cls from './AddResume.module.scss'
import { useForm } from "react-hook-form";
import { resumeCreate } from "../../../../config";
import { useAuth } from "../../../../hooks/useAuth";
import Watch from '../../../../components/Watch/Watch'
import useIsLogin from '../../../../hooks/useIsLogin'
// import watch from "../../../../components/Watch/Watch"


const AddResume = () => {
  
  const { isAuth } = useIsLogin()

  const {
    register,
    reset, 
    handleSubmit,

  } = useForm()

  function postResume(data) {
    resumeCreate(data, isAuth?.uid).then(r => console.log(r))
  }

  return (
    <React.Fragment>
      <div className={cls.container}>
        <form className={cls.resume} onSubmit={handleSubmit(postResume)}>
          <div className={cls.header}>
            <div className={cls.profileImg}>
              <div>
                <label>Фото</label>
              </div>
              <div className={cls.imgBlock} tabIndex='0'>
                <div>
                  <MdPhotoCamera />
                </div>
              </div>
            </div>
            <div className={cls.headerInputs}>
              <div className={cls.dflex}>
                <div>
                  <div>
                    <label>Имя</label>
                  </div>
                  <div>
                    <input type="text" {...register('resumeName')} />
                  </div>
                </div>
                <div>
                  <div>
                    <label>Фамилия</label>
                  </div>
                  <div>
                    <input type="text" {...register('resumeLastName')} />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label>Адрес эл. почты</label>
                </div>
                <div>
                  <input type="email"  {...register('resumeEmail')} />
                </div>
              </div>
            </div>
          </div>
          <div className={cls.main}>
            <div>
              <div>
                <label>Заголовок</label>
              </div>
              <div>
                <textarea type="text" />
              </div>
            </div>
            <div>
              <div>
                <label>Номер телефона</label>
              </div>
              <div>
                <input type="text" {...register('resumePhone')} />
              </div>
            </div>
            <div>
              <div>
                <label>Адрес</label>
              </div>
              <div>
                <input type="text" {...register('resumeAddress')} />
              </div>
            </div>
            <div className={cls.dflex}>
              <div>
                <div>
                  <label>Страна</label>
                </div>
                <div>
                  <input className={cls.input2} type="text" {...register('resumeCountry')} />
                </div>
              </div>
              <div>
                <div>
                  <label>Город</label>
                </div>
                <div>
                  <input className={cls.input2} type="text" {...register('resumeCity')} />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label>Дата рождения</label>
              </div>
              <div className={cls.date}>
                <input type="date" {...register('resumeDate')} />
              </div>
            </div>
            <div className={cls.dflex}>
              <div>
                <div>
                  <label>Ваше направление</label>
                </div>
                <div>
                  <select className={cls.select} {...register('resumeDirection')}>
                    <option selected disabled>Выберитe ваше направление</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="Android">Android</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label>Ваш уровень</label>
                </div>
                <div>
                  <select className={cls.select} {...register('resumeLevel')}>
                    <option selected disabled>Выберитe ваш уровень</option>
                    <option value="Junior">Junior</option>
                    <option value="Middle">Middle</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label>Опыт работы</label>
                </div>
                <div>
                  <input className={cls.input2} type="number" placeholder='0-10' {...register('resumeExperience')} />
                </div>
              </div>
              <div>
                <div>
                  <label>Ваш стэк</label>
                </div>
                <select className={cls.select} {...register('resumeSkills')}>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                </select>
              </div>
            </div>
          </div>
          <div className={cls.footer}>
            <Button type={'submit'}>
              <FiDownload />
              Загрузить
            </Button>
          </div>
        </form>
        <Watch />
      </div>
    </React.Fragment>
  )
}

export default AddResume
