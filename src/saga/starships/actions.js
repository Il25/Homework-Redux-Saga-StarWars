import { actionTypesSaga } from "./actionTypes";

export const getStarships = (data) => {
    return({
        type: actionTypesSaga.GET_STARSHIPS,
        payload: data,
    });
};

export const getNewStarships = (data) => {
    return({
        type: actionTypesSaga.ADD_NEXT_PAGE_OF_STARSHIPS,
        payload: data,
    });
};

export const getSearchStarships = (data) => {
    return({
        type: actionTypesSaga.SEARCH_STARSHIPS,
        payload: data,
    });
};

export const getTotalInfoStarships = (data) => {
    return({
        type: actionTypesSaga.GET_TOTAL_INFO_OF_STARSHIPS,
        payload: data,
    });
};