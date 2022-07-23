import React from 'react';
import Button from '@mui/material/Button';
import cls from './Profile.module.scss';

function Profile() {
  return (
    <React.Fragment>
      <div className={cls.profile}>
        <div>
          <div>
            <h2>Ваш Профиль</h2>
          </div>
          <div>
            <img src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg" alt="" />
          </div>
          <div>
            <p>Name Surname</p>
            <span>text</span>
          </div>
          <div>
            <Button variant='contained'>Загрузить новый аватар</Button>
          </div>
          <div>
            <Button variant='outlined'>Удалить</Button>
          </div>
        </div>
        <div>
          <div>
            <h2>Отредактируйте свои личные данные</h2>
          </div>
        </div>
        <div>
          <div>
            <h2></h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;