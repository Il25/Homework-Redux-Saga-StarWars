import { actionTypes } from "./actionTypes";

const initialState = {
    species: [],
    addUrl: "",
    searchSpecies: [],
    totalInfo: {}, 
};

export function speciesReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_SPECIES:
            return {
                ...state,
                species: [...action.payload.results],
                addUrl: action.payload.next
            }
        case actionTypes.ADD_NEXT_PAGE_OF_SPECIES:
            return {
                ...state,
                species: [...state.species, ...action.payload.results],
                addUrl: action.payload.next
            }
        case actionTypes.SEARCH_SPECIES:
            return {
                ...state,
                searchPeople: state.species?.filter((species) => {
                    if(action.payload === "") {
                        return species
                    } else if(species.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return species
                    }
                })
            }    
        case actionTypes.GET_TOTAL_INFO_OF_SPECIES:
            return {
                ...state,
                totalInfo: {...action.payload}
            }
        default:
            return state;
    };
};