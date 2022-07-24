import React from 'react'
import cls from './Header.module.scss'
import logo from '../../assets/img/logo.png'
import { list } from './List';
import { Link, useNavigate } from 'react-router-dom';
import { VscListSelection } from 'react-icons/vsc'

const Header = () => {

  const navigate = useNavigate()

  return (
    <React.Fragment>
      <nav className={cls.nav}>
        <div className={cls.logo} onClick={() => navigate('/')} >
          <img src={logo} alt="Logo" />
        </div>
        <div className={cls.list}>
          {
            list.map(({ id, title, route }) => (
              <ul className={cls.list} key={id}>
                <li>
                  <Link to={route}>{title}</Link>
                </li>
              </ul>
            ))
          }
        </div>
        <div className={cls.burger_menu}>
          <p><VscListSelection /></p>
        </div>
      </nav>
    </React.Fragment >
  )
}

export default Header
