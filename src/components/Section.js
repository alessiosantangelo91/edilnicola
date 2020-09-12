import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function Section(props) {
    const [ref, inView] = useInView({
        threshold: [0.5]
    });

    const getClass = () => `section ${inView ? 'section--in-view' : ''}`

    return (
        <section className={getClass()} ref={ref}>
            <div className="container">
                <div className="section__row">
                    {props.children}
                </div>
            </div>
        </section >
    )
}