import React, { useContext, useState } from 'react';
import { CardContext } from './CardContext';
import Card from './Card';



function Deposit() {
  const [amount, setAmount] = useState('');
  const { deposit } = useContext(CardContext);
  const { balance } = useContext(CardContext)

  const handleDeposit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert('Must be a valid input');
      return;
    }
    
    deposit(parseInt(amount));
    setAmount('');
  };

  return (
    <Card 
        bgcolor="primary"
        header = <p> Current Balance ${balance} </p>
        style = {{maxWidth: "100rem"}}
        body={(
          <>
            <h2>Deposit</h2>
            <form onSubmit={handleDeposit}>
              <input
                type="number" 
                placeholder="Choose Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min = '0'
              />
              <button type="submit" disabled={!amount}>Deposit</button>
            </form>
          </>
        )}
    />
  );
}

export default Deposit;


