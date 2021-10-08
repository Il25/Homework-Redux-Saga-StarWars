import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';

const TotalInfoPlanet = () => {
    const[planet, setPlanet] = useState([]);
    const { num } = useParams();

    const getTotalInfoPlanet = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getTotalInfoPlanet", e));
        setPlanet(response);
    };

    useEffect(() => {
        getTotalInfoPlanet(`https://swapi.dev/api/planets/${num}`);
    }, []);
    
    return (
        <div className='planet_card'>
            <div className="inside">
                <div>Name: {planet.name}</div>
                <div>Rotation period: {planet.rotation_period}</div>
                <div>Orbital period: {planet.orbital_period}</div>
                <div>Diameter: {planet.diameter}</div>
                <div>Climate: {planet.climate}</div>
                <div>Gravity: {planet.gravity}</div>
                <div>Terrain: {planet.terrain}</div>
                <div>Surface water: {planet.surface_water}</div>
                <div>Population: {planet.population}</div>
            </div>
        </div>   
    );
};

export default TotalInfoPlanet;