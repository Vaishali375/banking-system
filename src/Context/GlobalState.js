import React, {createContext, useReducer, useEffect} from "react";
import appReducer from "./AppReducer";

//initial state
const initialState={
  users:JSON.parse(localStorage.getItem("users"))||[
    {id:"1", name: "Vaishali", Email: "vaishali@gmail.com", balance:"10500"},
    {id:"2", name: "Manali", Email: "manali@gmail.com", balance:"50000"},
    {id:"3", name: "Mansi", Email: "mansi@gmail.com", balance:"34000"},
    {id:"4", name: "Vidhayashree", Email: "vidhu@gmail.com", balance:"340000"},
    {id:"5", name:"Ashma", Email:"ashma@gmail.com", balance:"700"},
    {id:"6", name: "Shivali", Email: "shivali@gmail.com", balance:"4000"},
    {id:"7", name: "Shradhdha", Email: "shradhdha@gmail.com", balance:"1000"},
    {id:"8", name: "Navya", Email: "navya@gmail.com", balance:"35000"},
    {id:"9", name: "Shakshi", Email: "naina@gmail.com", balance:"2000"},
    {id:"10", name: "Manisha", Email: "manisha@gmail.com", balance:"22000"},
  ],
  transactionHistory:JSON.parse(localStorage.getItem("transactionHistory"))||[
    {sender:"Manali",receiver:"Shivali",amount:"5000",time:"4/11/2021, 1:45:07 PM",status:"Successfull"},
    {sender:"Vidhyashree",receiver:"Ashma",amount:"8999",time:"4/12/2021, 7:45:09 PM",status:"Successfull"},
    {sender:"Shradhdha",receiver:"Mansi",amount:"0",time:"4/12/2021, 7:47:58 PM",status:"Fail"}, 
    {sender:"Shakshi",receiver:"Manisha",amount:"-200",time:"4/12/2021, 7:48:58 PM",status:"Fail"},
  ],
};

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(appReducer, initialState);

useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
    localStorage.setItem("transactionHistory", JSON.stringify(state.transactionHistory));
}, [state]);

//Actions
const removeUser = (id) =>{
    dispatch({
        type: "REMOVE_USER",
        payload:id
    });
}

const addTransactionHistory= (user) =>{
    dispatch({
        type: "ADD_HISTORY",
        payload: user
    });
}

const addUser = (user) =>{
    dispatch({
        type: "ADD_USER",
        payload:user
    });
}

const addToTransfer = (user) =>{
    dispatch({
        type:"ADD_TO_TRAN",
        payload:user
    });
}

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            transactionHistory: state.transactionHistory,
            removeUser,
            addUser,
            addToTransfer,
            addTransactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

