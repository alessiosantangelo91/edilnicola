import React from 'react';

export default function Content(props) {
    return (
        <div className="section__col section__col--master">
            <h3 className="h3 c-white section__title">{props.title}</h3>
            {props.children}
        </div>
    )
}