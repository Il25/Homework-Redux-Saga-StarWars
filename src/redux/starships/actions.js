import { actionTypes } from "./actionTypes";

export const setStarships = (data) => {
    return({
        type: actionTypes.SET_STARSHIPS,
        payload: data,
    });
};

export const setNewStarships = (data) => {
    return({
        type: actionTypes.SET_NEXT_PAGE_OF_STARSHIPS,
        payload: data,
    });
};

export const setSearchStarships = (data) => {
    return({
        type: actionTypes.SET_SEARCH_STARSHIPS,
        payload: data,
    });
};

export const setTotalInfoStarships = (data) => {
    return({
        type: actionTypes.SET_TOTAL_INFO_OF_STARSHIPS,
        payload: data,
    });
};