const initialState = {

}

const rootReducer = (state = initialState, action:any) =>{
    console.log(state);
    console.log(action);
    
    return state;
}

export default rootReducer