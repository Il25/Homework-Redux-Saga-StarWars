import { actionTypes } from "./actionTypes";

const initialState = {
    starships: [],
    addUrl: "",
    searchStarships: [],
    totalInfo: {}, 
};

export function starshipsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_STARSHIPS:
            return {
                ...state,
                starships: [...action.payload.results],
                addUrl: action.payload.next,
            }
        case actionTypes.SET_NEXT_PAGE_OF_STARSHIPS:
            return {
                ...state,
                starships: [...state.starships, ...action.payload.results],
                addUrl: action.payload.next,
            }
        case actionTypes.SET_SEARCH_STARSHIPS:
            return {
                ...state,
                searchStarships: state.starships?.filter((starships) => {
                    if(action.payload === "") {
                        return starships
                    } else if(starships.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return starships
                    }
                })
            }    
        case actionTypes.SET_TOTAL_INFO_OF_STARSHIPS:
            return {
                ...state,
                totalInfo: {...action.payload},
            }
        default:
            return state;
    };
};