import React from 'react';
import cls from "../../pages/General/pages/AddResume/AddResume.module.scss";
import {getResume} from "../../config";
import {useAuth} from "../../hooks/useAuth";
import useIsLogin from "../../hooks/useIsLogin";

function Watch() {
  const {isAuth} = useIsLogin()
  console.log(isAuth.uid)
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    getResume(isAuth.uid).then(r => setData(r.data))
  }, [isAuth.uid])
  
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
                content...
              </p>
            </div>
            <div className={cls.list}>
              <b>ФИО</b>
              <p>
                content...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watch;
