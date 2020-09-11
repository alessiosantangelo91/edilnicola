import React, { useState, useEffect } from 'react'

import LazyLoad from 'react-lazyload';

import cantiere1 from '../media/cantieri/cantiere1.jpeg'
import cantiere2 from '../media/cantieri/cantiere2.jpeg'
import cantiere3 from '../media/cantieri/cantiere3.jpeg'
import cantiere4 from '../media/cantieri/cantiere4.jpeg'
import cantiere5 from '../media/cantieri/cantiere5.jpeg'
import cantiere6 from '../media/cantieri/cantiere6.jpeg'
import cantiere7 from '../media/cantieri/cantiere7.jpeg'
import cantiere8 from '../media/cantieri/cantiere8.jpeg'
import cantiere9 from '../media/cantieri/cantiere9.jpeg'
import cantiere10 from '../media/cantieri/cantiere10.jpeg'

import cantiere11 from '../media/cantieri/cantiere11.jpeg'
import cantiere12 from '../media/cantieri/cantiere12.jpeg'
import cantiere13 from '../media/cantieri/cantiere13.jpeg'
import cantiere14 from '../media/cantieri/cantiere14.jpeg'
import cantiere15 from '../media/cantieri/cantiere15.jpeg'
import cantiere16 from '../media/cantieri/cantiere16.jpeg'
import cantiere17 from '../media/cantieri/cantiere17.jpeg'
import cantiere18 from '../media/cantieri/cantiere18.jpeg'
import cantiere19 from '../media/cantieri/cantiere19.jpeg'

import cantiere20 from '../media/cantieri/cantiere20.jpeg'
import cantiere21 from '../media/cantieri/cantiere21.jpeg'
import cantiere22 from '../media/cantieri/cantiere22.jpeg'
import cantiere23 from '../media/cantieri/cantiere23.jpeg'
import cantiere24 from '../media/cantieri/cantiere24.jpeg'
import cantiere25 from '../media/cantieri/cantiere25.jpeg'
import cantiere26 from '../media/cantieri/cantiere26.jpeg'
import cantiere27 from '../media/cantieri/cantiere27.jpeg'
import cantiere28 from '../media/cantieri/cantiere28.jpeg'
import cantiere29 from '../media/cantieri/cantiere29.jpeg'

import cantiere30 from '../media/cantieri/cantiere30.jpeg'
import cantiere31 from '../media/cantieri/cantiere31.jpeg'
import cantiere32 from '../media/cantieri/cantiere32.jpeg'
import cantiere33 from '../media/cantieri/cantiere33.jpeg'
import cantiere34 from '../media/cantieri/cantiere34.jpeg'
import cantiere35 from '../media/cantieri/cantiere35.jpeg'
import cantiere36 from '../media/cantieri/cantiere36.jpeg'
import cantiere37 from '../media/cantieri/cantiere37.jpeg'
import cantiere38 from '../media/cantieri/cantiere38.jpeg'
import cantiere39 from '../media/cantieri/cantiere39.jpeg'

import cantiere40 from '../media/cantieri/cantiere40.jpeg'
import cantiere41 from '../media/cantieri/cantiere41.jpeg'
import cantiere42 from '../media/cantieri/cantiere42.jpeg'
import cantiere43 from '../media/cantieri/cantiere43.jpeg'
import cantiere44 from '../media/cantieri/cantiere44.jpeg'
import cantiere45 from '../media/cantieri/cantiere45.jpeg'
import cantiere46 from '../media/cantieri/cantiere46.jpeg'
import cantiere47 from '../media/cantieri/cantiere47.jpeg'
import cantiere48 from '../media/cantieri/cantiere48.jpeg'
import cantiere49 from '../media/cantieri/cantiere29.jpeg'


export default function Cantieri() {
    const [cantieri] = useState([
        cantiere1,
        cantiere2,
        cantiere3,
        cantiere4,
        cantiere5,
        cantiere6,
        cantiere7,
        cantiere8,
        cantiere9,
        cantiere10,
        cantiere11,
        cantiere12,
        cantiere13,
        cantiere14,
        cantiere15,
        cantiere16,
        cantiere17,
        cantiere18,
        cantiere19,
        cantiere20,
        cantiere21,
        cantiere22,
        cantiere23,
        cantiere24,
        cantiere25,
        cantiere26,
        cantiere27,
        cantiere28,
        cantiere29,
        cantiere30,
        cantiere31,
        cantiere32,
        cantiere33,
        cantiere34,
        cantiere35,
        cantiere36,
        cantiere37,
        cantiere38,
        cantiere39,
        cantiere40,
        cantiere41,
        cantiere42,
        cantiere43,
        cantiere44,
        cantiere45,
        cantiere46,
        cantiere47,
        cantiere48,
        cantiere49,
    ])

    return (
        <div className="gallery">
            {cantieri.map((imgPath, index) => {
                return (
                    <LazyLoad key={index}>
                        <img src={imgPath} alt="" key={index} className="gallery__item" />
                    </LazyLoad>
                )
            })
            }
        </div>
    )
}