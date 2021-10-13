import React, { useEffect } from "react";
import "../index";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTotalInfoPlanets } from "../../../saga/planets/actions";

const TotalInfoPlanet = () => {
    const { num } = useParams();
    const planet = useSelector(state => state.planets.totalInfo);
    const dispatch = useDispatch();

    const getTotalInfoPlanet = async(url) => {
        dispatch(getTotalInfoPlanets(url));
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