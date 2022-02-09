import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={style.dialog + ' ' + style.active} >
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={style.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>

          <DialogItem name='Pasha' id='1'/>
          <DialogItem name='Dasha' id='2'/>
          <DialogItem name='Varya' id='3'/>

        </div>
        <div className={style.messages}>
          <Message message='Hi'/>
          <Message message='How are you'/>
          <Message message='Bye'/>
          <Message message='Bye'/>
          <Message message='Bye'/>

        </div>
      </div>
    )
}

export default Dialogs;
