import { takeEvery, call, put } from "redux-saga/effects";
import { setNewStarships, setStarships, setSearchStarships } from "../../redux/starships/actions";
import { actionTypesSaga } from "./actionTypes";

const getStarships = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getStarships", e));
    return response;    
};

function* starshipsWorker ({payload}) {
    const result = yield call(getStarships, payload);
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
    const result = yield call(getStarships, payload);
    yield put(setSearchStarships(result));
};

export function* getSearchStarshipsWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_STARSHIPS, getSearchStarshipsWorker)
};

function* getTotalInfoStarshipsWorker({ payload }) {
    yield put(actionTypesSaga.GET_TOTAL_INFO_OF_STARSHIPS, {payload})
};

export function* getTotalInfoStarshipsWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_STARSHIPS, getTotalInfoStarshipsWorker)
};