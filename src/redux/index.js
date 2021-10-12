import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../saga";
import { peopleReducer } from "./people";
import { filmsReducer } from "./films";
import { planetsReducer } from "./planets";
import { speciesReducer } from "./species";
import { starshipsReducer } from "./starships";
import { vehiclesReducer } from "./vehicles";

const reducer = combineReducers({
    people: peopleReducer,
    films: filmsReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;