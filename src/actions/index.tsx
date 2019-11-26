
export const addUser = (payload:object) =>{
  return{
    type:'ADD_USER',
    payload
  }
}

export const getUsers = () =>{
  return{
    type: 'GET_USERS',
  }
}