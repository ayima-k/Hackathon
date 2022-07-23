import React from 'react';
import {FiEdit} from "react-icons/fi";
import {Button} from "@mui/material";
import InfoCard from "./components/InfoCard";



function Profile() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-7 mt-4">
            <div className="card mb-3 content ">
              <h2 className="m-3 pt-3">
                Мой профиль
              </h2>
              <div className="card-body">
                <InfoCard title={'Имя'} text={'Burt Macklin'}/>
                <InfoCard title={'Email'} text={'burt.macklin@gmail.com'}/>
                <InfoCard title={'Пароль'} text={'у вас пока нет пароля'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;