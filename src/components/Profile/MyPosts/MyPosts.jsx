import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={style.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
      );
}

export default MyPosts;
