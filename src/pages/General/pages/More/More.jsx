import React from 'react'
import { getUsers } from '../../../../config'
import cls from './More.module.scss'

const More = () => {

  // const [base, setBase] = React.useState(null)
  // React.useEffect(() => {
  //   getUsers()
  //   .then(r => console.log(r))
  // })



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
                <input disabled />
              </div>
            </div>
            <div>
              <div>
                <label>Фамилия</label>
              </div>
              <div>
                <input disabled />
              </div>
            </div>
            <div>
              <div>
                <label>Адрес эл. почты</label>
              </div>
              <div>
                <input disabled />
              </div>
            </div>
            <div>
              <div>
                <label>Заголовок</label>
              </div>
              <div>
                <textarea disabled />
              </div>
            </div>
            <div>
              <div>
                <label>Номер телефона</label>
              </div>
              <div>
                <input disabled />
              </div>
            </div>
            <div>
              <div>
                <label>Адрес</label>
              </div>
              <div>
                <input disabled />
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
              <input className={cls.input2} disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Город</label>
            </div>
            <div>
              <input className={cls.input2} disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Дата рождения</label>
            </div>
            <div className={cls.date}>
              <input className={cls.input2} type="date" disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Уровень</label>
            </div>
            <div>
              <input className={cls.input2} disabled />
            </div>
          </div>
          <div>
            <div>
              <label>Опыт работы</label>
            </div>
            <div>
              <input className={cls.input2} disabled type="number" />
            </div>
          </div>
          <div>
            <div>
              <label>Стэк</label>
            </div>
            <input className={cls.input2} type="text" disabled />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default More
