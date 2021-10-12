import { takeEvery, call, put } from "redux-saga/effects";
import { setFilms, setSearchFilms } from "../../redux/films/actions";
import { actionTypesSaga } from "./actionTypes";

const getFilms = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getFilms", e));
    return response;    
};

function* filmsWorker ({payload}) {
    const result = yield call(getFilms, payload);
    yield put(setFilms(result));
};

export function* filmsWatcher () {
    yield takeEvery(actionTypesSaga.GET_FILMS, filmsWorker);
};

function* getSearchFilmsWorker({ payload }) {
    const result = yield call(getFilms, payload);
    yield put(setSearchFilms(result));
};

export function* getSearchFilmsWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_FILMS, getSearchFilmsWorker)
};

function* getTotalInfoFilmsWorker({ payload }) {
    yield put(actionTypesSaga.GET_TOTAL_INFO_OF_FILMS, {payload})
};

export function* getTotalInfoFilmsWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_FILMS, getTotalInfoFilmsWorker)
};