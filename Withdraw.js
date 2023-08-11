import React, { useState, useContext } from 'react';
import { CardContext } from './CardContext';
import Card from './Card';


function Withdraw() {
  const [amount, setAmount] = useState('');
  const { withdraw } = useContext(CardContext);
  const {balance}= useContext(CardContext);

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (amount > balance || amount === 0) {
      alert('Insufficient balance');
      return;
      } 
    withdraw(parseInt(amount)) 
    setAmount('');
  };

  return (
    <Card 
      bgcolor="primary"
      header=<p>Current Balance ${balance}</p>
      body={(
        <>
          <h2>Withdraw</h2>
          <form onSubmit={handleWithdraw}>
            <input
              type="number"
              placeholder="Choose Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min = "0"
            />
            <button type="submit" disabled={!amount}>Withdraw</button>
          </form>
        </>
    )}
    />
  );
}

export default Withdraw;




