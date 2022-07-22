import React from 'react';
import {Typography} from "@mui/material";
import c from './Profile.module.scss'
import {BiUserCircle} from 'react-icons/bi'

function Profile() {
  return (
    <React.Fragment>
      <Typography variant={'h5'} align={'center'} >
        Ваш профиль
      </Typography>
      <div className={c.container}>
        <div className={c.userPhoto}>
          <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;