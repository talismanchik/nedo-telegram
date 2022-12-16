import React, {useState} from 'react';
import s from './App.module.css';
import {v1} from "uuid";
import {Components} from "./components/Components";
import Eugene from './Eugene.jpg'
import Victor from './Victor.jpg'

export type usersType = {
    id: string
    userName: string
    avatar: string
}

export type messageType = {
    idUser: string
    idMessage: string
    message: string
}


function App() {
    const firstUserID = v1()
    const secondUserID = v1()
    const users = [
        {id: firstUserID, userName: 'Eugene', avatar: Eugene},
        {id: secondUserID, userName: 'Victor', avatar: Victor},
    ]
    const [messages, setMessages] = useState<messageType[]>([])

    const addMessage = (idUser: string, message: string) => {
        const newMessage: messageType = {idUser: idUser, idMessage: v1(), message: message}
        setMessages([...messages, newMessage])
    }

    const deleteMessage =(idMessage:string)=>{
        setMessages(messages.filter(el=> el.idMessage !==idMessage))
        console.log('delete')
    }

    let usersMap = users.map(el => {
        return (
            <div key={el.id} className={s.Components}>
                <Components
                    user={el}
                    messages={messages}
                    users={users}
                    addMessage={addMessage}
                    deleteMessage={deleteMessage}
                />
            </div>
        )
    })

    return (
        <div className={s.App}>

            {usersMap}

        </div>
    );
}

export default App;
