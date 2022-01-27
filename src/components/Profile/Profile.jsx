import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
      <div className={style.content}>
        <div>
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt=""/>
        </div>
        <div>
            ava + description</div>
        <MyPosts />
    </div>
  );
}

export default Profile;
