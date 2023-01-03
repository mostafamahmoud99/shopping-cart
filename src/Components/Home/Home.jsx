import React from 'react'
import Products from '../Products/Products';

import background from './img/background.jpg';

export default function Home() {
    return (
        <>
            <div className="card  border-0">
                <img src={background} className="card-img"  alt="background" />
            </div>
            <Products/>
        </>
    )
}
