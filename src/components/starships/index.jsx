import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";
import { Link } from "react-router-dom";

const Starships = () => {
    const[starships, setStarships] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);
    const [searchStarships, setSearchStarships] = useState("");

    const getStarships = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getStarships", e));
        setStarships([...starships, ...response.results]);
        setAddUrl(response.next);
    };    

    useEffect(() => {
        getStarships("https://swapi.dev/api/starships");
    }, []);

    useEffect(() => {
       addUrl && getStarships(addUrl);
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about starships
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Starships you want to find" onChange={(event) => setSearchStarships(event.target.value)}></input>
                </div>
                {starships?.filter((starships) => {
                    if(searchStarships === "") {
                        return starships
                    } else if(starships.name.toLowerCase().includes(searchStarships.toLowerCase())) {
                        return starships
                    }
                }).map((starships, i) => {
                    let starshipUrl = starships.url;
                    var r = /\d+/; 
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
                })}
                <button className="addMore_button" disabled={count > 3} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Starships;