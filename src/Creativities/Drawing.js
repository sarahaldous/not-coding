import React from 'react'

import Citrus from '../pictures/Drawing/Citrus.jpg'

function Drawing() {
    return (
        <div>
            <h1>Drawing</h1>
            <div>

                <div >
                    <h2>Citrus</h2>
                    <h4>I hadn't done any drawing in a long time, so I got out the graphite and charcoal pencils this week and drew these delicious citrus fruits.</h4>
                    <img src={Citrus} alt="citrus picture" height="350px" />
                </div>
            </div>
        </div>
    )
}

export default Drawing