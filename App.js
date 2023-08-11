import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import CreateAccount from './Createaccount';
import Login from './Login';
import Withdraw from './Withdraw';
import Balance from './Balance';
import AllData from './Alldata';
import Home from './Home';
import { CardProvider } from "./CardContext";
import Deposit from './Deposit';


const App = () => {
  return (
    <>
    <CardProvider >
      <Navbar className='container'/>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "red"
      }}>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/Create-account" element={<CreateAccount/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Deposit" element={<Deposit/>} />
              <Route path="/Withdraw" element={<Withdraw/>} />
              <Route path="/Balance" element={<Balance/>} />
              <Route path="/All-data" element={<AllData/>} />
          </Routes>
        </div>
      </CardProvider>
    </>
  );
};

export default App;
