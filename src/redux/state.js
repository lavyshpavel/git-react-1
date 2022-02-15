let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'How are you', likesCount: 20},
            {id: 3, message: 'It is my first post', likesCount: 30},
            {id: 4, message: 'It is my first post', likesCount: 30},
            {id: 5, message: 'It is my first post', likesCount: 30}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Dasha'},
            {id: 3, name: 'Varya'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Bye'},
            {id: 4, message: 'Bye'},
            {id: 5, message: 'Yo'}
        ]
    }
}

export default state;