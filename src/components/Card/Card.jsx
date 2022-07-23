import React from 'react'
import cls from './Card.module.scss'
import { CardList } from './List'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import Variants from '../Skeleton/CardSkelet/CardSkelet'


const Card = () => {
  return (
    <React.Fragment>
      <div className={cls.container}>
        {
          CardList.length !== 0
            ? CardList.map(({ id, name, direction, skills, number, level }) => {
              console.log(level);
              return (
                <Link to={`users/${id}`} key={id}>
                  <div className={cls.card}>
                    <div className={cls.top}>
                      <div className={cls.direction}>
                        <h2>{direction}</h2>
                      </div>
                      <div className={cls.level_block}>
                        <h4>{level}</h4>
                        <span className={
                          level === 'middle'
                            ? cls.middle
                            : level === 'senior'
                              ? cls.senior
                              : cls.junior
                        }>
                        </span>
                      </div>
                    </div>
                    <div className={cls.footer}>
                      <div className={cls.footer_top}>
                        <h3>{name}</h3>
                        <h5>{direction}</h5>
                      </div>
                      <div className={cls.footer_bottom}>
                        <p>{skills}</p>
                        <p>{number}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }) : <Variants />
        }

      </div>
    </React.Fragment>
  )
}

export default Card
