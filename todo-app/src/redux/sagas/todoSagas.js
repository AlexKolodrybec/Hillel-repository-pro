import { put, takeEvery, call } from 'redux-saga/effects';
import { LOAD_TODOS, addTodo } from '../actions/todoActions';

function fetchTodosApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Learn Redux-Saga', completed: false },
        { id: 2, text: 'Implement TODO App', completed: false },
      ]);
    }, 1000);
  });
}

function* loadTodosSaga() {
  const todos = yield call(fetchTodosApi);
  for (let todo of todos) {
    yield put(addTodo(todo));
  }
}

export function* watchTodoActions() {
  yield takeEvery(LOAD_TODOS, loadTodosSaga);
}