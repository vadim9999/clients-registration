const initialState = {
  users: []
}

const rootReducer = (state = initialState, action:any) =>{
    console.log(state);
    console.log(action);
    
    switch (action.type) {
      case 'GET_USERS_SUCCESS':
          return {
            ...state,
            users: [...action.payload]
          }
        
    
      default:
        return state;
    }
    
}

export default rootReducer