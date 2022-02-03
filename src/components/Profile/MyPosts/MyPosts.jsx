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
                <Post name='Pasha' likes='10' />
                <Post name='Dasha' likes='20' />
                <Post name='Varya' likes='30' />
            </div>
        </div>
      );
}

export default MyPosts;
