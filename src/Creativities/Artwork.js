import React from 'react'

import ArtistAndWaves from '../pictures/Artwork/ArtistAndWaves.JPG'
import CrashingWaves from '../pictures/Artwork/CrashingWaves.JPG'
import CrestingWave from '../pictures/Artwork/CrestingWave.JPG'
import PointLobos from '../pictures/Artwork/PointLobos.JPG'
import Shark from '../pictures/Artwork/Shark.JPG'

function Artwork() {
    return (
        <div>

            <h1>Oil Painting</h1>

            <div>
                <h2>My First Painting!</h2>
                <h4>Back in 2013, after watching an artist friend of mine creating a painting, I decided I'd like to try my hand at it. This was my first oil painting ever. </h4>
                <div className="closeups">

                    <img src={ArtistAndWaves} alt="me with first painting" height="350px" />
                    <img src={CrashingWaves} alt="first painting" height="350px" />

                </div>
            </div>



            <div>
                <h2>Cresting Wave</h2>
                <h4>I love Bob Ross. This is a painting I made at home with his enthusiastic virtual guidance.</h4>
                <img src={CrestingWave} alt="cresting wave"
                    height="350px"
                />
            </div>

            <div >
                <h2>Point Lobos</h2>
                <h4>Point Lobos is one of my favorite places to hike. This is the tranquil southern shore. </h4>
                <img src={PointLobos} alt="point lobos" height="350px" />
            </div>
            <div>
                <h2>Shark</h2>
                <h4>I love sharks (as long as we're not both in the same water at the same time).</h4>
                <img src={Shark} alt="point lobos"
                    height="350px"
                />
            </div>
            <br></br>
            <br></br>
            <h3 style={{ color: "navy" }}>I have a couple more painting projects in the works, so watch this space for more!</h3>
        </div>
    )
}

export default Artwork