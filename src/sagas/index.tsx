import {
  takeEvery,
  call,
  put
} from 'redux-saga/effects'

import axios from 'axios'

const URL = 'http://localhost:4000'

export default function* watcherSaga() {
  yield takeEvery('ADD_USER', addUserWorker)
  yield takeEvery('GET_USERS', getUsersWorker)
}


function* addUserWorker(action: { type: string, payload: object }) {
  try {
    yield call(addUser, action.payload)

    yield put({ type: `${action.type}_SUCCESS` })
    yield put({ type: `GET_USERS` })
  } catch (e) {

  }
}

function* getUsersWorker(action: { type: string }) {
  try {
    const result = yield call(getUsers)

    yield put({ type: `${action.type}_SUCCESS`, payload: result.data })
    // yield put({ type: `GET_USERS` })
  }catch(e){

  }
}

const addUser = (user: object) => {
  console.log(user);

  return axios.post(`${URL}/clients`, {
    ...user
  })
}

const getUsers = () => {
  return axios.get(`${URL}/clients`)
}