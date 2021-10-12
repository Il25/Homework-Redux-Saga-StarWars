import { actionTypes } from "./actionTypes";

const initialState = {
    people: [],
    addUrl: "",
    searchPeople: [],
    totalInfo: {}, 
};

export function peopleReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PEOPLE:
            return {
                ...state,
                people: [...action.payload.results],
                addUrl: action.payload.next
            }
        case actionTypes.ADD_NEXT_PAGE_OF_PEOPLE:
            return {
                ...state,
                people: [...state.people, ...action.payload.results],
                addUrl: action.payload.next
            }
        case actionTypes.SEARCH_PEOPLE:
            return {
                ...state,
                searchPeople: state.people?.filter((people) => {
                    if(action.payload === "") {
                        return people
                    } else if(people.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return people
                    }
                })
            }    
        case actionTypes.GET_TOTAL_INFO_OF_PEOPLE:
            return {
                ...state,
                totalInfo: {...action.payload}
            }
        default:
            return state;
    };
};