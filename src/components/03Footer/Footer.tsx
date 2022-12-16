import React, {ChangeEvent, useState} from 'react';
import s from './Footer.module.css'
import {FiSend} from "@react-icons/all-files/fi/FiSend";

type FooterPropsType = {
    addMessage: (idUser: string, message: string) => void
    userID: string
}

export const Footer = (props: FooterPropsType) => {
    const [inputValue, setInputValue] = useState('')

    const setInput = (e: ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.currentTarget.value)
    }

    const addMessageHandler = () => {
        props.addMessage(props.userID, inputValue)
        setInputValue('')
    }
    return (
        <div className={s.footer}>
            <input className={s.input} value={inputValue} onChange={setInput}/>
            <FiSend className={s.send} onClick={addMessageHandler}/>
        </div>
    );
};

