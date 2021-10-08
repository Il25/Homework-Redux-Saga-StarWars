import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../saga";


const reducer = combineReducers({
    films: filmsReducer,
    people: peopleReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);