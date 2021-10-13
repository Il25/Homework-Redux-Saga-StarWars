import { actionTypes } from "./actionTypes";

export const setVehicles = (data) => {
    return({
        type: actionTypes.SET_VEHICLES,
        payload: data,
    });
};

export const setNewVehicles = (data) => {
    return({
        type: actionTypes.SET_NEXT_PAGE_OF_VEHICLES,
        payload: data,
    });
};

export const setSearchVehicles = (data) => {
    return({
        type: actionTypes.SET_SEARCH_VEHICLES,
        payload: data,
    });
};

export const setTotalInfoVehicles = (data) => {
    return({
        type: actionTypes.SET_TOTAL_INFO_OF_VEHICLES,
        payload: data,
    });
};