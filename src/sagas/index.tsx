import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects';
import axios from 'axios';

const URL = 'http://localhost:4000';

export default function* watcherSaga() {
  yield takeEvery('ADD_USER', addUserWorker);
  yield takeEvery('GET_USERS', getUsersWorker);
  yield takeEvery('GET_DATE', getDateWorker);
}

function* addUserWorker(action: { type: string, payload: object }) {
  try {
    yield call(addUser, action.payload);
    yield put({ type: `${action.type}_SUCCESS` });
    yield put({ type: `GET_USERS` });
  } catch (e) {
    yield put({ type: `${action.type}_FAILED` });
  }
}

function* getUsersWorker(action: { type: string }) {
  try {
    const result = yield call(getUsers);
    yield put({ type: `${action.type}_SUCCESS`, payload: result.data });
  } catch (e) {
    yield put({ type: `${action.type}_FAILED` });
  }
}

function* getDateWorker(action: any) {
  try {
    const result = yield call(getDate);
    yield put({type: `${action.type}_SUCCESS`, payload: result['data']['data'][0]});
  } catch (e) {
    yield put({ type: `${action.type}_FAILED` });
  }
}

const getDate = () => {
  return axios('https://meowfacts.herokuapp.com/');
};

const addUser = (user: object) => {
  return axios.post(`${URL}/clients`, {
    ...user
  });
};

const getUsers = () => {
  return axios.get(`${URL}/clients`);
};