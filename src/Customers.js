import React, {useContext} from 'react';
import "./Customers.css";
import {GlobalContext} from "./Context/GlobalState";
import {Link} from "react-router-dom";

function Customers() {
    
    const {users} = useContext(GlobalContext);
    
    return (
        <div className="customers">
          <h2>Customers</h2>
          <div className="cus__container"> 
            <table>
              <thead>
               <tr>
                   <th>id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Balance</th>
                   <th>Action</th>
               </tr>
              </thead>
              {users.map((user,index) =>(
              <tbody>
               <tr>
                   <td key={user.id}>{index+1}</td>
                   <td>{user.name}</td>
                   <td>{user.Email}</td>
                   <td>{user.balance}</td>
                   <td>
                       <Link to={`/customers/transfer/${user.id}`}>
                          <button>Transfer</button>
                       </Link>
                    </td>
                </tr>
               </tbody>
              ))}
           </table>
         </div>
        </div>
     )
}

export default Customers;
