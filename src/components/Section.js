import React from 'react'

export default function Section(props) {
    const getClass = () => props.isReverse ? 'section section--reverse' : 'section'

    return (
        <section className={getClass()}>
            {props.children}
        </section>
    )
}