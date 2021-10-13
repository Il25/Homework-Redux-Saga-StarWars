import { takeEvery, call, put } from "redux-saga/effects";
import { setFilms, setSearchFilms, setTotalInfoFilms } from "../../redux/films/actions";
import { actionTypesSaga } from "./actionTypes";

const getFilms = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getFilms", e));
    return response;    
};

function* filmsWorker () {
    const result = yield call(getFilms, "https://swapi.dev/api/films/");
    yield put(setFilms(result));
};

export function* filmsWatcher () {
    yield takeEvery(actionTypesSaga.GET_FILMS, filmsWorker);
};

function* getSearchFilmsWorker({ payload }) {
    yield put(setSearchFilms(payload));
};

export function* getSearchFilmsWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_FILMS, getSearchFilmsWorker);
};

const getTotalinfo = async(num) => {
    const response = await fetch(num)
        .then(res => res.json())
        .catch(e => console.warn("getTotalInfo", e));
    return response;
};

function* getTotalInfoFilmsWorker({ payload }) {
    const result = yield call(getTotalinfo, payload);
    yield put(setTotalInfoFilms(result));
};    

export function* getTotalInfoFilmsWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_FILMS, getTotalInfoFilmsWorker);
};