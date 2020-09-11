import React from 'react'

import logo from '../../media/logo.svg'
import placeholder from '../../media/placeholder.svg'
import progetto from '../../media/progetto.jpg'

export default function Intro() {
    return (
        <section className="intro" style={{ backgroundImage: progetto }}>
            <div className="intro__wrapper">
                <div className="container">
                    <img className="intro__logo inject" src={logo} alt="Logo" />
                    <h1 className="h1 c-white">Azienda edile <span className="c-red">Edilnicola</span></h1>
                    <h2 className="copy">
                        Costruiamo i tuoi sogni
                            <div>
                            <span className="icon-circle"><img className="icon-circle__img inject" src={placeholder} alt="" /></span>
                                Savona
                            </div>
                    </h2>
                </div>
            </div>
            <div id="navSentinel"></div>
        </section>
    )
}