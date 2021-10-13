import { takeEvery, call, put } from "redux-saga/effects";
import { setNewStarships, setStarships, setSearchStarships, setTotalInfoStarships } from "../../redux/starships/actions";
import { actionTypesSaga } from "./actionTypes";

const getStarships = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getStarships", e));
    return response;    
};

function* starshipsWorker () {
    const result = yield call(getStarships, "https://swapi.dev/api/starships/");
    yield put(setStarships(result));
};

export function* starshipsWatcher () {
    yield takeEvery(actionTypesSaga.GET_STARSHIPS, starshipsWorker);
};

function* getNewStarshipsWorker({ payload }) {
    const result = yield call(getStarships, payload);
    yield put(setNewStarships(result));
};

export function* getNewStarshipsWatcher() {
    yield takeEvery(actionTypesSaga.ADD_NEXT_PAGE_OF_STARSHIPS, getNewStarshipsWorker);
};

function* getSearchStarshipsWorker({ payload }) {
    yield put(setSearchStarships(payload));
};

export function* getSearchStarshipsWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_STARSHIPS, getSearchStarshipsWorker);
};

const getTotalinfo = async(num) => {
    const response = await fetch(num)
        .then(res => res.json())
        .catch(e => console.warn("getTotalInfo", e));
    return response;
};

function* getTotalInfoStarshipsWorker({ payload }) {
    const result = yield call(getTotalinfo, payload);
    yield put(setTotalInfoStarships(result));
};

export function* getTotalInfoStarshipsWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_STARSHIPS, getTotalInfoStarshipsWorker);
};