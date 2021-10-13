import React, { useState, useEffect} from "react";
import "./index.css";
import "../../UI/main_style/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewPlanets, getPlanets, getSearchPlanets } from "../../saga/planets/actions";

const Planets = () => {
    const [count,setCount] = useState(1);
    const [searchView, setSearchView] = useState(false);

    const dispatch = useDispatch();
    const planetsScreen = useSelector(state => state.planets.planets);
    const addNextUrl = useSelector(state => state.planets.addUrl);
    const searchPlanets = useSelector(state => state.planets.searchPlanets);
    
    const getNewPlanetsScreen = () => {
        dispatch(getNewPlanets(addNextUrl));
    };  
     
    const searchPlanetsInput = (event) => {
        if(event){
            setSearchView(true)
            dispatch(getSearchPlanets(event.target.value)) 
        }              
    };

    useEffect(()=>{
        dispatch(getPlanets())
    },[dispatch]);
    
    useEffect(() => {
        if(addNextUrl) {
            getNewPlanetsScreen(addNextUrl);
        }
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about planets
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Planets you want to find" onChange={searchPlanetsInput}></input>
                </div>
                {searchView ?
                    searchPlanets?.map((planets, i) => {
                        let planetUrl = planets.url;
                        let r = /\d+/; 
                        const num = planetUrl.match(r); 
                        return (
                            <div key={i} className="columns">
                                <div>
                                    <p className="name">
                                        <Link to={`/planets/${num[0]}`}>
                                            {planets.name}
                                        </Link>
                                    </p>
                                </div>
                            </div>  
                        ) 
                    })
                :
                    planetsScreen?.map((planets, i) => {
                        let planetUrl = planets.url;
                        let r = /\d+/; 
                        const num = planetUrl.match(r); 
                        return (
                            <div key={i} className="columns">
                                <div>
                                    <p className="name">
                                        <Link to={`/planets/${num[0]}`}>
                                            {planets.name}
                                        </Link>
                                    </p>
                                </div>
                            </div>  
                        ) 
                    })
                } 
                <button className="addMore_button" disabled={count > 5} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Planets;