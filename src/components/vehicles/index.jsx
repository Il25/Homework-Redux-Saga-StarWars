import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";
import { Link } from "react-router-dom";

const Vehicles = () => {
    const[vehicles, setVehicles] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);
    const [searchVehicles, setSearchVehicles] = useState("");

    const getVehicles = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getVehicles", e));
        setVehicles([...vehicles, ...response.results]);
        setAddUrl(response.next);
    };

    useEffect(() => {
        getVehicles("https://swapi.dev/api/vehicles");
    }, []);

    useEffect(() => {
       addUrl && getVehicles(addUrl);
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about vehicles
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Vehicles you want to find" onChange={(event) => setSearchVehicles(event.target.value)}></input>
                </div>
                {vehicles?.filter((vehicles) => {
                    if(searchVehicles === "") {
                        return vehicles
                    } else if(vehicles.name.toLowerCase().includes(searchVehicles.toLowerCase())) {
                        return vehicles
                    }
                }).map((vehicles, i) => {
                    let vehicleUrl = vehicles.url;
                    var r = /\d+/; 
                    const num = vehicleUrl.match(r); 
                    return (
                        <div key={i} className="columns">
                            <div>
                                <p className="name">
                                    <Link to={`/vehicles/${num[0]}`}>
                                        {vehicles.name}
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

export default Vehicles;