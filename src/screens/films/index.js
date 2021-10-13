import React, { useState, useEffect} from "react";
import "./index.css";
import "../../UI/main_style/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilms, getSearchFilms } from "../../saga/films/actions";

const Films = () => {
    const [searchView, setSearchView] = useState(false);

    const dispatch = useDispatch();
    const filmsScreen = useSelector(state => state.films.films);
    const searchFilms = useSelector(state => state.films.searchFilms);
     
    const searchFilmsInput = (event) => {
        if(event){
            setSearchView(true);
            dispatch(getSearchFilms(event.target.value));
        }              
    };

    useEffect(()=>{
        dispatch(getFilms());
    },[dispatch]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about films
            </div>
            <div className="films_container">
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Films you want to find" onChange={searchFilmsInput}></input>
                </div>
                {searchView ?
                    searchFilms?.map((films, i) => {
                        let filmUrl = films.url;
                        let r = /\d+/; 
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
                    })
                :
                    filmsScreen?.map((films, i) => {
                        let filmUrl = films.url;
                        let r = /\d+/; 
                        const num = filmUrl.match(r); 
                        return (
                            <div key={i} className="columns films">
                                <div>
                                    <p className="name">
                                        <Link to={`/films/${num[0]}`}>
                                            {films.title}
                                        </Link>
                                    </p>
                                </div>
                            </div> 
                        )
                    })
                } 
            </div>       
        </div>
    );
};

export default Films;