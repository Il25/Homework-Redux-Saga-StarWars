import React from "react";
import "./index.css"
import logoStarWars from "../../assets/star-wars-2.svg";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <header className="header">
            <div className="header_logo_img">
                <img className="header_img" src={logoStarWars} alt="logoStarWars"></img>
            </div>
            <div className="header_navigation">
                <ul>
                    <li>   
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/people">
                            Characters
                        </Link> 
                    </li>
                    <li>
                        <Link to="/planets">
                            Planets
                        </Link>
                    </li>
                    <li>
                        <Link to="/films">
                            Films
                        </Link>
                    </li>
                    <li>
                        <Link to="/species">
                            Species
                        </Link>
                    </li>
                    <li>
                        <Link to="/vehicles">
                            Vehicles
                        </Link>
                    </li>
                    <li>
                        <Link to="/starships">
                            Starships
                        </Link>
                    </li>
                </ul>
            </div>
        </header>   
    );
};

export default Header;