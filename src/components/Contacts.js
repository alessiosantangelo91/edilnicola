import React, { useState } from 'react'

import phone from '../media/phone.svg'

export default function Contacts() {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [content, onChangeContent] = useState('');
    const [isFormSubmitted, onFormSubmit] = useState(false)

    const isValid = val => val && val !== ''

    return (
        <section className="section" id="contacts">
            <div className="container">
                <div className="section__row">
                    <div className="section__col  section__col--master">
                        <h3 className="h3 c-white section__title">Contattaci</h3>
                        <p>
                            Richiedici un preventivo &nbsp;<span className="c-white">senza impegno e gratuitamente</span>.
                            <br /><br />Se invece vuoi semplicemente farci una domanda, <span className="c-white">non esitare!</span>
                            <br />Saremo lieti di risponderti non appena possibile.
                        </p>
                        <p className="contact">
                            <span className="icon-circle">
                                <img className="icon-circle__img inject" src={phone} alt="Tel." />
                            </span>
                            <a href="tel:+393391278129" className="c-white no-underline">+39 339 12 78 129</a>
                        </p>

                        <p className="msg msg--sent">
                            Grazie di averci contattato! Ti risponderemo non appena possibile.
                        </p>
                        <p className="msg msg--error">
                            Si è verificato un errore nell'invio della mail.<br />Riprova tra qualche secondo oppure ricarica la pagina.
                        </p>
                    </div>
                    <div className="section__col section__col--slave">
                        <form action="/">
                            <p>
                                <label htmlFor="name" className="c-white">Nome</label>
                                <input type="text" name="name" value={name} autoComplete="off" placeholder="Il tuo nome" required onChange={(e) => { onChangeName(e.target.value) }} />
                                {isFormSubmitted && !isValid(name) && (<span className="error">Questo campo è obbligatorio</span>)}
                            </p>
                            <p>
                                <label htmlFor="email" className="c-white">Email</label>
                                <input type="email" name="email" value={email} autoComplete="off" placeholder="Il tuo indirizzo email" onChange={(e) => { onChangeEmail(e.target.value) }} required />
                                {isFormSubmitted && !isValid(email) && (<span className="error">Questo campo è obbligatorio</span>)}
                            </p>
                            <p>
                                <label htmlFor="content" className="c-white">Cosa vuoi chiederci?</label>
                                <textarea name="content" placeholder="Vorrei informazioni su..." autoComplete="off" required onChange={(e) => { onChangeContent(e.target.value) }} value={content}>                                    </textarea>
                                {isFormSubmitted && !isValid(content) && (<span className="error">Questo campo è obbligatorio</span>)}
                            </p>
                            <p>
                                <span className="button" id="submit" target="_blank" onClick={() => onFormSubmit(!isFormSubmitted)}>
                                    <svg viewBox="0 0 180 60">
                                        <path d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"></path>
                                    </svg>
                                    <span>Invia</span>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}