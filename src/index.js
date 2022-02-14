import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi', likesCount: 10},
    {id: 2, message: 'How are you', likesCount: 20},
    {id: 3, message: 'It is my first post', likesCount: 30},
    {id: 4, message: 'It is my first post', likesCount: 30},
    {id: 5, message: 'It is my first post', likesCount: 30}
]

let dialogs = [
    {id: 1, name: 'Pasha'},
    {id: 2, name: 'Dasha'},
    {id: 3, name: 'Varya'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Bye'},
    {id: 4, message: 'Bye'},
    {id: 5, message: 'Yo'}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
