import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTotalInfoPeople } from "../../../saga/people/actions";

const TotalInfoPerson = () => {
    const { num } = useParams();
    const person = useSelector(state => state.people.totalInfo);
    const dispatch = useDispatch();

    const getTotalInfoPerson = async(url) => {
        dispatch(getTotalInfoPeople(url))
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