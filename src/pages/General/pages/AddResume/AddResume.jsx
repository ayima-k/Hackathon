import { Button } from '@mui/material'
import React from 'react'
import { MdPhotoCamera } from 'react-icons/md'
import { FiDownload } from 'react-icons/fi'
import cls from './AddResume.module.scss'

const AddResume = () => {
  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.resume}>
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
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <div>
                    <label>Фамилия</label>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label>Адрес эл. почты</label>
                </div>
                <div>
                  <input type="email" />
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
                <input type="text" />
              </div>
            </div>
            <div>
              <div>
                <label>Адрес</label>
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
            <div className={cls.dflex}>
              <div>
                <div>
                  <label>Страна</label>
                </div>
                <div>
                  <input className={cls.input2} type="text" />
                </div>
              </div>
              <div>
                <div>
                  <label>Город</label>
                </div>
                <div>
                  <input className={cls.input2} type="text" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label>Дата рождения</label>
              </div>
              <div className={cls.date}>
                <input type="date" />
              </div>
            </div>
            <div className={cls.dflex}>
              <div>
                <div>
                  <label>Ваш уровень</label>
                </div>
                <div>
                  <select className={cls.select}>
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
                  <input className={cls.input2} type="number" placeholder='0-10' />
                </div>
              </div>
              <div>
                <div>
                  <label>Ваш стэк</label>
                </div>
                <select className={cls.select}>
                  <option value="Junior">Junior</option>
                  <option value="Middle">Middle</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
            </div>
          </div>
          <div className={cls.footer}>
            <Button>
              <FiDownload />
              Загрузить
            </Button>
          </div>
        </div>
        <div className={cls.watch}>
          <div className={cls.watch_block}>
            <div className={cls.block_top}>
              <h2>Предварительный просмотр</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddResume
