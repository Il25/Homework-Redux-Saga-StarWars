import { actionTypes } from "./actionTypes";

export const setStarships = (data) => {
    return({
        type: actionTypes.GET_STARSHIPS,
        payload: data,
    });
};

export const setNewStarships = (data) => {
    return({
        type: actionTypes.ADD_NEXT_PAGE_OF_STARSHIPS,
        payload: data,
    });
};

export const setSearchStarships = (data) => {
    return({
        type: actionTypes.SEARCH_STARSHIPS,
        payload: data,
    });
};

export const setTotalInfoStarships = (data) => {
    return({
        type: actionTypes.GET_TOTAL_INFO_OF_STARSHIPS,
        payload: data,
    });
};