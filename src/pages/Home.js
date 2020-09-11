import React from 'react'
import { Link } from 'react-router-dom'

import Contacts from '../components/Contacts'
import Section from '../components/Section'
import SectionImage from '../components/Section/Image'
import SectionContent from '../components/Section/Content'
import HomeIntro from '../components/Home/Intro'

import precisione from '../media/precisione.jpg'
import attrezzatura from '../media/attrezzatura.jpg'
import sicurezza from '../media/sicurezza.jpg'


export default function Home() {
    return (
        <main>
            <HomeIntro></HomeIntro>

            <Section>
                <SectionContent title="Curiamo i dettagli">
                    <p>Edilnicola sa bene che sono i dettagli a fare la differenza. Non lasciamo nulla al caso progettando tutto nei minimi particolari, dalla prima mano di stucco alla verniciatura.<br /></p>
                    <p>I nostri clienti possono testimoniare per noi la qualità del nostro operato.</p>
                </SectionContent>
                <SectionImage image={precisione}></SectionImage>
            </Section>

            <Section>
                <SectionContent title="Qualsiasi riparazione">
                    <p>Siamo in grado di svolgere qualunque tipo di intervento edile, dalla muratura all'impiantistica idrica ed elettrica, dalle riparazioni alle costruzioni.<br /></p>
                    <p>Utilizziamo solo i migliori materiali che acquistiamo da fornitori esperti come <a className="c-white" href="http://www.edilcelle.bigmat.it/site/home.html" target="_blank">Edilcelle</a>.<br />Utilizziamo attrezzatura di alta qualità <a href="https://www.hilti.it/" target="_blank" className="c-white">Hilti</a>.</p>
                </SectionContent>
                <SectionImage image={attrezzatura}></SectionImage>
            </Section>

            <Section>
                <SectionContent title="Operiamo in sicurezza">
                    <p>Rispettiamo i più alti standard di sicurezza. La salute dei nostri operai non passa mai in secondo piano.<br /></p>
                    <p>I nostri professionisti hanno alle spalle migliaia di ore di interventi con ridottissime occorrenze di infortunio.</p>
                </SectionContent>
                <SectionImage image={sicurezza}></SectionImage>
            </Section>

            <Section>
                <Link to="/cantieri" className="h3 no-underline c-white section__biglink">
                    <div className="container">Scopri i nostri cantieri</div>
                </Link>
            </Section>

            <Contacts></Contacts>
        </main>
    )
}