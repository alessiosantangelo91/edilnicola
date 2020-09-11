import React from 'react';

export default function Image(props) {
    return (
        <div className="section__col section__col--slave">
            <img src={props.image} className="section__col__img" alt="" />
        </div>
    )
}