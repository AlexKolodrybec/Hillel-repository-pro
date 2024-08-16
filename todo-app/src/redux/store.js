import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers/todoReducer';
import { watchTodoActions } from './sagas/todoSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchTodoActions);

export default store;