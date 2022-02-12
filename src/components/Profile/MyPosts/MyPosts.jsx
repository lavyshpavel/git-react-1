import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you', likesCount: 20},
        {id: 3, message: 'It is my first post', likesCount: 30}
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
