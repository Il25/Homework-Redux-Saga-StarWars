import { takeEvery, call, put } from "redux-saga/effects";
import { setNewVehicles, setVehicles, setSearchVehicles, setTotalInfoVehicles } from "../../redux/vehicles/actions";
import { actionTypesSaga } from "./actionTypes";

const getVehicles = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getVehicles", e));
    return response;    
};

function* vehiclesWorker () {
    const result = yield call(getVehicles, "https://swapi.dev/api/vehicles/");
    yield put(setVehicles(result));
};

export function* vehiclesWatcher () {
    yield takeEvery(actionTypesSaga.GET_VEHICLES, vehiclesWorker);
};

function* getNewVehiclesWorker({ payload }) {
    const result = yield call(getVehicles, payload);
    yield put(setNewVehicles(result));
};

export function* getNewVehiclesWatcher() {
    yield takeEvery(actionTypesSaga.ADD_NEXT_PAGE_OF_VEHICLES, getNewVehiclesWorker);
};

function* getSearchVehiclesWorker({ payload }) {
    yield put(setSearchVehicles(payload));
};

export function* getSearchVehiclesWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_VEHICLES, getSearchVehiclesWorker);
};

const getTotalinfo = async(num) => {
    const response = await fetch(num)
        .then(res => res.json())
        .catch(e => console.warn("getTotalInfo", e));
    return response;
};

function* getTotalInfoVehiclesWorker({ payload }) {
    const result = yield call(getTotalinfo, payload);
    yield put(setTotalInfoVehicles(result));
};

export function* getTotalInfoVehiclesWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_VEHICLES, getTotalInfoVehiclesWorker);
};