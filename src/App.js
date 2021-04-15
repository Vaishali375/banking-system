import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Transfer from "./Transfer";
import TraHistory from "./TraHistory";
import New from "./new.mp4";
import Customers from "./Customers";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Create from "./Create";
import {GlobalProvider} from "./Context/GlobalState";

function App() {
  const customStyle ={
    position: "absolute",
    width: "100%",
    left: "50%",
    top:"50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
  }

  return (
    <Router>
      <div className="app"> 
        <GlobalProvider>
         <Header />
         <video autoPlay loop muted style = {customStyle}>
              <source src={New} type="video/mp4" />
          </video>
         <Switch>
           <Route path="/transactionshistory" component={TraHistory} />
           <Route  path="/customers/transfer/:id" component={Transfer} />
           <Route path="/customers/create">
              <Create />
           </Route>
           <Route path="/customers">
             <Customers />
           </Route>
           <Route path="/">
             <Home />
             <Footer />
            </Route>
          </Switch>
        </GlobalProvider> 
      </div>
    </Router>
  );
}

export default App;

