import React from 'react';
type ButtonPropsType={
    name: string
    call: ()=>void
}
export const Button = (props: ButtonPropsType) => {
    return (
        <span>
            <button onClick={props.call}>{props.name}</button>
        </span>
    );
};

