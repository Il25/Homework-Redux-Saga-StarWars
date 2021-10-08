import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';

const TotalInfoVehicle = () => {
    const[vehicle, setVehicle] = useState([]);
    const { num } = useParams();
    
    const getTotalInfoVehicle = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getTotalInfoVehicle", e));
        setVehicle(response);
    };

    useEffect(() => {
        getTotalInfoVehicle(`https://swapi.dev/api/vehicles/${num}`);
    }, []);

    return (
        <div className='vehicle_card'>
            <div className="inside">
                <div>Name: {vehicle.name}</div>
                <div>Model: {vehicle.model}</div>
                <div>Manufacturer: {vehicle.manufacturer}</div>
                <div>Cost in credits: {vehicle.cost_in_credits}</div>
                <div>Length: {vehicle.length}</div>
                <div>Max atmosphering speed: {vehicle.max_atmosphering_speed}</div>
                <div>Crew: {vehicle.crew}</div>
                <div>Passengers: {vehicle.passengers}</div>
                <div>Cargo capacity: {vehicle.cargo_capacity}</div>
                <div>Consumables: {vehicle.consumables}</div>
                <div>Vehicle class: {vehicle.vehicle_class}</div>
            </div>
        </div> 
    );
};

export default TotalInfoVehicle;