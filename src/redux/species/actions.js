import { actionTypes } from "./actionTypes";

export const setSpecies = (data) => {
    return({
        type: actionTypes.SET_SPECIES,
        payload: data,
    });
};

export const setNewSpecies = (data) => {
    return({
        type: actionTypes.SET_NEXT_PAGE_OF_SPECIES,
        payload: data,
    });
};

export const setSearchSpecies = (data) => {
    return({
        type: actionTypes.SET_SEARCH_SPECIES,
        payload: data,
    });
};

export const setTotalInfoSpecies = (data) => {
    return({
        type: actionTypes.SET_TOTAL_INFO_OF_SPECIES,
        payload: data,
    });
};