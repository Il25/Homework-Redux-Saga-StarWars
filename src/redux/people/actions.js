import { actionTypes } from "./actionTypes";

export const setPeople = (data) => {
    return({
        type: actionTypes.GET_PEOPLE,
        payload: data,
    });
};

export const setNewPeople = (data) => {
    return({
        type: actionTypes.ADD_NEXT_PAGE_OF_PEOPLE,
        payload: data,
    });
};

export const setSearchPeople = (data) => {
    return({
        type: actionTypes.SEARCH_PEOPLE,
        payload: data,
    });
};

export const setTotalInfoPeople = (data) => {
    return({
        type: actionTypes.GET_TOTAL_INFO_OF_PEOPLE,
        payload: data,
    });
};