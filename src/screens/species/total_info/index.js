import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';

const TotalInfoSpecies = () => {
    const[species, setSpecies] = useState([]);
    const { num } = useParams();

    const getTotalInfoSpecies = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getTotalInfoSpecies", e));
        setSpecies(response);
    };

    useEffect(() => {
        getTotalInfoSpecies(`https://swapi.dev/api/species/${num}`);
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