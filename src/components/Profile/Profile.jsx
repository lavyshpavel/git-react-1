import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
    return (
      <div>
      <ProfileInfo />

      <MyPosts />
    </div>
  );
}

export default Profile;
