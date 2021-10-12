import { takeEvery, call, put } from "redux-saga/effects";
import { setNewSpecies, setSpecies, setSearchSpecies } from "../../redux/species/actions";
import { actionTypesSaga } from "./actionTypes";

const getSpecies = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getSpecies", e));
    return response;    
};

function* speciesWorker ({payload}) {
    const result = yield call(getSpecies, payload);
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
    const result = yield call(getSpecies, payload);
    yield put(setSearchSpecies(result));
};

export function* getSearchSpeciesWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_SPECIES, getSearchSpeciesWorker)
};

function* getTotalInfoSpeciesWorker({ payload }) {
    yield put(actionTypesSaga.GET_TOTAL_INFO_OF_SPECIES, {payload})
};

export function* getTotalInfoSpeciesWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_SPECIES, getTotalInfoSpeciesWorker)
};