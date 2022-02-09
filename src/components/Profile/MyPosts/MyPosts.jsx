import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
              <div>
                <textarea></textarea>
              </div>
              <div>
                <button>Add Post</button>
              </div>
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
