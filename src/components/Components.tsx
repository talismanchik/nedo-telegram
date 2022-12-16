import React from 'react';
import {messageType, usersType} from "../App";
import {Header} from "./01Header/Header";
import {Footer} from "./03Footer/Footer";
import s from './Components.module.css';
import {Message} from "./02Message/Message";

type ComponentsPropsType = {
    user: usersType
    messages: messageType[]
    users: usersType[]
    addMessage: (idUser: string, message: string) => void
    deleteMessage: (idMessage:string) => void

}

export const Components: React.FC<ComponentsPropsType> = (
    {
        user,
        messages,
        users,
        addMessage,
        deleteMessage
    }) => {


    let messagesMap = messages.map(el => {

        const userLocal = users.filter(elU => elU.id === el.idUser)[0]
        const myMessage = user.id === el.idUser

        return (
            <Message
                key={el.idMessage}
                idMessage={el.idMessage}
                deleteMessage={deleteMessage}
                myMessage={myMessage}
                user={userLocal}
                messageText={el.message}/>
        )
    })


    return (
        <div className={s.components}>
            <Header user={user}/>
            <div className={s.messageScreen}>
                {messagesMap}
            </div>
            <Footer addMessage={addMessage} userID={user.id}/>
        </div>
    );
};

