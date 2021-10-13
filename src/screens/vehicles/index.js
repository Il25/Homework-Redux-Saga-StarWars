import React, { useState, useEffect} from "react";
import "./index.css";
import "../../UI/main_style/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewVehicles, getVehicles, getSearchVehicles } from "../../saga/vehicles/actions";

const Vehicles = () => {
    const [count,setCount] = useState(1);
    const [searchView, setSearchView] = useState(false);

    const dispatch = useDispatch();
    const vehiclesScreen = useSelector(state => state.vehicles.vehicles);
    const addNextUrl = useSelector(state => state.vehicles.addUrl);
    const searchVehicles = useSelector(state => state.vehicles.searchVehicles);
    
    const getNewVehiclesScreen = () => {
        dispatch(getNewVehicles(addNextUrl));
    };  
     
    const searchVehiclesInput = (event) => {
        if(event){
            setSearchView(true)
            dispatch(getSearchVehicles(event.target.value)) 
        }
    };

    useEffect(()=>{
        dispatch(getVehicles())
    },[dispatch]);
    
    useEffect(() => {
        if(addNextUrl) {
            getNewVehiclesScreen(addNextUrl);
        }
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about vehicles
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Vehicles you want to find" onChange={searchVehiclesInput}></input>
                </div>
                {searchView ?
                    searchVehicles?.map((vehicles, i) => {
                        let vehicleUrl = vehicles.url;
                        let r = /\d+/; 
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
                    })
                :
                    vehiclesScreen?.map((vehicles, i) => {
                        let vehicleUrl = vehicles.url;
                        let r = /\d+/; 
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
                    })
                }
                <button className="addMore_button" disabled={count > 3} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Vehicles;