import { actionTypes } from "./actionTypes";

export const setSpecies = (data) => {
    return({
        type: actionTypes.GET_SPECIES,
        payload: data,
    });
};

export const setNewSpecies = (data) => {
    return({
        type: actionTypes.ADD_NEXT_PAGE_OF_SPECIES,
        payload: data,
    });
};

export const setSearchSpecies = (data) => {
    return({
        type: actionTypes.SEARCH_SPECIES,
        payload: data,
    });
};

export const setTotalInfoSpecies = (data) => {
    return({
        type: actionTypes.GET_TOTAL_INFO_OF_SPECIES,
        payload: data,
    });
};