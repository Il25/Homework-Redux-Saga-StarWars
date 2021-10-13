import { actionTypesSaga } from "./actionTypes";

export const getPlanets = (data) => {
    return({
        type: actionTypesSaga.GET_PLANETS,
        payload: data,
    });
};

export const getNewPlanets = (data) => {
    return({
        type: actionTypesSaga.ADD_NEXT_PAGE_OF_PLANETS,
        payload: data,
    });
};

export const getSearchPlanets = (data) => {
    return({
        type: actionTypesSaga.SEARCH_PLANETS,
        payload: data,
    });
};

export const getTotalInfoPlanets = (data) => {
    return({
        type: actionTypesSaga.GET_TOTAL_INFO_OF_PLANETS,
        payload: data,
    });
};