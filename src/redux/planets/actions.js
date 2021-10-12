import { actionTypes } from "./actionTypes";

export const setPlanets = (data) => {
    return({
        type: actionTypes.GET_PLANETS,
        payload: data,
    });
};

export const setNewPlanets = (data) => {
    return({
        type: actionTypes.ADD_NEXT_PAGE_OF_PLANETS,
        payload: data,
    });
};

export const setSearchPlanets = (data) => {
    return({
        type: actionTypes.SEARCH_PLANETS,
        payload: data,
    });
};

export const setTotalInfoPlanets = (data) => {
    return({
        type: actionTypes.GET_TOTAL_INFO_OF_PLANETS,
        payload: data,
    });
};