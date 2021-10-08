import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';

const TotalInfoPerson = () => {
    const[person, setPerson] = useState([]);
    const { num } = useParams();

    const getTotalInfoPerson = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getTotalInfoPerson", e));
        setPerson(response);
    };

    useEffect(() => {
        getTotalInfoPerson(`https://swapi.dev/api/people/${num}`);
    }, []);

    return (
        <div className="person_card">
            <div className="inside">
                <div>Name: {person.name}</div>
                <div>Height: {person.height}</div>
                <div>Mass: {person.mass}</div>
                <div>Hair color: {person.hair_color}</div>
                <div>Skin color: {person.skin_color}</div>
                <div>Birth year: {person.birth_year}</div>
                <div>Gender: {person.gender}</div>
            </div>
        </div>       
    );
};

export default TotalInfoPerson;