import { takeEvery, call, put } from "redux-saga/effects";
import { setNewSpecies, setSpecies, setSearchSpecies, setTotalInfoSpecies } from "../../redux/species/actions";
import { actionTypesSaga } from "./actionTypes";

const getSpecies = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getSpecies", e));
    return response;    
};

function* speciesWorker () {
    const result = yield call(getSpecies, "https://swapi.dev/api/species/");
    yield put(setSpecies(result));
};

export function* speciesWatcher () {
    yield takeEvery(actionTypesSaga.GET_SPECIES, speciesWorker);
};

function* getNewSpeciesWorker({ payload }) {
    const result = yield call(getSpecies, payload);
    yield put(setNewSpecies(result));
};

export function* getNewSpeciesWatcher() {
    yield takeEvery(actionTypesSaga.ADD_NEXT_PAGE_OF_SPECIES, getNewSpeciesWorker);
};

function* getSearchSpeciesWorker({ payload }) {
    yield put(setSearchSpecies(payload));
};

export function* getSearchSpeciesWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_SPECIES, getSearchSpeciesWorker);
};

const getTotalinfo = async(num) => {
    const response = await fetch(num)
        .then(res => res.json())
        .catch(e => console.warn("getTotalInfo", e));
    return response;
};

function* getTotalInfoSpeciesWorker({ payload }) {
    const result = yield call(getTotalinfo, payload);
    yield put(setTotalInfoSpecies(result));
};

export function* getTotalInfoSpeciesWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_SPECIES, getTotalInfoSpeciesWorker);
};