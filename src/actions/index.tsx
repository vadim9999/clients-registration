
export const addUser = (payload:object) =>{
  return{
    type:'ADD_USER',
    payload
  }
}

export const getUsers = (payload: object) =>{
  return{
    type: 'GET_USERS',
    payload
  }
}