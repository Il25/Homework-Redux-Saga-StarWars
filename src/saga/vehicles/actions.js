import { actionTypesSaga } from "./actionTypes";

export const getVehicles = (data) => {
    return({
        type: actionTypesSaga.GET_VEHICLES,
        payload: data,
    });
};

export const getNewVehicles = (data) => {
    return({
        type: actionTypesSaga.ADD_NEXT_PAGE_OF_VEHICLES,
        payload: data,
    });
};

export const getSearchVehicles = (data) => {
    return({
        type: actionTypesSaga.SEARCH_VEHICLES,
        payload: data,
    });
};

export const getTotalInfoVehicles = (data) => {
    return({
        type: actionTypesSaga.GET_TOTAL_INFO_OF_VEHICLES,
        payload: data,
    });
};