import React from 'react'

export default function Lines() {
    const lines = new Array(6).fill(0)

    return (
        <div>
            <ul className="line-overlay">
                {lines.map((l, index) => <li className="line-overlay__item" key={index}></li>)}
            </ul>
            <ul className="line-overlay line-overlay--horizontal">
                {lines.map((l, index) => <li className="line-overlay__item" key={index}></li>)}
            </ul>
        </div>
    )
}