import { actionTypes } from "./actionTypes";

const initialState = {
    species: [],
    addUrl: "",
    searchSpecies: [],
    totalInfo: {}, 
};

export function speciesReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_SPECIES:
            return {
                ...state,
                species: [...action.payload.results],
                addUrl: action.payload.next,
            }
        case actionTypes.SET_NEXT_PAGE_OF_SPECIES:
            return {
                ...state,
                species: [...state.species, ...action.payload.results],
                addUrl: action.payload.next,
            }
        case actionTypes.SET_SEARCH_SPECIES:
            return {
                ...state,
                searchSpecies: state.species?.filter((species) => {
                    if(action.payload === "") {
                        return species
                    } else if(species.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return species
                    }
                })
            }    
        case actionTypes.SET_TOTAL_INFO_OF_SPECIES:
            return {
                ...state,
                totalInfo: {...action.payload},
            }
        default:
            return state;
    };
};