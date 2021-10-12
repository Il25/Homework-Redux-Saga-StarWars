import { actionTypes } from "./actionTypes";

const initialState = {
    films: [],
    searchFilms: [],
    totalInfo: {}, 
};

export function filmsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_FILMS:
            return {
                ...state,
                films: [...action.payload.results],
            }
        case actionTypes.SEARCH_FILMS:
            return {
                ...state,
                searchFilms: state.films?.filter((films) => {
                    if(action.payload === "") {
                        return films
                    } else if(films.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return films
                    }
                })
            }    
        case actionTypes.GET_TOTAL_INFO_OF_FILMS:
            return {
                ...state,
                totalInfo: {...action.payload}
            }
        default:
            return state;
    };
};