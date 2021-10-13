import { actionTypes } from "./actionTypes";

export const setPeople = (data) => {
    return({
        type: actionTypes.SET_PEOPLE,
        payload: data,
    });
};

export const setNewPeople = (data) => {
    return({
        type: actionTypes.SET_NEXT_PAGE_OF_PEOPLE,
        payload: data,
    });
};

export const setSearchPeople = (data) => {
    return({
        type: actionTypes.SET_SEARCH_PEOPLE,
        payload: data,
    });
};

export const setTotalInfoPeople = (data) => {
    return({
        type: actionTypes.SET_TOTAL_INFO_OF_PEOPLE,
        payload: data,
    });
};