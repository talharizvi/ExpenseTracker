

const initialState={
    list:[] ,
    availableBalance:2400
}    

function StateReducer(state=initialState,action){
    switch(action.type){
        case 'Update_List':
            return {
                ...state,
                list:[...state.list,action.item]
            }
        case 'Update_Balance':
            return {
                ...state,
                availableBalance:state.availableBalance - action.amount
            }    

        default:return state;
    }
}

export default StateReducer