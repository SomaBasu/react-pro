const initialState = {
    data:[]
}
const user = (state=initialState,action)=>{
    switch(action.type){
        case 'BOOKING_APPOINTMENT':
            return {
                data:[...state.data,action.payload]
            }  
        /* case 'RESCHEDULE_APPOINTMENT':
            return {
                data:[...state.data,action.payload]
            }    */  
        default:
            return state;
    }
}

export default user;