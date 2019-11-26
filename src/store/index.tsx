import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import apiSaga from '../sagas'

const initialiseSagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(initialiseSagaMiddleware))
)

initialiseSagaMiddleware.run(apiSaga);
export default store