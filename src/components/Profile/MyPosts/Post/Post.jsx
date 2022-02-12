import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
          <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt=""/>
            {props.message}
          <div>
            <span>{props.likesCount} likes</span>
          </div>
        </div>
      );
}

export default Post;
