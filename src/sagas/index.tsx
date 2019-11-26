import {
  takeEvery,
  call, 
  put
} from 'redux-saga/effects'

import axios from 'axios'

const URL = 'http://localhost:4000'

export default function* watcherSaga(){
  yield takeEvery('ADD_USER',addUserWorker)
}

function* addUserWorker(action:{type:string,payload:object}){
  try{
    const result = yield call(addUser, action.payload)

    yield put({type:`${action.type}_SUCCESS`, payload: result.data})
    
  }catch(e){

  }
}

const addUser= (user:object) =>{
  console.log(user);
  
  return axios.post(`${URL}/clients`,{
    id: 6,
    name: "Mark"
  })
}