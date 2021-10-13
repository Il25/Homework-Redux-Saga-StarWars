import React, { useState, useEffect} from "react";
import "./index.css";
import "../../UI/main_style/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewSpecies, getSpecies, getSearchSpecies } from "../../saga/species/actions";

const Species = () => {
    const [count,setCount] = useState(1);
    const [searchView, setSearchView] = useState(false);

    const dispatch = useDispatch();
    const speciesScreen = useSelector(state => state.species.species);
    const addNextUrl = useSelector(state => state.species.addUrl);
    const searchSpecies = useSelector(state => state.species.searchSpecies);
    
    const getNewSpeciesScreen = () => {
        dispatch(getNewSpecies(addNextUrl));
    };  
     
    const searchSpeciesInput = (event) => {
        if(event){
            setSearchView(true)
            dispatch(getSearchSpecies(event.target.value)) 
        }              
    };

    useEffect(()=>{
        dispatch(getSpecies())
    },[dispatch]);
    
    useEffect(() => {
        if(addNextUrl) {
            getNewSpeciesScreen(addNextUrl);
        }
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about species
            </div>
            <div>
                <div className="search_div">
                    <input tupe="text" className="search_input" placeholder="Enter the name of the Species you want to find" onChange={searchSpeciesInput}></input>
                </div>
                {searchView ?
                    searchSpecies?.map((species, i) => {
                        let speciesUrl = species.url;
                        let r = /\d+/; 
                        const num = speciesUrl.match(r); 
                        return (
                            <div key={i} className="columns">
                                <div>
                                    <p className="name">
                                        <Link to={`/species/${num[0]}`}>
                                            {species.name}
                                        </Link>
                                    </p>
                                </div>
                            </div> 
                        ) 
                    })
                :
                    speciesScreen?.map((species, i) => {
                        let speciesUrl = species.url;
                        let r = /\d+/; 
                        const num = speciesUrl.match(r); 
                        return (
                            <div key={i} className="columns">
                                <div>
                                    <p className="name">
                                        <Link to={`/species/${num[0]}`}>
                                            {species.name}
                                        </Link>
                                    </p>
                                </div>
                            </div> 
                        ) 
                    })
                }
                <button className="addMore_button" disabled={count > 3} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Species;