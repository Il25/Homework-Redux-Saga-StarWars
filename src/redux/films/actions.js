import { actionTypes } from "./actionTypes";

export const setFilms = (data) => {
    return({
        type: actionTypes.GET_FILMS,
        payload: data,
    });
};

export const setSearchFilms = (data) => {
    return({
        type: actionTypes.SEARCH_FILMS,
        payload: data,
    });
};

export const setTotalInfoFilms = (data) => {
    return({
        type: actionTypes.GET_TOTAL_INFO_OF_FILMS,
        payload: data,
    });
};