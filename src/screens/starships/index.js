import React, { useState, useEffect} from "react";
import "./index.css";
import "../../UI/main_style/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewStarships, getStarships, getSearchStarships } from "../../saga/starships/actions";

const Starships = () => {
    const [count,setCount] = useState(1);
    const [searchView, setSearchView] = useState(false);

    const dispatch = useDispatch();
    const starshipsScreen = useSelector(state => state.starships.starships);
    const addNextUrl = useSelector(state => state.starships.addUrl);
    const searchStarships = useSelector(state => state.starships.searchStarships);
    
    const getNewStarshipsScreen = () => {
        dispatch(getNewStarships(addNextUrl));
    };  
     
    const searchStarshipsInput = (event) => {
        if(event){
            setSearchView(true)
            dispatch(getSearchStarships(event.target.value)) 
        }              
    };

    useEffect(()=>{
        dispatch(getStarships())
    },[dispatch]);
    
    useEffect(() => {
        if(addNextUrl) {
            getNewStarshipsScreen(addNextUrl);
        }
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about starships
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Starships you want to find" onChange={searchStarshipsInput}></input>
                </div>
                {searchView ?
                    searchStarships?.map((starships, i) => {
                        let starshipUrl = starships.url;
                        let r = /\d+/; 
                        const num = starshipUrl.match(r); 
                        return (
                            <div key={i} className="columns">
                                <div>
                                    <p className="name">
                                        <Link to={`/starships/${num[0]}`}>
                                            {starships.name}
                                        </Link>
                                    </p>
                                </div>
                            </div> 
                        ) 
                    })
                :
                    starshipsScreen?.map((starships, i) => {
                        let starshipUrl = starships.url;
                        let r = /\d+/; 
                        const num = starshipUrl.match(r); 
                        return (
                            <div key={i} className="columns">
                                <div>
                                    <p className="name">
                                        <Link to={`/starships/${num[0]}`}>
                                            {starships.name}
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

export default Starships;