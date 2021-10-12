import React, { useState, useEffect} from "react";
import "./index.css";
import "../../UI/main_style/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewPeople, getPeople } from "../../saga/people/actions";
import { selectPeople } from "../../redux/people/selectors";

const People = () => {
    const [count,setCount] = useState(1);
    const [searchPeople, setSearchPeople] = useState("");

    const dispatch = useDispatch();
    const peopleSelector = useSelector(selectPeople);
    const peopleScreen = peopleSelector.people;
    const addNextUrl = peopleSelector.addUrl;

    const getPeopleScreen = (url) => {
        dispatch(getPeople(url));
    };

    const getNewPeopleScreen = (addNextUrl) => {
        dispatch(getNewPeople(addNextUrl));
    };

    const searchPeopleInput = (event) => {
        dispatch(setSearchPeople(event.target.value))
    }

    useEffect(() => {
        getPeopleScreen("https://swapi.dev/api/people"); 
    }, []);
    
    useEffect(() => {
        getNewPeopleScreen(addNextUrl);
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about your favorite characters
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Characters you want to find" onChange={searchPeopleInput}></input>
                </div>           
                {peopleScreen?.map((people, i) => {
                    let peopleUrl = people.url;
                    var r = /\d+/; 
                    const num = peopleUrl.match(r); 
                    return (
                        <div  key={i} className="columns">
                            <div>
                                <p className="name">
                                    <Link to={`/people/${num[0]}`}>
                                        {people.name}
                                    </Link>
                                </p>
                            </div>
                        </div>   
                    ) 
                })}
                <button className="addMore_button" disabled={count > 8} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default People;