import React from 'react';
import s from './Header.module.css';
import {usersType} from "../../App";
import {GoSettings} from "@react-icons/all-files/go/GoSettings";

type HeaderPropsType = {
    user: usersType
}

export const Header: React.FC<HeaderPropsType> = ({user}) => {
    const settings = () => {
        console.log('setting')
    }

    return (
        <div className={s.Header}>
            <div className={s.avaName}>
                <img className={s.ava} src={user.avatar} alt={''}/>
                <span className={s.name}><b>{user.userName}</b></span>
            </div>
            <GoSettings className={s.setting} onClick={settings}/>
        </div>
    )
}

