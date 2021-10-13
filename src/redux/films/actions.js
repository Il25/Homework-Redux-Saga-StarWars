import { actionTypes } from "./actionTypes";

export const setFilms = (data) => {
    return({
        type: actionTypes.SET_FILMS,
        payload: data,
    });
};

export const setSearchFilms = (data) => {
    return({
        type: actionTypes.SET_SEARCH_FILMS,
        payload: data,
    });
};

export const setTotalInfoFilms = (data) => {
    return({
        type: actionTypes.SET_TOTAL_INFO_OF_FILMS,
        payload: data,
    });
};