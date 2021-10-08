import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";
import { Link } from "react-router-dom";

const Films = () => {
    const[films, setFilms] = useState([]);
    const [searchFilms, setSearchFilms] = useState("");

    const getFilms = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getFilms", e));
        setFilms([...films, ...response.results]);
    };

    useEffect(() => {
        getFilms("https://swapi.dev/api/films");
    }, []);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about films
            </div>
            <div className="films_container">
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Films you want to find" onChange={(event) => setSearchFilms(event.target.value)}></input>
                </div>
                {films?.filter((films) => {
                    if(searchFilms === "") {
                        return films
                    } else if(films.title.toLowerCase().includes(searchFilms.toLowerCase())) {
                        return films
                    }
                }).map((films, i) => {
                    let filmUrl = films.url;
                    var r = /\d+/; 
                    const num = filmUrl.match(r); 
                    return (
                        <div  key={i} className="columns films">
                            <div>
                                <p className="name">
                                    <Link to={`/films/${num[0]}`}>
                                        {films.title}
                                    </Link>
                                </p>
                            </div>
                        </div> 
                    )
                })} 
            </div>       
        </div>
    );
};

export default Films;