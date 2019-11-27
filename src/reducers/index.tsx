const initialState = {
  users: [],
  date: ''
};

const rootReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: [...action.payload]
      };

    case 'GET_DATE_SUCCESS':
      return {
        ...state,
        date: action.payload
      };

    default:
      return state;
  }

};

export default rootReducer;