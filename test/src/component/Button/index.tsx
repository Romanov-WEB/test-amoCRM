import React from 'react';

interface PropsButton {
    text: string
    style: string
}
export default function Button({text, style}: PropsButton): JSX.Element {
    return (
        <button className={style}>
            {text}
        </button>
    );
}
