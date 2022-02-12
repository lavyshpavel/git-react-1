import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'How are you', likesCount: 20},
        {id: 3, message: 'It is my first post', likesCount: 30},
        {id: 4, message: 'It is my first post', likesCount: 30},
        {id: 5, message: 'It is my first post', likesCount: 30}
    ]

    let postsElements = posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                { postsElements }

                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>
                <Post message={posts[1].message} likesCount={posts[1].likesCount}/>
                <Post message={posts[2].message} likesCount={posts[2].likesCount}/>*/}
            </div>
        </div>
    );
}

export default MyPosts;
