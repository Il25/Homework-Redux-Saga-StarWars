import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTotalInfoVehicles } from "../../../saga/vehicles/actions";

const TotalInfoVehicle = () => {
    const { num } = useParams();
    const vehicle = useSelector(state => state.vehicles.totalInfo);
    const dispatch = useDispatch();

    const getTotalInfoVehicle = async(url) => {
        dispatch(getTotalInfoVehicles(url))
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