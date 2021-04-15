import React, { useState, useContext, useEffect} from 'react';
import "./Transfer.css";
import {useHistory, Link} from "react-router-dom";
import {GlobalContext} from "./Context/GlobalState";
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';

function Transfer(props) {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name:'',
        Email:'',
        balance:''
    });
    const [listReceiver, setListReceiver] = useState([]);
    const [receiver, setReceiver] = useState("");
    const [selectedReceiver, setSelectedReceiver] = useState({});
    const [amount, setAmount] = useState("");
    const {users, addToTransfer, addTransactionHistory} = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;
    const time= new Date().toLocaleString();

    useEffect(() =>{
        const userId = currentUserId;
        const selectedUser= users.find(user => user.id ===(userId))
        setSelectedUser(selectedUser)
        const listReceiver= users.filter(user => user.id !==(userId))
        setListReceiver(listReceiver)
    }, [currentUserId, users])

    useEffect(() =>{
        const selectedReceiver = users.find(user => user.id===(receiver))
        setSelectedReceiver(selectedReceiver)
    },[receiver, users]);

    const useStyles = makeStyles(theme => ({
        formControl:{
            minWidth:150
        },
        select:{
            backgroundColor:"white"
        }
    }))
    const classes= useStyles();
    
    const handleChange = e => setReceiver(e.target.value); 
    const onChange=(e) => setAmount(e.target.value);
        
    const onSubmit =(e) =>{
        e.preventDefault();
        const historydetails ={
            sender:selectedUser?.name,
            receiver:selectedReceiver?.name,
            amount: amount,
            time:time,
            status:window.status
         }
        addToTransfer(selectedUser);
        addToTransfer(selectedReceiver);
        addTransactionHistory(historydetails);
        history.push("/customers");
    }

    const onClick=() => {
        if(Number(amount)<0){
            alert("Oops!Negative values cannot be transferred");
            window.status="Fail";
          }else if(Number(selectedUser?.balance) < Number(amount)){
              alert("Oops!Plese check your current balance");
              window.status="Fail";
          }else if(Number(amount)==0){
              alert("Oops! Zero value cannot be transferred");
              window.status="Fail";
          }else if(Number(selectedUser?.balance) >= Number(amount)){
              alert("Successfully Transferred");
              window.status="Successfull";
              setSelectedUser({...selectedUser, ["balance"]:(Number(selectedUser?.balance) - Number(amount))});
              setSelectedReceiver({...selectedReceiver, ["balance"]:(Number(selectedReceiver?.balance) + Number(amount))});
          }
    }
    
    return (
        <div className="transfer">
            <h3 sname={selectedUser?.name}>Sender Account: {selectedUser?.name}</h3>
            <h3>Account Balnce: {selectedUser?.balance}</h3>
            <div rname={selectedReceiver?.name} className="receiver_name">
                <h3>select Receiver:</h3>
                <FormControl className={classes.formControl}>
                    <InputLabel>select</InputLabel>
                    <Select className={classes.select} onChange={handleChange}>
                        {listReceiver.map((user, index) =>(
                        <MenuItem value={user.id}>{index+1}  {user.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className="receiver_balance">
                <h3>Enter Amount:</h3>
                <input onChange={onChange} value={amount} amount={amount} type="text"></input>
            </div>
            <div className="tran_btn">
               <form onSubmit={onSubmit}>
                  <button onClick={onClick} type="submit" className="send">SEND</button>
               </form>
               <Link to="/customers">
                  <button  className="cancel">Cancel</button>
               </Link>
            </div>
        </div>
    )
}

export default Transfer;
