import { takeEvery, call, put } from "redux-saga/effects";
import { setNewPeople, setPeople, setSearchPeople } from "../../redux/people/actions";
import { actionTypesSaga } from "./actionTypes";

const getPeople = async(url) => {
    const response = await fetch(url)
        .then(res => res.json())
        .catch(e => console.warn("getPeople", e));
    return response;    
};

function* peopleWorker ({payload}) {
    const result = yield call(getPeople, payload);
    yield put(setPeople(result));
};

export function* peopleWatcher () {
    yield takeEvery(actionTypesSaga.GET_PEOPLE, peopleWorker);
};

function* getNewPeopleWorker({ payload }) {
    const result = yield call(getPeople, payload);
    yield put(setNewPeople(result));
};

export function* getNewPeopleWatcher() {
    yield takeEvery(actionTypesSaga.ADD_NEXT_PAGE_OF_PEOPLE, getNewPeopleWorker);
};

function* getSearchPeopleWorker({ payload }) {
    const result = yield call(getPeople, payload);
    yield put(setSearchPeople(result));
};

export function* getSearchPeopleWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_PEOPLE, getSearchPeopleWorker)
};

function* getTotalInfoPeopleWorker({ payload }) {
    yield put(actionTypesSaga.GET_TOTAL_INFO_OF_PEOPLE, {payload})
};

export function* getTotalInfoPeopleWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_PEOPLE, getTotalInfoPeopleWorker)
};