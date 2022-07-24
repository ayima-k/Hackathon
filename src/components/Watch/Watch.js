import React from 'react';
import cls from "../../pages/General/pages/AddResume/AddResume.module.scss";
import {getResume} from "../../config";

import useIsLogin from "../../hooks/useIsLogin";

function Watch() {
  const [data, setData] = React.useState(null)
  const {isAuth} = useIsLogin()
  
  React.useEffect(() => {
    getResume(isAuth?.uid).then()
  }, [isAuth?.uid, setData])
  
  if(!data) return <p>......</p>
  return (
    <>
      <div className={cls.watch}>
        <div className={cls.watch_block}>
          <div className={cls.block_top}>
            <h2>Предварительный просмотр</h2>
          </div>
          <div className={cls.block_main}>
            <div className={cls.list}>
              <b>ФИО</b>
              <p>
                <span>{data.resumeName}</span>
                <span>{data.resumeLastName}</span>
              </p>
            </div>
            <div className={cls.list}>
              <b>Email</b>
              <p>
                {data.resumeEmail}
              </p>
            </div>
            <div className={cls.list}>
              <b>Телефон</b>
              <p>
                {data.resumePhone}
              </p>
            </div>
            <div className={cls.list}>
              <b>Ваш уровень</b>
              <p>
                {data.resumeLevel}
              </p>
            </div>
            <div className={cls.list}>
              <b>Опыт работы</b>
              <p>
                {data.resumeExperience} года
              </p>
            </div>
            <div className={cls.list}>
              <b>Ваш стэк</b>
              <p>
                {data.resumeStack}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watch;
