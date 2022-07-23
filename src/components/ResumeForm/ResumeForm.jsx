import React from 'react'
import cls from './ResumeForm.module.scss'
import { IoIosAddCircleOutline } from 'react-icons/io'
const ResumeForm = () => {
  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.add_resume}>
          <h3>Cоздать новое резюме</h3>
          <p><IoIosAddCircleOutline /></p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ResumeForm
