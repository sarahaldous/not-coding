
import React from 'react'

import PaintbrushesHands from "./pictures/Baking/PaintbrushesHands.jpg"

function Home() {
    return (
        <div >
            <h1 style={{margin: "5%"}}>What I Do When I'm Not Coding</h1>
            <img src={PaintbrushesHands} alt="paintbrushes in hand" height="300px"/>
            <h4>It's true that I spend a fair amount of my time coding.</h4>
            <h4>But it hasn't always been that way.</h4>
            <h4>I've been creating all kinds of art (and I do consider coding to be an art form) for a long time. Coding is my most recent medium, and I'm loving the journey so far.</h4>
            <h4>I thought you might like to see some of the creative projects I've come up with before and during my time as a web developer.</h4>
        </div>
    )
}

export default Home
