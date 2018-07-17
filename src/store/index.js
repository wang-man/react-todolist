import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)  // 创建store需要传入reducer.
sagaMiddleware.run(todoSagas);                // 注意，这一行必须在创建store之后


export default store