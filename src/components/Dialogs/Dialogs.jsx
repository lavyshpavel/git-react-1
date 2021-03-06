import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        let messageText = newMessage.current.value;
        alert(messageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}> Добавить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
