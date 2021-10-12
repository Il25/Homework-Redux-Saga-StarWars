import { actionTypesSaga } from "./actionTypes";

export const getSpecies = (data) => {
    return({
        type: actionTypesSaga.GET_SPECIES,
        payload: data,
    });
};

export const getNewSpecies = (data) => {
    return({
        type: actionTypesSaga.ADD_NEXT_PAGE_OF_SPECIES,
        payload: data,
    });
};

export const getSearchSpecies = (data) => {
    return({
        type: actionTypesSaga.SEARCH_SPECIES,
        payload: data,
    });
};

export const getTotalInfoSpecies = (data) => {
    return({
        type: actionTypesSaga.GET_TOTAL_INFO_OF_SPECIES,
        payload: data,
    });
};