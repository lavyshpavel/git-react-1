import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return <div className={style.content}>
        <div>
            <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt=""/>
        </div>
        <div>
            ava + description</div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={style.posts}>
                <div className={style.item}>post 1</div>
                <div className='item'>post 2</div>
            </div>
        </div>
    </div>;
}

export default Profile;
