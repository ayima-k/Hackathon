import React from 'react';
import cls from "../../pages/General/pages/AddResume/AddResume.module.scss";

function Watch() {
  return (
    <>
      <div className={cls.watch}>
        <div className={cls.watch_block}>
          <div className={cls.block_top}>
            <h2>Предварительный просмотр</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watch;
