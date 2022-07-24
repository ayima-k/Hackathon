import React from 'react';
import Button from '@mui/material/Button';
import cls from './Profile.module.scss';
import { useAuth } from '../../../../hooks/useAuth';
import { getUsers } from '../../../../config';

function Profile() {

  const { id } = useAuth()

  React.useEffect(() => {

    getUsers(id).then(r => console.log(r))

  })

  return (
    <React.Fragment>
      <div className={cls.container}>
        <div>
          <div>
            <h2></h2>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p></p>
            <span></span>
          </div>
          <div>
            <Button></Button>
          </div>
          <div>
            <Button></Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;