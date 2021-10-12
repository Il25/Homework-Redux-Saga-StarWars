import { takeEvery, call, put } from "redux-saga/effects";
import { setNewPlanets, setPlanets, setSearchPlanets } from "../../redux/planets/actions";
import { actionTypesSaga } from "./actionTypes";

const getPlanets = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getPlanets", e));
    return response;    
};

function* planetsWorker ({payload}) {
    const result = yield call(getPlanets, payload);
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
    const result = yield call(getPlanets, payload);
    yield put(setSearchPlanets(result));
};

export function* getSearchPlanetsWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_PLANETS, getSearchPlanetsWorker)
};

function* getTotalInfoPlanetsWorker({ payload }) {
    yield put(actionTypesSaga.GET_TOTAL_INFO_OF_PLANETS, {payload})
};

export function* getTotalInfoPlanetsWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_PLANETS, getTotalInfoPlanetsWorker)
};