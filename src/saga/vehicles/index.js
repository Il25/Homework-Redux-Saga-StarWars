import { takeEvery, call, put } from "redux-saga/effects";
import { setNewVehicles, setVehicles, setSearchVehicles } from "../../redux/vehicles/actions";
import { actionTypesSaga } from "./actionTypes";

const getVehicles = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getVehicles", e));
    return response;    
};

function* vehiclesWorker ({payload}) {
    const result = yield call(getVehicles, payload);
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
    const result = yield call(getVehicles, payload);
    yield put(setSearchVehicles(result));
};

export function* getSearchVehiclesWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_VEHICLES, getSearchVehiclesWorker)
};

function* getTotalInfoVehiclesWorker({ payload }) {
    yield put(actionTypesSaga.GET_TOTAL_INFO_OF_VEHICLES, {payload})
};

export function* getTotalInfoVehiclesWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_VEHICLES, getTotalInfoVehiclesWorker)
};