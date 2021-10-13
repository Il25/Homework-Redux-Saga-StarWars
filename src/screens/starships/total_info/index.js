import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTotalInfoStarships } from "../../../saga/starships/actions";


const TotalInfoStarship = () => {
    const { num } = useParams();
    const starship = useSelector(state => state.starships.totalInfo);
    const dispatch = useDispatch();

    const getTotalInfoStarship = async(url) => {
        dispatch(getTotalInfoStarships(url))
    };

    useEffect(() => {
        getTotalInfoStarship(`https://swapi.dev/api/starships/${num}`);
    }, []);

    return (
        <div className="starship_card">
            <div className="inside">
                <div>Name: {starship.name}</div>
                <div>Model: {starship.model}</div>
                <div>Manufacturer: {starship.manufacturer}</div>
                <div>Cost in credits: {starship.cost_in_credits}</div>
                <div>Length: {starship.length}</div>
                <div>Max atmosphering speed: {starship.max_atmosphering_speed}</div>
                <div>Crew: {starship.crew}</div>
                <div>Passengers: {starship.passengers}</div>
                <div>Cargo capacity: {starship.cargo_capacity}</div>
                <div>Consumables: {starship.consumables}</div>
                <div>Hyperdrive rating: {starship.hyperdrive_rating}</div>
                <div>MGLT: {starship.MGLT}</div>
                <div>Starship class: {starship.starship_class}</div>
            </div>
        </div>  
    );
};

export default TotalInfoStarship;