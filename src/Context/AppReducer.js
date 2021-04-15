export default function appReducer(state, action){
    switch(action.type){
        case "REMOVE_USER":
            return {
                users:state.users.filter(user =>{
                    return user.id!== action.payload
                })
            };

        case "ADD_USER":
            return{
                ...state,
                users:[...state.users, action.payload],
            };

        case "ADD_TO_TRAN":
            return{
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload:user),
            };
            
        case "ADD_HISTORY":
            return {
                ...state,
                transactionHistory:[...state.transactionHistory, action.payload],
            };
    
        default:
            return state
    }
};