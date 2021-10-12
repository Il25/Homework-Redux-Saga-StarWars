import { actionTypesSaga } from "./actionTypes";

export const getPeople = (data) => {
    return({
        type: actionTypesSaga.GET_PEOPLE,
        payload: data,
    });
};

export const getNewPeople = (data) => {
    return({
        type: actionTypesSaga.ADD_NEXT_PAGE_OF_PEOPLE,
        payload: data,
    });
};

export const getSearchPeople = (data) => {
    return({
        type: actionTypesSaga.SEARCH_PEOPLE,
        payload: data,
    });
};

export const getTotalInfoPeople = (data) => {
    return({
        type: actionTypesSaga.GET_TOTAL_INFO_OF_PEOPLE,
        payload: data,
    });
};