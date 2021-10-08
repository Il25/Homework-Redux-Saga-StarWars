import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";
import { Link } from "react-router-dom";

const People = () => {
    const[people, setPeople] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);
    const [searchPeople, setSearchPeople] = useState("");

    const getPeople = async(url) => {
        const response = await fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log("getPeople", e));
        setPeople([...people, ...response.results]);
        setAddUrl(response.next);
    };
  
    useEffect(() => {
        getPeople("https://swapi.dev/api/people"); 
    }, []);
    
    useEffect(() => {
        addUrl && getPeople(addUrl);
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about your favorite characters
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Characters you want to find" onChange={(event) => setSearchPeople(event.target.value)}></input>
                </div>           
                {people?.filter((people) => {
                    if(searchPeople === "") {
                        return people
                    } else if(people.name.toLowerCase().includes(searchPeople.toLowerCase())) {
                        return people
                    }
                }).map((people, i) => {
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