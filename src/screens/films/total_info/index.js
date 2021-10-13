import React, { useEffect } from "react";
import "../index";
import { useParams } from 'react-router-dom';
import { getTotalInfoFilms } from "../../../saga/films/actions";
import { useDispatch, useSelector } from "react-redux";

const TotalInfoFilm = () => {
    const { num } = useParams();
    const film = useSelector(state => state.films.totalInfo);
    const dispatch = useDispatch();

    const getTotalInfoFilm = async(url) => {
        dispatch(getTotalInfoFilms(url));
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