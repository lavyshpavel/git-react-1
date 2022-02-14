import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                {postsElements}

                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>
                <Post message={posts[1].message} likesCount={posts[1].likesCount}/>
                <Post message={posts[2].message} likesCount={posts[2].likesCount}/>*/}
            </div>
        </div>
    );
}

export default MyPosts;
