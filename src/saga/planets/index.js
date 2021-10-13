import { takeEvery, call, put } from "redux-saga/effects";
import { setNewPlanets, setPlanets, setSearchPlanets, setTotalInfoPlanets } from "../../redux/planets/actions";
import { actionTypesSaga } from "./actionTypes";

const getPlanets = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getPlanets", e));
    return response;    
};

function* planetsWorker () {
    const result = yield call(getPlanets, "https://swapi.dev/api/planets/");
    yield put(setPlanets(result));
};

export function* planetsWatcher () {
    yield takeEvery(actionTypesSaga.GET_PLANETS, planetsWorker);
};

function* getNewPlanetsWorker({ payload }) {
    const result = yield call(getPlanets, payload);
    yield put(setNewPlanets(result));
};

export function* getNewPlanetsWatcher() {
    yield takeEvery(actionTypesSaga.ADD_NEXT_PAGE_OF_PLANETS, getNewPlanetsWorker);
};

function* getSearchPlanetsWorker({ payload }) {
    yield put(setSearchPlanets(payload));
};

export function* getSearchPlanetsWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_PLANETS, getSearchPlanetsWorker);
};

const getTotalinfo = async(num) => {
    const response = await fetch(num)
        .then(res => res.json())
        .catch(e => console.warn("getTotalInfo", e));
    return response;
};

function* getTotalInfoPlanetsWorker({ payload }) {
    const result = yield call(getTotalinfo, payload);
    yield put(setTotalInfoPlanets(result));
};

export function* getTotalInfoPlanetsWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_PLANETS, getTotalInfoPlanetsWorker);
};