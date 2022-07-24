import React from 'react'
import { getResume, getUsers } from '../../../../config'
import useIsLogin from '../../../../hooks/useIsLogin'
import cls from './More.module.scss'

const More = () => {

  const [base, setBase] = React.useState(null)

  const { isAuth } = useIsLogin()

  React.useEffect(() => {
    getResume(isAuth?.uid)
    .then(r => setBase(r.data))
  })  


  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.header}>
          <div className={cls.profileImg}>
            <div>
              <label>Фото</label>
            </div>
            <div className={cls.imgBlock} tabIndex='0'>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <div className={cls.headerInputs}>
            <div>
              <div>
                <label>Имя</label>
              </div>
              <div>
                <input disabled value={base?.resumeName} />
              </div>
            </div>
            <div>
              <div>
                <label>Фамилия</label>
              </div>
              <div>
                <input disabled value={base?.resumeLastName} />
              </div>
            </div>
            <div>
              <div>
                <label>Адрес эл. почты</label>
              </div>
              <div>
                <input disabled value={base?.resumeEmail} />
              </div>
            </div>
            <div>
              <div>
                <label>Заголовок</label>
              </div>
              <div>
                <textarea disabled value={base?.resumeName} />
              </div>
            </div>
            <div>
              <div>
                <label>Номер телефона</label>
              </div>
              <div>
                <input disabled value={base?.resumePhone} />
              </div>
            </div>
            <div>
              <div>
                <label>Адрес</label>
              </div>
              <div>
                <input value={base?.resumeAddress} disabled />
              </div>
            </div>

          </div>
        </div>
        <div className={cls.main}>
          <div>
            <div>
              <label>Страна</label>
            </div>
            <div>
              <input value={base?.resumeCountry} className={cls.input2} disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Город</label>
            </div>
            <div>
              <input value={base?.resumeCity} className={cls.input2} disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Дата рождения</label>
            </div>
            <div className={cls.date}>
              <input value={base?.resumeDate} className={cls.input2} type="date" disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Уровень</label>
            </div>
            <div>
              <input value={base?.resumeLevel} className={cls.input3} disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Опыт работы</label>
            </div>
            <div>
              <input value={base?.resumeExperience} className={cls.input3} disabled type="number" />
            </div>
          </div>
          <div>
            <div>
              <label>Стэк</label>
            </div>
            <input value={base?.resumeSkills} className={cls.input3} type="text" disabled />
          </div>
          <div>
            <div>
              <label>Направление</label>
            </div>
            <input value={base?.resumeDirection} className={cls.input3} type="text" disabled />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default More
