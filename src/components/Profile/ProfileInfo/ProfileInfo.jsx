import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt=""/>
        </div>
        <div className={style.desriptionBlock}>
            ava + description</div>
    </div>
  );
}

export default ProfileInfo;
