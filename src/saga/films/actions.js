import { actionTypesSaga } from "./actionTypes";

export const getFilms = (data) => {
    return({
        type: actionTypesSaga.GET_FILMS,
        payload: data,
    });
};

export const getSearchFilms = (data) => {
    return({
        type: actionTypesSaga.SEARCH_FILMS,
        payload: data,
    });
};

export const getTotalInfoFilms = (data) => {
    return({
        type: actionTypesSaga.GET_TOTAL_INFO_OF_FILMS,
        payload: data,
    });
};