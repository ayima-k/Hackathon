import React from 'react'
import cls from './ResumeForm.module.scss'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
const ResumeForm = () => {
  return (
    <React.Fragment>
      <div className={cls.container}>
        <Link to={'/resume'}>
          <div className={cls.add_resume}>
            <h3>Cоздать новое резюме</h3>
            <p><IoIosAddCircleOutline /></p>
          </div>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default ResumeForm
