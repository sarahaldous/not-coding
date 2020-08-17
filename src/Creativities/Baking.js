import React from 'react'

import ArtGallery from '../pictures/Baking/ArtGallery.JPG'
import CarouselCake from '../pictures/Baking/CarouselCake.JPG'
import Monet from '../pictures/Baking/Monet.jpg'
import StarryNight from '../pictures/Baking/StarryNight.jpg'
import TheScream from '../pictures/Baking/TheScream.jpg'
import OtterCake from '../pictures/Baking/OtterCake.jpg'

function Baking() {
    return (
        <div>
            <h1>Baking</h1>
            <div>

                <div >
                    <h2>Carousel Cake</h2>
                    <h4>I made this cake for my son's 4th birthday party. The base is pound cake, the dinosaurs are brownies, and the top is gingerbread. The best part: I put it on a Lazy Susan, so it spins just like a real merry-go-round.</h4>
                    <img src={CarouselCake} alt="carousel cake" height="350px" />
                </div>

                <div >
                    <h2>Otter Cake</h2>
                    <h4>This birthday boy loves otters. But why stop at just one animal when you can create its entire ecosystem? This brownie otter swims on its back holding a sugar cookie starfish, in the knowledge that he can dive down into the candy kelp anytime he needs another one.</h4>
                    <img src={OtterCake} alt="otter cake" height="350px" />
                </div>

                <div >
                    <h2>Art Gallery</h2>
                    <h4>When I threw a bridal shower for a friend who works at an art gallery, I decided to make her her own art gallery made of cupcakes. I featured 3 famous works of art by painting in frosting over rectangles of 9-12 cupcakes.</h4>
                    <img src={ArtGallery} alt="art gallery of cupcakes" height="350px" />
                    <h4>Here's a closer look at each of those "paintings."</h4>

                    <div className="closeups" >

                        <img src={StarryNight} alt="starry night cupcakes" height="270px" />
                        <img src={TheScream} alt="water lilies cupcakes" height="270px" />
                        <img src={Monet} alt="carousel cake" height="270px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baking