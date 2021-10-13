import React, { useEffect } from "react";
import "../index";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTotalInfoSpecies } from "../../../saga/species/actions";

const TotalInfoSpecies = () => {
    const { num } = useParams();
    const species = useSelector(state => state.species.totalInfo);
    const dispatch = useDispatch();

    const getTotalInfoSpeciesScreen = async(url) => {
        dispatch(getTotalInfoSpecies(url));
    };

    useEffect(() => {
        getTotalInfoSpeciesScreen(`https://swapi.dev/api/species/${num}`);
    }, []);

    return (
        <div className='person_card'>
            <div className="inside">
                <div>Name: {species.name}</div>
                <div>Classification: {species.classification}</div>
                <div>Designation: {species.designation}</div>
                <div>Average height: {species.average_height}</div>
                <div>Skin colors: {species.skin_colors}</div>
                <div>Hair colors: {species.hair_colors}</div>
                <div>Eye colors: {species.eye_colors}</div>
                <div>Average lifespan: {species.average_lifespan}</div>
                <div>Language: {species.language}</div>
            </div>
        </div>   
    );
};

export default TotalInfoSpecies;