import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div>
           <ul style={{listStyle: "none", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
               <li> <Link to="/">Home</Link></li>
                <li><Link to="/artwork" >Artwork</Link></li>
                <li><Link to="/baking">Baking</Link></li>
                <li><Link to="/drawing">Drawing</Link></li>
           </ul>   
        </div>
    )
}

export default Menu