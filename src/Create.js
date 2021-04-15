import React, {useState, useContext} from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import "./Create.css";
import {Link, useHistory} from "react-router-dom";
import {GlobalContext} from "./Context/GlobalState";
import {v4 as uuid} from "uuid";


function Create() {

    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [balance, setBalance] = useState("");
    const {addUser} = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = (e) =>{
        e.preventDefault();
        const newUser ={
            id: uuid(),
            name: name,
            Email:Email,
            balance:balance
        }
        addUser(newUser);
        history.push("/customers");
    }

   
    return (
        <div className="create">
          <AccountBoxIcon className="icon" style={{ fontSize: 100 }} /> 
          <div className="container">
             <h1>Create User</h1>
             <form autoComplete="off" onSubmit={onSubmit}>
               <h3>Name</h3>
               <input 
                   autoFocus
                   name="name"
                   required
                   value= {name}
                   placeholder="Name"
                   type="text" 
                   onChange={(e) => setName(e.target.value)}
               />
               <h3>Email</h3>
               <input 
                   autoFocus
                   name="Email"
                   required
                   value={Email}
                   placeholder="Email"
                   type="text"
                   onChange={(e) => setEmail(e.target.value)}
               />
               <h3>Current Balance</h3>
               <input 
                   autoFocus
                   name="balance"
                   required
                   value={balance}
                   placeholder="balance"
                   type="text"
                   onChange={(e) => setBalance(e.target.value)}
               />
               <span className="create__btn">
                   <button type="submit" className="submit__btn">Create</button>
                 <Link to="/customers">  
                   <button type="reset" className="reset__btn">Reset</button>
                 </Link>
               </span>
               
             </form>
          </div>

        </div>
    )
}

export default Create;

