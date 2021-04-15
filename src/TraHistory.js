import React, {useContext} from 'react';
import "./TraHistory.css";
import {GlobalContext} from "./Context/GlobalState";

function TraHistory(props) {
    const {transactionHistory} = useContext(GlobalContext);

    return (
        <div className="traHistory">
          <h1>Transaction History</h1>
          <div className="history_container">
            <table>
                <thead>
                    <tr>                        
                       <th>Transaction id</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Amount</th>
                        <th>Date & Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {transactionHistory.map((History, index)=>(
                <tbody>
                    <tr>
                        <td key={index}>{index+1}</td>
                        <td>{History.sender}</td>
                        <td>{History.receiver}</td>
                        <td>{History.amount}</td>
                        <td>{History.time}</td>
                        <td>{History.status}</td>
                    </tr>
                </tbody>
                ))}
            </table>
         </div>
        </div>
    )
}

export default TraHistory;
