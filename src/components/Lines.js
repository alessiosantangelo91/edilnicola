import React from 'react'

export default function Lines() {
    return (
        <div>
            <ul className="line-overlay">
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
            </ul>

            <ul className="line-overlay line-overlay--horizontal">
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
                <li className="line-overlay__item"></li>
            </ul>
        </div>
    )
}