import React from 'react'

export default function Section(props) {
    return (
        <section className="section">
            <div className="container">
                <div className="section__row">
                    {props.children}
                </div>
            </div>
        </section>
    )
}