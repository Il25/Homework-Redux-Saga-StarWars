import { actionTypes } from "./actionTypes";

const initialState = {
    vehicles: [],
    addUrl: "",
    searchVehicles: [],
    totalInfo: {}, 
};

export function vehiclesReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_VEHICLES:
            return {
                ...state,
                vehicles: [...action.payload.results],
                addUrl: action.payload.next,
            }
        case actionTypes.SET_NEXT_PAGE_OF_VEHICLES:
            return {
                ...state,
                vehicles: [...state.vehicles, ...action.payload.results],
                addUrl: action.payload.next,
            }
        case actionTypes.SET_SEARCH_VEHICLES:
            return {
                ...state,
                searchVehicles: state.vehicles?.filter((vehicles) => {
                    if(action.payload === "") {
                        return vehicles
                    } else if(vehicles.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return vehicles
                    }
                })
            }    
        case actionTypes.SET_TOTAL_INFO_OF_VEHICLES:
            return {
                ...state,
                totalInfo: {...action.payload},
            }
        default:
            return state;
    };
};