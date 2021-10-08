import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";
import { Link } from "react-router-dom";

const Species = () => {
    const[species, setSpecies] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);
    const [searchSpecies, setSearchSpecies] = useState("");

    const getSpecies = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getSpecies", e));
        setSpecies([...species, ...response.results]);
        setAddUrl(response.next);
    };

    useEffect(() => {
        getSpecies("https://swapi.dev/api/species");
    }, []);

    useEffect(() => {
       addUrl && getSpecies(addUrl);
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about species
            </div>
            <div>
                <div className="search_div">
                    <input tupe="text" className="search_input" placeholder="Enter the name of the Species you want to find" onChange={(event) => setSearchSpecies(event.target.value)}></input>
                </div>
                {species?.filter((species) => {
                    if(searchSpecies === "") {
                        return species
                    } else if(species.name.toLowerCase().includes(searchSpecies.toLowerCase())) {
                        return species
                    }
                }).map((species, i) => {
                    let speciesUrl = species.url;
                    var r = /\d+/; 
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
                })}
                <button className="addMore_button" disabled={count > 3} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Species;