import React from 'react';
import s from './Message.module.css'
import {usersType} from "../../App";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line";
import {FaPencilAlt} from "@react-icons/all-files/fa/FaPencilAlt";


type MessagePropsType = {
    user: usersType
    messageText: string
    myMessage: boolean
    deleteMessage: (idMessage: string) => void
    idMessage: string
}
export const Message: React.FC<MessagePropsType> = ({
                                                        myMessage,
                                                        user,
                                                        messageText,
                                                        deleteMessage,
                                                        idMessage
                                                    }) => {

    const deleteMessageHandler = () => {
        deleteMessage(idMessage)
    }

    return (
        <div className={myMessage ? `${s.block} ${s.myMessage}` : s.block}>
            <div className={s.avaName}>
                <img className={s.avatar} src={user.avatar} alt={''}></img>
                <div>{user.userName}</div>
            </div>
            <div className={s.messageBlock}>
                <div className={s.message}>{messageText}</div>
                <div className={s.icons}>
                    <RiDeleteBin6Line onClick={deleteMessageHandler}/>
                    <FaPencilAlt/>
                </div>
            </div>
        </div>
    );
};

