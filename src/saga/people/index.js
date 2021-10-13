import { takeEvery, call, put } from "redux-saga/effects";
import { setNewPeople, setPeople, setSearchPeople, setTotalInfoPeople } from "../../redux/people/actions";
import { actionTypesSaga } from "./actionTypes";

const getPeople = async(url) => {
    const response = await fetch(url)
        .then((res)=>res.json())
        .catch((e)=>console.warn("getPeople: ", e));
    return response;
};

function* peopleWorker () {
    const result = yield call(getPeople, "https://swapi.dev/api/people/");
    yield put(setPeople(result));
};

export function* peopleWatcher () {
    yield takeEvery(actionTypesSaga.GET_PEOPLE, peopleWorker);
};

function* getNewPeopleWorker({payload}) {  
    const result = yield call(getPeople, payload);
    yield put(setNewPeople(result));
};

export function* getNewPeopleWatcher() {
    yield takeEvery(actionTypesSaga.ADD_NEXT_PAGE_OF_PEOPLE, getNewPeopleWorker);
};

function* getSearchPeopleWorker({ payload }) {
    yield put(setSearchPeople(payload));
};

export function* getSearchPeopleWatcher() {
    yield takeEvery(actionTypesSaga.SEARCH_PEOPLE, getSearchPeopleWorker)
};

const getTotalinfo = async(num) => {
    const response = await fetch(num)
        .then(res => res.json())
        .catch(e => console.warn("getTotalInfo", e));
    return response;
};

function* getTotalInfoPeopleWorker({ payload }) {
    const result = yield call(getTotalinfo, payload)
    yield put(setTotalInfoPeople(result))
};

export function* getTotalInfoPeopleWatcher() {
    yield takeEvery(actionTypesSaga.GET_TOTAL_INFO_OF_PEOPLE, getTotalInfoPeopleWorker);
};