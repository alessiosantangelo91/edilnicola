import React from 'react'
import { Link } from 'react-router-dom'

import Contacts from '../components/Contacts'
import Section from '../components/Section'

import logo from '../media/logo.svg'
import placeholder from '../media/placeholder.svg'
import precisione from '../media/precisione.jpg'
import attrezzatura from '../media/attrezzatura.jpg'
import sicurezza from '../media/sicurezza.jpg'
import progetto from '../media/progetto.jpg'

export default function Home() {
    return (
        <main>
            <section className="intro" style={{ backgroundImage: progetto }}>
                <div className="intro__wrapper">
                    <div className="container">
                        <img className="intro__logo inject" src={logo} alt="Logo" />
                        <h1 className="h1 c-white">Azienda edile <span className="c-red">Edilnicola</span></h1>
                        <h2 className="copy">
                            Costruiamo i tuoi sogni
                            <div>
                                <span className="icon-circle">
                                    <img className="icon-circle__img inject" src={placeholder} alt="" />
                                </span>
                                Savona
                            </div>
                        </h2>
                    </div>
                </div>
                <div id="navSentinel"></div>
            </section>

            <Section isReverse="true">
                <div className="container">
                    <div className="section__row">
                        <div className="section__col  section__col--master">
                            <h3 className="h3 c-white section__title">Curiamo i dettagli</h3>
                            <p>Edilnicola sa bene che sono i dettagli a fare la differenza. Non lasciamo nulla al caso progettando tutto nei minimi particolari, dalla prima mano di stucco alla verniciatura.<br />
                            </p>
                            <p>I nostri clienti possono testimoniare per noi la qualità del nostro operato.</p>
                        </div>
                        <div className="section__col section__col--slave">
                            <img src={precisione} className="section__col__img" alt="Precisione" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section isReverse="false">
                <div className="container">
                    <div className="section__row">
                        <div className="section__col  section__col--master">
                            <h3 className="h3 c-white section__title">Qualsiasi riparazione</h3>
                            <p>Siamo in grado di svolgere qualunque tipo di intervento edile, dalla muratura all'impiantistica idrica ed elettrica, dalle riparazioni alle costruzioni.<br /></p>
                            <p>Utilizziamo solo i migliori materiali che acquistiamo da fornitori esperti come <a className="c-white"
                                href="http://www.edilcelle.bigmat.it/site/home.html">Edilcelle</a>.<br />Utilizziamo attrezzatura di alta qualità <a href="https://www.hilti.it/" target="_blank" className="c-white">Hilti</a>.</p>
                        </div>
                        <div className="section__col section__col--slave">
                            <img src={attrezzatura} className="section__col__img" alt="Attrezzatura" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section isReverse="true">
                <div className="container">
                    <div className="section__row">
                        <div className="section__col  section__col--master">
                            <h3 className="h3 c-white section__title">Operiamo in sicurezza</h3>
                            <p>Rispettiamo i più alti standard di sicurezza. La salute dei nostri operai non passa mai in secondo piano.<br /></p>
                            <p>I nostri professionisti hanno alle spalle migliaia di ore di interventi con ridottissime occorrenze di infortunio.</p>
                        </div>
                        <div className="section__col section__col--slave">
                            <img src={sicurezza} className="section__col__img" alt="Sicurezza" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="section">

                <Link to="/cantieri" className="h3 no-underline c-white section__biglink">
                    <div className="container">
                        Scopri i nostri cantieri
                    </div>
                </Link>

            </Section>

            <Contacts></Contacts>
        </main >
    )
}