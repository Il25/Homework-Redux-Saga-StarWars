import React, { useState, useEffect} from "react";
import "./index.css";
import "../../UI/main_style/index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewPeople, getPeople, getSearchPeople } from "../../saga/people/actions";

const People = () => {
    const [count,setCount] = useState(1);
    const [searchView, setSearchView] = useState(false);

    const dispatch = useDispatch();
    const peopleScreen = useSelector(state => state.people.people);
    const addNextUrl = useSelector(state => state.people.addUrl);
    const searchPeople = useSelector(state => state.people.searchPeople);
    
    const getNewPeopleScreen = () => {
        dispatch(getNewPeople(addNextUrl));
    };  
     
    const searchPeopleInput = (event) => {
        if(event){
            setSearchView(true);
            dispatch(getSearchPeople(event.target.value)); 
        }              
    };

    useEffect(()=>{
        dispatch(getPeople());
    },[dispatch]);
    
    useEffect(() => {
        if(addNextUrl) {
            getNewPeopleScreen(addNextUrl);
        }
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
                {searchView ?
                    searchPeople?.map((people, i) => {
                        let peopleUrl = people.url;
                        let r = /\d+/; 
                        const num = peopleUrl.match(r); 
                        return (
                            <div key={i} className="columns">
                                <div>
                                    <p className="name" >
                                        <Link to={`/people/${num[0]}`}> 
                                            {people.name}
                                        </Link>
                                    </p>
                                </div>
                            </div>   
                        ) 
                    })
                :
                    peopleScreen?.map((people, i) => {
                        let peopleUrl = people.url;
                        let r = /\d+/; 
                        const num = peopleUrl.match(r); 
                        return (
                            <div  key={i} className="columns">
                                <div>
                                    <p className="name" >
                                        <Link to={`/people/${num[0]}`}> 
                                            {people.name}
                                        </Link>
                                    </p>
                                </div>
                            </div>   
                        ) 
                    })
                }
                <button  className="addMore_button" disabled={count > 8} onClick={() => setCount(count + 1)}>Add more</button>
            </div>       
        </div>
    );
};

export default People;