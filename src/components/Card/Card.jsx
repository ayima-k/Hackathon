import React from 'react'
import cls from './Card.module.scss'
import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import notFound from '../../assets/img/notFound.png'



const Card = ({ filterCard,  }) => {
  console.log(filterCard)
  !filterCard && <Skeleton />
  return (
    <React.Fragment>
      <div className={cls.container}>
        {
          filterCard?.length !== 0
            ? filterCard?.map(({ id, userName, resume:{resumeDirection,resumeLastName, resumeName, resumeLevel, resumeStack, resumePhone}}) => {
              return (
                <Link to={`users/${id}`} key={id}>
                  <div className={cls.card}>
                    <div className={cls.top}>
                      <div className={cls.direction}>
                        <h2>{resumeDirection}</h2>
                      </div>
                      <div className={cls.level_block}>
                        <h4>{resumeLevel}</h4>
                        <span className={
                          resumeLevel === 'Middle'
                            ? cls.middle
                            : resumeLevel === 'Senior'
                              ? cls.senior
                              : cls.junior
                        }>
                        </span>
                      </div>
                    </div>
                    <div className={cls.footer}>
                      <div className={cls.footer_top}>
                        <h3>{resumeName} {resumeLastName}</h3>
                        <h5>{resumeDirection}</h5>
                      </div>
                      <div className={cls.footer_bottom}>
                        <p>{resumeStack}</p>
                        <p>{resumePhone}</p>
                        {/* <p className={cls.arrow}>
                          {number}
                          <span><BsArrowRight /></span>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
            : <div className={cls.notFound}>
              <h2>По вашему запросу ничего не найдено</h2>
              <img src={notFound} alt="NotFound" />
            </div>
        }
      </div>
    </React.Fragment>
  )
}

export default Card
