import React, { useState, useEffect} from "react";
import "../index";
import { useParams } from 'react-router-dom';

const TotalInfoFilm = () => {
    const[film, setFilm] = useState([]);
    const { num } = useParams();

    const getTotalInfoFilm = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getTotalInfoFilm", e));
        setFilm(response);
    };

    useEffect(() => {
        getTotalInfoFilm(`https://swapi.dev/api/films/${num}`);
    }, []);

    return (
        <div className='film_card'>
            <div className="inside">
                <div>Title: {film.title}</div>
                <div>Episode id: {film.episode_id}</div>
                <div>Director: {film.director}</div>
                <div>Producer: {film.producer}</div>
                <div>Release date: {film.release_date}</div>
            </div>
        </div>   
    );
};

export default TotalInfoFilm;